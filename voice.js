/**
 * ============================================================================
 * BỘ ĐIỀU KHIỂN CHỌN ĐÁP ÁN BẰNG GIỌNG NÓI TIẾNG VIỆT (voice.js)
 * Hỗ trợ: Chọn A/B/C/D + Lệnh "Câu tiếp", "Câu trước", "Gợi ý"
 * ============================================================================
 */
(function (global) {
    'use strict';

    const SpeechRecognition = global.SpeechRecognition || global.webkitSpeechRecognition;

    // 1. Tiêm CSS cho nút Micro nổi
    function injectVoiceStyles() {
        if (!document.head || document.getElementById('rv-voice-styles')) return;
        const style = document.createElement('style');
        style.id = 'rv-voice-styles';
        style.textContent = `
            .rv-dock {
                position: fixed;
                right: 18px;
                bottom: 18px;
                z-index: 9990;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                gap: 8px;
                font-family: 'Inter', system-ui, -apple-system, sans-serif;
            }
            .rv-toast {
                background: rgba(15, 23, 42, 0.92);
                color: #f8fafc;
                font-size: 13px;
                font-weight: 600;
                padding: 8px 14px;
                border-radius: 12px;
                border: 1px solid rgba(99, 102, 241, 0.4);
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
                max-width: 280px;
                display: none;
            }
            .rv-toast.show { display: block; }
            .rv-mic-btn {
                cursor: pointer;
                border: none;
                border-radius: 999px;
                padding: 12px 18px;
                font-size: 14px;
                font-weight: 700;
                display: flex;
                align-items: center;
                gap: 8px;
                background: #4f46e5;
                color: #ffffff;
                box-shadow: 0 10px 25px rgba(79, 70, 229, 0.4);
                transition: transform 0.15s, background 0.2s;
            }
            .rv-mic-btn:hover { transform: translateY(-2px); background: #4338ca; }
            .rv-mic-btn.listening {
                background: #dc2626;
                box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7);
                animation: rvPulse 1.5s infinite;
            }
            @keyframes rvPulse {
                0% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.65); }
                70% { box-shadow: 0 0 0 12px rgba(220, 38, 38, 0); }
                100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0); }
            }
        `;
        document.head.appendChild(style);
    }

    // 2. Từ điển ánh xạ phát âm tiếng Việt sang A, B, C, D
    const OPTION_MAP = {
        A: ['a', 'à', 'á', 'ạ', 'ả', 'ã', 'ây', 'ay', 'một', '1'],
        B: ['b', 'bê', 'bề', 'bế', 'bệ', 'bể', 'bờ', 'bi', 'hai', '2'],
        C: ['c', 'xê', 'sê', 'cê', 'xề', 'sề', 'cờ', 'xi', 'si', 'ba', '3'],
        D: ['d', 'dê', 'đê', 'giê', 'dề', 'đề', 'dờ', 'đờ', 'đi', 'zi', 'bốn', '4']
    };

    function parseVoiceCommand(rawText) {
        const text = rawText
            .toLowerCase()
            .replace(/[.,?!:;'"“”()[\]-]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();

        // Lệnh điều hướng & gợi ý
        if (/(gợi ý|trợ giúp|giải thích)/.test(text)) {
            return { type: 'HINT', raw: text };
        }
        if (/(câu tiếp|tiếp theo|câu sau|next|qua câu)/.test(text)) {
            return { type: 'NEXT', raw: text };
        }
        if (/(câu trước|quay lại|lùi lại|prev)/.test(text)) {
            return { type: 'PREV', raw: text };
        }

        // Lọc bỏ từ đệm ("chọn đáp án bê" -> "bê")
        const cleaned = text
            .replace(/^(chọn|đáp án|câu|ý|phương án|là|tôi chọn|mình chọn)\s+/g, '')
            .replace(/^(chọn|đáp án|câu|ý|phương án|là)\s+/g, '')
            .trim();

        const words = cleaned.split(' ');
        const lastWord = words[words.length - 1];

        for (const [letter, aliases] of Object.entries(OPTION_MAP)) {
            if (aliases.includes(cleaned) || aliases.includes(lastWord)) {
                return { type: 'ANSWER', option: letter, raw: text };
            }
        }
        return { type: 'UNKNOWN', raw: text };
    }

    // 3. Tự động tìm và bấm nút tương ứng trên giao diện index.html
    function triggerUIAction(cmd) {
        if (cmd.type === 'ANSWER') {
            const letter = cmd.option; // 'A' | 'B' | 'C' | 'D'
            const idx = ['A', 'B', 'C', 'D'].indexOf(letter);

            // Cách 1: Gọi hàm toàn cục nếu index.html có định nghĩa
            if (typeof global.selectAnswerByVoice === 'function') {
                global.selectAnswerByVoice(letter, idx);
                return true;
            }

            // Cách 2: Tìm nút theo thuộc tính data hoặc ID phổ biến
            const directBtn = document.querySelector(
                `[data-option="${letter}"], [data-answer="${letter}"], [data-choice="${letter}"], #opt${letter}, #option${letter}, #btn${letter}`
            );
            if (directBtn && !directBtn.disabled) {
                directBtn.click();
                return true;
            }

            // Cách 3: Quét các nút đáp án bắt đầu bằng "A.", "A)", "A:" hoặc thẻ label radio
            const candidates = Array.from(document.querySelectorAll('button, label, [role="button"], .option-btn, .answer-item'))
                .filter(el => el.offsetParent !== null && !el.closest('.rv-dock') && !el.closest('#rhBackdrop'));

            const regexPrefix = new RegExp(`^${letter}\\s*[.:)\\-]`, 'i');
            const matchedByText = candidates.find(el => regexPrefix.test(el.textContent.trim()));
            if (matchedByText) {
                matchedByText.click();
                return true;
            }

            // Cách 4: Tìm nhóm 4 nút đáp án nằm cạnh nhau theo thứ tự 0,1,2,3
            const optionGroups = document.querySelectorAll('#options, #answers, .options, .answers-grid, .choices');
            for (const group of optionGroups) {
                const btns = Array.from(group.querySelectorAll('button, label, [role="button"]'))
                    .filter(el => el.offsetParent !== null);
                if (btns.length >= 4 && btns[idx]) {
                    btns[idx].click();
                    return true;
                }
            }
            return false;
        }

        if (cmd.type === 'NEXT') {
            const nextBtn = document.querySelector('#nextBtn, #btnNext, [data-action="next"]') ||
                Array.from(document.querySelectorAll('button')).find(b =>
                    b.offsetParent !== null && !b.closest('#rhBackdrop') && /(câu tiếp|tiếp theo|câu sau)/i.test(b.textContent)
                );
            if (nextBtn && !nextBtn.disabled) {
                nextBtn.click();
                return true;
            }
        }

        if (cmd.type === 'PREV') {
            const prevBtn = document.querySelector('#prevBtn, #btnPrev, [data-action="prev"]') ||
                Array.from(document.querySelectorAll('button')).find(b =>
                    b.offsetParent !== null && !b.closest('#rhBackdrop') && /(câu trước|quay lại)/i.test(b.textContent)
                );
            if (prevBtn && !prevBtn.disabled) {
                prevBtn.click();
                return true;
            }
        }

        if (cmd.type === 'HINT') {
            const hintBtn = document.querySelector('#hintBtn, #btnHint, [data-action="hint"]') ||
                Array.from(document.querySelectorAll('button')).find(b =>
                    b.offsetParent !== null && /gợi ý/i.test(b.textContent)
                );
            if (hintBtn) {
                hintBtn.click();
                return true;
            }
        }

        return false;
    }

    // 4. Khởi tạo bộ máy nhận diện giọng nói
    function initVoiceControl() {
        injectVoiceStyles();

        const dock = document.createElement('div');
        dock.className = 'rv-dock';
        dock.innerHTML = `
            <div id="rvToast" class="rv-toast"></div>
            <button type="button" id="rvMicBtn" class="rv-mic-btn" title="Bật/Tắt chọn đáp án bằng giọng nói">
                <span id="rvMicIcon">🎤</span>
                <span id="rvMicLabel">Giọng nói</span>
            </button>
        `;
        document.body.appendChild(dock);

        const btn = document.getElementById('rvMicBtn');
        const label = document.getElementById('rvMicLabel');
        const toast = document.getElementById('rvToast');
        let toastTimer = null;

        function showStatus(msg, duration = 2600) {
            toast.textContent = msg;
            toast.classList.add('show');
            clearTimeout(toastTimer);
            if (duration > 0) {
                toastTimer = setTimeout(() => toast.classList.remove('show'), duration);
            }
        }

        if (!SpeechRecognition) {
            btn.addEventListener('click', () => {
                showStatus('⚠️ Trình duyệt này chưa hỗ trợ nhận diện giọng nói. Hãy dùng Chrome, Edge hoặc Cốc Cốc.');
            });
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = 'vi-VN';
        recognition.continuous = true;
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        let isListening = false;
        let blockedByPermission = false;

        function setListeningUI(active) {
            isListening = active;
            btn.classList.toggle('listening', active);
            label.textContent = active ? 'Đang nghe (A/B/C/D)...' : 'Giọng nói';
        }

        recognition.onstart = () => {
            blockedByPermission = false;
            setListeningUI(true);
            showStatus('🎙️ Đã bật mic! Hãy nói: "A", "Bê", "Xê", "Dê" hoặc "Câu tiếp"...', 3500);
        };

        recognition.onresult = (event) => {
            const last = event.results[event.results.length - 1];
            if (!last || !last.isFinal) return;

            const transcript = last[0].transcript.trim();
            const cmd = parseVoiceCommand(transcript);

            if (cmd.type === 'ANSWER') {
                const ok = triggerUIAction(cmd);
                showStatus(ok
                    ? `✅ Nghe: "${transcript}" → Chọn đáp án ${cmd.option}`
                    : `⚠️ Nghe ra đáp án ${cmd.option} ("${transcript}") nhưng chưa khớp nút trên màn hình`
                );
            } else if (cmd.type === 'NEXT' || cmd.type === 'PREV' || cmd.type === 'HINT') {
                const ok = triggerUIAction(cmd);
                showStatus(ok ? `⚡ Thực hiện lệnh: "${transcript}"` : `⚠️ Chưa tìm thấy nút "${transcript}"`);
            } else {
                showStatus(`👂 Nghe được: "${transcript}" (Hãy nói A, B, C, D)`);
            }
        };

        recognition.onerror = (event) => {
            if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
                blockedByPermission = true;
                setListeningUI(false);
                showStatus('🚫 Trình duyệt đang chặn quyền Micro. Hãy cấp quyền Mic trên thanh địa chỉ!', 5000);
            } else if (event.error !== 'no-speech' && event.error !== 'aborted') {
                showStatus(`⚠️ Lỗi nhận diện: ${event.error}`);
            }
        };

        // Tự động nối lại phiên nghe khi trình duyệt tự ngắt sau một khoảng im lặng
        recognition.onend = () => {
            if (isListening && !blockedByPermission) {
                try {
                    recognition.start();
                } catch (_) {
                    setListeningUI(false);
                }
            } else {
                setListeningUI(false);
            }
        };

        btn.addEventListener('click', () => {
            if (isListening) {
                isListening = false;
                recognition.stop();
                setListeningUI(false);
                showStatus('🔇 Đã tắt điều khiển giọng nói.', 2000);
            } else {
                try {
                    recognition.start();
                } catch (err) {
                    showStatus('⚠️ Không thể khởi động Micro: ' + err.message);
                }
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initVoiceControl);
    } else {
        initVoiceControl();
    }
})(window);
