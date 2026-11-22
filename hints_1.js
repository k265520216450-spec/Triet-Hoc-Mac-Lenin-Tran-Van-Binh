/**
 * ============================================================================
 * FILE DỮ LIỆU & BỘ MÁY GỢI Ý ÔN TẬP ĐA CHƯƠNG (CHƯƠNG 1 - 2 - 3)
 * Tên file trên GitHub: hints_1.js (đặt cùng thư mục gốc với index.html)
 * Nội dung: Trọn bộ 95 câu Chương 1 (1.1 – 1.95) + Bảng Trùm Cuối + Modal tra cứu
 * ============================================================================
 */
(function (global) {
    'use strict';

    // 1. Tự động tiêm CSS độc lập (tiền tố rh- để không xung đột với index.html)
    function injectStyles() {
        if (!document.head || document.getElementById('rh-module-styles')) return;
        const style = document.createElement('style');
        style.id = 'rh-module-styles';
        style.textContent = `
            .rh-hidden { display: none !important; }
            .rh-inline-card {
                margin-top: 12px;
                border-radius: 14px;
                padding: 14px 16px;
                background: #f8fafc;
                border: 1px solid #e2e8f0;
                color: #1e293b;
                font-family: 'Inter', system-ui, -apple-system, sans-serif;
                text-align: left;
                animation: rhFadeUp 0.2s ease-out;
            }
            .dark .rh-inline-card, [data-theme="dark"] .rh-inline-card {
                background: #0f172a;
                border-color: #1e293b;
                color: #f1f5f9;
            }
            .rh-badge-row {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                gap: 8px;
                margin-bottom: 10px;
                padding-bottom: 8px;
                border-bottom: 1px solid rgba(148, 163, 184, 0.2);
            }
            .rh-badge-code {
                background: #4f46e5;
                color: #fff;
                font-weight: 800;
                font-size: 13px;
                padding: 3px 10px;
                border-radius: 8px;
            }
            .rh-badge-topic {
                background: rgba(99, 102, 241, 0.12);
                color: #4338ca;
                font-weight: 600;
                font-size: 12px;
                padding: 3px 9px;
                border-radius: 7px;
            }
            .dark .rh-badge-topic, [data-theme="dark"] .rh-badge-topic {
                background: rgba(99, 102, 241, 0.22);
                color: #a5b4fc;
            }
            .rh-badge-level {
                background: rgba(14, 165, 233, 0.12);
                color: #0369a1;
                font-weight: 600;
                font-size: 12px;
                padding: 3px 9px;
                border-radius: 7px;
            }
            .dark .rh-badge-level, [data-theme="dark"] .rh-badge-level {
                background: rgba(14, 165, 233, 0.2);
                color: #7dd3fc;
            }
            .rh-box-hint {
                background: rgba(79, 70, 229, 0.08);
                border: 1px solid rgba(79, 70, 229, 0.25);
                border-radius: 10px;
                padding: 10px 12px;
                margin-bottom: 8px;
            }
            .dark .rh-box-hint, [data-theme="dark"] .rh-box-hint {
                background: rgba(79, 70, 229, 0.18);
                border-color: rgba(129, 140, 248, 0.3);
            }
            .rh-box-example {
                background: rgba(16, 185, 129, 0.08);
                border: 1px solid rgba(16, 185, 129, 0.25);
                border-radius: 10px;
                padding: 10px 12px;
            }
            .dark .rh-box-example, [data-theme="dark"] .rh-box-example {
                background: rgba(16, 185, 129, 0.15);
                border-color: rgba(52, 211, 153, 0.28);
            }
            .rh-box-title {
                font-size: 11px;
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: 0.04em;
                margin-bottom: 4px;
            }
            .rh-box-hint .rh-box-title { color: #4338ca; }
            .dark .rh-box-hint .rh-box-title { color: #a5b4fc; }
            .rh-box-example .rh-box-title { color: #047857; }
            .dark .rh-box-example .rh-box-title { color: #6ee7b7; }
            .rh-box-text {
                font-size: 14px;
                line-height: 1.55;
                margin: 0;
            }

            /* Modal tra cứu độc lập */
            .rh-backdrop {
                position: fixed;
                inset: 0;
                z-index: 9999;
                background: rgba(2, 6, 23, 0.68);
                backdrop-filter: blur(4px);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 12px;
                font-family: 'Inter', system-ui, -apple-system, sans-serif;
                text-align: left;
            }
            .rh-modal {
                width: 100%;
                max-width: 820px;
                max-height: 90vh;
                background: #ffffff;
                color: #0f172a;
                border-radius: 18px;
                border: 1px solid #cbd5e1;
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
                display: flex;
                flex-direction: column;
                overflow: hidden;
                animation: rhFadeUp 0.2s ease-out;
            }
            .dark .rh-modal, [data-theme="dark"] .rh-modal {
                background: #0f172a;
                color: #f8fafc;
                border-color: #334155;
            }
            .rh-modal-header {
                padding: 14px 18px;
                border-bottom: 1px solid #e2e8f0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
                flex-wrap: wrap;
            }
            .dark .rh-modal-header, [data-theme="dark"] .rh-modal-header {
                border-color: #1e293b;
            }
            .rh-modal-body {
                padding: 16px 18px;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: 12px;
            }
            .rh-btn {
                cursor: pointer;
                border: none;
                border-radius: 10px;
                padding: 7px 12px;
                font-size: 13px;
                font-weight: 600;
                background: #f1f5f9;
                color: #334155;
                transition: all 0.15s;
            }
            .rh-btn:hover:not(:disabled) { background: #e2e8f0; }
            .rh-btn:disabled { opacity: 0.4; cursor: not-allowed; }
            .dark .rh-btn, [data-theme="dark"] .rh-btn {
                background: #1e293b;
                color: #e2e8f0;
            }
            .dark .rh-btn:hover:not(:disabled) { background: #334155; }
            .rh-btn-primary {
                background: #4f46e5 !important;
                color: #ffffff !important;
            }
            .rh-btn-primary:hover:not(:disabled) { background: #4338ca !important; }
            .rh-btn-amber {
                background: #fef3c7 !important;
                color: #92400e !important;
            }
            .dark .rh-btn-amber {
                background: rgba(180, 83, 9, 0.3) !important;
                color: #fcd34d !important;
            }
            .rh-search-row {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
            }
            .rh-input {
                flex: 1;
                min-width: 210px;
                padding: 10px 14px;
                border-radius: 11px;
                border: 2px solid #cbd5e1;
                background: #f8fafc;
                color: inherit;
                font-size: 14px;
                font-weight: 600;
                outline: none;
            }
            .rh-input:focus { border-color: #4f46e5; background: #fff; }
            .dark .rh-input, [data-theme="dark"] .rh-input {
                border-color: #334155;
                background: #1e293b;
            }
            .dark .rh-input:focus { background: #0f172a; border-color: #6366f1; }
            .rh-pills {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
            }
            .rh-pill {
                cursor: pointer;
                border: none;
                border-radius: 8px;
                padding: 5px 10px;
                font-size: 12px;
                font-weight: 600;
                background: #f1f5f9;
                color: #475569;
            }
            .dark .rh-pill { background: #1e293b; color: #cbd5e1; }
            .rh-pill.active { background: #4f46e5; color: #fff; }
            .rh-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(54px, 1fr));
                gap: 6px;
                max-height: 200px;
                overflow-y: auto;
                padding: 10px;
                border-radius: 12px;
                border: 1px solid #e2e8f0;
            }
            .dark .rh-grid { border-color: #1e293b; }
            .rh-table {
                width: 100%;
                border-collapse: collapse;
                font-size: 13px;
            }
            .rh-table th, .rh-table td {
                padding: 8px 10px;
                border-bottom: 1px solid #e2e8f0;
                text-align: left;
            }
            .dark .rh-table th, .dark .rh-table td { border-color: #1e293b; }
            @keyframes rhFadeUp {
                from { opacity: 0; transform: translateY(6px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
    }

    // 2. Kho quản lý dữ liệu gợi ý đa chương (hỗ trợ ghép nhiều file hints_1.js, hints_2.js, hints_3.js...)
    const ReviewHints = global.ReviewHints || {
        chapters: {
            1: null,
            2: null,
            3: null
        },

        state: {
            chapter: 1,
            currentNum: 1,
            modalBuilt: false
        },

        LEVEL_LABELS: {
            1: 'Nhận biết',
            2: 'Thông hiểu',
            3: 'Vận dụng',
            4: 'Phân tích',
            5: 'Đánh giá',
            6: 'Sáng tạo'
        },

        /**
         * Đăng ký dữ liệu gợi ý cho một chương (1, 2 hoặc 3) và phát tín hiệu cho index.html
         */
        registerChapter(chapterNum, payload) {
            this.chapters[chapterNum] = {
                title: payload.title || `Chương ${chapterNum}`,
                prefix: payload.prefix || `${chapterNum}.`,
                topics: payload.topics || [],
                cheatSheet: payload.cheatSheet || [],
                questions: payload.questions || []
            };
            this.state.chapter = chapterNum;
            if (typeof window !== 'undefined' && typeof CustomEvent === 'function') {
                window.dispatchEvent(new CustomEvent('reviewhints:ready', {
                    detail: { chapter: chapterNum, count: (payload.questions || []).length }
                }));
            }
        },

        /**
         * Chuẩn hóa chuỗi tiếng Việt để so khớp câu hỏi khi đề bị trộn ngẫu nhiên
         */
        normalizeText(str) {
            if (!str) return '';
            return str
                .toString()
                .toLowerCase()
                .replace(/^(câu\s*)?\d+([.,]\d+)*\s*[:.)-]?\s*/i, '')
                .replace(/[.,;:?!'"“”‘’()[\]{}\-–—…]/g, ' ')
                .replace(/\s+/g, ' ')
                .trim();
        },

        /**
         * Phân tích số câu từ số nguyên hoặc chuỗi ("15", "1.15", "Câu 1.15")
         */
        parseNumber(chapterNum, raw) {
            const ch = this.chapters[chapterNum];
            if (!ch || raw === null || raw === undefined) return null;
            if (typeof raw === 'number' && Number.isInteger(raw)) {
                return raw >= 1 && raw <= ch.questions.length ? raw : null;
            }
            let cleaned = raw.toString().trim().toLowerCase().replace(/^câu\s*/i, '');
            const regexPrefix = new RegExp(`^${chapterNum}[.,](\\d+)$`);
            const match = cleaned.match(regexPrefix);
            if (match) cleaned = match[1];
            if (!/^\d+$/.test(cleaned)) return null;
            const num = parseInt(cleaned, 10);
            return num >= 1 && num <= ch.questions.length ? num : null;
        },

        /**
         * Lấy tên chuyên đề theo số câu
         */
        getTopic(chapterNum, num) {
            const ch = this.chapters[chapterNum];
            if (!ch || !ch.topics.length) return `Chương ${chapterNum}`;
            const found = ch.topics.find(t => num >= t.start && num <= t.end);
            return found ? found.name : `Chương ${chapterNum}`;
        },

        /**
         * Lấy thông tin gợi ý đầy đủ của 1 câu theo chương và số thứ tự
         */
        get(chapterNum, numOrCode) {
            const ch = this.chapters[chapterNum];
            if (!ch) return null;
            const num = this.parseNumber(chapterNum, numOrCode);
            if (!num) return null;
            const row = ch.questions[num - 1];
            if (!row) return null;

            return {
                chapter: chapterNum,
                num: num,
                code: `${ch.prefix}${num}`,
                topic: this.getTopic(chapterNum, num),
                levelCode: row[0],
                level: `${this.LEVEL_LABELS[row[0]] || 'Ôn tập'} (${chapterNum}.${row[0]})`,
                question: row[1],
                hint: row[2],
                example: row[3]
            };
        },

        /**
         * Tự động tìm gợi ý khớp với nội dung câu hỏi đang làm trong 1 chương
         */
        findByText(chapterNum, rawQuestionText) {
            const ch = this.chapters[chapterNum];
            if (!ch || !rawQuestionText) return null;

            const maybeNum = this.parseNumber(chapterNum, rawQuestionText);
            if (maybeNum) return this.get(chapterNum, maybeNum);

            const target = this.normalizeText(rawQuestionText);
            if (target.length < 6) return null;

            let bestIndex = -1;
            let bestScore = 0;
            const targetWords = new Set(target.split(' ').filter(w => w.length > 1));

            for (let i = 0; i < ch.questions.length; i++) {
                const candidate = this.normalizeText(ch.questions[i][1]);
                if (candidate === target) {
                    return this.get(chapterNum, i + 1);
                }
                if (candidate.includes(target) || target.includes(candidate)) {
                    const ratio = Math.min(target.length, candidate.length) / Math.max(target.length, candidate.length);
                    if (ratio > bestScore) {
                        bestScore = ratio + 0.3;
                        bestIndex = i;
                    }
                    continue;
                }
                const candWords = candidate.split(' ').filter(w => w.length > 1);
                let hit = 0;
                for (const w of candWords) {
                    if (targetWords.has(w)) hit++;
                }
                const score = hit / Math.max(targetWords.size, candWords.length, 1);
                if (score > bestScore) {
                    bestScore = score;
                    bestIndex = i;
                }
            }

            if (bestIndex !== -1 && bestScore >= 0.55) {
                return this.get(chapterNum, bestIndex + 1);
            }
            return null;
        },

        /**
         * Tìm tự động xuyên suốt các chương đã nạp (dùng cực tiện cho đề thi tổng hợp hoặc đề trộn)
         */
        findAuto(codeOrId, questionText) {
            const loadedChapters = Object.keys(this.chapters)
                .map(Number)
                .filter(c => this.chapters[c] && Array.isArray(this.chapters[c].questions));

            if (codeOrId !== null && codeOrId !== undefined) {
                const str = String(codeOrId).trim().toLowerCase();
                const chMatch = str.match(/^(?:c|ch|chuong|chương)?\s*([123])[._-](\d+)$/);
                if (chMatch) {
                    const chNum = parseInt(chMatch[1], 10);
                    const qNum = parseInt(chMatch[2], 10);
                    const direct = this.get(chNum, qNum);
                    if (direct) return direct;
                }
            }

            if (questionText) {
                for (const chNum of loadedChapters) {
                    const byText = this.findByText(chNum, questionText);
                    if (byText) return byText;
                }
            }

            if (codeOrId !== null && codeOrId !== undefined) {
                for (const chNum of loadedChapters) {
                    const byNum = this.get(chNum, codeOrId);
                    if (byNum) return byNum;
                }
            }

            return null;
        },

        /**
         * Tìm kiếm theo từ khóa trong toàn chương
         */
        search(chapterNum, keyword) {
            const ch = this.chapters[chapterNum];
            if (!ch || !keyword) return [];
            const q = keyword.trim().toLowerCase();
            if (q.length < 2) return [];
            const results = [];
            for (let i = 0; i < ch.questions.length; i++) {
                const row = ch.questions[i];
                const hay = `${row[1]} ${row[2]} ${row[3]}`.toLowerCase();
                if (hay.includes(q)) {
                    results.push(this.get(chapterNum, i + 1));
                }
            }
            return results;
        },

        escapeHTML(str) {
            const map = {
                '&': '\u0026amp;',
                '<': '\u0026lt;',
                '>': '\u0026gt;',
                '"': '\u0026quot;',
                '\x27': '\u0026#39;'
            };
            return String(str).replace(/[&<>"\x27]/g, ch => map[ch]);
        },

        /**
         * Tạo HTML thẻ gợi ý gọn nhẹ để chèn trực tiếp ngay dưới câu hỏi trong index.html
         */
        renderInlineHTML(hintObj, options = {}) {
            if (!hintObj) {
                return `<div class="rh-inline-card"><p class="rh-box-text">Chưa có dữ liệu gợi ý cho câu hỏi này.</p></div>`;
            }
            const showQuestionTitle = options.showQuestionTitle !== false;
            return `
                <div class="rh-inline-card">
                    <div class="rh-badge-row">
                        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
                            <span class="rh-badge-code">Câu ${this.escapeHTML(hintObj.code)}</span>
                            <span class="rh-badge-topic">${this.escapeHTML(hintObj.topic)}</span>
                        </div>
                        <span class="rh-badge-level">${this.escapeHTML(hintObj.level)}</span>
                    </div>
                    ${showQuestionTitle ? `<p class="rh-box-text" style="font-weight:700;margin-bottom:10px;">${this.escapeHTML(hintObj.question)}</p>` : ''}
                    <div class="rh-box-hint">
                        <div class="rh-box-title">💡 Gợi ý tư duy dễ hiểu</div>
                        <p class="rh-box-text">${this.escapeHTML(hintObj.hint)}</p>
                    </div>
                    <div class="rh-box-example">
                        <div class="rh-box-title">📌 Ví dụ thực tế liên quan</div>
                        <p class="rh-box-text">${this.escapeHTML(hintObj.example)}</p>
                    </div>
                </div>
            `;
        },

        /**
         * Khởi tạo Modal tra cứu độc lập (chỉ tạo DOM khi gọi lần đầu)
         */
        ensureModal() {
            if (this.state.modalBuilt) return;
            injectStyles();

            const wrapper = document.createElement('div');
            wrapper.id = 'rhBackdrop';
            wrapper.className = 'rh-backdrop rh-hidden';
            wrapper.innerHTML = `
                <div class="rh-modal" role="dialog" aria-modal="true" aria-labelledby="rhModalTitle">
                    <div class="rh-modal-header">
                        <div>
                            <div id="rhModalTitle" style="font-weight:800;font-size:16px;">Gợi Ý Tư Duy & Ví Dụ Ôn Tập</div>
                            <div id="rhModalSub" style="font-size:12px;opacity:0.7;">Chương 1 • 95 câu (1.1 – 1.95)</div>
                        </div>
                        <div style="display:flex;gap:6px;flex-wrap:wrap;">
                            <button type="button" id="rhBtnGrid" class="rh-btn">Danh sách câu</button>
                            <button type="button" id="rhBtnCheat" class="rh-btn rh-btn-amber">⚡ Bảng Trùm Cuối</button>
                            <button type="button" id="rhBtnClose" class="rh-btn" aria-label="Đóng">✕ Đóng</button>
                        </div>
                    </div>

                    <div class="rh-modal-body">
                        <div class="rh-search-row">
                            <input id="rhSearchInput" class="rh-input" type="text" autocomplete="off"
                                placeholder="Nhập số câu (VD: 15, 1.60) hoặc gõ từ khóa đề...">
                            <button type="button" id="rhBtnPrev" class="rh-btn">← Trước</button>
                            <button type="button" id="rhBtnNext" class="rh-btn rh-btn-primary">Sau →</button>
                        </div>

                        <div id="rhKeywordBox" class="rh-hidden" style="border:1px solid rgba(99,102,241,0.35);border-radius:12px;padding:10px;">
                            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                                <span id="rhKeywordLabel" style="font-size:12px;font-weight:700;color:#4f46e5;"></span>
                                <button type="button" id="rhBtnCloseKw" class="rh-btn" style="padding:3px 8px;font-size:11px;">Đóng</button>
                            </div>
                            <div id="rhKeywordList" style="max-height:170px;overflow-y:auto;display:flex;flex-direction:column;gap:4px;"></div>
                        </div>

                        <div id="rhTopicPills" class="rh-pills"></div>
                        <div id="rhGridPanel" class="rh-grid rh-hidden"></div>
                        <div id="rhResultArea"></div>

                        <div id="rhCheatPanel" class="rh-hidden" style="border:1px solid rgba(245,158,11,0.45);border-radius:12px;padding:12px;overflow-x:auto;">
                            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                                <strong style="font-size:14px;">⚡ Bảng Trùm Cuối & Mẹo Loại Trừ Nhanh</strong>
                                <button type="button" id="rhBtnCloseCheat" class="rh-btn" style="padding:3px 8px;font-size:11px;">Ẩn</button>
                            </div>
                            <table class="rh-table">
                                <thead>
                                    <tr>
                                        <th>Phạm trù / Lĩnh vực</th>
                                        <th>Yếu tố quyết định nhất</th>
                                        <th>Câu tiêu biểu & Ghi chú</th>
                                    </tr>
                                </thead>
                                <tbody id="rhCheatBody"></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(wrapper);

            const backdrop = document.getElementById('rhBackdrop');
            const input = document.getElementById('rhSearchInput');

            backdrop.addEventListener('click', (e) => {
                if (e.target === backdrop) this.close();
            });
            document.getElementById('rhBtnClose').addEventListener('click', () => this.close());
            document.getElementById('rhBtnPrev').addEventListener('click', () => {
                if (this.state.currentNum > 1) this.selectInModal(this.state.currentNum - 1);
            });
            document.getElementById('rhBtnNext').addEventListener('click', () => {
                const ch = this.chapters[this.state.chapter];
                if (ch && this.state.currentNum < ch.questions.length) {
                    this.selectInModal(this.state.currentNum + 1);
                }
            });
            document.getElementById('rhBtnGrid').addEventListener('click', () => {
                const panel = document.getElementById('rhGridPanel');
                panel.classList.toggle('rh-hidden');
                if (!panel.classList.contains('rh-hidden')) this.renderModalGrid();
            });
            document.getElementById('rhBtnCheat').addEventListener('click', () => {
                const panel = document.getElementById('rhCheatPanel');
                panel.classList.toggle('rh-hidden');
            });
            document.getElementById('rhBtnCloseCheat').addEventListener('click', () => {
                document.getElementById('rhCheatPanel').classList.add('rh-hidden');
            });
            document.getElementById('rhBtnCloseKw').addEventListener('click', () => {
                document.getElementById('rhKeywordBox').classList.add('rh-hidden');
            });

            input.addEventListener('input', (e) => {
                const val = e.target.value;
                const kwBox = document.getElementById('rhKeywordBox');
                if (!val.trim()) {
                    kwBox.classList.add('rh-hidden');
                    return;
                }
                const num = this.parseNumber(this.state.chapter, val);
                if (num !== null) {
                    kwBox.classList.add('rh-hidden');
                    this.selectInModal(num, false);
                } else {
                    const matches = this.search(this.state.chapter, val);
                    kwBox.classList.remove('rh-hidden');
                    document.getElementById('rhKeywordLabel').textContent = `Tìm thấy ${matches.length} câu khớp "${val.trim()}":`;
                    const list = document.getElementById('rhKeywordList');
                    if (!matches.length) {
                        list.innerHTML = `<div style="font-size:12px;opacity:0.7;padding:4px;">Không tìm thấy câu nào khớp từ khóa này.</div>`;
                    } else {
                        list.innerHTML = matches.slice(0, 25).map(m => `
                            <button type="button" class="rh-btn" data-rh-jump="${m.num}" style="text-align:left;display:flex;gap:8px;align-items:flex-start;">
                                <span class="rh-badge-code" style="flex-shrink:0;">${this.escapeHTML(m.code)}</span>
                                <span style="font-size:12px;font-weight:500;">${this.escapeHTML(m.question)}</span>
                            </button>
                        `).join('');
                        list.querySelectorAll('[data-rh-jump]').forEach(btn => {
                            btn.addEventListener('click', () => {
                                this.selectInModal(parseInt(btn.dataset.rhJump, 10), true);
                                kwBox.classList.add('rh-hidden');
                            });
                        });
                    }
                }
            });

            // Phím tắt chỉ hoạt động KHI Modal đang mở (tránh xung đột với index.html)
            document.addEventListener('keydown', (e) => {
                if (backdrop.classList.contains('rh-hidden')) return;
                if (e.key === 'Escape') {
                    this.close();
                    return;
                }
                if (document.activeElement === input && input.value.trim() !== '' && !e.altKey) return;
                const ch = this.chapters[this.state.chapter];
                if (!ch) return;
                if (e.key === 'ArrowLeft' && this.state.currentNum > 1) {
                    e.preventDefault();
                    this.selectInModal(this.state.currentNum - 1);
                } else if (e.key === 'ArrowRight' && this.state.currentNum < ch.questions.length) {
                    e.preventDefault();
                    this.selectInModal(this.state.currentNum + 1);
                }
            });

            this.state.modalBuilt = true;
        },

        renderModalGrid() {
            const ch = this.chapters[this.state.chapter];
            const grid = document.getElementById('rhGridPanel');
            if (!ch || !grid) return;
            grid.innerHTML = ch.questions.map((_, idx) => {
                const n = idx + 1;
                const active = n === this.state.currentNum;
                return `<button type="button" class="rh-btn ${active ? 'rh-btn-primary' : ''}" data-rh-grid-num="${n}" style="padding:6px 4px;font-size:12px;">${this.escapeHTML(ch.prefix + n)}</button>`;
            }).join('');
            grid.querySelectorAll('[data-rh-grid-num]').forEach(btn => {
                btn.addEventListener('click', () => {
                    this.selectInModal(parseInt(btn.dataset.rhGridNum, 10), true);
                    grid.classList.add('rh-hidden');
                });
            });
        },

        selectInModal(num, syncInput = true) {
            const ch = this.chapters[this.state.chapter];
            if (!ch) return;
            const hintObj = this.get(this.state.chapter, num);
            if (!hintObj) return;

            this.state.currentNum = num;
            if (syncInput) {
                document.getElementById('rhSearchInput').value = num;
            }

            document.getElementById('rhModalTitle').textContent = `Gợi Ý Tư Duy & Ví Dụ • ${ch.title}`;
            document.getElementById('rhModalSub').textContent = `Tổng số ${ch.questions.length} câu (${ch.prefix}1 – ${ch.prefix}${ch.questions.length})`;

            const pillsBox = document.getElementById('rhTopicPills');
            pillsBox.innerHTML = ch.topics.map(t => {
                const isActive = num >= t.start && num <= t.end;
                return `<button type="button" class="rh-pill ${isActive ? 'active' : ''}" data-rh-start="${t.start}">${this.escapeHTML(t.shortLabel || t.name)}</button>`;
            }).join('');
            pillsBox.querySelectorAll('[data-rh-start]').forEach(b => {
                b.addEventListener('click', () => this.selectInModal(parseInt(b.dataset.rhStart, 10)));
            });

            document.getElementById('rhCheatBody').innerHTML = ch.cheatSheet.map(row => `
                <tr>
                    <td style="font-weight:600;">${this.escapeHTML(row[0])}</td>
                    <td style="font-weight:700;color:#059669;">${this.escapeHTML(row[1])}</td>
                    <td style="opacity:0.85;">${this.escapeHTML(row[2])}</td>
                </tr>
            `).join('');

            document.getElementById('rhBtnPrev').disabled = num <= 1;
            document.getElementById('rhBtnNext').disabled = num >= ch.questions.length;
            document.getElementById('rhResultArea').innerHTML = this.renderInlineHTML(hintObj, { showQuestionTitle: true });
        },

        /**
         * Mở popup gợi ý từ index.html (truyền số câu hoặc nội dung câu hỏi đều nhận)
         */
        open(chapterNum = 1, numOrQuestionText = 1) {
            let targetCh = chapterNum;
            let targetNum = null;

            if (typeof numOrQuestionText === 'string') {
                const auto = this.findAuto(numOrQuestionText, numOrQuestionText);
                if (auto) {
                    targetCh = auto.chapter;
                    targetNum = auto.num;
                }
            }

            const ch = this.chapters[targetCh];
            if (!ch) {
                alert(`Dữ liệu gợi ý Chương ${targetCh} chưa được nạp.`);
                return;
            }
            this.ensureModal();
            this.state.chapter = targetCh;

            if (!targetNum) {
                targetNum = this.parseNumber(targetCh, numOrQuestionText);
            }
            this.selectInModal(targetNum || 1, true);
            document.getElementById('rhBackdrop').classList.remove('rh-hidden');
        },

        close() {
            const backdrop = document.getElementById('rhBackdrop');
            if (backdrop) backdrop.classList.add('rh-hidden');
        }
    };

    // Xuất ra biến toàn cục ngay khi khởi tạo
    global.ReviewHints = ReviewHints;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectStyles);
    } else {
        injectStyles();
    }

    // =========================================================================
    // 3. NẠP DỮ LIỆU CHƯƠNG 1 (95 CÂU: 1.1 – 1.95)
    // =========================================================================
    ReviewHints.registerChapter(1, {
        title: 'Chương 1: Khái luận về triết học và triết học Mác – Lênin',
        prefix: '1.',
        topics: [
            { start: 1, end: 49, shortLabel: 'I. Triết học & VĐCB (1.1–1.49)', name: 'I. Triết học và vấn đề cơ bản của triết học' },
            { start: 50, end: 95, shortLabel: 'II. Triết học Mác – Lênin (1.50–1.95)', name: 'II. Triết học Mác - Lênin và vai trò trong đời sống xã hội' }
        ],
        cheatSheet: [
            ['Khái niệm Triết học', 'Hệ thống lý luận chung nhất', '1.1, 1.2 (Quy luật chung nhất của TN, XH, TD)'],
            ['Thế giới quan (TGQ)', 'Triết học là hạt nhân lý luận', '1.4, 1.9, 1.10 (TGQ bao hàm nhân sinh quan)'],
            ['Vấn đề cơ bản của Triết học', 'Mối quan hệ Vật chất – Ý thức', '1.12–1.17 (2 mặt: Bản thể luận & Nhận thức luận)'],
            ['Mặt 1: Bản thể luận', 'Vật chất có trước (CNDV) vs Ý thức có trước (CNDT)', '1.14, 1.15, 1.24, 1.25 (Phân định CNDV & CNDT)'],
            ['Mặt 2: Nhận thức luận', 'Khả tri luận (Biết được) vs Bất khả tri', '1.16, 1.27, 1.28 (Nhận thức được nhưng vô tận)'],
            ['Hai phương pháp tư duy', 'Biện chứng (Liên hệ, PT) vs Siêu hình (Cô lập, Tĩnh)', '1.30–1.35, 1.45, 1.47 (Cây vs Rừng; Dòng sông)'],
            ['3 hình thức Phép biện chứng', 'Tự phát -> Duy tâm -> Duy vật', '1.36 (Đỉnh cao là Phép biện chứng duy vật)'],
            ['Nguồn gốc lý luận TH Mác', 'Triết học CĐ Đức, KTCT Anh, CNXH không tưởng', '1.55 (Kế thừa trực tiếp từ 3 nguồn lý luận)'],
            ['3 phát minh KHTN thế kỷ XIX', 'Bảo toàn NL, Tế bào, Tiến hóa Đacuyn', '1.80 (Cơ sở khoa học của tính thống nhất & vận động)'],
            ['Phát kiến vĩ đại về Triết học', 'Chủ nghĩa duy vật lịch sử', '1.22, 1.56 (Mở rộng CNDVBC vào lịch sử xã hội)'],
            ['Chức năng Triết học Mác – Lênin', 'Thế giới quan & Phương pháp luận chung nhất', '1.54, 1.57, 1.77 (Không thay thế khoa học cụ thể)']
        ],
        questions: [
            // ================= CHUYÊN ĐỀ I: TRIẾT HỌC VÀ VẤN ĐỀ CƠ BẢN CỦA TRIẾT HỌC (1.1 - 1.49) =================
            [1, "Điền vào chỗ trống: “Triết học là... về thế giới và vị trí con người, trong thế giới đó, là khoa học về sự vận động, phát triển chung nhất của tự nhiên, xã hội và tư duy”.", "Khác với các môn khoa học cụ thể chỉ nghiên cứu từng mảng hẹp, triết học khái quát toàn bộ thế giới thành một chỉnh thể lý luận bao quát nhất.", "Toán học nghiên cứu con số, Vật lý nghiên cứu cơ – điện, còn Triết học nghiên cứu những quy luật chung nhất chi phối cả tự nhiên, xã hội và tư duy con người."],
            [2, "Tư duy triết học bắt đầu từ đâu?", "Thuật ngữ triết học ở cả phương Đông lẫn phương Tây cổ đại đều bắt nguồn từ khát vọng truy tìm bản chất, sự thông thái và lẽ phải về vũ trụ, nhân sinh.", "Người Hy Lạp cổ đại gọi triết học là 'Philosophia' (yêu mến sự thông thái), xuất phát từ việc con người đặt câu hỏi về nguồn gốc vũ trụ và ý nghĩa cuộc sống."],
            [3, "Trong lịch sử nhân loại, triết học xuất hiện khi tri thức của con người đã phát triển đến mức có khả năng khái quát các sự vật, hiện tượng thành những quan điểm chung về thế giới. Nếu vận dụng cách tiếp cận này để xem xét sự phát triển của trí tuệ nhân tạo hiện nay có thể tạo ra một hệ thống triết học mới hay không, nhận định nào sau đây là phù hợp nhất?", "Triết học không chỉ cần năng lực tổng hợp tri thức (nguồn gốc nhận thức) mà còn bắt nguồn từ nhu cầu giải quyết mâu thuẫn thực tiễn và phân công lao động của xã hội loài người (nguồn gốc xã hội).", "AI có thể xử lý hàng tỷ dữ liệu văn bản rất nhanh nhưng không có đời sống xã hội, lợi ích giai cấp hay trải nghiệm lịch sử như con người để tự sản sinh một hệ thống triết học độc lập."],
            [1, "Điền vào chỗ trống: “... là khái niệm triết học dùng để chỉ hệ thống các tri thức, quan điểm, tình cảm, niềm tin, lý tưởng xác định về thế giới và vị trí con người trong thế giới đó”.", "Khái niệm này chỉ 'lăng kính' tổng hợp cả hiểu biết, niềm tin và lý tưởng giúp con người nhìn nhận toàn cảnh vũ trụ và vị trí của chính mình trong đó.", "Một sinh viên kỹ thuật tin rằng mọi sự cố máy móc đều có nguyên nhân vật chất khách quan chứ không do 'xui xẻo' chính là đang thể hiện cách nhìn thế giới khoa học."],
            [2, "Thế giới quan có thể được hiểu một cách ngắn gọn là:", "Gạt bỏ các yếu tố diễn giải dài dòng, cốt lõi của khái niệm này là toàn bộ hệ thống cách nhìn, quan niệm của con người đối với thế giới xung quanh.", "Cách một người lý giải thế giới này do tự nhiên vận động hay do thần linh sắp đặt chính là hệ thống quan điểm của người đó về thế giới."],
            [1, "Thế giới quan quy định điều gì trong việc định hướng nhận thức và hoạt động thực tiễn của con người?", "Khi đã có cách nhìn nhận đúng về thế giới và vị trí của mình, con người sẽ xác lập được chuẩn mực hành xử, thái độ sống và thước đo đánh giá mọi việc.", "Nhờ có thế giới quan khoa học, kỹ sư xác định nguyên tắc làm việc dựa trên số liệu đo đạc thực tế, thái độ tôn trọng quy luật và đề cao giá trị thực nghiệm."],
            [2, "Sự hình thành các trường phái khác nhau trong triết học xuất phát từ sự khác biệt về:", "Các nhà triết học chia thành các phe phái đối lập nhau (như duy vật và duy tâm) chính là do cách họ nhìn nhận bản chất gốc rễ của thế giới khác nhau.", "Cùng quan sát thế giới nhưng người cho rằng vật chất có trước hình thành phe duy vật, còn người cho rằng tinh thần có trước hình thành phe duy tâm."],
            [2, "Thế giới quan đúng đắn là một thế giới quan như thế nào?", "Một cách nhìn thế giới không thể lấy cảm xúc cá nhân hay số đông làm chuẩn, mà phải phản ánh trung thực bản chất vốn có của thế giới bên ngoài.", "Quan niệm Trái Đất quay quanh Mặt Trời là đúng đắn vì nó phản ánh đúng thực tế vận hành của hệ Mặt Trời chứ không phụ thuộc vào cảm giác mắt thường."],
            [2, "Thế giới quan và nhân sinh quan có mối quan hệ như thế nào?", "Con người là một bộ phận nằm trong thế giới rộng lớn, nên quan niệm về cuộc đời con người luôn nằm gọn bên trong quan niệm chung về toàn bộ thế giới.", "Khi bàn về cả vũ trụ và xã hội là nói đến phạm vi rộng (thế giới quan), còn khi bàn riêng về lẽ sống, mục đích đời người là phần nằm bên trong nó (nhân sinh quan)."],
            [1, "Triết học có vai trò như thế nào đối với thế giới quan?", "Trong một thế giới quan có nhiều yếu tố như tình cảm, niềm tin, kinh nghiệm, thì triết học đóng vai trò là phần lõi lý luận sắc bén nhất chi phối toàn bộ.", "Giống như nhân của một nguyên tử giữ vai trò trung tâm, lý luận triết học định hướng cho niềm tin, thái độ và cách hành động của con người."],
            [2, "Triết học là hạt nhân của thế giới quan được hiểu là:", "Thế giới quan có thể hình thành tự phát từ đời thường, nhưng chỉ có triết học mới đủ tầm khái quát lý luận để xây dựng và củng cố thế giới quan một cách tự giác, hệ thống.", "Trước khi học triết học, sinh viên có sẵn cái nhìn đời thường; khi học triết học Mác – Lênin, sinh viên được trang bị công cụ lý luận để xây dựng thế giới quan khoa học."],
            [2, "Mối quan hệ giữa tư duy và tồn tại là muốn nói đến mối quan hệ giữa hai yếu tố nào?", "Trong ngôn ngữ triết học kinh điển (như Ph. Ăngghen diễn đạt), 'tư duy' chỉ đời sống tinh thần trong đầu óc, còn 'tồn tại' chỉ thế giới khách quan bên ngoài.", "Bản vẽ thiết kế mạch điện trong đầu người kỹ sư (tư duy/ý thức) và các linh kiện điện tử hữu hình trên bàn thí nghiệm (tồn tại/vật chất)."],
            [1, "Hai mặt trong vấn đề cơ bản của triết học là:", "Vấn đề lớn nhất của triết học xoay quanh 2 câu hỏi: một mặt hỏi về nguồn gốc bản nguyên của thế giới (cái gì có trước), mặt kia hỏi về khả năng hiểu biết thế giới của con người.", "Câu hỏi 'Vật chất hay ý thức có trước?' thuộc mặt thứ nhất, còn câu hỏi 'Con người có hiểu được quy luật tự nhiên không?' thuộc mặt thứ hai."],
            [2, "Bản thể luận trong vấn đề cơ bản của triết học được hiểu là:", "Mặt thứ nhất này đi tìm 'gốc rễ khởi nguyên' của vạn vật: thế giới này do vật chất sinh ra hay do tinh thần tạo nên.", "Các nhà triết học cổ đại tranh luận xem khởi nguyên tạo nên vũ trụ là nước, lửa, nguyên tử (vật chất) hay là ý niệm tuyệt đối (tinh thần)."],
            [2, "Mặt bản thể luận trong vấn đề cơ bản của triết học giải quyết nội dung gì?", "Nội dung cốt lõi của mặt thứ nhất là phân định giữa thế giới vật chất khách quan và đời sống tinh thần ý thức xem yếu tố nào giữ vai trò quyết định.", "Khi khẳng định bộ não và thế giới khách quan có trước rồi mới nảy sinh suy nghĩ của con người là đang giải quyết mối quan hệ giữa vật chất và ý thức."],
            [2, "Mặt nhận thức luận trong vấn đề cơ bản của triết học giải quyết nội dung gì?", "Sau khi bàn xem thế giới là gì, mặt thứ hai giải đáp thắc mắc: đầu óc con người có thể phản ánh và hiểu được bản chất thế giới xung quanh hay không.", "Việc các nhà vật lý tìm ra cấu trúc nguyên tử và sóng điện từ chứng minh con người có năng lực nhận thức được các quy luật của thế giới."],
            [2, "Việc giải quyết vấn đề cơ bản có ảnh hưởng như thế nào đến sự phát triển của triết học?", "Cách trả lời câu hỏi về mối quan hệ giữa vật chất và ý thức chính là 'đường ranh giới' chia các nhà tư tưởng thành những dòng phái đối lập suốt lịch sử.", "Trả lời 'vật chất có trước' lập nên trường phái duy vật; trả lời 'ý thức có trước' lập nên trường phái duy tâm; trả lời 'cả hai ngang nhau' lập nên nhị nguyên luận."],
            [1, "Chủ nghĩa duy tâm có những trường phái nào?", "Cùng cho rằng tinh thần có trước vật chất, nhưng một phái coi đó là tinh thần bên ngoài con người (ý niệm, trời), phái kia coi đó là cảm giác bên trong từng cá nhân.", "Hêghen coi 'Ý niệm tuyệt đối' sinh ra thế giới là khách quan; còn G. Berkeley coi sự vật chỉ là 'phức hợp cảm giác' của tôi là chủ quan."],
            [3, "Quan niệm: “Sống chết có mệnh, giàu sang do trời” của Khổng Tử phản ánh thế giới quan của trường phái triết học nào?", "Câu nói này quy mọi số phận đời người cho một lực lượng tinh thần siêu nhiên nằm bên ngoài ý muốn của từng cá nhân con người ('mệnh', 'trời').", "Cho rằng thành bại trong kỳ thi hay sự nghiệp đều do 'số trời định sẵn' từ bên ngoài chứ không phải do cảm giác chủ quan tự nghĩ ra hay nỗ lực vật chất."],
            [2, "Câu nói 'Vẻ đẹp không nằm ở đôi má hồng của người thiếu nữ mà ở trong mắt của kẻ si tình' phản ánh quan điểm của trường phái triết học nào?", "Câu nói phủ nhận thuộc tính khách quan của sự vật bên ngoài, cho rằng giá trị của sự vật hoàn toàn do cảm xúc và suy nghĩ riêng của cá nhân người nhìn quyết định.", "Cho rằng một sự vật chỉ tồn tại hoặc có ý nghĩa khi chính bản thân mình cảm thấy và nghĩ về nó như vậy."],
            [1, "Chủ nghĩa duy vật có những trường phái nào?", "Chủ nghĩa duy vật phát triển qua đúng 3 hình thức lịch sử từ thấp đến cao: mộc mạc trực quan thời cổ đại -> máy móc cô lập thế kỷ XVII–XVIII -> khoa học toàn diện của Mác – Ăngghen.", "Từ việc Talét coi vật chất là nước (cổ đại), đến Newton coi thế giới như cỗ máy cơ học (siêu hình), và Lênin định nghĩa vật chất là thực tại khách quan (biện chứng)."],
            [2, "Chủ nghĩa duy vật lịch sử là kết quả của hoạt động nào?", "Trước Mác, các nhà duy vật thường chỉ duy vật khi giải thích tự nhiên nhưng lại duy tâm khi giải thích xã hội; Mác và Ăngghen đã đem thế giới quan duy vật biện chứng soi rọi vào lĩnh vực xã hội.", "Thay vì giải thích lịch sử do ý muốn của vua chúa, Mác chỉ ra chính phương thức sản xuất vật chất quyết định sự vận động của xã hội loài người."],
            [3, "Câu thành ngữ “Phú quý sinh lễ nghĩa” phản ánh quan điểm của trường phái triết học nào?", "'Phú quý' là điều kiện vật chất, kinh tế đầy đủ; 'lễ nghĩa' là chuẩn mực tinh thần, đạo đức. Câu thành ngữ khẳng định điều kiện vật chất có trước và quyết định đời sống tinh thần.", "Khi kinh tế gia đình và xã hội khấm khá, đầy đủ vật chất thì con người mới có điều kiện chăm lo chu toàn cho các nghi lễ, văn hóa tinh thần."],
            [2, "Chủ nghĩa duy tâm giải quyết mặt bản thể luận trong vấn đề cơ bản của triết học như thế nào?", "Lập trường này đảo ngược mối quan hệ hiện thực, xem ý thức, tư tưởng hoặc lực lượng siêu nhiên là cái có trước, sinh ra và chi phối giới tự nhiên vật chất.", "Quan niệm cho rằng Thượng Đế dùng ý chí tinh thần để sáng tạo ra bầu trời, mặt đất và muôn loài trong vũ trụ."],
            [2, "Chủ nghĩa duy vật giải quyết mặt bản thể luận trong vấn đề cơ bản của triết học như thế nào?", "Lập trường này đứng vững trên hiện thực khách quan: giới tự nhiên vật chất tồn tại trước, sau đó bộ óc người mới phát triển và phản ánh thế giới vật chất đó.", "Trái Đất và các quy luật vật lý tồn tại hàng tỷ năm trước khi loài người xuất hiện và có tư duy nhận thức về chúng."],
            [4, "Do con người không thể nhận thức được tất cả các sự vật, hiện tượng trong vũ trụ rộng lớn, nên việc giải quyết mặt bản thể luận trong vấn đề cơ bản của triết học cần theo hướng nào?", "Dù vũ trụ vô tận và con người chưa biết hết mọi chi tiết, nhưng việc xác định lập trường gốc rễ (vật chất hay ý thức có trước) là la bàn bắt buộc để định hướng mọi nghiên cứu khoa học tiếp theo.", "Các nhà thiên văn học chưa khám phá hết vũ trụ nhưng luôn xuất phát từ lập trường vật chất có trước nên mới đi tìm bằng chứng vật lý thay vì cầu nguyện."],
            [2, "Nhận định nào đúng về khả năng nhận thức của con người đối với thế giới khách quan?", "Theo chủ nghĩa duy vật biện chứng, về nguyên tắc không có gì là không thể biết (khả tri), nhưng tại mỗi thời điểm lịch sử, hiểu biết của con người luôn có giới hạn và tiếp tục mở rộng vô tận.", "Loài người hoàn toàn hiểu được bản chất của vật chất, nhưng từ hiểu nguyên tử đến hiểu hạt quark và vật chất tối là một quá trình khám phá không bao giờ dừng lại."],
            [2, "“Thế giới rộng lớn và phức tạp, con người không thể nào nhận thức được hết, vì vậy nhận thức là bất khả thi.”. Quan điểm trên thuộc lập trường nào về mặt nhận thức luận trong triết học?", "Thuật ngữ chỉ trường phái phủ nhận khả năng nhận thức của con người, cho rằng con người chỉ biết hiện tượng bề ngoài chứ không thể chạm tới bản chất thật của sự vật.", "Quan niệm của Kant về 'vật tự nó' cho rằng con người vĩnh viễn không thể biết được bản chất thực sự của sự vật ẩn sau các cảm giác."],
            [3, "Câu thành ngữ “Ếch ngồi đáy giếng, coi trời bằng vung” thể hiện vấn đề gì về thế giới quan?", "Do không gian tiếp xúc bị bó hẹp trong miệng giếng nhỏ nên chủ thể nhận thức lấy cái phần nhỏ bé mình thấy để đánh giá toàn bộ thế giới rộng lớn một cách chủ quan, tự phụ.", "Một người chỉ mới học qua vài khái niệm cơ bản của một ngôn ngữ lập trình nhưng đã tự cho rằng mình biết hết toàn bộ ngành công nghệ thông tin."],
            [1, "Trong triết học, có hai phương pháp tư duy chung nhất đối lập nhau đó là:", "Trong lịch sử triết học, có hai cách nhìn thế giới trái ngược nhau hoàn toàn: một cách nhìn sự vật trong sự liên hệ, vận động không ngừng; cách kia nhìn sự vật cô lập, đứng yên bất biến.", "Khi đánh giá năng lực học tập của một người, một bên nhìn thấy quá trình tiến bộ từng ngày, bên kia đóng khung người đó mãi mãi là 'học kém'."],
            [2, "Câu nói “Chỉ thấy cây mà không thấy rừng” cho thấy phương pháp tư duy nào trong triết học?", "Ph. Ăngghen dùng hình ảnh này để phê phán lối suy nghĩ chỉ nhìn từng cá thể tách rời, cô lập mà bỏ qua mối liên hệ tổng thể của cả hệ thống.", "Khi sửa một dây chuyền tự động hóa bị lỗi, kỹ thuật viên chỉ tháo mỗi con cảm biến ra xem mà bỏ qua sự liên kết với nguồn điện, bộ điều khiển PLC và phần cơ khí."],
            [2, "Câu nói “Không ai tắm hai lần trên một dòng sông” cho thấy phương pháp tư duy nào trong triết học?", "Câu nói nổi tiếng của nhà triết học cổ đại Hêraclít khẳng định vạn vật luôn trôi chảy, vận động và biến đổi từng giây phút chứ không bao giờ đứng yên nguyên trạng.", "Dòng nước sông luôn chảy trôi không ngừng, cũng như công nghệ và tri thức kỹ thuật hôm nay đã khác so với ngày hôm qua."],
            [2, "Khi vận dụng, phương pháp tư duy biện chứng sẽ ưu việt hơn phương pháp tư duy siêu hình ở điểm nào?", "Thay vì chỉ nhìn một mặt tĩnh tại, cô lập, cách tư duy này đặt sự vật trong nhiều mối quan hệ tác động qua lại và theo dõi cả quá trình biến đổi của nó.", "Để đánh giá một dự án kỹ thuật, tư duy biện chứng xem xét đồng thời hiệu suất kỹ thuật, chi phí kinh tế, tác động môi trường và khả năng nâng cấp trong tương lai."],
            [3, "Người học cần vận dụng phương pháp tư duy nào trong triết học Mác – Lênin để có thể đánh giá sự vật, hiện tượng hoặc hành động đúng đắn, khách quan và khoa học?", "Để tránh cái nhìn phiến diện, bảo thủ và định kiến khi đánh giá một sự việc hay con người, cần sử dụng phương pháp xem xét sự vật trong mối liên hệ toàn diện và sự vận động phát triển.", "Khi điểm thi giữa kỳ chưa cao, sinh viên không vội kết luận mình bất tài mà phân tích nhiều nguyên nhân (phương pháp học, thời gian ôn tập, kiến thức nền) để cải thiện ở kỳ cuối."],
            [3, "Ông cha ta có câu: “Không thầy đố mày làm nên”, đồng thời lại có câu “Học thầy không tày học bạn” điều này thể hiện tư duy gì của người Việt Nam?", "Hai câu tục ngữ tưởng chừng trái ngược nhưng thực chất bổ sung cho nhau một cách toàn diện, không tuyệt đối hóa một nguồn học tập duy nhất nào.", "Người thầy định hướng phương pháp và kiến thức chuẩn mực, còn bạn bè giúp trao đổi, thực hành và cọ xát ý tưởng hằng ngày; kết hợp cả hai mới học giỏi toàn diện."],
            [1, "Các hình thức cơ bản của phép biện chứng trong lịch sử là:", "Lịch sử tư duy biện chứng trải qua 3 bước phát triển: cảm nhận mộc mạc thời cổ đại -> phát triển hệ thống lý luận nhưng trên nền tảng tinh thần (Hêghen) -> hoàn thiện khoa học trên nền tảng vật chất (Mác – Ăngghen).", "Từ quan niệm âm dương biến hóa thời cổ đại (tự phát), đến phép biện chứng của Hêghen (duy tâm) và phép biện chứng của Mác – Lênin (duy vật)."],
            [3, "Trong quá trình nghiên cứu khoa học, một giả thuyết mới được chấp nhận không phải vì nó phù hợp với mong muốn chủ quan của nhà nghiên cứu mà phải được kiểm nghiệm bằng thực tiễn và bằng chứng khách quan. Cách tiếp cận này gần nhất với lập trường nào?", "Lập trường này đặt hiện thực khách quan bên ngoài làm thước đo tối cao; mọi suy nghĩ trong đầu dù hay đến đâu cũng phải cúi đầu trước bằng chứng thực nghiệm.", "Một sinh viên TNUT đo thực nghiệm mạch điện thấy sai số lớn hơn tính toán lý thuyết thì phải kiểm tra lại linh kiện và điều kiện đo thực tế chứ không thể ép số liệu theo ý muốn."],
            [3, "Khi đánh giá biến đổi khí hậu, có quan điểm cho rằng chỉ cần xử lý một nguồn phát thải riêng lẻ là có thể giải quyết toàn bộ vấn đề, không cần quan tâm đến năng lượng, giao thông, sản xuất, tiêu dùng và chính sách quốc tế. Cách tiếp cận này có hạn chế gì?", "Biến đổi khí hậu là kết quả của mạng lưới nhiều lĩnh vực tác động qua lại; tách riêng một yếu tố đơn lẻ để giải quyết mà cắt đứt liên hệ với tổng thể chính là sai lầm của lối tư duy siêu hình.", "Chỉ cấm một loại phương tiện giao thông cá nhân nhưng vẫn giữ nguyên các nhà máy nhiệt điện than cũ kỹ và nạn phá rừng thì khí hậu vẫn tiếp tục nóng lên."],
            [4, "Sự khác nhau cơ bản giữa chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật siêu hình được thể hiện rõ nhất ở cách giải thích nào về sự biến đổi của sự vật?", "Cả hai đều thừa nhận vật chất có trước, nhưng khác nhau ở phương pháp nhìn thế giới: một bên thấy sự vận động tự thân do mâu thuẫn bên trong, bên kia coi sự vật đứng yên và chỉ thay đổi khi có cú hích bên ngoài.", "Giải thích sự phát triển của một cái cây: duy vật siêu hình chỉ thấy nước và ánh sáng bên ngoài tác động, còn duy vật biện chứng thấy sự đồng hóa – dị hóa bên trong kết hợp điều kiện môi trường."],
            [5, "Đánh giá nào phù hợp nhất khi so sánh phương pháp siêu hình và phương pháp biện chứng trong nhận thức?", "Không nên phủ định sạch trơn phương pháp siêu hình vì nó vẫn cần thiết khi ta tạm tách riêng từng bộ phận để phân tích chi tiết; nó chỉ sai lầm khi biến sự tách rời tạm thời thành chân lý tuyệt đối.", "Khi kiểm tra thông số kỹ thuật của một con điện trở riêng lẻ trên bàn đo, cách xem xét tĩnh tại cô lập rất hữu ích; nhưng khi lắp vào mạch tổng thể thì phải xét mối liên hệ động giữa các linh kiện."],
            [3, "Trong quá trình phát triển của các nền văn minh cổ đại, tri thức của con người dần vượt khỏi những kinh nghiệm riêng lẻ về sản xuất, thiên nhiên và đời sống xã hội để hình thành khả năng khái quát các mối liên hệ và quy luật chung. Việc xuất hiện triết học trong điều kiện đó phản ánh sự vận động nào của nhận thức?", "Đây là bước nhảy về chất của tư duy nhân loại (nguồn gốc nhận thức của triết học): khi vốn kinh nghiệm rời rạc đủ lớn và tư duy trừu tượng đủ sức rút ra quy luật chung nhất của vạn vật.", "Thay vì chỉ ghi nhớ từng hiện tượng nắng, mưa, lũ lụt riêng lẻ, con người cổ đại bắt đầu khái quát thành quy luật vận động của âm dương, ngũ hành hoặc bốn yếu tố đất, nước, lửa, khí."],
            [3, "Sự hình thành các trung tâm văn minh cổ đại gắn với sự phát triển của sản xuất, phân công lao động xã hội, sự phân hóa giai cấp và sự tách biệt tương đối giữa lao động trí óc với lao động chân tay. Khi phân tích điều kiện này, theo anh (chị) nhận định nào sau đây là phù hợp nhất?", "Khi sản xuất tạo ra của cải dư thừa, xã hội phân công một bộ phận chuyên làm lao động trí óc; chính điều kiện xã hội – lịch sử này tạo ra lực lượng chuyên nghiên cứu và khái quát lý luận triết học.", "Ở Hy Lạp cổ đại, nhờ kinh tế thủ công nghiệp và thương mại phát triển, một tầng lớp trí thức có thời gian tách khỏi lao động chân tay trực tiếp để nghiên cứu vũ trụ và xã hội."],
            [3, "Trong quá trình hoạch định chính sách phát triển, việc đánh giá một vấn đề không chỉ dựa vào dữ liệu riêng lẻ mà còn phải xác định cách nhìn tổng thể về thế giới, con người và vị trí của con người trong các quan hệ xã hội. Điều này cho thấy vai trò nào sau đây của triết học?", "Dữ liệu cụ thể chỉ cho ta các mảnh ghép rời rạc; triết học đóng vai trò khung định hướng tổng thể giúp nhà hoạch định biết đặt con người và mục tiêu phát triển vào đúng vị trí.", "Khi xây dựng chính sách chuyển đổi số quốc gia, số liệu hạ tầng mạng do ngành viễn thông cung cấp, còn triết học định hướng mục tiêu cuối cùng là phục vụ sự phát triển toàn diện của con người."],
            [4, "Việc giải thích sự phát triển xã hội chỉ bằng “ý chí của các nhà lãnh đạo” hoặc “tư tưởng của một cá nhân” mà bỏ qua điều kiện kinh tế - xã hội phản ánh hạn chế nào sau đây?", "Cách giải thích này rơi vào lập trường duy tâm lịch sử khi thổi phồng ý chí tinh thần cá nhân mà quên mất nền tảng kinh tế – vật chất mới là gốc rễ quyết định sự vận động xã hội.", "Cho rằng công cuộc Đổi mới năm 1986 ở Việt Nam thành công chỉ nhờ quyết tâm của một vài cá nhân mà bỏ qua thực trạng khủng hoảng kinh tế và đòi hỏi thực tiễn của sản xuất lúc bấy giờ."],
            [4, "Đâu là sự đối lập đúng về nguồn gốc của sự vận động và thay đổi theo hai phương pháp?", "Một bên coi sự vật như hòn bi đứng yên, chỉ lăn khi có tay người búng vào (ngoại lực); bên kia thấy sự vật tự vận động nhờ sự đấu tranh giữa các yếu tố trái ngược ngay bên trong chính nó (nội lực).", "Quả trứng nở thành con gà không phải do người ta đập vỡ vỏ từ bên ngoài (siêu hình), mà do sự phát triển và mâu thuẫn tự thân của phôi thai bên trong quả trứng (biện chứng)."],
            [5, "Trước một hiện tượng xã hội phức tạp, theo thế giới quan duy vật biện chứng anh (chị) nên lựa chọn phương án nào?", "Thế giới quan duy vật biện chứng đòi hỏi hai điều: phải bám sát điều kiện vật chất khách quan ('duy vật') và phải xem xét đa chiều trong sự liên hệ, biến đổi không ngừng ('biện chứng').", "Khi tìm hiểu nguyên nhân sinh viên ra trường khó tìm việc, cần khảo sát cả nhu cầu thị trường lao động, chương trình đào tạo của nhà trường lẫn năng lực, kỹ năng thực tế của bản thân sinh viên."],
            [5, "Từ nhận định của Ăngghen về phương pháp siêu hình là phương pháp “chỉ nhìn thấy cây mà không thấy rừng”, có thể đánh giá rằng hạn chế cơ bản nhất của phương pháp này là:", "Hình ảnh 'cây' và 'rừng' trực tiếp nói về mối quan hệ giữa cái bộ phận cá biệt với chỉnh thể liên kết rộng lớn; lỗi cốt lõi ở đây là cắt đứt sự vật khỏi mạng lưới liên hệ xung quanh nó.", "Chỉ nhìn điểm số của một môn học đơn lẻ để phán xét toàn bộ năng lực của sinh viên mà bỏ qua mối liên hệ với các kỹ năng thực hành, nghiên cứu khoa học và hoàn cảnh học tập."],
            [6, "Trong một bài tập nghiên cứu khoa học, sinh viên được yêu cầu đề xuất cách tiếp cận để nghiên cứu sự phát triển của một công nghệ mới. Phương án nào sau đây thể hiện sự sáng tạo dựa trên quan điểm biện chứng?", "Một nghiên cứu mang tính biện chứng trọn vẹn phải hội tụ đủ 3 trụ cột: đặt công nghệ trong mạng lưới liên hệ tác động qua lại, theo dõi quá trình vận động phát triển và chỉ ra mâu thuẫn nội tại thúc đẩy công nghệ đó cải tiến.", "Khi nghiên cứu công nghệ xe điện, sinh viên phân tích sự ràng buộc giữa pin, động cơ, trạm sạc, hạ tầng lưới điện, đồng thời chỉ ra mâu thuẫn giữa yêu cầu tăng quãng đường di chuyển với giảm trọng lượng pin."],
            [6, "Một nhóm sinh viên Trường Đại học Kỹ thuật Công nghiệp được yêu cầu xây dựng một mô hình nghiên cứu nhằm giải thích sự thay đổi của một hệ thống kỹ thuật theo thời gian. Nhóm đưa ra bốn thiết kế. Thiết kế nào sáng tạo và phù hợp nhất với phương pháp biện chứng?", "Thiết kế chuẩn xác nhất phải bao quát cả mối liên hệ ràng buộc giữa các bộ phận trong hệ thống lẫn cơ chế vận động bên trong (tích lũy lượng dẫn đến đổi chất và giải quyết mâu thuẫn nội tại).", "Khi mô hình hóa một dây chuyền sản xuất tự động tại TNUT, nhóm phân tích sự liên kết cảm biến – bộ điều khiển – cơ cấu chấp hành, theo dõi sự hao mòn tích lũy dẫn tới hỏng hóc (lượng – chất) và mâu thuẫn giữa tốc độ với độ chính xác."],

            // ================= CHUYÊN ĐỀ II: TRIẾT HỌC MÁC - LÊNIN VÀ VAI TRÒ TRONG ĐỜI SỐNG XÃ HỘI (1.50 - 1.95) =================
            [1, "Điền vào chỗ trống: “... là hệ thống quan điểm duy vật biện chứng về tự nhiên, xã hội và tư duy – thế giới quan và phương pháp luận khoa học, cách mạng của giai cấp công nhân, nhân dân lao động và các lực lượng xã hội tiến bộ trong nhận thức và cải tạo thế giới”.", "Đây là định nghĩa chuẩn xác về bộ môn triết học do C. Mác, Ph. Ăngghen sáng lập và V.I. Lênin phát triển, gắn liền với sứ mệnh của giai cấp công nhân.", "Toán bộ học phần BAS 123 mà sinh viên đang học chính là nghiên cứu hệ thống quan điểm duy vật biện chứng khoa học và cách mạng này."],
            [1, "Điền vào chỗ trống: “Triết học Mác – Lênin là hệ thống quan điểm ... về tự nhiên, xã hội và tư duy – thế giới quan và phương pháp luận khoa học, cách mạng của giai cấp công nhân, nhân dân lao động và các lực lượng xã hội tiến bộ trong nhận thức và cải tạo thế giới”.", "Điểm đột phá của Mác và Ăngghen là kết hợp thống nhất lập trường vật chất có trước với phương pháp tư duy liên hệ, phát triển không ngừng.", "Khác với chủ nghĩa duy vật siêu hình cũ chỉ nhìn thế giới tĩnh tại, triết học Mác – Lênin nhìn nhận tự nhiên và xã hội luôn vận động biện chứng."],
            [1, "Điền vào chỗ trống: “Triết học Mác – Lênin là hệ thống quan điểm duy vật biện chứng về tự nhiên, xã hội và tư duy – thế giới quan và phương pháp luận khoa học, cách mạng của ... và các lực lượng xã hội tiến bộ trong nhận thức và cải tạo thế giới”.", "Học thuyết này không phục vụ thiểu số bóc lột mà công khai đứng trên lập trường của những người trực tiếp lao động tạo ra của cải cho xã hội.", "C. Mác và Ph. Ăngghen xây dựng lý luận nhằm trang bị vũ khí tư tưởng cho phong trào đấu tranh giải phóng của công nhân và người lao động toàn thế giới."],
            [1, "Yếu tố nào không phải là điều kiện khách quan cho sự ra đời của triết học Mác - Lênin?", "Điều kiện khách quan là bối cảnh kinh tế, xã hội, khoa học bên ngoài tồn tại độc lập với ý muốn cá nhân; còn phẩm chất, hoạt động thực tiễn và sự chuyển biến tư tưởng của bản thân Mác – Ăngghen thuộc nhân tố chủ quan.", "Sự bùng nổ của đại công nghiệp và phong trào công nhân châu Âu thế kỷ XIX là bối cảnh khách quan, còn sự thiên tài và dấn thân của Mác – Ăngghen là nhân tố chủ quan."],
            [2, "Trong ba bộ phận cấu thành nên chủ nghĩa Mác - Lênin, bộ phận nào giữ vai trò là thế giới quan và phương pháp luận chung nhất?", "Chủ nghĩa Mác – Lênin gồm 3 bộ phận (Triết học, Kinh tế chính trị, Chủ nghĩa xã hội khoa học); trong đó bộ phận đóng vai trò nền tảng lý luận chung nhất soi đường cho hai bộ phận còn lại chính là triết học.", "Nhờ có phương pháp luận duy vật biện chứng làm nền tảng, C. Mác mới phân tích được quy luật vận động của kinh tế tư bản và chứng minh sự ra đời tất yếu của chủ nghĩa xã hội."],
            [2, "Những điều kiện và tiền đề cơ bản nào dẫn đến sự ra đời và phát triển của triết học Mác – Lênin?", "Sự ra đời của học thuyết này là kết quả hội tụ đầy đủ của 4 nhóm yếu tố: thực tiễn kinh tế – xã hội, kế thừa 3 nguồn gốc lý luận trực tiếp, thành tựu khoa học tự nhiên và nhân tố chủ quan thiên tài của các nhà sáng lập.", "Mác và Ăngghen đã kế thừa hạt nhân hợp lý trong phép biện chứng của Hêghen, chủ nghĩa duy vật của Phoiơbắc cùng các phát minh khoa học thế kỷ XIX để tạo nên bước ngoặt triết học."],
            [2, "Phát kiến vĩ đại thiên tài của Mác trong lĩnh vực triết học là:", "C. Mác có 3 phát kiến vĩ đại tương ứng với 3 bộ phận: giá trị thặng dư (kinh tế), sứ mệnh lịch sử giai cấp công nhân (CNXH khoa học), và việc giải thích quy luật phát triển xã hội trên lập trường duy vật (triết học).", "Lần đầu tiên trong lịch sử, C. Mác chứng minh được sự thay thế các chế độ xã hội là quá trình khách quan bắt nguồn từ sản xuất vật chất chứ không do ý muốn thần linh hay vua chúa."],
            [3, "Nhận định: “Triết học Mác – Lênin là cơ sở thế giới quan, phương pháp luận khoa học và cách mạng để phân tích xu hướng phát triển của xã hội” là dựa trên cơ sở nào?", "Triết học không phải chiếc đũa thần giải quyết thay từng bài toán kỹ thuật cụ thể, mà sở dĩ nó dự báo được xu hướng lớn của xã hội là vì nó nắm bắt được các quy luật vận động chung nhất của lịch sử.", "Dựa vào quy luật quan hệ sản xuất phải phù hợp với lực lượng sản xuất, triết học Mác – Lênin lý giải được xu hướng xã hội hóa sản xuất tất yếu trong thời đại công nghiệp hiện đại."],
            [3, "Ý nghĩa lịch sử to lớn của triết học Mác – Lênin là gì?", "Các hệ thống triết học trước Mác phần lớn phục vụ giai cấp thống trị hoặc dừng ở việc giải thích thế giới một cách trừu tượng; lần đầu tiên người lao động có một hệ thống lý luận khoa học của chính mình.", "Công nhân và nhân dân lao động không còn đấu tranh tự phát mù quáng mà có vũ khí lý luận khoa học soi đường để tự giải phóng mình."],
            [3, "Phát biểu nào sau đây thể hiện bản chất cách mạng của triết học Mác - Lênin?", "Như C. Mác từng tuyên bố, các nhà triết học trước đây chỉ giải thích thế giới bằng nhiều cách khác nhau, song vấn đề là cải tạo thế giới hướng tới tự do, hạnh phúc cho con người.", "Triết học Mác – Lênin trở thành kim chỉ nam cho các cuộc cách mạng giải phóng dân tộc khỏi ách thực dân và xây dựng xã hội công bằng, văn minh."],
            [3, "Trong bối cảnh Cách mạng công nghiệp lần thứ tư, một quốc gia vừa phải tiếp thu thành tựu công nghệ toàn cầu, vừa phải bảo đảm năng lực tự chủ và lợi ích quốc gia. Theo phương pháp luận của triết học Mác – Lênin, cách tiếp cận nào dưới đây, anh (chị) cho là phù hợp nhất?", "Tư duy biện chứng chống lại cả hai thái cực sai lầm: đóng cửa bảo thủ khép kín lẫn sùng bái, phụ thuộc hoàn toàn vào nước ngoài; phải lấy nội lực làm gốc kết hợp tiếp thu chọn lọc bên ngoài.", "Việt Nam vừa tự đào tạo kỹ sư công nghệ trong nước, vừa hợp tác thu hút các tập đoàn bán dẫn quốc tế chuyển giao công nghệ phù hợp với chiến lược phát triển quốc gia."],
            [3, "Đại hội Đảng lần thứ XIV xác định khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số là những động lực quan trọng của mô hình tăng trưởng mới, đồng thời nhấn mạnh phát triển kinh tế số, kinh tế xanh và kinh tế tuần hoàn. Nếu vận dụng phương pháp luận duy vật biện chứng để phân tích định hướng này, nhận định nào phù hợp nhất?", "Nguyên lý về mối liên hệ phổ biến yêu cầu không nhìn công nghệ như một yếu tố tách rời vạn năng, mà phải đặt nó trong sự gắn kết đồng bộ với con người, thể chế quản lý và bảo vệ môi trường sinh thái.", "Phát triển điện mặt trời và công nghệ số chỉ bền vững khi đi kèm quy hoạch lưới điện, chính sách tín dụng xanh, nhân lực vận hành và quy trình tái chế pin thải."],
            [3, "Qua 40 năm “Đổi mới”, Việt Nam vừa đạt được nhiều thành tựu vừa phải tiếp tục nhận diện những hạn chế, mâu thuẫn và vấn đề mới nảy sinh để điều chỉnh đường lối phát triển. Theo phương pháp luận của triết học Mác – Lênin, cách tiếp cận nào sau đây là phù hợp nhất?", "Quan điểm khách quan và toàn diện đòi hỏi nhìn thẳng vào sự thật cả hai mặt (thành công lẫn điểm nghẽn), tìm đúng nguyên nhân để tiếp tục đổi mới phù hợp với giai đoạn lịch sử mới.", "Bên cạnh việc ghi nhận tốc độ tăng trưởng kinh tế và xóa đói giảm nghèo, Đảng ta thẳng thắn chỉ ra điểm nghẽn về thể chế và năng suất lao động để tiếp tục cải cách."],
            [3, "Tại sao sinh viên cần phải học, học phần Triết học Mác - Lênin? Chọn đáp án đúng nhất trong các đáp án sau:", "Ngoài việc là học phần nền tảng theo quy định đào tạo đại học, giá trị cốt lõi của môn học là rèn luyện cho sinh viên lăng kính khoa học và phương pháp tư duy biện chứng sắc bén.", "Sinh viên kỹ thuật học triết học để biết cách phân tích hệ thống toàn diện, tìm đúng nguyên nhân gốc rễ khi thiết kế hoặc sửa chữa máy móc, tránh tư duy chủ quan phiến diện."],
            [3, "Để tiếp thu hiệu quả những tri thức của triết học nói chung và triết học Mác – Lênin nói riêng, sinh viên cần nhất điều gì?", "Triết học là sự khái quát cao nhất từ khoa học cụ thể và đời sống thực tế; nếu chỉ học vẹt thuộc lòng từng câu chữ mà thiếu vốn kiến thức nền và trải nghiệm thực tiễn thì không thể hiểu bản chất.", "Khi đã có kiến thức vật lý, toán học phổ thông và trải nghiệm thực hành phòng thí nghiệm, sinh viên sẽ dễ dàng hiểu các quy luật lượng – chất hay nguyên nhân – kết quả."],
            [3, "Học triết học và những khoa học khác cần nắm vững nguyên tắc nào?", "Lý luận sẽ trở nên khô khan, sáo rỗng nếu không được đem ra đối chiếu, kiểm nghiệm và vận dụng để giải quyết các tình huống thực tế trong học tập và cuộc sống.", "Sau khi học nguyên lý mối liên hệ phổ biến, sinh viên áp dụng ngay vào việc lập kế hoạch học tập cân đối giữa lý thuyết trên lớp, thực hành xưởng và kỹ năng mềm."],
            [3, "Trong quá trình học tập và nghiên cứu kỹ thuật tại Trường Đại học Kỹ thuật Công nghiệp, sinh viên tiếp cận đồng thời kiến thức cơ khí, điện, tự động hóa và công nghệ thông tin. Việc sử dụng triết học Mác – Lênin để khái quát mối liên hệ giữa các lĩnh vực trên thể hiện yêu cầu nào?", "Các phân ngành kỹ thuật hiện đại không tồn tại tách biệt mà đan xen, tích hợp chặt chẽ trong cùng một hệ thống thực tế; tư duy biện chứng giúp kỹ sư nhìn thấy sợi dây liên kết đó.", "Một cánh tay robot công nghiệp hoạt động chính xác đòi hỏi sự phối hợp đồng bộ giữa kết cấu cơ khí, động cơ điện, cảm biến tự động hóa và thuật toán lập trình."],
            [3, "Khi thực hiện một đề tài kỹ thuật, sinh viên thu thập số liệu thí nghiệm, kiểm tra sai số và đối chiếu với kết quả thực tế trước khi đưa ra kết luận. Cách làm này vận dụng trực tiếp quan điểm nào?", "Mọi giả thuyết hay tính toán trên giấy chỉ được công nhận là chân lý khi phù hợp với dữ liệu thực tế và vượt qua sự kiểm chứng của thực nghiệm khách quan.", "Khi thiết kế mạch ổn áp, sinh viên không chỉ mô phỏng trên phần mềm mà phải hàn mạch thật, dùng đồng hồ đo điện áp đầu ra dưới nhiều mức tải khác nhau."],
            [3, "Một nhóm sinh viên triển khai dự án kỹ thuật nhưng không khảo sát nhu cầu thực tế, chỉ lựa chọn đề tài vì “đang là xu hướng”. Theo phương pháp luận duy vật biện chứng, hạn chế chính của cách làm này là:", "Ý tưởng sáng tạo chỉ có giá trị khi xuất phát từ bài toán có thật của đời sống và phù hợp với nguồn lực hiện có; chạy theo phong trào mà bỏ qua khảo sát thực tế dễ rơi vào chủ quan.", "Nhóm sinh viên làm mô hình nhà thông minh đắt đỏ theo trào lưu nhưng không khảo sát điều kiện hạ tầng và túi tiền của người dân địa phương nên sản phẩm không thể ứng dụng."],
            [3, "Khi một thiết bị kỹ thuật liên tục phát sinh lỗi, nhóm sinh viên không chỉ thay thế linh kiện mà còn phân tích thiết kế, điều kiện vận hành, quy trình lắp ráp và dữ liệu sử dụng. Cách xử lý này vận dụng chủ yếu:", "Xem xét nhiều khâu liên quan (thiết kế, lắp ráp, môi trường) là tính toàn diện; theo dõi dữ liệu vận hành theo thời gian để tìm quy luật biến đổi của lỗi là tính phát triển.", "Động cơ điện hay bị cháy cuộn dây không chỉ do bản thân dây quấn mà có thể do điện áp lưới dao động, quá tải kéo dài hoặc tản nhiệt kém trong quá trình sử dụng."],
            [4, "Tại sao hiện nay việc bổ sung, phát triển lý luận của triết học Mác-Lênin là cấp thiết? Chọn đáp án sai trong các đáp án sau:", "Lý luận khoa học không bao giờ phát triển vì sở thích hay ý muốn chủ quan của cá nhân nhà nghiên cứu, mà luôn xuất phát từ đòi hỏi khách quan của thực tiễn thời đại mới.", "Sự bùng nổ của trí tuệ nhân tạo, toàn cầu hóa và thực tiễn công cuộc Đổi mới đặt ra những câu hỏi mới buộc lý luận phải tổng kết và phát triển để giải đáp."],
            [4, "Thực chất và ý nghĩa cuộc cách mạng trong triết học do C. Mác và Ph. Ăngghen thực hiện?", "Bước ngoặt vĩ đại của Mác và Ăngghen hội tụ cả 3 thành tựu lớn: thống nhất duy vật với biện chứng, sáng tạo ra chủ nghĩa duy vật lịch sử và biến triết học thành khoa học chân chính gắn với thực tiễn.", "Triết học không còn là lý thuyết suông tách rời cuộc sống mà trở thành công cụ khoa học để nhận thức cả tự nhiên lẫn lịch sử xã hội loài người."],
            [4, "Vai trò của triết học Mác – Lênin đối với sự nghiệp đổi mới theo định hướng xã hội chủ nghĩa ở Việt Nam?", "Ở Việt Nam, triết học Mác – Lênin giữ vai trò toàn diện: vừa là nền tảng đổi mới tư duy, vừa giúp tìm ra con đường đi lên CNXH phù hợp đặc thù nước ta và giải quyết các bài toán thực tiễn mới.", "Nhờ vận dụng phép biện chứng duy vật và chủ nghĩa duy vật lịch sử, Đảng ta đã đề ra đường lối kinh tế thị trường định hướng xã hội chủ nghĩa phù hợp thực tiễn Việt Nam."],
            [4, "Đường lối cách mạng của Đảng Cộng sản Việt Nam là sự vận dụng sáng tạo của hệ thống lý luận nào vào điều kiện thực tiễn Việt Nam?", "Nền tảng tư tưởng và kim chỉ nam cho mọi hành động của Đảng ta không chỉ có học thuyết của Mác – Lênin mà còn kết hợp chặt chẽ với di sản tư tưởng của Chủ tịch Hồ Chí Minh.", "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội của Đảng luôn khẳng định lấy chủ nghĩa Mác – Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng."],
            [4, "Trong bối cảnh toàn cầu hóa và cuộc Cách mạng công nghiệp lần thứ tư, triết học Mác – Lênin vẫn được khẳng định có vai trò quan trọng đối với sự nghiệp đổi mới ở Việt Nam. Theo anh (chị) nhận định nào dưới đây làm rõ bản chất của vai trò đó?", "Triết học không làm thay việc thiết kế chip hay viết phần mềm, mà cung cấp thế giới quan và phương pháp luận khoa học giúp nhìn rõ xu thế thời đại để hoạch định chiến lược phát triển đúng hướng.", "Phương pháp luận biện chứng giúp Việt Nam nhận diện đúng cả cơ hội lẫn thách thức của toàn cầu hóa để chủ động hội nhập quốc tế sâu rộng mà vẫn giữ vững độc lập tự chủ."],
            [4, "Công cuộc Đổi mới ở Việt Nam cho thấy việc vận dụng triết học Mác – Lênin vào thực tiễn không thể chỉ dừng ở việc lặp lại các kết luận có sẵn. Phân tích nào sau đây làm rõ nhất yêu cầu đó?", "Học thuyết Mác – Lênin là kim chỉ nam cho hành động chứ không phải giáo điều bất biến; mỗi giai đoạn lịch sử mới đòi hỏi phải khảo sát thực tiễn và bổ sung, phát triển lý luận cho phù hợp.", "Nếu chỉ lặp lại mô hình kinh tế kế hoạch hóa tập trung trước năm 1986 thì đất nước không thể thoát khỏi khủng hoảng; Đổi mới thành công chính nhờ xuất phát từ thực tiễn sinh động."],
            [4, "Trong nội dung giáo trình Triết học Mác – Lênin có viết: “Trong những năm đầu của công cuộc đổi mới, việc giải quyết vấn đề kinh tế - xã hội còn gặp không ít khó khăn do quan điểm chỉ đạo chưa thật sự thống nhất”. Vậy, nguyên nhân chủ yếu của tình trạng này là gì?", "Câu dẫn trong đề bài đã chỉ thẳng vào sự 'chưa thật sự thống nhất' về quan điểm chỉ đạo; khi kim chỉ nam lý luận nền tảng chưa đồng bộ thì hành động thực tiễn sẽ còn lúng túng.", "Giai đoạn đầu chuyển đổi cơ chế kinh tế, nhận thức về vai trò của kinh tế tư nhân hay quy luật giá trị còn nhiều ý kiến khác nhau nên chính sách ban hành chưa thật đồng bộ."],
            [4, "Điều gì phản ánh rõ nhất vai trò của triết học Mác – Lênin trong đời sống xã hội hiện nay?", "Tránh cả hai thái cực: coi triết học là vạn năng thay thế khoa học chuyên ngành hoặc coi triết học đã lỗi thời; giá trị thực sự của nó là công cụ tư duy chung kết hợp với tri thức chuyên môn.", "Khi giải quyết bài toán quy hoạch đô thị thông minh, cần kết hợp phương pháp luận toàn diện của triết học với kiến thức chuyên ngành xây dựng, giao thông và công nghệ thông tin."],
            [4, "Sự phát triển của trí tuệ nhân tạo đặt ra đồng thời những vấn đề về khoa học, lao động, đạo đức, pháp luật và tổ chức xã hội. Điều gì phản ánh đúng nhất yêu cầu phương pháp luận của triết học Mác – Lênin trong việc phân tích hiện tượng này?", "Một công nghệ tác động đa chiều như AI không thể chỉ nhìn dưới lăng kính lập trình thuần túy, mà phải phân tích trong tổng thể mối liên hệ với việc làm, đạo đức và pháp luật xã hội.", "Khi ứng dụng AI tạo sinh, bên cạnh việc tối ưu thuật toán còn phải giải quyết vấn đề bản quyền dữ liệu, đạo đức học thuật và đào tạo lại kỹ năng cho người lao động."],
            [5, "Trong điều kiện phát triển nhanh của khoa học tự nhiên, quan điểm nào nên được lựa chọn khi đánh giá về mối quan hệ giữa khoa học cụ thể và triết học?", "Triết học và khoa học cụ thể là mối quan hệ hai chiều không thể tách rời: khoa học cung cấp chất liệu thực chứng cho triết học phát triển, còn triết học cung cấp thế giới quan đúng để nhà khoa học không lạc lối.", "Khi vật lý học phát hiện ra điện tử cuối thế kỷ XIX, một số nhà khoa học thiếu phương pháp luận duy vật biện chứng đã vội kết luận 'vật chất tiêu tan', còn V.I. Lênin đã khái quát thành định nghĩa vật chất kinh điển."],
            [5, "Đánh giá nào phù hợp nhất về vai trò của ba phát minh lớn trong khoa học tự nhiên thế kỷ XIX đối với sự ra đời của triết học Mác?", "Định luật bảo toàn năng lượng, học thuyết tế bào và học thuyết tiến hóa đã đập tan quan niệm siêu hình coi giới tự nhiên tĩnh tại, tách rời, chứng minh thế giới vật chất liên hệ và chuyển hóa lẫn nhau.", "Học thuyết tế bào chứng minh thực vật và động vật đều chung cấu tạo tế bào; thuyết tiến hóa của Đacuyn chứng minh các loài biến đổi và phát triển từ thấp đến cao."],
            [5, "Đại hội XIV xác định mục tiêu tăng trưởng GDP bình quân giai đoạn 2026-2030 từ 10%/năm trở lên, đồng thời nhấn mạnh phát triển nhanh và bền vững. Theo phương pháp luận duy vật biện chứng, phương án đánh giá nào phù hợp nhất?", "Tư duy biện chứng không chạy theo con số tăng trưởng bằng mọi giá mà đặt tốc độ tăng trưởng trong sự gắn kết hữu cơ với chất lượng nguồn lực, công bằng xã hội và bảo vệ môi trường.", "Tăng trưởng GDP cao nhưng dựa trên khai thác cạn kiệt tài nguyên và gây ô nhiễm môi trường thì không bền vững; phải dựa trên đổi mới công nghệ và năng suất lao động thực chất."],
            [5, "Trong quá trình xây dựng chủ nghĩa xã hội ở Việt Nam, có nhiều định hướng chính sách được đề xuất. Từ phương pháp luận của triết học Mác – Lênin, theo anh (chị) chính sách nào nên được ưu tiên thực hiện?", "Chính sách đúng đắn phải tránh cả hai thái cực: quay lại bao cấp cứng nhắc lẫn thả nổi theo thị trường tự do thuần túy; phải gắn đổi mới tư duy lý luận với tổng kết thực tiễn nước ta.", "Việt Nam vừa phát huy quy luật cạnh tranh, cung cầu của kinh tế thị trường để thúc đẩy sản xuất, vừa dùng công cụ điều tiết của Nhà nước để bảo đảm an sinh xã hội."],
            [5, "Trong quá trình hoạch định đường lối phát triển đất nước, có rất nhiều phương án được đề xuất. Từ kiến thức đã học trong học phần Triết học Mác – Lênin, theo anh (chị) phương án nào phù hợp nhất?", "Hoạch định đường lối chiến lược đòi hỏi sự thống nhất giữa lý luận khoa học dẫn đường với việc khảo sát thực tiễn trong nước và nắm bắt xu thế thời đại quốc tế.", "Chiến lược phát triển công nghiệp bán dẫn và AI của Việt Nam được xây dựng dựa trên phương pháp luận khoa học, đánh giá đúng nguồn nhân lực trong nước và chuỗi cung ứng toàn cầu."],
            [5, "Khi đánh giá thành tựu của công cuộc Đổi mới ở Việt Nam, theo anh (chị) nhận định nào sau đây là thuyết phục nhất?", "Theo quan điểm toàn diện và phát triển, đánh giá một giai đoạn lịch sử không được phiến diện tô hồng hay phủ nhận sạch trơn, mà phải nhìn đủ cả mặt được, mặt chưa được, nguyên nhân và hướng đi tiếp theo.", "Khi tổng kết một dự án kỹ thuật lớn, nhóm nghiên cứu phải chỉ ra cả kết quả đạt được, các lỗi kỹ thuật còn tồn tại, nguyên nhân gây lỗi và phương án nâng cấp phiên bản tiếp theo."],
            [5, "Đại hội XIV của Đảng đặt đồng thời các mục tiêu về tăng trưởng, năng suất, kinh tế số, đời sống xã hội và môi trường. Điều gì phản ánh rõ nhất phương pháp luận được thể hiện trong hệ thống mục tiêu này?", "Các lĩnh vực kinh tế, công nghệ, văn hóa – xã hội và môi trường sinh thái không tách rời nhau mà là những bộ phận cấu thành một chỉnh thể thống nhất, thúc đẩy lẫn nhau phát triển.", "Kinh tế số phát triển giúp tăng năng suất lao động, tạo nguồn lực nâng cao phúc lợi xã hội và giảm phát thải ra môi trường; ngược lại môi trường xanh và nhân lực khỏe mạnh lại thúc đẩy kinh tế."],
            [5, "Có quan điểm cho rằng “lý luận Mác – Lênin phải được giữ nguyên từng luận điểm cụ thể để bảo đảm tính trung thành”. Theo anh (chị) đánh giá nào phù hợp nhất?", "Giữ nguyên từng câu chữ bất chấp hoàn cảnh lịch sử đã thay đổi chính là bệnh giáo điều; trung thành thực sự với chủ nghĩa Mác – Lênin là nắm vững bản chất cách mạng, khoa học để bổ sung và phát triển nó.", "Sinh thời, chính C. Mác và Ph. Ăngghen cũng nhiều lần bổ sung, chỉnh sửa các luận điểm trong Tuyên ngôn của Đảng Cộng sản sau khi tổng kết thực tiễn Công xã Pari năm 1871."],
            [5, "Khi đánh giá những hạn chế trong quá trình vận dụng lý luận Mác Lênin ở một số giai đoạn lịch sử, nhận định nào sau đây có tính thuyết phục nhất?", "Không thể đổ lỗi cho bản thân học thuyết khoa học khi người thực hiện hiểu sai, rập khuôn máy móc hoặc vận dụng lệch lạc so với điều kiện lịch sử thực tế.", "Một công thức vật lý hay định luật điện học hoàn toàn đúng đắn, nhưng nếu kỹ sư chọn sai thông số điều kiện biên khi tính toán thì mạch điện vẫn hỏng; lỗi nằm ở cách vận dụng chứ không phải ở định luật."],
            [6, "Trong quá trình chuyển đổi số quốc gia, nếu anh/chị là thành viên ban chỉ đạo xây dựng một hệ thống ra quyết định dựa trên dữ liệu, mô hình nào phù hợp nhất với chức năng phương pháp luận của triết học Mác – Lênin?", "Một mô hình ra quyết định biện chứng phải đi trọn vòng tròn: xuất phát từ dữ liệu khách quan -> phân tích mối liên hệ và xu hướng -> triển khai kiểm nghiệm thực tiễn -> phản hồi để điều chỉnh linh hoạt.", "Hệ thống điều tiết giao thông thông minh thu thập dữ liệu lưu lượng xe thực tế, phân tích mối liên hệ giữa các nút giao, dự báo giờ cao điểm và tự động điều chỉnh nhịp đèn tín hiệu khi có sự cố."],
            [6, "Nếu anh (chị) được giao xây dựng chương trình phát triển kỹ năng nghề nghiệp cho sinh viên học tại trường Đại học Kỹ thuật Công nghiệp, anh (chị) sẽ vận dụng quan điểm của triết học Mác – Lênin để đề xuất phương án phù hợp nhất là?", "Phương án tối ưu nhất phải khắc phục sự tách rời giữa sách vở và xưởng thực hành, đồng thời bồi dưỡng toàn diện cả chuyên môn, tư duy khoa học, kỹ năng số lẫn năng lực tự cập nhật suốt đời.", "Chương trình đào tạo kỹ sư tại TNUT kết hợp học lý thuyết nền tảng, thực hành tại xưởng cơ khí – điện tử, thực tập doanh nghiệp, sử dụng phần mềm mô phỏng AI và rèn luyện tác phong công nghiệp."],
            [6, "Nếu anh (chị) được giao xây dựng một hệ thống đánh giá tác động của công nghệ trí tuệ nhân tạo (AI) đối với xã hội, phương án nào sau đây là sáng tạo nhất?", "Vận dụng quan điểm toàn diện đòi hỏi bộ tiêu chí đánh giá không được thiên lệch về mỗi tốc độ kỹ thuật, mà phải bao quát cả kinh tế, lao động, giáo dục, đạo đức – quyền con người và thể chế quản lý.", "Khi thẩm định một hệ thống AI tuyển dụng nhân sự, hội đồng đánh giá cả tốc độ sàng lọc hồ sơ, tính công bằng không phân biệt đối xử, bảo mật dữ liệu cá nhân và trách nhiệm giải trình của doanh nghiệp."],
            [6, "Nếu anh (chị) được giao xây dựng “Mô hình sinh viên kỹ thuật TNUT chủ động đổi mới sáng tạo trong thời đại số”, phương án tổng thể nào nên được lựa chọn?", "Một hệ sinh thái sáng tạo bền vững cho sinh viên kỹ thuật cần kết nối chặt chẽ tư duy lý luận, chuyên môn sâu, làm việc nhóm liên ngành và chu trình thực nghiệm liên tục cải tiến.", "Sinh viên các khoa Cơ khí, Điện, Điện tử và CNTT tại TNUT lập nhóm liên ngành chế tạo robot tự hành, liên tục chạy thử nghiệm, thu thập lỗi thực tế và cải tiến thiết kế qua từng vòng."],
            [6, "Nếu được giao xây dựng một kế hoạch nâng cao năng lực đổi mới sáng tạo của sinh viên kỹ thuật, phương án nào thể hiện rõ nhất sự kế thừa và phát triển?", "Kế thừa biện chứng không phải là đập bỏ sạch trơn quá khứ hay bảo thủ giữ nguyên lối cũ, mà là gạn đục khơi trong: giữ lại hạt nhân cốt lõi còn giá trị và bổ sung phương pháp mới hiệu quả.", "Giữ vững nền tảng rèn luyện tư duy toán – lý cốt lõi và thực hành tay nghề cơ bản, đồng thời loại bỏ lối học đọc – chép thụ động để tích hợp mô phỏng số và học tập theo dự án."],
            [6, "Nếu phải thiết kế một mô hình hợp tác giữa sinh viên kỹ thuật, giảng viên và doanh nghiệp trong nghiên cứu công nghệ, phương án nào thể hiện tốt nhất sự thống nhất giữa khoa học cụ thể và triết học?", "Trong mô hình hợp tác này, triết học không làm thay phần tính toán kỹ thuật của kỹ sư, mà đóng vai trò định hướng phương pháp tư duy hệ thống kết hợp với dữ liệu thực tế và kiến thức chuyên ngành.", "Khi doanh nghiệp đặt hàng nhóm giảng viên và sinh viên giải quyết bài toán tự động hóa dây chuyền, nhóm dùng phương pháp luận toàn diện để khảo sát tổng thể nhà máy và dùng kiến thức chuyên ngành để thiết kế giải pháp."],
            [6, "Nếu là thành viên ban chỉ đạo xây dựng “TNUT xanh”, phương án tổng thể nào phù hợp nhất với tư duy duy vật biện chứng?", "Không thể chỉ hô hào khẩu hiệu suông (duy ý chí) hay chỉ mua máy móc mà bỏ qua ý thức con người; phải kết hợp đồng bộ giữa điều kiện vật chất – công nghệ, nâng cao ý thức và kiểm chứng điều chỉnh thực tế.", "Xây dựng khuôn viên TNUT xanh bằng cách lắp đặt thùng phân loại rác và hệ thống điện năng lượng mặt trời (hạ tầng – công nghệ), tuyên truyền cho sinh viên (nhận thức) và theo dõi lượng điện tiết kiệm được để điều chỉnh."],
            [6, "Nếu phải xây dựng kế hoạch giúp sinh viên kỹ thuật tham gia giải quyết các vấn đề phát triển bền vững, phương án nào là phù hợp nhất?", "Tư duy phát triển bền vững chính là hiện thân của quan điểm toàn diện và quan điểm phát triển: cân bằng hài hòa giữa tính khả thi kỹ thuật, lợi ích kinh tế, an sinh xã hội và bảo vệ môi trường lâu dài.", "Khi thiết kế hệ thống xử lý nước thải cho khu công nghiệp, sinh viên tính toán sao cho đạt chuẩn môi trường, chi phí vận hành hợp lý cho doanh nghiệp, an toàn cho người dân xung quanh và dễ nâng cấp mở rộng."]
        ]
    });

})(window);
