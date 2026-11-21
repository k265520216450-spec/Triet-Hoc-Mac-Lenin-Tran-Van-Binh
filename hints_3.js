/**
 * ============================================================================
 * FILE DỮ LIỆU & BỘ MÁY GỢI Ý ÔN TẬP ĐA CHƯƠNG (CHƯƠNG 1 - 2 - 3)
 * Tên file trên GitHub: hints_3.js (đặt cùng thư mục gốc với index.html)
 * Nội dung: Trọn bộ 265 câu Chương 3 (3.1 – 3.265) + Bảng Trùm Cuối + Modal tra cứu
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
            chapter: 3,
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
                .replace(/^(câu\s*)?\d+([.,]\d+)?\s*[:.)-]?\s*/i, '')
                .replace(/[.,;:?!'"“”‘’()[\]{}\-–—…]/g, ' ')
                .replace(/\s+/g, ' ')
                .trim();
        },

        /**
         * Phân tích số câu từ số nguyên hoặc chuỗi ("15", "3.15", "Câu 3.15")
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
                '&': '&',
                '<': '<',
                '>': '>',
                '"': '"',
                '\x27': '''
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
                            <div id="rhModalSub" style="font-size:12px;opacity:0.7;">Chương 3 • 265 câu (3.1 – 3.265)</div>
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
                                placeholder="Nhập số câu (VD: 15, 3.140) hoặc gõ từ khóa đề...">
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
        open(chapterNum = 3, numOrQuestionText = 1) {
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
    // 3. NẠP DỮ LIỆU CHƯƠNG 3 (265 CÂU: 3.1 – 3.265)
    // =========================================================================
    ReviewHints.registerChapter(3, {
        title: 'Chương 3: Chủ nghĩa duy vật lịch sử',
        prefix: '3.',
        topics: [
            { start: 1, end: 74, shortLabel: 'I. HTKT-XH (3.1–3.74)', name: 'I. Hình thái kinh tế - xã hội' },
            { start: 75, end: 139, shortLabel: 'II. Giai cấp & Dân tộc (3.75–3.139)', name: 'II. Giai cấp và dân tộc' },
            { start: 140, end: 188, shortLabel: 'III. Nhà nước & CMXH (3.140–3.188)', name: 'III. Nhà nước và cách mạng xã hội' },
            { start: 189, end: 226, shortLabel: 'IV. Ý thức xã hội (3.189–3.226)', name: 'IV. Ý thức xã hội' },
            { start: 227, end: 265, shortLabel: 'V. Con người (3.227–3.265)', name: 'V. Triết học về con người' }
        ],
        cheatSheet: [
            ['Đời sống xã hội nói chung', 'Sản xuất vật chất', '3.3, 3.31, 3.53 (Kể cả thời đại AI vẫn quyết định)'],
            ['Thời đại kinh tế & Tiến bộ XH', 'Phương thức sản xuất', '3.5, 3.175 (Không phải thể chế hay mức sống)'],
            ['Lực lượng sản xuất (LLSX)', 'Người lao động', '3.13, 3.36 (Nhân tố hàng đầu, chủ thể sáng tạo)'],
            ['Tư liệu sản xuất (TLSX)', 'Công cụ lao động', '3.15, 3.55 (Động nhất, cách mạng nhất)'],
            ['Quan hệ sản xuất (QHSX)', 'Quan hệ sở hữu TLSX', '3.17, 3.54 (Chi phối quản lý và phân phối)'],
            ['Cơ sở hạ tầng (CSHT)', 'Quan hệ sản xuất thống trị', '3.22 (CSHT = thống trị + tàn dư + mầm mống)'],
            ['Kiến trúc thượng tầng (KTTT)', 'Nhà nước', '3.23, 3.28 (Tác động mạnh nhất, biến đổi nhanh nhất)'],
            ['Thay thế các HTKT-XH', 'Sự phát triển của LLSX', '3.11, 3.29 (Động lực sâu xa: mâu thuẫn LLSX–QHSX 3.57)'],
            ['Đặc trưng của Giai cấp', 'Quan hệ sở hữu TLSX', '3.85, 3.98, 3.122 (Chi phối 3 đặc trưng còn lại)'],
            ['Đặc trưng của Dân tộc', 'Lãnh thổ và kinh tế', '3.93 (Quy định đặc trưng cộng đồng dân tộc)'],
            ['Chức năng của Nhà nước', 'Thống trị chính trị giai cấp', '3.176 (Chi phối chức năng xã hội)'],
            ['Tồn tại xã hội (TTXH)', 'Phương thức sản xuất vật chất', '3.199, 3.217 (TTXH = PTSX + Tự nhiên + Dân cư)'],
            ['Các hình thái YTXH', 'Ý thức chính trị', '3.202, 3.213, 3.221 (Chủ đạo trong XH có giai cấp)']
        ],
        questions: [
            // ================= CHUYÊN ĐỀ I: HỌC THUYẾT HÌNH THÁI KINH TẾ - XÃ HỘI (3.1 - 3.74) =================
            [1, "Sản xuất là hoạt động đặc trưng của con người và xã hội loài người, bao gồm những loại hình nào?", "Xã hội chỉ có thể duy trì và phát triển khi đồng thời tạo ra của cải vật chất để sống, giá trị tinh thần để tư duy và duy trì nòi giống con người.", "Một gia đình vừa đi làm kiếm tiền mua gạo (vật chất), vừa đọc sách nghe nhạc (tinh thần), vừa sinh con nuôi dạy thế hệ sau (bản thân con người)."],
            [1, "Hoạt động nào dưới đây KHÔNG nằm trong khái niệm sản xuất theo chủ nghĩa duy vật lịch sử?", "Sản xuất là quá trình tạo ra giá trị mới (vật chất, tinh thần hoặc con người); hành vi chỉ cất giữ của cải đã có sẵn không tạo thêm giá trị sản xuất.", "Việc thu hoạch lúa về cất vào kho dự trữ chỉ là khâu bảo quản sau thu hoạch, không phải hoạt động sản xuất."],
            [1, "Điền từ còn thiếu: '... là cơ sở của sự tồn tại và phát triển của xã hội loài người, và xét đến cùng quyết định toàn bộ sự vận động, phát triển của đời sống xã hội'?", "Con người phải ăn, mặc, ở trước khi làm chính trị, khoa học hay nghệ thuật. Hoạt động tạo ra của cải vật chất nuôi sống con người luôn giữ vai trò nền tảng.", "Một quốc gia chỉ có thể đầu tư mạnh cho giáo dục, văn hóa hay quốc phòng khi nền kinh tế tạo ra đủ lương thực, hàng hóa và hạ tầng vật chất."],
            [1, "Phương thức sản xuất bao gồm những yếu tố nào?", "Cách thức con người làm ra của cải luôn là sự thống nhất của đúng 2 mặt: năng lực tác động vào tự nhiên và quan hệ giữa người với người khi sản xuất.", "Trong một xưởng mộc, tay nghề thợ cùng máy cưa (mặt kỹ thuật) kết hợp với quan hệ giữa chủ xưởng và thợ (mặt xã hội) tạo nên cách thức sản xuất của xưởng."],
            [1, "Tiêu chuẩn quan trọng nhất để phân biệt các thời đại kinh tế trong lịch sử là gì?", "Các thời đại kinh tế khác nhau không phải ở chỗ làm ra cái gì, mà ở chỗ làm ra BẰNG CÁCH NÀO và với công cụ, quan hệ sản xuất nào.", "Thời đại nông nghiệp dùng cày trâu và quan hệ địa chủ – nông dân khác hẳn thời đại công nghiệp dùng dây chuyền máy móc và quan hệ tư bản – công nhân."],
            [1, "Yếu tố nào dưới đây KHÔNG thuộc phương thức sản xuất?", "Phạm trù cách thức làm ra của cải chỉ gói gọn trong các yếu tố trực tiếp của quá trình sản xuất (năng lực sản xuất và quan hệ kinh tế trong sản xuất), không bao gồm các quan hệ xã hội rộng bên ngoài như gia đình hay bạn bè.", "Tình bạn đồng nghiệp hay quan hệ họ hàng ngoài giờ làm việc là quan hệ xã hội nói chung, không nằm trong cấu trúc của cách thức sản xuất."],
            [1, "Phạm trù nào thể hiện mối quan hệ giữa con người với tự nhiên trong quá trình sản xuất?", "Khi con người dùng sức lao động và công cụ tác động vào giới tự nhiên để tạo ra của cải, sức mạnh thực tế ấy phản ánh năng lực chinh phục tự nhiên của xã hội.", "Người nông dân dùng máy gặt đập liên hợp thay cho liềm hái thủ công cho thấy năng lực tác động vào tự nhiên đã tăng lên vượt bậc."],
            [1, "Phạm trù nào thể hiện mối quan hệ giữa con người với con người trong quá trình sản xuất?", "Trong quá trình làm ra của cải, con người luôn phải liên kết với nhau qua việc ai nắm tư liệu sản xuất, ai quản lý và chia sản phẩm thế nào.", "Tại một công ty cổ phần, quan hệ giữa hội đồng quản trị, ban giám đốc và công nhân về quyền sở hữu, điều hành và chia lương thưởng thuộc nhóm quan hệ này."],
            [1, "Điền từ còn thiếu: Theo chủ nghĩa duy vật lịch sử, cơ sở hạ tầng là phương diện ... của xã hội.", "Trong triết học Mác – Lênin, thuật ngữ này không chỉ đường sá hay cầu cống mà chỉ toàn bộ các quan hệ sản xuất hợp thành cơ cấu nền tảng nuôi sống xã hội.", "Cơ cấu nền kinh tế nhiều thành phần ở Việt Nam hiện nay (kinh tế nhà nước, tư nhân, có vốn đầu tư nước ngoài) chính là nền tảng này."],
            [1, "Điền từ còn thiếu: Theo chủ nghĩa duy vật lịch sử, kiến trúc thượng tầng là phương diện ... của xã hội.", "Dựng lên trên nền tảng kinh tế là toàn bộ hệ thống tư tưởng (chính trị, pháp quyền, đạo đức...) cùng các thiết chế tương ứng (Nhà nước, đảng phái, tòa án...).", "Hệ thống Quốc hội, Chính phủ, Tòa án và pháp luật Việt Nam cùng tư tưởng Hồ Chí Minh hợp thành bộ máy thuộc phương diện này."],
            [1, "Nguyên nhân sâu xa của sự phát triển của các hình thái kinh tế - xã hội trong lịch sử là gì?", "Con người luôn cải tiến công cụ và nâng cao kỹ năng để làm việc năng suất hơn; chính sự lớn mạnh không ngừng của năng lực sản xuất này là gốc rễ làm thay đổi toàn bộ xã hội.", "Sự ra đời của máy hơi nước và động cơ điện làm năng suất tăng vọt, buộc xã hội phong kiến phải nhường chỗ cho xã hội công nghiệp hiện đại."],
            [2, "Mối quan hệ 'song trùng' của nền sản xuất vật chất mà C. Mác nhắc đến là quan hệ nào?", "Bất kỳ quá trình sản xuất nào cũng diễn ra đồng thời theo hai chiều: một chiều con người khai thác tự nhiên, một chiều con người hợp tác hoặc phân công với nhau.", "Khi khai thác than, thợ mỏ vừa dùng máy khoan tác động vào vỉa than (với tự nhiên), vừa phối hợp theo ca kíp giữa tổ trưởng và công nhân (với con người)."],
            [2, "Trong lực lượng sản xuất, nhân tố hàng đầu giữ vai trò quyết định là gì?", "Máy móc dù hiện đại đến đâu cũng do con người chế tạo ra và điều khiển; không có con người có trí tuệ và kỹ năng thì công cụ chỉ là sắt thép nằm im.", "Một nhà máy nhập dây chuyền robot hiện đại từ Đức nhưng nếu thiếu kỹ sư và công nhân lành nghề vận hành thì dây chuyền cũng không tạo ra sản phẩm."],
            [2, "Trong nền kinh tế Tư bản chủ nghĩa, bản chất mối quan hệ giữa người lao động với tư liệu sản xuất là gì?", "Trong chế độ tư hữu tư bản, nhà máy và máy móc thuộc về chủ tư bản, còn người thợ không có tư liệu sản xuất nên phải bán sức lao động và làm việc theo sự điều khiển của máy móc.", "Công nhân đứng dây chuyền lắp ráp ô tô chỉ thao tác lặp lại một công đoạn theo tốc độ băng chuyền của chủ doanh nghiệp chứ không sở hữu nhà máy."],
            [2, "Trong tư liệu sản xuất, yếu tố nào được coi là yếu tố động nhất, cách mạng nhất?", "Để giảm sức người và tăng năng suất, con người liên tục sáng chế, cải tiến thứ trung gian truyền tác động từ tay mình vào đối tượng lao động.", "Từ chiếc cuốc đá thời nguyên thủy tiến lên cày sắt, rồi máy cày tự hành GPS hiện nay cho thấy yếu tố này luôn biến đổi nhanh nhất."],
            [2, "Trình độ của lực lượng sản xuất thể hiện ở những mặt nào?", "Để đánh giá năng lực sản xuất của một quốc gia cao hay thấp, không chỉ nhìn vào máy móc mà phải xét tổng hợp cả con người, công cụ, cách tổ chức phân công và mức độ ứng dụng khoa học.", "Nền nông nghiệp Israel được đánh giá có trình độ cao vì kết hợp kỹ sư giỏi, công nghệ tưới nhỏ giọt tự động và quy trình quản lý chuỗi cung ứng chặt chẽ."],
            [2, "Trong quan hệ sản xuất, quan hệ nào giữ vai trò quyết định?", "Ai nắm quyền làm chủ nhà xưởng, ruộng đất, máy móc thì người đó đương nhiên có quyền quyết định cách tổ chức điều hành và cách phân chia lợi nhuận.", "Trong một doanh nghiệp tư nhân, người nắm cổ phần chi phối có quyền bổ nhiệm giám đốc điều hành và quyết định mức thưởng cuối năm cho nhân viên."],
            [2, "Sự hình thành, biến đổi và phát triển của quan hệ sản xuất bị quyết định bởi yếu tố nào?", "Quan hệ kinh tế giữa người với người (hình thức) không thể đặt ra tùy tiện mà phải biến đổi để vừa vặn với trình độ công cụ và tay nghề lao động (nội dung) hiện có.", "Khi thương mại điện tử và thanh toán số phát triển mạnh, các quy định quản lý thuế và mô hình hợp đồng lao động công nghệ buộc phải thay đổi theo."],
            [2, "Quy luật xã hội nào được coi là cơ bản nhất và giữ vai trò quyết định đối với sự vận động, phát triển của xã hội?", "Mọi biến đổi sâu xa của lịch sử loài người đều xoay quanh sự tác động qua lại giữa trình độ năng lực sản xuất vật chất với hình thức quan hệ kinh tế tương ứng.", "Công cuộc Đổi mới năm 1986 ở Việt Nam thành công chính là nhờ điều chỉnh cơ chế quản lý kinh tế cho phù hợp với trình độ sản xuất thực tế của đất nước."],
            [2, "Nếu quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất, thì kết quả là gì?", "Khi cơ chế sở hữu, quản lý và trả lương công bằng, hợp lý với trình độ lao động hiện có, người làm việc sẽ hăng hái sáng tạo và kinh tế tăng trưởng mạnh.", "Chính sách 'Khoán 10' giao quyền sử dụng ruộng đất cho hộ nông dân đã giải phóng sức lao động, giúp Việt Nam từ thiếu ăn trở thành nước xuất khẩu gạo hàng đầu."],
            [2, "Quan hệ sản xuất không phù hợp với trình độ phát triển của lực lượng sản xuất được biểu hiện ở đâu?", "Sự lệch pha xảy ra ở cả hai thái cực: cơ chế kinh tế quá cũ kỹ kìm hãm công nghệ mới, hoặc ép đẩy mô hình sở hữu lên quá cao khi trình độ lao động còn thấp, hoặc xây dựng các khâu thiếu đồng bộ.", "Thời kỳ bao cấp trước 1986 ở nước ta duy trì mô hình hợp tác xã quy mô lớn trong khi công cụ nông nghiệp còn thô sơ là ví dụ điển hình của việc đẩy quan hệ sản xuất vượt trước giả tạo."],
            [2, "Trong cơ sở hạ tầng của xã hội thì yếu tố nào giữ vai trò quyết định?", "Trong một nền kinh tế thường tồn tại đan xen cả tàn dư cũ, mầm mống mới và hình thức đang giữ địa vị thống trị; chính bộ phận thống trị này định hướng toàn bộ nền kinh tế.", "Trong nền kinh tế nhiều thành phần ở Việt Nam hiện nay, kinh tế nhà nước giữ vai trò chủ đạo cùng kinh tế tư nhân định hướng theo con đường xã hội chủ nghĩa."],
            [2, "Trong kiến trúc thượng tầng, yếu tố nào thường biến đổi nhanh khi cơ sở hạ tầng thay đổi?", "Khi cơ cấu kinh tế chuyển dịch, bộ máy nắm quyền lực công cộng và hệ thống luật pháp phải lập tức điều chỉnh để quản lý và bảo vệ trật tự kinh tế mới, trong khi tôn giáo hay phong tục đổi rất chậm.", "Ngay sau khi mở cửa kinh tế thị trường, Quốc hội Việt Nam nhanh chóng ban hành Luật Doanh nghiệp và Luật Đầu tư để điều chỉnh các quan hệ kinh tế mới."],
            [2, "Thực chất của mối quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng là gì?", "Một bên là toàn bộ cơ cấu kinh tế của xã hội, bên kia là quyền lực nhà nước, đảng phái và hệ tư tưởng chính trị; do đó bản chất của cặp phạm trù này là quan hệ giữa kinh tế và chính trị.", "Việc Nhà nước cải cách thủ tục hành chính và thuế khóa để hỗ trợ doanh nghiệp tăng trưởng thể hiện sự tác động qua lại giữa chính trị và kinh tế."],
            [2, "Chủ nghĩa duy vật lịch sử khẳng định cơ sở hạ tầng quyết định kiến trúc thượng tầng, bởi vì sao?", "Trong đời sống xã hội, quan hệ vật chất – kinh tế luôn là gốc sinh ra quan hệ tinh thần – chính trị; giai cấp nào nắm quyền chi phối kinh tế thì sẽ lập ra bộ máy nhà nước và pháp luật bảo vệ mình.", "Khi giai cấp tư sản nắm ưu thế kinh tế ở châu Âu, họ tất yếu tiến hành cách mạng xóa bỏ nhà nước phong kiến để lập nên nhà nước và pháp luật tư sản."],
            [2, "Kiến trúc thượng tầng tác động trở lại cơ sở hạ tầng nhằm mục đích gì?", "Bộ máy nhà nước và hệ tư tưởng không đứng ngoài kinh tế mà luôn dùng luật pháp, chính sách để bảo vệ chế độ kinh tế hiện hành, xóa bỏ tàn dư cũ và định hướng phát triển.", "Nhà nước ban hành luật chống độc quyền và ưu đãi tín dụng xanh nhằm bảo vệ môi trường cạnh tranh lành mạnh và định hướng kinh tế phát triển bền vững."],
            [2, "Yếu tố nào sau đây KHÔNG thuộc cấu trúc của hình thái kinh tế - xã hội?", "Cấu trúc một xã hội cụ thể trong lịch sử gồm đúng 3 tầng: năng lực sản xuất vật chất, quan hệ kinh tế và bộ máy chính trị – tư tưởng; các yếu tố địa lý tự nhiên nằm ở phạm trù khác.", "Khí hậu nhiệt đới hay vị trí ven biển Việt Nam là điều kiện tự nhiên của môi trường sống, không phải một tầng cấu trúc của hình thái kinh tế - xã hội."],
            [2, "Nhân tố nào trong kiến trúc thượng tầng có tác động trực tiếp nhất và mạnh mẽ nhất tới cơ sở hạ tầng kinh tế của xã hội?", "Khác với đạo đức hay nghệ thuật chỉ tác động gián tiếp qua dư luận, chỉ có một thiết chế nắm trong tay pháp luật, ngân sách, thuế khóa và bộ máy cưỡng chế để điều tiết kinh tế trực tiếp.", "Chính phủ điều chỉnh lãi suất ngân hàng và thuế xuất nhập khẩu có thể làm thay đổi ngay lập tức hoạt động sản xuất kinh doanh của hàng triệu doanh nghiệp."],
            [2, "Sự phát triển của các hình thái kinh tế - xã hội trong lịch sử do yếu tố nào quy định?", "Xã hội chuyển từ chế độ cũ lên chế độ mới văn minh hơn không phải do ý muốn chủ quan của vua chúa mà bắt nguồn từ sự lớn mạnh không ngừng của năng lực sản xuất vật chất.", "Sự bùng nổ của công nghệ thông tin, tự động hóa và kinh tế tri thức đang thúc đẩy xã hội loài người chuyển dịch lên nấc thang phát triển cao hơn."],
            [3, "Trong thực tiễn đổi mới ở Việt Nam, việc phát triển kinh tế thị trường định hướng xã hội chủ nghĩa phản ánh nguyên lý nào của học thuyết HTKT-XH?", "Do trình độ kỹ thuật và sản xuất ở nước ta còn không đồng đều (vừa có công nghệ cao, vừa có thủ công nhỏ lẻ) nên phải áp dụng nhiều hình thức sở hữu và thành phần kinh tế cho tương xứng.", "Ở Việt Nam hiện nay vừa có tập đoàn công nghệ cao, vừa có hộ kinh doanh cá thể nên cần nhiều hình thức tổ chức kinh tế cùng hoạt động."],
            [3, "Khi nghiên cứu sự phát triển của một xã hội, nhà nghiên cứu trước hết cần xem xét trình độ công cụ lao động, KH-KT và năng lực người lao động. Cách tiếp cận này dựa trên quan điểm nào?", "Muốn hiểu bản chất và trình độ phát triển của một thời đại, phải bắt đầu từ hoạt động tạo ra của cải vật chất nuôi sống xã hội chứ không phải từ lời nói hay ý muốn của người lãnh đạo.", "Các nhà khảo cổ chia lịch sử cổ đại thành thời Đồ Đá, Đồ Đồng, Đồ Sắt chính là dựa vào trình độ công cụ lao động trong sản xuất vật chất."],
            [3, "Khi phân tích sự thay thế phương thức sản xuất phong kiến bằng tư bản chủ nghĩa, yếu tố nào giữ vai trò quyết định?", "Chính sự xuất hiện của máy móc cơ khí, công trường thủ công và đội ngũ thợ kỹ thuật đã làm cho quan hệ sản xuất phong kiến chật hẹp trở nên lỗi thời và tất yếu bị thay thế.", "Khi máy dệt chạy bằng hơi nước ra đời ở Anh, các phường hội thủ công phong kiến không thể cạnh tranh nổi và buộc phải chuyển sang mô hình nhà máy công nghiệp."],
            [3, "Nếu một quốc gia phát triển khoa học - công nghệ nhưng quan hệ sản xuất không phù hợp thì hệ quả chủ yếu là gì?", "Công nghệ mới đòi hỏi cơ chế quản lý linh hoạt và phân phối minh bạch; nếu cơ chế sở hữu và quản lý vẫn cứng nhắc, lạc hậu thì công nghệ hiện đại cũng không phát huy được hiệu quả.", "Một viện nghiên cứu mua máy móc hiện đại nhưng cơ chế tài chính rườm rà, đãi ngộ cào bằng khiến nhà khoa học chán nản, máy móc đắp chiếu."],
            [3, "Chủ trương ưu tiên phát triển giáo dục, đào tạo và nâng cao chất lượng nguồn nhân lực ở Việt Nam thể hiện sự vận dụng trực tiếp quy luật nào?", "Con người lao động là nhân tố trung tâm, quyết định nhất trong năng lực sản xuất; khi trình độ người lao động tăng lên sẽ thúc đẩy đổi mới cơ chế quản lý và phân phối kinh tế.", "Đào tạo hàng chục nghìn kỹ sư vi mạch bán dẫn giúp Việt Nam thu hút các tập đoàn công nghệ lớn và hình thành các mô hình hợp tác kinh tế mới."],
            [3, "Nguyên nhân có tính quy luật chủ yếu dẫn đến sự khủng hoảng và tan rã của mô hình xã hội chủ nghĩa ở Liên Xô là gì?", "Duy trì quá lâu cơ chế kế hoạch hóa tập trung bao cấp và xóa bỏ kinh tế tư nhân một cách cứng nhắc đã kìm hãm động lực sáng tạo và làm nền sản xuất trì trệ.", "Khi sản xuất hàng hóa đòi hỏi sự năng động cao nhưng mọi chỉ tiêu giá cả, số lượng từ chiếc đinh đến đôi giày đều do bộ máy hành chính áp đặt từ trên xuống."],
            [3, "Nếu một doanh nghiệp đầu tư khoa học - công nghệ hiện đại nhưng không chú trọng đào tạo, nâng cao trình độ cho người lao động thì hệ quả chủ yếu là gì?", "Công cụ và con người phải tương xứng với nhau; thiết bị tối tân nhưng người vận hành thiếu kỹ năng thì máy móc dễ hỏng hóc và năng suất không thể đạt kỳ vọng.", "Một bệnh viện đầu tư máy chụp cộng hưởng từ thế hệ mới nhưng thiếu bác sĩ được đào tạo chuyên sâu để đọc kết quả và vận hành thiết bị."],
            [3, "Việc Việt Nam đẩy mạnh hội nhập kinh tế quốc tế và mở rộng quan hệ hợp tác với các quốc gia để phát triển kinh tế phản ánh luận điểm nào?", "Khi quy mô sản xuất vượt khỏi biên giới quốc gia và mang tính xã hội hóa cao, các quan hệ kinh tế tất yếu phải mở rộng giao thương, liên kết với thị trường thế giới.", "Ngành dệt may và điện tử Việt Nam sản xuất quy mô hàng trăm triệu sản phẩm mỗi năm nên tất yếu phải tham gia các hiệp định thương mại tự do toàn cầu."],
            [3, "Việc đẩy mạnh hiện đại hóa nông nghiệp làm năng suất lao động tăng và trình độ LLSX được nâng cao đặt ra yêu cầu gì đối với quan hệ sản xuất?", "Khi máy bay không người lái, máy gặt công suất lớn và công nghệ cao đi vào đồng ruộng, cách tổ chức sản xuất manh mún từng mảnh ruộng nhỏ lẻ không còn phù hợp nữa.", "Nông dân các tỉnh Đồng bằng sông Cửu Long liên kết lại thành 'Cánh đồng lớn' và hợp tác xã kiểu mới để máy móc hiện đại có thể hoạt động hiệu quả."],
            [3, "Việc đổi mới chương trình đào tạo đại học để đáp ứng yêu cầu phát triển nguồn nhân lực trong bối cảnh mới phản ánh nội dung nào?", "Chính sách giáo dục và đào tạo thuộc bộ máy thượng tầng chính trị – xã hội; khi được đổi mới đúng hướng, nó sẽ tác động mạnh mẽ trở lại, thúc đẩy kinh tế phát triển.", "Trường đại học cập nhật môn học Trí tuệ nhân tạo và tự động hóa giúp sinh viên ra trường làm việc ngay, nâng cao năng suất cho doanh nghiệp."],
            [3, "Một quốc gia tập trung đổi mới công nghệ, nâng cao trình độ người lao động và cải tiến công cụ sản xuất là đang tác động chủ yếu đến yếu tố nào của PTSX?", "Công nghệ, công cụ máy móc và kỹ năng con người đều là những bộ phận cấu thành năng lực chinh phục tự nhiên trong quá trình sản xuất.", "Chính phủ trợ giá cho doanh nghiệp thay thế dây chuyền thủ công bằng robot tự động và mở lớp đào tạo lại tay nghề cho công nhân."],
            [3, "Trong bối cảnh CMCN 4.0, sự phát triển của AI, công nghệ số và tự động hóa làm thay đổi phương thức lao động, công cụ sản xuất... biểu hiện sự phát triển của yếu tố nào?", "Trí tuệ nhân tạo, dữ liệu lớn và robot thông minh đóng vai trò là công cụ lao động và khoa học kỹ thuật thế hệ mới, làm tăng vọt năng lực sản xuất của con người.", "Việc ứng dụng AI để thiết kế bản vẽ kỹ thuật và điều khiển dây chuyền sản xuất giúp rút ngắn thời gian chế tạo sản phẩm từ vài tháng xuống vài ngày."],
            [3, "Một quốc gia tiến hành hoàn thiện hệ thống pháp luật, đổi mới cơ chế quản lý kinh tế và xây dựng chính sách thúc đẩy các QHSX phát triển thể hiện luận điểm nào?", "Pháp luật và chính sách quản lý của Nhà nước thuộc bộ máy chính trị – pháp lý; việc hoàn thiện chúng sẽ mở đường cho các quan hệ kinh tế vận hành thông suốt.", "Quốc hội sửa đổi Luật Đất đai và Luật Kinh doanh bất động sản giúp tháo gỡ vướng mắc pháp lý, khơi thông dòng vốn đầu tư cho thị trường."],
            [3, "Khi cơ cấu kinh tế và các quan hệ sản xuất biến đổi, kéo theo sự thay đổi của bộ máy nhà nước, hệ thống pháp luật và quan điểm chính trị. Nguyên nhân sâu xa của biến đổi trong KTTT là gì?", "Nền tảng kinh tế thay đổi trước thì bộ máy quản lý nhà nước và luật pháp phía trên sớm muộn cũng phải thay đổi theo cho phù hợp.", "Khi kinh tế số và giao dịch trực tuyến bùng nổ ở Việt Nam, Nhà nước buộc phải thành lập các cục quản lý an toàn thông tin và ban hành Luật Giao dịch điện tử."],
            [3, "Một quốc gia ban hành hệ thống pháp luật và chính sách quản lý không còn phù hợp với cơ cấu kinh tế hiện có, làm cản trở sản xuất, kinh doanh... phản ánh luận điểm nào?", "Bộ máy chính trị – pháp lý chỉ thúc đẩy kinh tế khi phản ánh đúng yêu cầu phát triển của kinh tế; nếu quy định lỗi thời, chồng chéo thì sẽ kìm hãm doanh nghiệp.", "Các thủ tục 'giấy phép con' rườm rà, lỗi thời khiến doanh nghiệp mất nhiều tháng chờ đợi, làm lỡ cơ hội kinh doanh và giảm sức cạnh tranh."],
            [3, "Việt Nam vừa phát triển nền kinh tế thị trường định hướng XHCN, vừa xây dựng hoàn thiện Nhà nước pháp quyền XHCN. Ý nghĩa phương pháp luận quan trọng nhất là gì?", "Kinh tế và chính trị gắn bó hữu cơ hai chiều nên không thể chỉ lo làm kinh tế mà bỏ mặc thể chế, cũng không thể chỉ cải cách hành chính mà thiếu nền tảng kinh tế.", "Song song với việc thu hút đầu tư phát triển khu công nghiệp, Nhà nước đẩy mạnh cải cách tư pháp, tinh gọn bộ máy hành chính để phục vụ người dân tốt hơn."],
            [3, "Nhà nước ban hành chính sách bảo tồn và phát huy giá trị văn hóa dân tộc nhằm phát triển du lịch, nâng cao đời sống nhân dân và thúc đẩy KT-XH phản ánh nội dung nào?", "Chính sách và giá trị văn hóa thuộc đời sống tinh thần – thượng tầng xã hội; khi được định hướng đúng, nó không thụ động mà trở thành động lực trực tiếp tạo ra của cải kinh tế.", "Quần thể danh thắng Tràng An (Ninh Bình) được đầu tư bảo tồn di sản văn hóa bài bản đã thu hút hàng triệu du khách, tạo nguồn thu lớn cho kinh tế địa phương."],
            [3, "Việc đổi mới tư duy lý luận, bổ sung và phát triển các quan điểm, chủ trương nhằm đáp ứng yêu cầu phát triển KT-XH phản ánh nội dung nào?", "Thực tiễn kinh tế luôn vận động không ngừng nên đường lối, tư duy lãnh đạo cũng phải thường xuyên cập nhật, đổi mới để không bị tụt hậu so với thực tế.", "Từ chỗ từng coi kinh tế tư nhân là đối tượng cải tạo, Đảng ta đã đổi mới tư duy lý luận, khẳng định kinh tế tư nhân là một động lực quan trọng của nền kinh tế."],
            [3, "“Mỗi hình thái kinh tế - xã hội có sự thống nhất giữa lực lượng sản xuất, quan hệ sản xuất và kiến trúc thượng tầng”. Ý nghĩa phương pháp luận quan trọng nhất là gì?", "Mỗi quốc gia ở từng giai đoạn có trình độ công nghệ, cơ cấu kinh tế và truyền thống chính trị riêng, nên mọi chính sách phát triển phải bám sát hoàn cảnh cụ thể của nước đó.", "Cùng chuyển sang kinh tế thị trường nhưng Việt Nam có lộ trình từng bước phù hợp với đặc điểm nông nghiệp và lịch sử của mình, khác với cách làm của các nước Đông Âu."],
            [3, "Ý kiến: “Muốn xây dựng một xã hội phát triển chỉ cần thay đổi hệ thống chính trị và pháp luật, không cần quan tâm đến trình độ phát triển của LLSX” đúng hay sai?", "Luật pháp hay thể chế chỉ là phần nổi phía trên; nếu nền sản xuất vật chất, công nghệ và tay nghề lao động bên dưới còn yếu kém thì xã hội không thể giàu mạnh.", "Một quốc gia nghèo nàn, sản xuất thủ công lạc hậu thì dù có sao chép nguyên văn bộ luật của nước phát triển cũng không thể tự nhiên trở thành nước giàu."],
            [3, "Ý nghĩa khoa học của học thuyết hình thái kinh tế - xã hội được thể hiện rõ nét nhất ở luận điểm nào?", "Học thuyết này chứng minh xã hội loài người không vận động hỗn loạn ngẫu nhiên mà tuân theo những quy luật khách quan giống như tự nhiên, thông qua hoạt động của con người.", "Dù diễn ra ở châu Âu hay châu Á, sự phát triển của công cụ sản xuất đều tất yếu dẫn tới sự thay đổi quan hệ kinh tế và tổ chức xã hội tương ứng."],
            [3, "Thực tiễn nghiên cứu và vận dụng học thuyết HTKT-XH vào quá trình phát triển của một quốc gia cần dựa trên yếu tố cơ bản nào?", "Muốn đề ra đường lối kinh tế đúng đắn, nhà lãnh đạo phải khảo sát thực tế xem trình độ công nghệ và lao động nước mình đang ở mức nào để thiết kế cơ chế quản lý vừa vặn.", "Khi công nghiệp phần mềm Việt Nam phát triển mạnh, Nhà nước ban hành cơ chế ưu đãi thuế cho khu công nghệ cao để khuyến khích lĩnh vực này bứt phá."],
            [3, "Một quốc gia áp dụng nguyên mẫu mô hình phát triển KT-XH của nước khác mà không xem xét điều kiện lịch sử, trình độ kinh tế và văn hóa của mình. Hạn chế cơ bản là gì?", "Rập khuôn máy móc mô hình nước ngoài sẽ làm cơ chế kinh tế – chính trị bị lệch pha so với trình độ sản xuất thực tế và đặc thù văn hóa của quốc gia mình.", "Một nước đang ở trình độ sản xuất nông nghiệp nhỏ lẻ nhưng lại sao chép y nguyên mô hình công nghiệp nặng tập trung của nước ngoài dẫn tới lãng phí và khủng hoảng."],
            [4, "Quan điểm: “Trong xã hội hiện đại, sự phát triển của KH-CN và tri thức đã làm cho sản xuất vật chất không còn giữ vai trò quyết định...”. Đánh giá phù hợp nhất?", "Dù trí tuệ nhân tạo hay phần mềm phát triển đến đâu, con người vẫn cần lương thực, điện năng, nhà ở và thiết bị phần cứng; khoa học chỉ phát huy sức mạnh khi biến thành công cụ sản xuất ra của cải vật chất.", "Phần mềm AI không thể tự tạo ra hạt gạo nếu không được ứng dụng vào máy nông nghiệp, hệ thống tưới tiêu và nhà máy chế biến thực phẩm."],
            [4, "Nhận định: “Sự thay đổi của phương thức sản xuất trong lịch sử chủ yếu bắt nguồn từ sự thay đổi của quan hệ sở hữu...”. Đánh giá thế nào?", "Quan hệ sở hữu chỉ là một mặt của quan hệ sản xuất; nguồn gốc sâu xa làm thay đổi toàn bộ cách thức sản xuất phải bắt đầu từ sự phát triển của công cụ, kỹ thuật và người lao động.", "Không phải tự nhiên con người thay đổi chế độ sở hữu phong kiến sang tư bản, mà vì máy móc công nghiệp ra đời đòi hỏi cách tổ chức sản xuất và sở hữu mới."],
            [4, "Nhận định nào sau đây đúng nhất về vai trò của công cụ lao động trong lực lượng sản xuất?", "Công cụ là thước đo trình độ chinh phục tự nhiên và biến đổi nhanh nhất, nhưng nó chỉ là vật vô tri nếu không có trí tuệ và bàn tay con người chế tạo, sử dụng.", "Chiếc máy in 3D công nghiệp rất hiện đại nhưng vẫn cần kỹ sư lập trình mẫu thiết kế và kiểm soát quy trình vận hành."],
            [4, "Trong bối cảnh toàn cầu hóa kinh tế, một quốc gia tiếp nhận nhanh công nghệ, vốn và phương thức quản lý mới nhưng duy trì cơ chế kinh tế không còn phù hợp. Vấn đề đặt ra là gì?", "Khi dòng vốn và công nghệ mới đẩy năng lực sản xuất lên cao, quốc gia đó buộc phải cải cách thể chế sở hữu, quản lý và phân phối để không làm tắc nghẽn sự phát triển.", "Nhiều tập đoàn công nghệ lớn vào Việt Nam đầu tư đòi hỏi Nhà nước phải hoàn thiện cơ chế thử nghiệm (sandbox) và luật dữ liệu cho phù hợp."],
            [4, "Động lực sâu xa của sự thay thế các hình thái kinh tế – xã hội trong lịch sử là gì?", "Khi năng lực sản xuất lớn mạnh vượt qua khuôn khổ của cơ chế kinh tế cũ, sự xung đột giữa cái mới năng động và cái cũ trói buộc sẽ tạo ra động lực chuyển đổi toàn bộ chế độ xã hội.", "Sự phát triển của kinh tế hàng hóa và công nghiệp ở châu Âu mâu thuẫn gay gắt với chế độ lãnh địa phong kiến cát cứ, thúc đẩy các cuộc cách mạng tư sản nổ ra."],
            [4, "Ý kiến: 'Chỉ cần thay đổi kiến trúc thượng tầng thì nền kinh tế sẽ phát triển, không phụ thuộc vào cơ sở hạ tầng.' Đánh giá đúng nhất?", "Thể chế chính trị và pháp luật chỉ đóng vai trò tác động trở lại; nếu cải cách chính trị thoát ly khỏi quy luật kinh tế và năng lực sản xuất thực tế thì kinh tế vẫn không thể phát triển.", "Ban hành nhiều luật ưu đãi đầu tư nhưng hạ tầng giao thông, điện lực và nguồn nhân lực tại địa phương yếu kém thì doanh nghiệp vẫn không thể sản xuất hiệu quả."],
            [4, "Quan điểm: 'Sự chuyển biến từ chủ nghĩa tư bản lên chủ nghĩa xã hội chủ yếu là kết quả của ý chí chính trị và cải cách thể chế.' Đánh giá phù hợp nhất?", "Một chế độ xã hội mới chỉ ra đời tất yếu khi nền sản xuất công nghiệp hiện đại đạt tính xã hội hóa cao độ, mâu thuẫn sâu sắc với chế độ chiếm hữu tư nhân cũ chứ không do ý muốn chủ quan.", "Khi sản xuất toàn cầu liên kết hàng triệu người lao động nhưng lợi nhuận tập trung vào thiểu số tập đoàn độc quyền thì yêu cầu xã hội hóa sở hữu mới nảy sinh khách quan."],
            [4, "Nhận định nào dưới đây phù hợp nhất với quan điểm của chủ nghĩa duy vật lịch sử về vai trò của chính trị đối với kinh tế?", "Kinh tế là gốc quyết định chính trị, nhưng chính trị không thụ động mà có khả năng tác động mạnh mẽ trở lại theo hướng thúc đẩy hoặc kìm hãm kinh tế.", "Đường lối ngoại giao kinh tế đúng đắn của Nhà nước giúp mở rộng thị trường xuất khẩu, tạo đà cho sản xuất trong nước tăng trưởng."],
            [4, "Ý kiến: 'Chỉ cần nắm quyền lực chính trị thì có thể tạo ra mọi biến đổi kinh tế, bất kể điều kiện kinh tế hiện có.' Đánh giá đúng nhất?", "Quyền lực chính trị không phải phép màu vạn năng; nếu dùng mệnh lệnh hành chính để áp đặt những mục tiêu kinh tế vượt quá khả năng vật chất thực tế thì sẽ dẫn tới thất bại.", "Dùng mệnh lệnh hành chính ép buộc xóa bỏ chợ tự do khi hệ thống thương nghiệp nhà nước chưa đủ hàng hóa cung ứng sẽ gây khan hiếm và rối loạn thị trường."],
            [4, "Nhận định nào giải thích đúng nhất cơ sở lý luận của những thành tựu trong công cuộc đổi mới ở Việt Nam?", "Thành tựu đổi mới của nước ta bắt nguồn từ việc từ bỏ cơ chế bao cấp cứng nhắc, thừa nhận kinh tế nhiều thành phần để cơ chế kinh tế vừa vặn với trình độ sản xuất thực tế.", "Cho phép người dân tự do thành lập doanh nghiệp tư nhân và thu hút vốn FDI đã giải phóng nguồn lực sản xuất, giúp GDP Việt Nam tăng trưởng liên tục nhiều thập kỷ."],
            [4, "Khi nghiên cứu một hình thái kinh tế - xã hội, yếu tố nào cần được xem là cơ sở để giải thích bản chất và sự vận động của nó?", "Muốn lý giải vì sao một xã hội có luật pháp, văn hóa hay chế độ chính trị như vậy, phải tìm về cách thức sản xuất vật chất cốt lõi của xã hội đó.", "Muốn hiểu chế độ đẳng cấp và lễ giáo phong kiến phương Đông, trước hết phải xét đến nền sản xuất nông nghiệp lúa nước tự cấp tự túc."],
            [5, "Trong quá trình phát triển xã hội, vì sao không thể đồng nhất sự phát triển của lực lượng sản xuất với sự phát triển của phương thức sản xuất?", "Theo quan hệ bao hàm, cách thức sản xuất là một chỉnh thể gồm hai mặt (năng lực sản xuất và quan hệ kinh tế), nên chỉ xét riêng một mặt kỹ thuật – lao động là chưa đủ.", "Một nhà máy mua thêm máy móc mới (năng lực kỹ thuật tăng) nhưng chưa thay đổi cách quản lý và trả lương (quan hệ kinh tế giữ nguyên) thì chưa phải đổi mới toàn bộ cách thức sản xuất."],
            [5, "Nhận định nào sau đây đúng nhất về vai trò quyết định của phương thức sản xuất đối với sự phát triển xã hội?", "Cách thức sản xuất vật chất quy định xu hướng vận động chung của toàn xã hội, nhưng sự chi phối đó diễn ra gián tiếp thông qua hệ thống quan hệ kinh tế, chính trị và văn hóa chứ không máy móc tức thời.", "Khi công nghiệp phát triển, lối sống gia đình đại gia đình truyền thống dần chuyển sang gia đình hạt nhân thông qua quá trình đô thị hóa và việc làm mới."],
            [5, "Sai lầm nào cần tránh khi vận dụng quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất?", "Sai lầm nguy hiểm nhất là bệnh chủ quan duy ý chí: nôn nóng thiết lập quan hệ sở hữu công hữu thuần nhất ở trình độ quá cao trong khi công cụ và tay nghề lao động còn thấp kém.", "Ép buộc nông dân vào hợp tác xã bậc cao, xóa bỏ kinh tế hộ gia đình khi công cụ sản xuất vẫn chủ yếu là cày trâu và lao động thủ công."],
            [5, "Sai lầm lý luận nào xảy ra khi tuyệt đối hóa vai trò của kiến trúc thượng tầng?", "Khi thổi phồng sức mạnh của tư tưởng, ý chí chính trị hay pháp luật lên trên điều kiện kinh tế vật chất, người ta sẽ rơi vào quan điểm duy tâm về lịch sử.", "Cho rằng chỉ cần tuyên truyền khẩu hiệu quyết tâm cao là có thể đạt năng suất vượt bậc mà không cần đầu tư máy móc hay cải thiện đời sống vật chất."],
            [5, "Khi vận dụng nguyên lý về mối quan hệ giữa cơ sở hạ tầng và kiến trúc thượng tầng để phân tích thực tiễn xã hội, quan điểm nào phù hợp nhất?", "Tư duy biện chứng đòi hỏi phải nhìn thấy cả hai chiều: kinh tế quyết định chính trị, đồng thời chính trị tác động trở lại kinh tế trong từng hoàn cảnh lịch sử cụ thể.", "Khi đánh giá sự phát triển của Singapore, cần xem xét cả vị trí kinh tế cảng biển lẫn vai trò quản trị liêm chính, hiệu quả của bộ máy nhà nước."],
            [5, "Trong việc vận dụng học thuyết hình thái kinh tế - xã hội của chủ nghĩa Mác – Lênin vào thực tiễn, sai lầm nghiêm trọng nhất là gì?", "Quy luật phát triển xã hội mang tính phổ biến nhưng cách biểu hiện ở mỗi nước lại khác nhau; biến lý luận thành công thức cứng nhắc để áp đặt cho mọi quốc gia là sai lầm giáo điều.", "Áp đặt nguyên xi mô hình công nghiệp hóa của Liên Xô vào một nước nông nghiệp nhiệt đới nhỏ bé mà không tính đến đặc điểm lịch sử – văn hóa bản địa."],
            [5, "Nhận định nào phản ánh đúng nhất vì sao quan hệ sản xuất được xem là bộ phận cốt lõi của cơ sở hạ tầng?", "Nền tảng kinh tế của một xã hội không phải là đống máy móc vô tri mà chính là hệ thống quan hệ kinh tế (sở hữu, quản lý, phân phối) gắn kết con người với nhau trong sản xuất.", "Nền tảng kinh tế tư bản chủ nghĩa được nhận diện cốt lõi qua quan hệ sở hữu tư nhân tư bản và quan hệ thuê mướn lao động làm thuê."],
            [6, "Xây dựng mô hình phát triển kinh tế - xã hội bền vững trong bối cảnh CMCN 4.0, phương án nào thể hiện đúng phương pháp luận của học thuyết HTKT-XH?", "Phát triển bền vững đòi hỏi đôi chân nhịp nhàng: vừa đẩy mạnh ứng dụng công nghệ hiện đại và nâng cao nhân lực, vừa hoàn thiện thể chế sở hữu, quản lý và phân phối tương xứng.", "Việt Nam vừa đầu tư hạ tầng trung tâm dữ liệu quốc gia, đào tạo kỹ sư AI, vừa hoàn thiện hành lang pháp lý cho kinh tế số và bảo vệ quyền sở hữu trí tuệ."],
            [6, "Trong quá trình hoàn thiện nền kinh tế thị trường định hướng XHCN ở Việt Nam, chính sách nào phản ánh đúng nhất việc vận dụng quy luật QHSX phù hợp LLSX?", "Vì trình độ sản xuất ở nước ta đa dạng nên chính sách đúng đắn là thừa nhận nhiều hình thức sở hữu và tạo điều kiện cho các thành phần kinh tế cùng bình đẳng phát triển.", "Nhà nước vừa củng cố hiệu quả doanh nghiệp nhà nước ở lĩnh vực then chốt, vừa khuyến khích kinh tế tư nhân và doanh nghiệp FDI cùng mở rộng sản xuất."],
            [6, "Dự báo xu hướng phát triển của Việt Nam đến năm 2045 theo học thuyết HTKT-XH, nhận định nào có cơ sở lý luận vững chắc nhất?", "Một hình thái xã hội chỉ phát triển vững chắc khi cả ba trụ cột (năng lực sản xuất hiện đại, quan hệ kinh tế hài hòa và thể chế chính trị – pháp luật tiên tiến) được xây dựng đồng bộ.", "Mục tiêu nước phát triển thu nhập cao năm 2045 đòi hỏi đồng thời công nghệ cao, thị trường vận hành minh bạch và Nhà nước pháp quyền hiện đại."],
            [6, "Nếu là thành viên Ban Chỉ đạo Chuyển đổi số quốc gia, mô hình nào phản ánh đúng nhất việc vận dụng học thuyết HTKT-XH vào quá trình chuyển đổi số ở Việt Nam?", "Chuyển đổi số không chỉ là mua phần mềm mà phải xuất phát từ thực tiễn Việt Nam, phát triển đồng bộ hạ tầng – nhân lực số, cơ chế kinh tế số và hành lang pháp lý số.", "Triển khai chuyển đổi số quốc gia kết hợp xây dựng hạ tầng 5G (năng lực kỹ thuật), phát triển thương mại điện tử (quan hệ kinh tế) và ban hành Luật Dữ liệu (thể chế pháp lý)."],

            // ================= CHUYÊN ĐỀ II: GIAI CẤP VÀ DÂN TỘC (3.75 - 3.139) =================
            [1, "Sự phân chia giai cấp trong xã hội bắt đầu từ hình thái kinh tế - xã hội nào?", "Thời nguyên thủy con người làm chung hưởng chung nên chưa có giai cấp; chỉ khi công cụ kim loại xuất hiện tạo của cải dư thừa và chế độ tư hữu ra đời thì xã hội có giai cấp đầu tiên mới hình thành.", "Xã hội Ai Cập, Hy Lạp và La Mã cổ đại với hai giai cấp đối lập là chủ nô và nô lệ."],
            [1, "Nguyên nhân quyết định trực tiếp của sự ra đời giai cấp trong lịch sử xã hội là gì?", "Năng suất lao động tăng tạo ra của cải dư thừa mới chỉ là điều kiện cần; chính việc một số người chiếm riêng của cải và tư liệu sản xuất làm của riêng mới trực tiếp phân chia kẻ giàu – người nghèo, kẻ thống trị – người bị trị.", "Cuối thời nguyên thủy, các tù trưởng biến ruộng đất và gia súc chung của thị tộc thành tài sản riêng, từ đó hình thành giai cấp bóc lột."],
            [1, "Cơ sở hình thành và phân chia giai cấp trong xã hội là do nguyên nhân nào?", "Sự khác biệt về địa vị giai cấp không bắt nguồn từ màu da hay trình độ học vấn mà từ việc tập đoàn người này nắm giữ riêng tư liệu sản xuất còn tập đoàn khác thì không.", "Trong xã hội phong kiến, địa chủ nắm giữ ruộng đất làm tài sản riêng nên có quyền phát canh thu tô đối với tá điền không có ruộng."],
            [1, "“Cuộc đấu tranh của quần chúng lao động bị áp bức, bóc lột chống lại giai cấp áp bức, bóc lột nhằm lật đổ ách thống trị của chúng” thuộc khái niệm nào?", "Khi mâu thuẫn lợi ích kinh tế giữa những người bị bóc lột và kẻ nắm tư liệu sản xuất không thể điều hòa, tất yếu nổ ra cuộc xung đột chính trị – xã hội giữa các giai cấp đối lập.", "Các cuộc khởi nghĩa nông dân chống lại địa chủ phong kiến hay phong trào bãi công của công nhân chống lại giới chủ tư bản."],
            [1, "Hình thức cộng đồng người nào hình thành khi xã hội bắt đầu có sự phân chia thành giai cấp?", "Cộng đồng người phát triển qua 4 nấc: hai nấc đầu dựa trên huyết thống thời nguyên thủy (chưa có giai cấp), nấc thứ ba hình thành do sự liên kết nhiều bộ lạc khi xã hội bắt đầu phân hóa giai cấp.", "Các cộng đồng cư dân cổ đại như người Hy Lạp cổ, người Giéc-manh thời kỳ chuyển từ công xã nguyên thủy sang xã hội có nhà nước."],
            [1, "Sự hình thành dân tộc phổ biến trong lịch sử gắn với xã hội nào?", "Trên bình diện phổ biến thế giới (đặc biệt ở phương Tây), nhu cầu xóa bỏ cát cứ phong kiến để lập thị trường thống nhất của phương thức sản xuất công nghiệp tư bản đã thúc đẩy sự ra đời của các quốc gia dân tộc.", "Các quốc gia dân tộc hiện đại ở Tây Âu như Anh, Pháp, Đức hình thành hoàn chỉnh gắn liền với quá trình phát triển của chủ nghĩa tư bản."],
            [1, "Điền vào chỗ trống: '... là một cộng đồng người ổn định được hình thành trong lịch sử trên cơ sở một lãnh thổ thống nhất, một ngôn ngữ thống nhất, một nền kinh tế thống nhất...'", "Đây là hình thức cộng đồng người cao nhất và ổn định nhất hiện nay, hội tụ đủ 5 yếu tố thống nhất: lãnh thổ, kinh tế, ngôn ngữ, văn hóa – tâm lý và nhà nước.", "Cộng đồng 54 anh em cùng sinh sống trên dải đất hình chữ S, dùng chung tiếng Việt làm ngôn ngữ quốc gia và chịu sự quản lý của Nhà nước Việt Nam."],
            [1, "Đặc điểm hình thành Dân tộc ở Phương Tây:", "Ở châu Âu, giai cấp tư sản đang lên cần phá bỏ hàng rào thuế quan cát cứ của lãnh chúa phong kiến để mở rộng giao thương, nên sự ra đời dân tộc gắn chặt với chủ nghĩa tư bản.", "Nước Pháp thống nhất thị trường, ngôn ngữ và lãnh thổ quốc gia thông qua cuộc Cách mạng tư sản Pháp năm 1789."],
            [1, "Đặc điểm hình thành Dân tộc ở Phương Đông:", "Khác với châu Âu, nhiều quốc gia châu Á phải sớm liên kết các bộ lạc lại để làm thủy lợi trị thủy và chống ngoại xâm nên cộng đồng dân tộc hình thành từ rất sớm trước khi có chủ nghĩa tư bản.", "Dân tộc Việt Nam và dân tộc Trung Hoa đã hình thành cộng đồng thống nhất từ thời cổ đại, hàng nghìn năm trước khi chủ nghĩa tư bản xuất hiện."],
            [2, "Đâu KHÔNG phải là đặc trưng cơ bản của một giai cấp?", "Theo định nghĩa kinh điển của V.I. Lênin, giai cấp được xác định bằng 4 dấu hiệu kinh tế (địa vị hệ thống sản xuất, sở hữu tư liệu sản xuất, vai trò quản lý và cách hưởng thụ của cải), không phân biệt theo sở thích cá nhân hay tiếng nói.", "Hai người cùng thích nghe nhạc cổ điển và nói tiếng Việt nhưng một người là chủ tập đoàn lớn, một người là công nhân làm thuê thì vẫn thuộc hai giai cấp khác nhau."],
            [2, "Trong các đặc trưng của giai cấp liệt kê dưới đây, đặc trưng nào đóng vai trò quan trọng nhất, chi phối các đặc trưng còn lại?", "Trong 4 đặc trưng kinh tế của giai cấp, quyền làm chủ tư liệu sản xuất là cái gốc: ai nắm nhà máy, ruộng đất thì người đó quyết định việc tổ chức quản lý và phần chia thu nhập.", "Chủ sở hữu nhà máy nắm quyền quyết định tuyển dụng, phân công công việc và trả lương cho người lao động."],
            [2, "Mâu thuẫn đối kháng giữa các giai cấp là do nguyên nhân nào?", "Xung đột giai cấp không phải do ghét bỏ cá nhân mà bắt nguồn từ sự đối lập không thể dung hòa về quyền lợi kinh tế cơ bản: một bên muốn tăng bóc lột, một bên đòi quyền sống và làm chủ.", "Trong nhà máy tư bản, chủ xưởng muốn kéo dài giờ làm và giữ lương thấp để tăng lợi nhuận, còn công nhân đấu tranh đòi tăng lương và giảm giờ làm."],
            [2, "Giai cấp nắm giữ quyền lực nhà nước là giai cấp nào?", "Nhà nước không bao giờ đứng trung lập; giai cấp nào nắm trong tay những tư liệu sản xuất chủ yếu của nền kinh tế thì sẽ nắm quyền chi phối bộ máy nhà nước và pháp luật.", "Trong xã hội phong kiến, giai cấp địa chủ nắm phần lớn ruộng đất nên cũng nắm giữ bộ máy quan lại triều đình."],
            [2, "Sự ra đời của giai cấp trong lịch sử có ý nghĩa như thế nào?", "Dù mang theo áp bức bóc lột, nhưng so với tình trạng mông muội, ăn lông ở lỗ thời nguyên thủy thì sự phân công lao động và ra đời giai cấp đã thúc đẩy sản xuất và văn minh nhân loại tiến lên.", "Nhờ có phân công lao động xã hội thời cổ đại mà loài người mới có điều kiện phát triển chữ viết, toán học, thiên văn học và kiến trúc vĩ đại."],
            [2, "Vai trò của đấu tranh giai cấp trong lịch sử nhân loại là gì?", "Đấu tranh giai cấp không phải là động lực duy nhất (vì gốc rễ sâu xa vẫn là phát triển kinh tế), nhưng trong xã hội có giai cấp, nó giữ vai trò là một động lực trực tiếp, quan trọng thúc đẩy xã hội tiến lên.", "Các cuộc đấu tranh của giai cấp tư sản và quần chúng nhân dân đã trực tiếp lật đổ chế độ phong kiến lạc hậu ở châu Âu, mở đường cho xã hội công nghiệp phát triển."],
            [2, "Nội dung nào dưới đây KHÔNG phải là vai trò của đấu tranh giai cấp trong xã hội có giai cấp?", "Mục tiêu thực chất của đấu tranh giai cấp là xóa bỏ quan hệ sản xuất lỗi thời để giải phóng lực lượng sản xuất và cải tạo xã hội, chứ không đơn thuần là thay đổi cá nhân người ngồi ghế lãnh đạo.", "Nếu chỉ lật đổ một ông vua này để đưa một ông vua phong kiến khác lên thay mà giữ nguyên chế độ bóc lột cũ thì chưa thực hiện được vai trò lịch sử của đấu tranh giai cấp."],
            [2, "Đấu tranh giai cấp trong thời kỳ quá độ từ CNTB lên CNXH bao gồm nội dung nào?", "Khi giai cấp công nhân đã giành được chính quyền, cuộc đấu tranh giai cấp không biến mất mà chuyển sang giai đoạn mới: vừa xây dựng kinh tế mới, vừa chống lại sự chống phá trong điều kiện và hình thức mới.", "Ở Việt Nam hiện nay, đấu tranh giai cấp thể hiện qua cuộc đấu tranh bảo vệ nền tảng tư tưởng, chống tham nhũng và ngăn chặn âm mưu 'diễn biến hòa bình'."],
            [2, "Cuộc đấu tranh giai cấp của giai cấp vô sản là gì?", "Khác với các cuộc cách mạng trước chỉ thay thế hình thức bóc lột này bằng hình thức bóc lột khác, cuộc đấu tranh của giai cấp công nhân nhằm xóa bỏ tận gốc chế độ tư hữu và mọi đối kháng giai cấp.", "Mục tiêu cuối cùng của cách mạng xã hội chủ nghĩa là xây dựng xã hội công bằng, không còn người bóc lột người nên đây cũng là cuộc đấu tranh giai cấp cuối cùng."],
            [2, "Đặc điểm nào sau đây đóng vai trò quan trọng nhất, quy định đặc trưng của cộng đồng dân tộc?", "Để một cộng đồng dân tộc tồn tại ổn định lâu dài, trước hết phải có không gian sinh tồn cố định (lãnh thổ) và sợi dây liên kết vật chất chặt chẽ nuôi sống cộng đồng (kinh tế).", "Đất liền, vùng biển, vùng trời thống nhất cùng thị trường kinh tế xuyên suốt từ Bắc vào Nam là nền tảng sống còn của dân tộc Việt Nam."],
            [2, "Nguyên nhân khách quan của đấu tranh giai cấp là gì?", "Xung đột giữa các giai cấp trên mặt trận chính trị thực chất chỉ là sự phản ánh ra bên ngoài của mâu thuẫn kinh tế bên trong: năng lực sản xuất mới bị quan hệ sản xuất cũ trói buộc.", "Khi kinh tế công thương nghiệp phát triển mạnh nhưng bị thuế khóa và đặc quyền lãnh chúa phong kiến kìm hãm, giai cấp tư sản tất yếu nổi dậy đấu tranh."],
            [2, "Chọn một phương án SAI: Theo chủ nghĩa duy vật lịch sử, nhà nước...", "Con người đã tồn tại hàng trăm nghìn năm thời nguyên thủy trong các thị tộc, bộ lạc mà hoàn toàn chưa có bộ máy nhà nước; nhà nước chỉ ra đời sau này khi xuất hiện tư hữu và mâu thuẫn giai cấp.", "Người nguyên thủy sống theo tập quán thị tộc dưới sự điều hành của tù trưởng uy tín chứ chưa có cảnh sát, nhà tù hay pháp luật nhà nước."],
            [2, "Chọn đáp án SAI về mối quan hệ giữa giai cấp, dân tộc và nhân loại:", "Trong xã hội có giai cấp, lợi ích nhân loại không tồn tại trừu tượng, tách rời hay đứng bên trên lợi ích giai cấp và dân tộc, mà luôn gắn bó biện chứng với nhau.", "Cuộc đấu tranh bảo vệ hòa bình thế giới (lợi ích nhân loại) gắn liền với cuộc đấu tranh chống chiến tranh xâm lược của các dân tộc và giai cấp tiến bộ."],
            [2, "Chọn đáp án SAI về mối quan hệ giữa giai cấp và dân tộc:", "Giai cấp và dân tộc tuy là hai phạm trù khác nhau nhưng luôn đan xen, tác động qua lại mật thiết: vấn đề giai cấp ảnh hưởng đến vận mệnh dân tộc và ngược lại.", "Trong cách mạng Việt Nam, giải phóng dân tộc khỏi ách thực dân là tiền đề để giải phóng giai cấp công nhân và nông dân khỏi áp bức."],
            [2, "Trong các đặc trưng của giai cấp thì đặc trưng nào bao trùm và chi phối các đặc trưng khác?", "Mọi sự khác biệt về địa vị xã hội, quyền điều hành sản xuất hay mức thu nhập giữa các giai cấp đều bắt nguồn từ việc ai nắm quyền sở hữu tư liệu sản xuất.", "Trong nền kinh tế tư bản, việc sở hữu vốn và nhà máy chi phối toàn bộ quyền quản lý và phân chia lợi nhuận của giới chủ."],
            [3, "Giai cấp công nhân VN có sự biến đổi mạnh mẽ về cơ cấu ngành nghề, tăng nhanh lao động trong ngành công nghệ cao phản ánh tác động của nhân tố nào?", "Khi đất nước chuyển từ kinh tế nông nghiệp sang công nghiệp hiện đại và ứng dụng công nghệ số, cơ cấu nghề nghiệp của đội ngũ công nhân tất yếu dịch chuyển theo.", "Tại các khu công nghiệp Bắc Ninh, Thái Nguyên, số lượng công nhân lắp ráp linh kiện điện tử và tự động hóa tăng nhanh thay cho lao động thủ công truyền thống."],
            [3, "Sau năm 1986, Việt Nam chuyển sang kinh tế thị trường định hướng XHCN, sự xuất hiện của tầng lớp doanh nhân bên cạnh công nhân và nông dân là minh chứng cho luận điểm nào?", "Cơ cấu kinh tế như thế nào thì sẽ sản sinh ra cơ cấu giai cấp, tầng lớp xã hội tương ứng như thế ấy; kinh tế nhiều thành phần tất yếu làm xuất hiện đội ngũ doanh nhân.", "Khi Nhà nước cho phép kinh tế tư nhân phát triển hợp pháp sau Đổi mới, hàng trăm nghìn chủ doanh nghiệp tư nhân đã hình thành và đóng góp lớn cho ngân sách."],
            [3, "Dự án 'Đường dây 500kV mạch 3 Quảng Trạch - Phố Nối' có đóng góp to lớn của kỹ sư, chuyên gia công nghệ (trí thức) phối hợp công nhân ngành điện biểu hiện nội dung nào?", "Các công trình hạ tầng hiện đại không thể hoàn thành nếu thiếu sự kết hợp giữa bộ óc thiết kế của đội ngũ trí thức và bàn tay thi công trực tiếp của giai cấp công nhân.", "Kỹ sư điện tính toán thiết kế cột thép vượt địa hình hiểm trở, còn công nhân trực tiếp kéo dây và lắp dựng trên công trường."],
            [3, "Chương trình mục tiêu quốc gia phát triển KT-XH vùng đồng bào DTTS và miền núi giai đoạn 2021 - 2030 đầu tư hạ tầng giao thông, giáo dục tại Tây Bắc, Tây Nguyên vận dụng nguyên lý nào?", "Bình đẳng dân tộc không chỉ là lời tuyên bố trên giấy mà phải thể hiện bằng việc thu hẹp khoảng cách giàu nghèo, nâng cao đời sống vật chất và tinh thần cho vùng khó khăn.", "Xây dựng đường giao thông liên xã, kéo điện lưới quốc gia và mở trường nội trú giúp đồng bào vùng cao phát triển kinh tế và học tập thuận lợi."],
            [3, "Luận điểm của Hồ Chí Minh: 'Nước độc lập mà dân không được hưởng hạnh phúc, tự do, thì độc lập cũng chẳng có nghĩa lý gì' phản ánh sự vận dụng mối quan hệ nào?", "Độc lập dân tộc chỉ thực sự trọn vẹn khi gắn liền với quyền tự do, ấm no của nhân dân lao động; giải phóng dân tộc phải đi đôi với giải phóng giai cấp và con người.", "Sau Cách mạng Tháng Tám 1945, Chủ tịch Hồ Chí Minh lập tức phát động chiến dịch diệt giặc đói, giặc dốt để nhân dân thực sự hưởng thành quả độc lập."],
            [3, "Dân tộc Việt Nam ra đời từ rất sớm (thời kỳ Văn Lang - Âu Lạc) trước khi phương thức sản xuất TBCN xuất hiện. Yếu tố thực tiễn khách quan nào quyết định tính đặc thù này?", "Điều kiện thiên nhiên khắc nghiệt ở lưu vực sông Hồng và vị trí địa chiến lược luôn bị ngoại bang nhòm ngó buộc các bộ lạc Việt cổ phải sớm đoàn kết thành một khối thống nhất.", "Để đắp đê chống lũ sông Hồng và đánh đuổi giặc Ân, giặc Tần, các bộ lạc Lạc Việt và Âu Việt đã hợp nhất thành nhà nước Văn Lang – Âu Lạc."],
            [3, "Đảng và Nhà nước khuyến khích phát triển kinh tế tư nhân, coi là một động lực quan trọng tại Đại hội XIII thực chất là vận dụng quy luật nào vào kết cấu giai cấp VN?", "Xuất phát từ trình độ sản xuất còn nhiều tầng nấc, Đảng ta điều chỉnh quan hệ sở hữu đa dạng, qua đó định hình cơ cấu xã hội gồm nhiều giai cấp, tầng lớp cùng hợp tác phát triển.", "Việc khuyến khích kinh tế tư nhân tạo điều kiện cho đội ngũ doanh nhân phát triển song hành cùng giai cấp công nhân, nông dân và trí thức."],
            [3, "Các ngày lễ hội truyền thống như Giỗ Tổ Hùng Vương, Tết Nguyên Đán được tổ chức trang trọng trên cả nước và kiều bào nước ngoài là minh chứng cho đặc trưng nào của dân tộc VN?", "Dù sinh sống ở bất kỳ đâu trên thế giới, người Việt vẫn gắn kết với nhau nhờ sợi dây tâm lý, phong tục tập quán và ý thức chung một cội nguồn tổ tiên.", "Hàng triệu người dân trong nước và kiều bào ở nước ngoài cùng hướng về Đền Hùng vào ngày mùng 10 tháng 3 âm lịch hằng năm."],
            [3, "Nhiều công nhân tại các khu công nghiệp lớn ở Thái Nguyên, Bắc Ninh, Vĩnh Phúc tích cực học ban đêm nâng cao CNTT và ngoại ngữ hướng tới giải quyết vấn đề gì?", "Trong thời đại công nghiệp hiện đại, người công nhân không chỉ làm việc bằng cơ bắp mà đang không ngừng nâng cao trình độ học vấn, kỹ năng số để làm chủ công nghệ mới.", "Công nhân học thêm tin học và tiếng Anh để có thể đọc tài liệu kỹ thuật nước ngoài và vận hành dây chuyền tự động hóa."],
            [3, "Việt Nam chủ động hợp tác với các quốc gia tiểu vùng sông Mê Công chia sẻ nguồn nước chống xâm nhập mặn ĐBSCL thể hiện sự vận dụng mối quan hệ nào?", "Bảo vệ nguồn nước ngọt cho nông dân Đồng bằng sông Cửu Long (lợi ích quốc gia – dân tộc) đồng thời góp phần bảo vệ hệ sinh thái lưu vực sông chung của khu vực và nhân loại.", "Việt Nam cùng Lào, Thái Lan, Campuchia tham gia Ủy hội sông Mê Công quốc tế để điều tiết nguồn nước bền vững cho cả vùng."],
            [3, "Một kỹ sư công nghệ tại nhà máy liên doanh FDI sở hữu cổ phần nhỏ của công ty nhưng vai trò chính vẫn trực tiếp vận hành hệ thống máy móc -> thuộc tính nào quyết định địa vị giai cấp?", "Số cổ phần nhỏ bé không giúp người kỹ sư chi phối quyền sở hữu nhà máy; nguồn sống chính của họ vẫn là bán sức lao động kỹ thuật để nhận lương nên vẫn thuộc giai cấp công nhân hiện đại.", "Một lập trình viên mua vài chục cổ phiếu ưu đãi của công ty công nghệ nhưng hằng ngày vẫn chấm công làm việc hưởng lương dưới sự quản lý của ban giám đốc."],
            [3, "Giai đoạn trước 1986 (thời Bao cấp) duy trì chế độ sở hữu toàn dân và tập thể thuần nhất, triệt tiêu kinh tế tư nhân dẫn đến hậu quả gì về mặt kết cấu giai cấp?", "Khi xóa bỏ hoàn toàn lợi ích kinh tế riêng của các tầng lớp xã hội và cào bằng phân phối, người lao động mất động lực sáng tạo, làm xã hội trở nên trì trệ, thiếu năng động.", "Thời kỳ tem phiếu bao cấp, người làm chăm chỉ cũng hưởng mức phân phối ngang người làm cầm chừng khiến năng suất lao động giảm sút nghiêm trọng."],
            [3, "Triển khai ứng dụng quản lý dân cư, tiêm chủng quốc gia (VNeID) thống nhất trên toàn lãnh thổ cho mọi công dân không phân biệt thành phần dân tộc chứng minh thuộc tính nào của dân tộc?", "Mỗi dân tộc hiện đại đều được quản lý bởi một nhà nước thống nhất và một hệ thống pháp luật chung áp dụng bình đẳng cho mọi công dân trên toàn lãnh thổ.", "Dù là người Kinh, Tày, Thái hay Khơ-me sinh sống ở bất kỳ tỉnh thành nào đều sử dụng chung một mẫu căn cước công dân và định danh điện tử VNeID."],
            [3, "Khi Việt Nam tham gia Hiệp định CPTPP, chúng ta chấp nhận tiêu chuẩn khắt khe về lao động và môi trường phản ánh việc giải quyết mối quan hệ nào?", "Hội nhập quốc tế đòi hỏi mỗi quốc gia vừa bảo vệ lợi ích chính đáng của dân tộc và người lao động trong nước, vừa tuân thủ các chuẩn mực tiến bộ chung của nhân loại.", "Doanh nghiệp xuất khẩu thủy sản Việt Nam cải thiện điều kiện làm việc cho công nhân và xử lý nước thải đạt chuẩn quốc tế để xuất hàng sang các nước CPTPP."],
            [3, "Các chính sách miễn học phí cho học sinh trường nội trú vùng cao, hỗ trợ vốn ưu đãi cho đồng bào DTTS phát triển nông nghiệp công nghệ cao hướng đến mục tiêu cốt lõi nào?", "Giữa miền núi và đồng bằng vẫn còn khoảng cách phát triển; đầu tư ưu tiên cho vùng khó khăn nhằm giúp các dân tộc có điều kiện vươn lên bình đẳng thực chất với nhau.", "Chương trình hỗ trợ giống cây dược liệu và vốn vay ưu đãi giúp đồng bào vùng cao Tây Bắc thoát nghèo, nâng cao thu nhập ngang bằng mức bình quân chung."],
            [3, "Việc xây dựng các 'Hợp tác xã nông nghiệp kiểu mới' đòi hỏi sự hợp tác giữa người nông dân, doanh nghiệp thu mua và các nhà khoa học nông nghiệp công nghệ cao có bản chất gì?", "Sự gắn kết chặt chẽ về lợi ích kinh tế giữa người trồng trọt, doanh nghiệp công nghiệp chế biến và nhà khoa học nghiên cứu giống cây trồng chính là hình thức liên minh giai cấp – tầng lớp trong thời kỳ mới.", "Nông dân trồng lúa theo quy trình kỹ thuật của kỹ sư nông nghiệp và bán toàn bộ sản phẩm cho doanh nghiệp chế biến xuất khẩu với giá cam kết."],
            [3, "Một nhóm thanh niên Việt Nam chia sẻ video clip giới thiệu trang phục áo dài và ẩm thực truyền thống lên TikTok thu hút hàng triệu lượt xem quốc tế phản ánh phương thức vận dụng nào?", "Thay vì khép kín bảo thủ, giới trẻ tận dụng công nghệ truyền thông số hiện đại để quảng bá giá trị văn hóa truyền thống của dân tộc ra toàn thế giới.", "Các video giới thiệu phở Việt Nam, áo dài và danh lam thắng cảnh bằng tiếng Anh thu hút hàng triệu du khách quốc tế tìm hiểu về văn hóa Việt."],
            [3, "Tại một số tỉnh miền núi phía Bắc, việc Nhà nước giao đất giao rừng lâu dài cho hộ gia đình đồng bào DTTS quản lý và phát triển kinh tế trang trại làm thay đổi căn bản điều gì?", "Khi quyền lợi kinh tế được gắn chặt với diện tích rừng được giao lâu dài, người dân sẽ chủ động bảo vệ rừng và đầu tư sản xuất để thoát nghèo bền vững.", "Hộ gia đình đồng bào dân tộc được cấp sổ đỏ đất rừng đã tích cực trồng quế, hồi và bảo vệ rừng đầu nguồn thay vì phá rừng làm nương rẫy."],
            [3, "Trong thời kỳ quá độ, các mâu thuẫn giữa giai cấp công nhân và giai cấp tư sản ở Việt Nam được giải quyết chủ yếu thông qua phương thức nào để bảo đảm ổn định chính trị?", "Trong nền kinh tế nhiều thành phần dưới sự quản lý của Nhà nước pháp quyền, quan hệ giữa người lao động và chủ doanh nghiệp vừa hợp tác cùng phát triển, vừa đấu tranh bảo vệ quyền lợi trong khuôn khổ luật pháp.", "Khi xảy ra tranh chấp về tiền lương và bảo hiểm tại doanh nghiệp, tổ chức công đoàn và cơ quan nhà nước đứng ra hòa giải, giải quyết dựa trên Bộ luật Lao động."],
            [3, "Việc thành lập các trường phổ thông dân tộc nội trú, bán trú tại địa bàn đặc biệt khó khăn vùng đồng bào DTTS thể hiện sự quan tâm giải quyết đặc trưng nào của dân tộc?", "Đào tạo con em đồng bào dân tộc thiểu số ngay tại địa phương giúp nâng cao mặt bằng dân trí, tạo đội ngũ cán bộ tại chỗ và giữ gìn bản sắc văn hóa cộng đồng.", "Học sinh dân tộc Mông, Dao học tại trường nội trú vừa được học kiến thức phổ thông, vừa được sinh hoạt văn hóa truyền thống và trở về xây dựng quê hương."],
            [3, "Hiện tượng một bộ phận lớn lao động nông thôn chuyển dịch ra các thành phố lớn làm việc trong các công ty, nhà máy phản ánh xu hướng thực tiễn nào?", "Khi công nghiệp và dịch vụ mở rộng, lao động từ khu vực nông nghiệp truyền thống tất yếu dịch chuyển sang khu vực công nghiệp hiện đại, làm tăng quy mô giai cấp công nhân.", "Thanh niên từ các tỉnh nông thôn ra làm công nhân tại các khu công nghiệp ở Bình Dương, Đồng Nai, Bắc Ninh."],
            [3, "Việc Việt Nam kiên quyết bảo vệ chủ quyền biên giới quốc gia, phân giới cắm mốc hoàn chỉnh với Trung Quốc, Lào, Campuchia là vận dụng thực tiễn đặc trưng nào của dân tộc?", "Lãnh thổ quốc gia là không gian sinh tồn thiêng liêng và bất khả xâm phạm của mỗi dân tộc; xác định rõ đường biên giới giúp bảo vệ vững chắc chủ quyền đất nước.", "Việc cắm cột mốc biên giới trên đất liền và xác lập đường cơ sở trên biển khẳng định chủ quyền lãnh thổ thống nhất của Việt Nam."],
            [3, "Nhiều trí thức trẻ Việt Nam học thạc sĩ, tiến sĩ tại nước ngoài tự nguyện trở về nước đầu tư khởi nghiệp công nghệ xanh, nông nghiệp tuần hoàn phản ánh điều gì?", "Sự gắn bó máu thịt với quê hương thúc đẩy đội ngũ trí thức đem tri thức hiện đại về phục vụ sự phát triển bền vững của đất nước.", "Nhiều tiến sĩ công nghệ sinh học tốt nghiệp ở Nhật Bản, châu Âu trở về Việt Nam mở trang trại nông nghiệp hữu cơ công nghệ cao."],
            [4, "Phân tích mâu thuẫn cơ bản trong định nghĩa giai cấp của V.I. Lênin dưới góc độ kinh tế: sự khác biệt về địa vị giữa các tập đoàn người được quyết định sâu xa nhất bởi yếu tố nào?", "Sở dĩ tập đoàn người này có thể chiếm đoạt thành quả lao động của tập đoàn người khác trong một chế độ kinh tế là vì họ nắm quyền sở hữu đối với những tư liệu sản xuất chủ yếu.", "Trong xã hội tư bản, chủ sở hữu nhà máy và bằng sáng chế có quyền thu lợi nhuận từ sức lao động của công nhân không có tư liệu sản xuất."],
            [4, "Sự khác biệt căn bản giữa quá trình hình thành dân tộc ở Châu Âu và tính độc đáo trong sự hình thành dân tộc Việt Nam là gì?", "Một bên hình thành muộn hơn gắn với nhu cầu mở rộng thị trường công nghiệp tư bản; một bên hình thành từ rất sớm do yêu cầu trị thủy chống thiên tai và đoàn kết chống ngoại xâm.", "Nước Đức và Ý thống nhất thành quốc gia dân tộc hiện đại vào thế kỷ XIX cùng chủ nghĩa tư bản, còn dân tộc Việt Nam hình thành từ thời Hùng Vương dựng nước."],
            [4, "Khi phân tích kết cấu xã hội - giai cấp trong thời kỳ quá độ lên CNXH ở nước ta, nhận định nào phản ánh đúng bản chất của kết cấu này?", "Vì nền kinh tế đang trong giai đoạn quá độ với nhiều hình thức sở hữu đan xen nên cơ cấu giai cấp ở nước ta không đơn nhất mà bao gồm nhiều giai cấp, tầng lớp đang biến đổi nhanh.", "Trong xã hội Việt Nam hiện nay cùng tồn tại giai cấp công nhân, nông dân, đội ngũ trí thức, doanh nhân và các tầng lớp lao động dịch vụ khác."],
            [4, "Trong bối cảnh hiện nay ở Việt Nam, yếu tố nào quyết định sứ mệnh lịch sử lãnh đạo cách mạng của giai cấp công nhân thông qua Đảng Cộng sản Việt Nam?", "Vai trò lãnh đạo của một giai cấp không quyết định bởi số lượng đông hay ít, mà bởi giai cấp đó gắn với nền sản xuất công nghiệp hiện đại nhất và có hệ tư tưởng khoa học tiên tiến dẫn đường.", "Dù số lượng nông dân đông hơn nhưng giai cấp công nhân gắn với công nghiệp hiện đại và chủ nghĩa Mác – Lênin nên giữ vai trò lãnh đạo sự nghiệp công nghiệp hóa."],
            [4, "Bản chất luận điểm của Hồ Chí Minh về mối quan hệ giữa cách mạng vô sản ở chính quốc và cách mạng giải phóng dân tộc ở thuộc địa như 'đôi cánh của một con chim' là gì?", "Hai phong trào cách mạng này có vị trí ngang hàng, hỗ trợ lẫn nhau; cách mạng ở nước thuộc địa không thụ động ngồi chờ mà có thể chủ động giành thắng lợi trước, góp phần thúc đẩy cách mạng ở chính quốc.", "Cách mạng Tháng Tám 1945 ở Việt Nam giành thắng lợi khi giai cấp công nhân ở Pháp chưa giành được chính quyền đã chứng minh tính chủ động sáng tạo này."],
            [4, "Phân tích nguồn gốc sâu xa của sự hình thành giai cấp trong lịch sử, sự phát triển của công cụ sản xuất bằng kim loại cuối thời nguyên thủy tác động thế nào đến quan hệ xã hội?", "Công cụ bằng đồng, sắt giúp con người làm ra nhiều sản phẩm hơn mức ăn hằng ngày; khi có của dư thừa và phân công lao động chuyên môn hóa, chế độ tư hữu nảy sinh và chia xã hội thành các giai cấp.", "Khi biết dùng lưỡi cày bằng sắt, từng gia đình có thể tự canh tác hiệu quả trên mảnh đất riêng và giữ lại thóc lúa dư thừa làm tài sản tư hữu."],
            [4, "Trong bối cảnh kinh tế thị trường ở nước ta hiện nay, đặc trưng 'Dân tộc là một cộng đồng thống nhất về kinh tế' được thể hiện rõ nhất qua hiện tượng nào?", "Sự thống nhất kinh tế của dân tộc thể hiện ở việc hàng hóa, vốn và lao động lưu thông tự do trên một thị trường chung cả nước, xóa bỏ tình trạng ngăn sông cấm chợ địa phương.", "Nông sản từ miền Tây Nam Bộ hay hàng công nghiệp từ miền Bắc dễ dàng vận chuyển, mua bán thông suốt trên khắp 63 tỉnh thành."],
            [4, "Khi phân tích sự tác động biện chứng giữa giai cấp và dân tộc, nhận định nào phản ánh đúng thế giới quan duy vật lịch sử?", "Giai cấp giữ vai trò lãnh đạo sẽ quyết định xu hướng phát triển của dân tộc, ngược lại việc giải quyết tốt vấn đề dân tộc sẽ tạo sức mạnh to lớn cho cuộc đấu tranh của giai cấp tiến bộ.", "Giai cấp công nhân Việt Nam lãnh đạo đã đưa dân tộc đi theo con đường độc lập gắn liền với chủ nghĩa xã hội, đồng thời tinh thần yêu nước của dân tộc tạo sức mạnh cho cách mạng."],
            [4, "Tại sao trong lịch sử, giai cấp nông dân Việt Nam là lực lượng cách mạng đông đảo và kiên quyết nhất nhưng lại không thể tự mình lãnh đạo cách mạng giải phóng dân tộc đi đến thành công?", "Do gắn với phương thức sản xuất tiểu nông manh mún, phân tán nên giai cấp nông dân không đại diện cho nền sản xuất hiện đại và không thể tự xây dựng một hệ tư tưởng khoa học độc lập.", "Các cuộc khởi nghĩa nông dân phong kiến như khởi nghĩa Tây Sơn hay Yên Thế tuy rất anh dũng nhưng cuối cùng không thể thiết lập một chế độ xã hội mới vượt qua khuôn khổ phong kiến."],
            [4, "Phân tích ý nghĩa phương pháp luận của việc nghiên cứu các hình thức cộng đồng người trong lịch sử (Thị tộc - Bộ lạc - Bộ tộc - Dân tộc). Tiến trình này chứng minh điều gì?", "Sự chuyển hóa từ những nhóm huyết thống nhỏ bé lên cộng đồng quốc gia rộng lớn là kết quả tất yếu của sự phát triển kinh tế – xã hội khách quan chứ không do cá nhân nào áp đặt.", "Khi giao thương và phân công lao động mở rộng vượt khỏi phạm vi làng xã bộ lạc, các cộng đồng người tất yếu liên kết thành bộ tộc và dân tộc thống nhất."],
            [4, "Mâu thuẫn giai cấp chủ yếu ở Việt Nam hiện nay đang được giải quyết nhằm phục vụ cho mục tiêu chiến lược nào của đất nước?", "Trong thời kỳ quá độ, việc giải quyết hài hòa lợi ích giữa các giai cấp, tầng lớp và đấu tranh chống các lực lượng cản trở đều hướng tới mục tiêu xây dựng đất nước phồn vinh, hạnh phúc.", "Mọi chính sách phát triển kinh tế – xã hội hiện nay đều nhằm hiện thực hóa mục tiêu 'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh'."],
            [5, "Đánh giá phản bác luận điệu xuyên tạc lợi dụng 'quyền tự quyết dân tộc' kích động tư tưởng ly khai, đòi thành lập 'nhà nước tự trị' tại Tây Nguyên và Tây Bắc:", "Quyền tự quyết dân tộc được đặt ra để chống áp bức ngoại bang, không phải để chia cắt một quốc gia đã thống nhất lịch sử; kích động ly khai sẽ phá vỡ khối đại đoàn kết và gây hại cho chính đồng bào.", "Các dân tộc anh em tại Tây Nguyên và Tây Bắc đã kề vai sát cánh cùng cả nước chống ngoại xâm và đang được Nhà nước đầu tư phát triển hạ tầng, giáo dục."],
            [5, "Một số học giả phương Tây cho rằng sự xuất hiện tầng lớp 'công nhân cổ trắng' (làm văn phòng, lương cao, sở hữu cổ phần) làm học thuyết giai cấp của Mác lỗi thời. Đánh giá quan điểm này?", "Địa vị giai cấp không xác định bằng việc mặc áo cổ trắng hay cổ xanh, lương cao hay thấp, mà ở chỗ họ không sở hữu tư liệu sản xuất chi phối và vẫn phải bán sức lao động cho chủ tư bản.", "Một kỹ sư phần mềm ở Thung lũng Silicon dù lương cao nhưng vẫn có thể bị tập đoàn công nghệ sa thải hàng loạt bất cứ lúc nào khi công ty cắt giảm chi phí."],
            [5, "Ý nghĩa phương pháp luận của tư tưởng Hồ Chí Minh về tính chủ động của cách mạng giải phóng dân tộc ở thuộc địa đối với công cuộc phát triển đất nước hiện nay là gì?", "Không trông chờ ỷ lại vào bên ngoài mà phải phát huy tối đa nội lực, tinh thần tự lực tự cường của dân tộc, đồng thời biết kết hợp khéo léo với xu thế tiến bộ của thời đại.", "Việt Nam chủ động tự chủ về lương thực, nâng cao năng lực công nghệ nội sinh đồng thời mở rộng hợp tác với tất cả các đối tác quốc tế."],
            [5, "Đánh giá chính sách bảo tồn tiếng nói và chữ viết của các dân tộc thiểu số tại Việt Nam (phát sóng truyền hình tiếng Êđê, Khmer, H'Mông trên VTV5):", "Đây là chính sách nhân văn bảo đảm quyền bình đẳng thực chất, tôn trọng sự đa dạng văn hóa độc đáo của từng tộc người trong ngôi nhà chung Việt Nam thống nhất.", "Kênh truyền hình VTV5 phát sóng các chương trình thời sự và văn nghệ bằng tiếng H'Mông, Êđê, Khmer giúp đồng bào vừa tiếp cận thông tin vừa giữ gìn tiếng mẹ đẻ."],
            [5, "Đánh giá quan điểm cho rằng toàn cầu hóa và hội nhập quốc tế sâu rộng sẽ làm biến mất hoàn toàn ranh giới quốc gia, bản sắc văn hóa dân tộc bị hòa tan vào văn hóa toàn cầu:", "Toàn cầu hóa làm tăng giao lưu nhưng không xóa nhòa bản sắc; trái lại, giữ được nét độc đáo văn hóa riêng mới giúp mỗi dân tộc đứng vững và có giá trị riêng khi bước ra thế giới.", "Điện ảnh Hàn Quốc hay ẩm thực Việt Nam chinh phục khán giả toàn cầu chính nhờ giữ được bản sắc văn hóa bản địa đậm nét chứ không sao chép văn hóa phương Tây."],
            [6, "Xây dựng đề án 'Phát triển nguồn nhân lực chất lượng cao phù hợp với biến đổi cơ cấu giai cấp công nhân VN trong bối cảnh chuyển đổi số toàn diện', định hướng giải pháp nào tối ưu nhất?", "Người công nhân thời đại số cần phát triển toàn diện: vừa giỏi chuyên môn kỹ thuật và kỹ năng số, vừa có kỷ luật tác phong công nghiệp và bản lĩnh chính trị vững vàng.", "Các trường cao đẳng nghề liên kết doanh nghiệp đào tạo sinh viên vừa thạo lập trình robot tự động, vừa rèn luyện kỷ luật an toàn lao động và đạo đức nghề nghiệp."],
            [6, "Giải quyết bài toán phát triển kinh tế bền vững gắn với giữ gìn bản sắc văn hóa đồng bào các DTTS vùng núi phía Bắc hiện nay, mô hình sáng tạo nào phù hợp nhất?", "Biến chính di sản văn hóa, kiến trúc và cảnh quan bản địa thành tài nguyên kinh tế do người dân trực tiếp làm chủ và hưởng lợi, với sự hỗ trợ vốn và quảng bá của Nhà nước và doanh nghiệp.", "Mô hình du lịch cộng đồng tại bản Lô Lô Chải (Hà Giang) hay bản Lác (Mai Châu) giúp đồng bào giữ nguyên nhà trình tường, trang phục truyền thống mà vẫn có thu nhập cao."],

            // ================= CHUYÊN ĐỀ III: NHÀ NƯỚC VÀ CÁCH MẠNG XÃ HỘI (3.140 - 3.188) =================
            [1, "Nguyên nhân sâu xa của sự xuất hiện nhà nước là gì?", "Xét tận gốc rễ kinh tế, bộ máy quyền lực công cộng chỉ xuất hiện khi năng lực sản xuất phát triển tạo ra của cải dư thừa tương đối, dẫn tới việc tư hữu hóa tài sản.", "Khi nông nghiệp và thủ công nghiệp tạo ra nhiều sản phẩm dư thừa, chế độ tư hữu ra đời làm nền tảng sâu xa dẫn tới sự xuất hiện nhà nước cổ đại."],
            [1, "Nguyên nhân trực tiếp của sự xuất hiện nhà nước là gì?", "Khi xã hội chia thành các giai cấp có lợi ích đối lập gay gắt đến mức không thể tự dàn xếp theo tập quán cũ, giai cấp thống trị cần một bộ máy cưỡng chế đặc biệt để giữ trật tự.", "Tại thành bang Athens cổ đại, xung đột quyết liệt giữa quý tộc chủ nô và dân nghèo buộc phải thiết lập bộ máy nhà nước có quân đội và pháp luật để trấn áp."],
            [1, "Sự ra đời và tồn tại của nhà nước là do nguyên nhân nào?", "Bộ máy quyền lực công cộng không phải do thần linh ban phát hay thỏa thuận ngẫu nhiên mà xuất hiện tất yếu khách quan bắt nguồn từ những biến đổi kinh tế (tư hữu và phân hóa giai cấp).", "Khi chế độ tư hữu xuất hiện làm tan rã công xã thị tộc, sự ra đời của nhà nước là tất yếu để quản lý xã hội có giai cấp."],
            [1, "Nguồn gốc sâu xa của cách mạng xã hội là do đâu?", "Mọi cuộc biến đổi lớn thay thế chế độ xã hội cũ đều bắt nguồn từ sự xung đột kinh tế bên trong: năng lực sản xuất mới phát triển bị quan hệ sản xuất lỗi thời kìm hãm.", "Sự phát triển của công nghiệp tư bản mâu thuẫn gay gắt với chế độ phong kiến cát cứ là gốc rễ sâu xa dẫn tới các cuộc cách mạng tư sản."],
            [1, "Nguồn gốc trực tiếp của cách mạng xã hội là do đâu?", "Mâu thuẫn kinh tế chỉ dẫn tới cách mạng bùng nổ thông qua hành động chính trị trực tiếp: cuộc đấu tranh quyết liệt giữa giai cấp bị áp bức với giai cấp thống trị lỗi thời.", "Cuộc đấu tranh của giai cấp công nhân, nông dân dưới sự lãnh đạo của Đảng chống lại ách thống trị thực dân phong kiến dẫn tới Cách mạng Tháng Tám 1945."],
            [1, "“Sự biến đổi có tính chất bước ngoặt và căn bản về chất trong mọi lĩnh vực đời sống xã hội, là phương thức thay thế HTKT-XH này bằng HTKT-XH cao hơn” được gọi là gì?", "Đây không phải là sửa chữa nhỏ lẻ bên trong một chế độ, mà là bước nhảy vọt làm thay đổi tận gốc bản chất kinh tế – chính trị để đưa xã hội lên nấc thang cao hơn.", "Cách mạng Tháng Mười Nga năm 1917 xóa bỏ chế độ tư bản địa chủ, mở ra hình thái kinh tế – xã hội xã hội chủ nghĩa đầu tiên trên thế giới."],
            [1, "Theo triết học Mác – Lênin, động lực cách mạng là gì?", "Động lực đẩy cỗ xe cách mạng tiến lên chính là những giai cấp, tầng lớp có quyền lợi thiết thân gắn chặt với sự thắng lợi của cách mạng nên họ tham gia tự giác, kiên quyết nhất.", "Trong cách mạng giải phóng dân tộc ở Việt Nam, giai cấp công nhân và giai cấp nông dân là lực lượng hăng hái, đông đảo và kiên quyết nhất."],
            [1, "Theo triết học Mác – Lênin, đối tượng của cách mạng xã hội là gì?", "Đối tượng ở đây chỉ các thế lực phản động, giai cấp thống trị lỗi thời đang cố níu giữ trật tự cũ và cản trở sự phát triển tiến bộ của xã hội nên cần phải đánh đổ.", "Trong Cách mạng Tháng Tám 1945, đế quốc xâm lược và chế độ phong kiến tay sai phản động là lực lượng mà cách mạng cần đánh đổ."],
            [2, "Theo triết học Mác – Lênin, sự ra đời và tồn tại của nhà nước nhằm mục đích gì?", "Trái với quan niệm cho rằng bộ máy công quyền đứng giữa hòa giải mọi phe phái, thực chất nó được lập ra để bảo vệ trật tự xã hội có lợi cho giai cấp nắm quyền thống trị kinh tế.", "Pháp luật của nhà nước chủ nô cổ đại công khai thừa nhận quyền mua bán và trừng phạt nô lệ để bảo vệ tài sản của giai cấp chủ nô."],
            [2, "Đáp án nào sau đây nêu đúng nhất bản chất của nhà nước?", "Bộ máy công quyền mang tính hai mặt thống nhất: vừa là công cụ bảo vệ lợi ích của giai cấp cầm quyền, vừa đóng vai trò trọng tài giữ ổn định chung cho toàn xã hội vận hành.", "Nhà nước vừa bảo vệ chế độ sở hữu hiện hành, vừa đứng ra phân xử tranh chấp dân sự, xây dựng đường sá và phòng chống dịch bệnh cho cả nước."],
            [2, "Bộ máy tổ chức quyền lực và thực thi quyền lực đặc biệt của xã hội trong điều kiện xã hội có đối kháng giai cấp là gì?", "Khác với các hội đoàn tự nguyện chỉ dùng kỷ luật nội bộ, chỉ có một thiết chế duy nhất nắm quyền lực công cộng đặc biệt có khả năng cưỡng chế bắt buộc đối với toàn dân.", "Chỉ có bộ máy công quyền mới có quyền ban hành luật bắt buộc mọi công dân tuân theo và tổ chức quân đội, cảnh sát, tòa án."],
            [2, "Đặc trưng cơ bản của nhà nước theo quan điểm của chủ nghĩa duy vật lịch sử là gì?", "Để phân biệt với tổ chức thị tộc thời nguyên thủy, bộ máy công quyền luôn có 3 dấu hiệu riêng: quản lý dân cư theo địa giới hành chính, có bộ máy cưỡng chế chuyên nghiệp và thu thuế nuôi bộ máy.", "Mọi công dân cư trú trên lãnh thổ Việt Nam đều thuộc quản lý của chính quyền địa phương, nộp thuế theo luật và chịu sự điều chỉnh của pháp luật."],
            [2, "Các chức năng cơ bản của nhà nước là gì?", "Hoạt động của bộ máy công quyền luôn chia theo hai cặp phương diện: xét về tính chất có trấn áp giai cấp và quản lý xã hội; xét về phạm vi có hoạt động trong nước và quan hệ quốc tế.", "Nhà nước vừa giữ gìn an ninh trật tự, phát triển kinh tế – giáo dục trong nước, vừa thực hiện ngoại giao và bảo vệ biên giới quốc gia."],
            [2, "Thứ tự các kiểu nhà nước tồn tại trong lịch sử xã hội là gì?", "Lịch sử nhân loại trải qua 4 chế độ xã hội có giai cấp kế tiếp nhau từ thấp đến cao, tương ứng với 4 kiểu bộ máy công quyền nối tiếp theo đúng trình tự phát triển đó.", "Từ nhà nước thời cổ đại (Hy Lạp, La Mã) -> nhà nước thời trung đại (vua chúa, lãnh chúa) -> nhà nước tư sản hiện đại -> nhà nước của nhân dân lao động."],
            [2, "Trong các kiểu nhà nước sau, nhà nước nào khác về bản chất so với các kiểu nhà nước còn lại?", "Ba kiểu bộ máy đầu tiên trong lịch sử đều là công cụ của thiểu số giai cấp bóc lột dùng để thống trị đa số nhân dân; duy nhất kiểu cuối cùng là quyền lực thuộc về đại đa số nhân dân lao động.", "Khác với nhà nước chủ nô, phong kiến hay tư sản phục vụ lợi ích thiểu số giàu có, nhà nước xã hội chủ nghĩa hoạt động vì quyền lợi của đa số nhân dân lao động."],
            [2, "Nền chuyên chính vô sản (nhà nước vô sản) có chức năng cơ bản là gì?", "Sau khi giành chính quyền, bộ máy nhà nước mới vừa phải đập tan sự phản kháng chống phá của các thế lực phản động cũ, vừa thực hiện nhiệm vụ trung tâm là tổ chức xây dựng xã hội mới công bằng.", "Nhà nước cách mạng vừa trấn áp bọn phản động bạo loạn lật đổ, vừa tập trung xây dựng kinh tế, mở trường học và bệnh viện phục vụ nhân dân."],
            [2, "Thực chất của nhà nước vô sản là gì?", "Đây là chính quyền do giai cấp công nhân lãnh đạo trên nền tảng liên minh chặt chẽ với nông dân, trí thức và các tầng lớp lao động khác nhằm bảo vệ quyền lợi của toàn thể nhân dân.", "Quốc hội Việt Nam có đại biểu đại diện cho công nhân, nông dân, trí thức, lực lượng vũ trang và các dân tộc cùng quyết định các vấn đề trọng đại của đất nước."],
            [2, "Mối quan hệ giữa chức năng đối nội và chức năng đối ngoại của nhà nước là gì?", "Hai mặt hoạt động trong nước và quốc tế của một quốc gia không tách rời nhau mà thống nhất, hỗ trợ lẫn nhau, trong đó đường lối trong nước giữ vai trò quyết định đường lối ngoại giao.", "Nền kinh tế và chính trị trong nước ổn định, phát triển vững mạnh là cơ sở giúp Việt Nam nâng cao vị thế ngoại giao trên trường quốc tế."],
            [2, "Nhà nước trong thời kỳ quá độ lên chủ nghĩa xã hội là nhà nước nào?", "Trong suốt chặng đường chuyển tiếp từ xã hội cũ lên xã hội mới khi vẫn còn tàn dư giai cấp và đấu tranh giai cấp, giai cấp công nhân phải nắm giữ quyền lực chính trị dưới hình thức nhà nước kiểu mới.", "Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam hiện nay là nhà nước kiểu mới của nhân dân lao động do giai cấp công nhân lãnh đạo trong thời kỳ quá độ."],
            [2, "Tính chất của cách mạng xã hội được xác định bởi yếu tố nào?", "Muốn biết một cuộc cách mạng mang tính chất tư sản hay vô sản, phải xem cuộc cách mạng đó nhằm giải quyết mâu thuẫn kinh tế nào và đánh đổ giai cấp thống trị nào.", "Cách mạng tư sản Pháp 1789 giải quyết mâu thuẫn giữa kinh tế tư bản với chế độ phong kiến nên mang tính chất cách mạng dân chủ tư sản."],
            [2, "Điều kiện khách quan để cách mạng xã hội diễn ra là gì?", "Cuộc biến đổi xã hội không thể nổ ra theo ý muốn chủ quan bất kỳ lúc nào, mà phải hội tụ đủ hoàn cảnh khủng hoảng kinh tế – chính trị chín muồi bên ngoài tác động tới.", "Khi giai cấp thống trị cũ suy yếu khủng hoảng trầm trọng không thể cai trị như cũ và đời sống quần chúng bị bần cùng hóa tột độ thì tình thế khách quan xuất hiện."],
            [2, "Đâu KHÔNG phải là điều kiện chủ quan để cách mạng xã hội diễn ra?", "Nhân tố chủ quan thuộc về bản thân lực lượng cách mạng (sự giác ngộ của quần chúng và năng lực lãnh đạo của Đảng); còn sự suy yếu của kẻ thù cũ là yếu tố khách quan bên ngoài.", "Sự khủng hoảng nội bộ của chính quyền thực dân – phong kiến năm 1945 là bối cảnh khách quan, còn sự chuẩn bị lực lượng của Đảng ta là nhân tố chủ quan."],
            [2, "Các phương pháp cách mạng được sử dụng trong cách mạng xã hội là gì?", "Tùy theo tương quan lực lượng và thái độ chống trả của giai cấp thống trị cũ, lực lượng cách mạng có thể dùng sức mạnh trấn áp cách mạng hoặc giành chính quyền bằng con đường hòa bình nếu điều kiện cho phép.", "Cách mạng Tháng Tám 1945 kết hợp đấu tranh chính trị quần chúng với lực lượng vũ trang giành chính quyền nhanh gọn, ít đổ máu."],
            [3, "Quyết định số 749/QĐ-TTg của Thủ tướng Chính phủ phê duyệt 'Chương trình Chuyển đổi số quốc gia đến năm 2025, định hướng đến năm 2030' là sự vận dụng chức năng nào của nhà nước?", "Ngoài việc giữ gìn an ninh trật tự, bộ máy nhà nước còn thực hiện vai trò kiến tạo hạ tầng, định hướng và tổ chức phát triển kinh tế – xã hội theo xu thế hiện đại.", "Chính phủ xây dựng cổng dịch vụ công trực tuyến và hạ tầng dữ liệu quốc gia để thúc đẩy kinh tế số và tiện ích cho người dân."],
            [3, "Việc Bộ Công an và các cơ quan hành chính triển khai Đề án 06 về dữ liệu dân cư, định danh và xác thực điện tử trực tiếp phản ánh chức năng nào của nhà nước?", "Ứng dụng công nghệ quản lý dân cư hiện đại nhằm đơn giản hóa thủ tục giấy tờ, phục vụ người dân thuận tiện và nâng cao hiệu quả quản trị xã hội.", "Người dân dùng ứng dụng VNeID để tích hợp bằng lái xe, thẻ bảo hiểm y tế và làm thủ tục hành chính tại nhà thay vì mang nhiều giấy tờ."],
            [3, "Luật Thực hiện dân chủ ở cơ sở năm 2022 với phương châm 'Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng' vận dụng nguyên lý triết học nào?", "Quyền lực của nhà nước xã hội chủ nghĩa bắt nguồn từ nhân dân; cơ chế pháp luật phải bảo đảm để người dân trực tiếp tham gia bàn bạc, giám sát và hưởng thành quả phát triển.", "Người dân ở xã, phường được trực tiếp họp bàn, biểu quyết mức đóng góp làm đường nông thôn mới và cử ban giám sát công trình."],
            [3, "Nghị quyết số 27-NQ/TW xác định xây dựng Nhà nước pháp quyền XHCN Việt Nam. Điểm nào phản ánh đúng nguyên tắc tổ chức quyền lực ở nước ta?", "Khác với mô hình chia tách đối trọng ba quyền của phương Tây, quyền lực nhà nước ở nước ta là một khối thống nhất thuộc về nhân dân, có sự phân công, phối hợp và kiểm soát giữa 3 cơ quan.", "Quốc hội lập pháp, Chính phủ hành pháp và Tòa án tư pháp phối hợp chặt chẽ dưới sự lãnh đạo của Đảng để cùng thực hiện ý chí của nhân dân."],
            [3, "Điểm khác biệt căn bản về bản chất giữa cấu trúc quyền lực trong Nhà nước pháp quyền XHCN Việt Nam với nhà nước pháp quyền tư sản ở phương Tây là gì?", "Một bên chia tách quyền lực thành 3 nhánh kiềm chế lẫn nhau để điều hòa lợi ích các tập đoàn tư bản; một bên thống nhất quyền lực dưới sự lãnh đạo của Đảng để phục vụ lợi ích chung của nhân dân.", "Ở Mỹ, Tổng thống và Quốc hội thường xuyên phủ quyết lẫn nhau theo cơ chế tam quyền phân lập; ở Việt Nam, các cơ quan nhà nước phối hợp thống nhất vì mục tiêu chung."],
            [3, "Nghị quyết Trung ương 4 nhấn mạnh đấu tranh ngăn chặn suy thoái, 'tự diễn biến', 'tự chuyển hóa' trong nội bộ cán bộ, đảng viên. Vận dụng kiến thức về 'Nhân tố chủ quan' chọn đáp án nào?", "Sự lãnh đạo của Đảng là nhân tố chủ quan quyết định thắng lợi cách mạng; nếu cán bộ thoái hóa biến chất về tư tưởng chính trị thì chính bộ máy sẽ tự suy yếu từ bên trong.", "Một số cán bộ có chức quyền sa vào tham nhũng, phai nhạt lý tưởng làm giảm niềm tin của nhân dân và gây tổn hại cho tổ chức."],
            [3, "Hiện nay, Đảng ta chủ trương xây dựng Nhà nước Việt Nam phát triển theo hướng nào?", "Đảng ta chủ trương xây dựng một bộ máy nhà nước quản lý xã hội bằng hiến pháp và pháp luật nghiêm minh, đồng thời giữ vững bản chất phục vụ nhân dân theo định hướng xã hội chủ nghĩa.", "Mọi cơ quan nhà nước và công dân đều sống và làm việc theo Hiến pháp và pháp luật nhằm bảo vệ quyền con người và công bằng xã hội."],
            [3, "Nhà nước Việt Nam thuộc hình thức nào trong các hình thức nhà nước liệt kê sau đây?", "Về hình thức chính thể, quyền lực tối cao ở nước ta thuộc về cơ quan đại diện do toàn thể nhân dân bầu ra thông qua phổ thông đầu phiếu, mang bản chất dân chủ rộng rãi của nhân dân.", "Công dân Việt Nam từ đủ 18 tuổi trở lên trực tiếp bỏ phiếu bầu đại biểu Quốc hội và Hội đồng nhân dân các cấp."],
            [3, "Bộ máy cai trị của nhà nước bao gồm những yếu tố nào?", "Để thực thi quyền lực cưỡng chế trên toàn lãnh thổ, bất kỳ nhà nước nào cũng tổ chức hai trụ cột chính: một bên là lực lượng vũ trang chuyên nghiệp và một bên là hệ thống cơ quan quản lý hành chính.", "Một bên là quân đội, công an, tòa án, nhà tù; một bên là hệ thống chính phủ, các bộ ngành và ủy ban hành chính các cấp."],
            [3, "Muốn cho cách mạng xã hội nổ ra và giành thắng lợi, ngoài tình thế cách mạng cần phải có điều kiện gì?", "Có cơ hội khách quan thuận lợi mà lực lượng cách mạng chưa sẵn sàng hoặc bỏ lỡ thời cơ thì cách mạng vẫn thất bại; thắng lợi đòi hỏi sự chín muồi của nhân tố chủ quan và sự kết hợp đúng thời điểm.", "Cách mạng Tháng Tám 1945 thành công vang dội vì Đảng ta đã chuẩn bị lực lượng suốt 15 năm và chớp đúng thời cơ Nhật đầu hàng Đồng minh."],
            [3, "Xu hướng của cách mạng xã hội trên thế giới hiện nay là gì?", "Trong bối cảnh hiện đại, các quốc gia vừa tăng cường đối thoại hợp tác giải quyết xung đột, vừa kiên quyết giữ vững độc lập tự chủ và tự lựa chọn con đường tiến bộ phù hợp với điều kiện nước mình.", "Các nước đang phát triển chủ động hội nhập kinh tế toàn cầu nhưng kiên quyết phản đối sự can thiệp áp đặt thể chế chính trị từ bên ngoài."],
            [3, "Nhiệm vụ trọng tâm của cuộc đấu tranh giai cấp trong thời kỳ quá độ lên CNXH ở Việt Nam hiện nay là gì?", "Trong điều kiện hòa bình xây dựng đất nước, nội dung trọng tâm của đấu tranh giai cấp là thực hiện thắng lợi sự nghiệp công nghiệp hóa, hiện đại hóa, phát triển kinh tế gắn với công bằng xã hội và đấu tranh chống các biểu hiện cản trở.", "Đẩy mạnh phát triển kinh tế số, xóa đói giảm nghèo bền vững song song với đấu tranh phòng chống tham nhũng, tiêu cực."],
            [3, "Tiêu chuẩn quan trọng nhất để đánh giá tiến bộ xã hội là gì?", "Một xã hội tiến bộ hơn xã hội trước trước hết phải thể hiện ở trình độ sản xuất ra của cải vật chất cao hơn, năng suất lao động vượt trội hơn và quan hệ kinh tế giải phóng con người tốt hơn.", "Xã hội công nghiệp hiện đại tiến bộ hơn xã hội phong kiến trước hết nhờ năng suất lao động tăng gấp nhiều lần và giải phóng người lao động khỏi sự lệ thuộc địa chủ."],
            [4, "Tìm đáp án SAI: Theo chủ nghĩa duy vật lịch sử, mối quan hệ giữa chức năng thống trị chính trị của giai cấp và chức năng xã hội của nhà nước là gì?", "Hai chức năng trấn áp bảo vệ chế độ và quản lý phục vụ cộng đồng luôn gắn bó hữu cơ bên trong bản chất của nhà nước chứ không phải quan hệ bề ngoài tách rời.", "Một nhà nước chỉ lo trấn áp mà bỏ mặc thủy lợi, kinh tế thì xã hội sụp đổ; ngược lại quản lý xã hội cũng nhằm ổn định trật tự của chế độ."],
            [4, "Đáp án nào KHÔNG phải là đặc trưng cơ bản của nhà nước theo quan điểm của chủ nghĩa duy vật lịch sử?", "Nhà nước là công cụ của giai cấp thống trị kinh tế nên không thể bảo đảm lợi ích ngang nhau cho toàn thể các giai cấp có lợi ích đối kháng.", "Trong xã hội tư bản, luật thuế và luật lao động luôn ưu tiên bảo vệ quyền sở hữu tài sản của giới chủ tư bản trước tiên."],
            [4, "Xu hướng phát triển của nhà nước trong chủ nghĩa cộng sản là gì?", "Vì nhà nước sinh ra do mâu thuẫn giai cấp, nên khi xã hội phát triển đến trình độ cao không còn giai cấp và đối kháng giai cấp thì bộ máy cưỡng chế giai cấp không còn lý do tồn tại nữa.", "Khi mọi người đều có ý thức tự giác cao và không còn áp bức giai cấp, các cơ quan cưỡng chế trấn áp sẽ dần nhường chỗ cho sự tự quản của cộng đồng."],
            [4, "Tại sao sử dụng phương pháp bạo lực cách mạng được coi là tất yếu trong xã hội có đối kháng giai cấp?", "Trong lịch sử, không có giai cấp thống trị lỗi thời nào tự giác nhường quyền lực và đặc quyền kinh tế của mình; chúng luôn dùng quân đội, cảnh sát để đàn áp phong trào cách mạng.", "Thực dân Pháp quay lại xâm lược Việt Nam năm 1945 buộc nhân dân ta phải cầm vũ khí kháng chiến để bảo vệ nền độc lập vừa giành được."],
            [4, "Phân tích quan hệ biện chứng giữa 'tính giai cấp' và 'tính xã hội' của Nhà nước pháp quyền XHCN Việt Nam qua Luật Bảo hiểm xã hội năm 2024 (giảm thời gian đóng tối thiểu xuống 15 năm):", "Định hướng vì quyền lợi của giai cấp công nhân và người lao động quyết định mục tiêu chính trị của đạo luật, còn chính sách an sinh rộng mở cụ thể chính là phương thức chăm lo đời sống xã hội và tạo sự ổn định chung.", "Giảm thời gian đóng bảo hiểm xuống 15 năm giúp nhiều công nhân và lao động tự do lớn tuổi có cơ hội nhận lương hưu, bảo đảm an sinh cho toàn xã hội."],
            [4, "Cuộc đảo chính quân sự lật đổ chính quyền Ngô Đình Diệm ngày 1/11/1963 chỉ ra sự khác biệt bản chất nào giữa 'đảo chính' và 'cách mạng xã hội'?", "Đảo chính chỉ là sự tranh giành quyền lực giữa các phe phái trong cùng một giai cấp thống trị nên không làm thay đổi bản chất chế độ; còn cách mạng làm thay đổi tận gốc chế độ kinh tế – xã hội.", "Sau khi lật đổ anh em Ngô Đình Diệm, chính quyền quân sự Sài Gòn vẫn là tay sai phục vụ lợi ích của đế quốc Mỹ và giai cấp tư sản mại bản."],
            [5, "Đánh giá tính khoa học và giá trị phương pháp luận của lý luận của chủ nghĩa Mác - Lênin về sự 'tiêu vong' của nhà nước trong tiến trình lịch sử nhân loại:", "Nhận định này hoàn toàn khoa học vì coi nhà nước là sản phẩm có điều kiện của lịch sử, chỉ mất đi khi những điều kiện sinh ra nó (giai cấp và đối kháng giai cấp) đã bị xóa bỏ hoàn toàn.", "Trong thời kỳ quá độ hiện nay khi giai cấp và thế lực thù địch vẫn còn thì phải củng cố nhà nước vững mạnh, không thể giải tán bộ máy công quyền sớm."],
            [5, "Trong tiến trình cải cách hành chính hiện nay, định hướng 'Xây dựng Chính phủ liêm chính, kiến tạo phát triển, hành động, phục vụ Nhân dân' được đánh giá như thế nào?", "Đây là sự vận dụng đúng đắn vai trò tích cực của bộ máy thượng tầng chính trị: chủ động tháo gỡ rào cản thủ tục để mở đường cho nền kinh tế phát triển mạnh mẽ.", "Chính phủ cắt giảm hàng nghìn điều kiện kinh doanh rườm rà và số hóa thủ tục hành chính giúp doanh nghiệp tiết kiệm chi phí và thời gian."],
            [5, "Các thế lực thù địch tuyên truyền luận điệu đòi 'phi chính trị hóa lực lượng vũ trang' (quân đội, công an trung lập, ngoài chính trị). Đứng trên lập trường bản chất giai cấp của nhà nước, phản bác thế nào?", "Không có quân đội hay cảnh sát nào đứng ngoài chính trị; luận điệu này thực chất nhằm làm suy yếu sự lãnh đạo của Đảng, tước bỏ công cụ bảo vệ chế độ và nhân dân.", "Ở mọi quốc gia trên thế giới, quân đội và cảnh sát đều đặt dưới sự chỉ huy tối cao của nhà nước cầm quyền để bảo vệ trật tự hiến pháp của quốc gia đó."],
            [5, "Trong các nhận định sau về nguồn gốc của nhà nước, nhận định nào phản ánh đầy đủ nhất quan điểm của chủ nghĩa Mác – Lênin?", "Một giải thích toàn diện phải kết nối được cả chuỗi nhân quả: từ sự phát triển kinh tế sinh ra tư hữu, chia xã hội thành các giai cấp đối kháng đến mâu thuẫn không thể điều hòa buộc nhà nước ra đời.", "Sự phát triển của nghề luyện kim và nông nghiệp làm nảy sinh tư hữu, phân hóa chủ nô – nô lệ, và xung đột giữa hai giai cấp này dẫn đến sự ra đời nhà nước cổ đại."],
            [5, "Đặt kiểu nhà nước và hình thức nhà nước trong cùng một hệ thống phân loại. Kết luận nào sau đây chính xác nhất?", "Một bên chỉ bản chất giai cấp của bộ máy công quyền thuộc về giai cấp nào; bên còn lại chỉ cách thức tổ chức các cơ quan quyền lực và phương pháp điều hành cụ thể.", "Cùng là kiểu nhà nước tư sản (bản chất phục vụ giai cấp tư sản) nhưng nước Anh tổ chức theo hình thức quân chủ lập hiến, còn nước Mỹ theo hình thức cộng hòa tổng thống."],
            [6, "Để giải quyết hài hòa mâu thuẫn giữa phát triển kinh tế và bảo vệ môi trường hướng tới mục tiêu Net Zero 2050, mô hình phối hợp nào vận dụng tối ưu chức năng xã hội của nhà nước?", "Nhà nước không thể bao cấp làm thay tất cả mà phải giữ vai trò kiến tạo chính sách, kết hợp nguồn lực công nghệ – tài chính của doanh nghiệp và sự giám sát của cộng đồng.", "Nhà nước ban hành tín chỉ carbon và ưu đãi thuế xanh để doanh nghiệp đầu tư điện mặt trời, điện gió dưới sự giám sát môi trường của người dân địa phương."],
            [6, "Để khơi dậy sức mạnh nguồn nhân lực chất lượng cao phục vụ chuyển đổi số và công nghiệp bán dẫn, phương án tổng thể nào vận dụng sáng tạo lý luận 'Nhân tố chủ quan và vai trò của quần chúng'?", "Muốn tạo đột phá nhân lực công nghệ cao, cần kết nối chặt chẽ cơ chế chính sách của Nhà nước, chương trình đào tạo thực chiến của Nhà trường, nhu cầu thực tế của Doanh nghiệp cùng khát vọng cống hiến của người trẻ.", "Nhà nước cấp học bổng trọng điểm, trường đại học mở phòng thí nghiệm thiết kế chip theo đặt hàng của tập đoàn công nghệ và sinh viên chủ động nghiên cứu sáng tạo."],

            // ================= CHUYÊN ĐỀ IV: Ý THỨC XÃ HỘI (3.189 - 3.226) =================
            [1, "Điền đáp án đúng: Khái niệm ... dùng để chỉ phương diện sinh hoạt vật chất và các điều kiện sinh hoạt vật chất của xã hội.", "Triết học Mác chia đời sống xã hội thành hai mặt cơ bản: đời sống tinh thần và toàn bộ nền tảng sinh hoạt vật chất khách quan làm cơ sở cho xã hội.", "Điều kiện khí hậu nhiệt đới, dân số gần 100 triệu người và nền sản xuất nông – công nghiệp hiện nay chính là toàn bộ điều kiện sinh hoạt vật chất của Việt Nam."],
            [1, "Các yếu tố cấu thành tồn tại xã hội bao gồm những yếu tố nào?", "Nền tảng sinh hoạt vật chất của xã hội luôn hợp thành bởi đúng 3 yếu tố khách quan: cách thức sản xuất ra của cải, môi trường địa lý tự nhiên và quy mô, mật độ dân cư.", "Sự phát triển của kinh tế Việt Nam chịu tác động đồng thời từ trình độ sản xuất công nghiệp, vị trí địa lý ven biển và cơ cấu dân số trẻ."],
            [1, "Khái niệm ý thức xã hội dùng để chỉ điều gì?", "Toàn bộ đời sống tinh thần của cộng đồng xã hội (từ tâm lý, phong tục đến khoa học, triết học, nghệ thuật) đều nảy sinh từ điều kiện sống vật chất và phản ánh điều kiện sống đó.", "Văn học yêu nước, tinh thần đoàn kết làng xã và các học thuyết chính trị của người Việt đều là sự phản ánh đời sống lịch sử vật chất của dân tộc."],
            [1, "Hình thái ý thức xã hội nào sau đây ra đời từ khi xã hội chưa phân chia giai cấp?", "Chính trị và pháp luật chỉ xuất hiện khi có giai cấp và nhà nước; còn từ thời nguyên thủy, do bất lực trước sấm chớp, thiên tai nên con người đã nảy sinh niềm tin thần bí vào lực lượng siêu nhiên.", "Người nguyên thủy vẽ hình săn bắn trong hang động và thờ cúng thần lửa, thần mưa để cầu mong bình an và săn bắt thuận lợi."],
            [2, "Chọn đáp án đúng về đặc điểm hệ tư tưởng:", "Khác với cảm xúc đời thường tự phát, trình độ nhận thức cao của ý thức xã hội là hệ thống quan điểm lý luận được các nhà tư tưởng tổng kết, hệ thống hóa một cách tự giác nhằm bảo vệ lợi ích của một giai cấp.", "Chủ nghĩa Mác – Lênin là hệ thống lý luận khoa học được C. Mác và Ph. Ăngghen khái quát hóa một cách tự giác nhằm bảo vệ lợi ích của giai cấp công nhân."],
            [2, "Đâu là nhận định đúng về ý thức xã hội thông thường?", "Những hiểu biết, quan niệm nảy sinh trực tiếp từ kinh nghiệm sinh hoạt hằng ngày của quần chúng nhân dân, còn rời rạc và chưa được khái quát thành lý luận khoa học.", "Những câu tục ngữ dân gian như 'Chuồn chuồn bay thấp thì mưa, bay cao thì nắng' là tri thức kinh nghiệm đời thường chưa qua phân tích khí tượng học."],
            [2, "Chọn đáp án đúng theo quan điểm triết học Mác - Lênin về đặc điểm tâm lý xã hội:", "Do nảy sinh trực tiếp từ cuộc sống hằng ngày nên trạng thái tinh thần này mang đậm kinh nghiệm thực tế, trong đó nhận thức trí tuệ hòa quyện với tình cảm, cảm xúc cộng đồng.", "Tình yêu quê hương làng xóm và lòng tự hào dân tộc của người Việt vừa có sự hiểu biết về lịch sử vừa chứa đựng tình cảm gắn bó sâu sắc."],
            [2, "Chọn đáp án đúng nhất về tâm lý xã hội:", "Khác với hệ tư tưởng được xây dựng một cách tự giác, trạng thái tinh thần đời thường của cộng đồng hình thành một cách tự phát và phản ánh trực tiếp hoàn cảnh sinh hoạt hằng ngày.", "Người dân sống ở vùng hay gặp bão lũ tự phát hình thành tâm lý tiết kiệm, phòng xa và tương trợ lẫn nhau trong hoạn nạn."],
            [2, "Chọn đáp án đúng về vai trò của tồn tại xã hội trong quan hệ biện chứng với ý thức xã hội:", "Đời sống vật chất có trước và sinh ra đời sống tinh thần; khi điều kiện sinh hoạt vật chất thay đổi thì sớm muộn đời sống tinh thần cũng biến đổi theo.", "Khi nền kinh tế chuyển từ tự cung tự cấp sang kinh tế thị trường năng động, quan niệm về nghề nghiệp và làm giàu của giới trẻ cũng thay đổi rõ rệt."],
            [2, "Chọn đáp án đúng nhất về tính độc lập tương đối của ý thức xã hội:", "Tư tưởng của một thời đại không nảy sinh từ khoảng không mà luôn chịu ảnh hưởng, tiếp nối có chọn lọc các giá trị tư tưởng từ những giai đoạn lịch sử trước để lại.", "Triết học Mác – Lênin ra đời ở thế kỷ XIX không thể hình thành nếu không kế thừa tinh hoa của triết học cổ điển Đức và kinh tế chính trị học cổ điển Anh."],
            [2, "Yếu tố nào sau đây là yếu tố cơ bản nhất của tồn tại xã hội?", "Dù tự nhiên và dân số rất quan trọng, nhưng cách thức con người sản xuất ra của cải vật chất mới là yếu tố năng động và quyết định nhất đối với đời sống xã hội.", "Cùng điều kiện tự nhiên và dân số nhưng nhờ đổi mới cách thức sản xuất công nghiệp, Hàn Quốc đã vươn lên thành nước phát triển chỉ sau vài thập kỷ."],
            [2, "Ý thức xã hội bao gồm các hình thái ý thức xã hội cơ bản nào?", "Đời sống tinh thần của xã hội biểu hiện qua đúng 7 lĩnh vực cơ bản phản ánh hiện thực dưới các góc độ khác nhau (chính trị, luật pháp, đạo đức, cái đẹp, tôn giáo, khoa học và thế giới quan chung).", "Một bộ phim điện ảnh đề tài lịch sử vừa mang giá trị nghệ thuật (thẩm mỹ), vừa giáo dục lòng yêu nước (chính trị, đạo đức)."],
            [2, "Khi tồn tại xã hội thay đổi thì ý thức xã hội biến đổi như thế nào?", "Vì thói quen, tập quán và tư tưởng cũ có sức ì nhất định nên khi đời sống vật chất đổi mới, đời sống tinh thần không thay đổi ngay lập tức mà biến đổi dần theo thời gian.", "Dù phương tiện giao thông hiện đại đã phổ biến nhưng thói quen đi lại tùy tiện của một bộ phận người dân phải mất nhiều năm tuyên truyền và xử phạt mới dần thay đổi."],
            [2, "Trong xã hội có giai cấp, hình thái ý thức xã hội nào quyết định đến các hình thái ý thức xã hội còn lại?", "Hình thái tinh thần nào phản ánh trực tiếp lợi ích kinh tế cốt lõi của giai cấp cầm quyền và gắn chặt với quyền lực nhà nước thì sẽ chi phối định hướng của pháp luật, đạo đức và nghệ thuật.", "Trong xã hội phong kiến, tư tưởng chính trị 'trung quân ái quốc' chi phối chuẩn mực đạo đức, luật pháp và nội dung văn học nghệ thuật thời bấy giờ."],
            [2, "Ý thức xã hội không phụ thuộc vào tồn tại xã hội một cách thụ động mà còn có tác động tích cực trở lại tồn tại xã hội, đó là sự thể hiện của tính chất nào?", "Đời sống tinh thần tuy do đời sống vật chất sinh ra nhưng có quy luật vận động riêng và có khả năng thúc đẩy hoặc kìm hãm sự phát triển của đời sống vật chất.", "Tư tưởng trọng nông ức thương thời phong kiến từng kìm hãm kinh tế thương nghiệp, ngược lại tư duy đổi mới sáng tạo hiện nay thúc đẩy kinh tế số phát triển."],
            [2, "Điều kiện cơ bản để ý thức xã hội tác động trở lại tồn tại xã hội là gì?", "Một ý tưởng hay hay một bản thiết kế khoa học nằm trên giấy tự nó không thể làm thay đổi thế giới vật chất nếu không được con người biến thành hành động cụ thể.", "Bản kế hoạch khởi nghiệp dù xuất sắc đến đâu cũng không tạo ra doanh thu nếu nhóm sáng lập không bắt tay vào sản xuất và kinh doanh thực tế."],
            [3, "Vận dụng kiến thức nào của chủ nghĩa duy vật lịch sử để giải thích trong giai đoạn hiện nay vẫn còn tồn tại tư tưởng 'trọng nam, khinh nữ'?", "Chế độ phong kiến nam quyền đã lùi vào quá khứ nhưng sức mạnh của thói quen truyền thống ăn sâu vào tâm lý khiến nếp nghĩ cũ vẫn dai dẳng tồn tại.", "Dù phụ nữ ngày nay hoàn toàn độc lập về kinh tế và giữ nhiều vị trí lãnh đạo, một số gia đình vẫn cố sinh bằng được con trai để 'nối dõi tông đường'."],
            [3, "Vận dụng kiến thức nào để giải thích câu nói: 'sức mạnh của thói quen, của phong tục, tập quán là sức mạnh bảo thủ ghê gớm nhất'?", "Các tập quán, nếp nghĩ hình thành qua hàng trăm năm có độ trễ rất lớn so với sự biến đổi nhanh chóng của điều kiện kinh tế – kỹ thuật hiện đại.", "Nhiều vùng nông thôn đã có điện lưới và công nghệ hiện đại nhưng một số hủ tục ma chay, cưới hỏi linh đình tốn kém vẫn khó xóa bỏ ngay."],
            [3, "Tâm lý tiểu nông của người Việt Nam truyền thống căn bản là do nguyên nhân nào?", "Nếp nghĩ cục bộ, tùy tiện, ngại thay đổi không phải là bản tính bẩm sinh của người Việt mà bắt nguồn từ nền sản xuất nông nghiệp manh mún, tự cấp tự túc kéo dài hàng nghìn năm.", "Thói quen 'đèn nhà ai nấy rạng' hay làm ăn theo kinh nghiệm truyền miệng bắt nguồn từ việc canh tác trên từng mảnh ruộng nhỏ lẻ tách biệt."],
            [3, "Lối sống, phong tục tập quán của con người ở những vùng miền khác nhau là do yếu tố nào quyết định?", "Mỗi vùng miền có điều kiện tự nhiên, khí hậu và phương thức sinh hoạt vật chất khác nhau nên hình thành những nét văn hóa, ẩm thực và tập quán đặc trưng riêng.", "Người miền Tây Nam Bộ sống phóng khoáng, hào sảng gắn với hệ thống sông ngòi kênh rạch chằng chịt và thiên nhiên trù phú."],
            [3, "Nhận định: 'Điều kiện sinh hoạt vật chất của xã hội biến đổi đến đâu thì ngay lập tức tâm lý xã hội và hệ tư tưởng xã hội cũng lập tức biến đổi đến đó' đúng hay sai?", "Đời sống tinh thần không phản chiếu một cách máy móc, tức thời như soi gương mà có độ trễ, tính kế thừa và quy luật vận động riêng so với đời sống vật chất.", "Khi chuyển từ nông thôn lên sống ở chung cư hiện đại, nhiều người vẫn giữ thói quen sinh hoạt cộng đồng cũ trong một thời gian dài trước khi thích nghi nếp sống đô thị."],
            [3, "Lựa chọn đáp án SAI về ý thức xã hội:", "Đời sống tinh thần của xã hội rất rộng lớn, bao gồm cả đạo đức, khoa học, nghệ thuật, tôn giáo, triết học chứ không thể thu hẹp chỉ gói gọn trong lĩnh vực chính trị.", "Các tác phẩm âm nhạc, hội họa hay phát minh toán học đều thuộc đời sống tinh thần xã hội nhưng không phải là hoạt động chính trị thuần túy."],
            [3, "Lựa chọn đáp án đúng nhất về ý thức xã hội:", "Tính độc lập tương đối của đời sống tinh thần thể hiện trọn vẹn qua 5 phương diện: thường lạc hậu hơn, có thể vượt trước, có tính kế thừa, tác động qua lại giữa các hình thái và tác động trở lại đời sống vật chất.", "Chủ nghĩa Mác vừa kế thừa triết học cổ điển Đức, vừa dự báo vượt trước tương lai và trở thành kim chỉ nam thúc đẩy phong trào công nhân hiện thực."],
            [3, "Người thợ cơ khí lành nghề vận hành máy tiện truyền thống nhờ kinh nghiệm hằng ngày, nhưng khi được đào tạo toán học, sức bền vật liệu có thể tự thiết kế vận hành máy tiện CNC hiện đại phản ánh mối quan hệ nào?", "Kinh nghiệm thực tế hằng ngày cho ta sự quen tay trực quan, nhưng chỉ khi nâng lên trình độ lý luận khoa học nắm vững bản chất quy luật thì con người mới làm chủ được công nghệ đột phá.", "Người thợ quen tay chỉnh máy theo cảm giác tiếng kêu, nhưng khi học nguyên lý cơ học và lập trình thì có thể tối ưu hóa quy trình sản xuất tự động."],
            [3, "Sinh viên tích cực học tập đầy đủ các môn lý luận chính trị để hiểu rõ đường lối phát triển của Đảng, từ đó có định hướng nghề nghiệp đúng đắn phục vụ Tổ quốc -> vai trò của hình thái YTXH nào?", "Nhận thức chính trị đúng đắn đóng vai trò kim chỉ nam định hướng lý tưởng sống, đạo đức nghề nghiệp và thái độ cống hiến của công dân đối với đất nước.", "Hiểu rõ chiến lược phát triển công nghiệp xanh của đất nước giúp sinh viên kỹ thuật chủ động định hướng nghiên cứu về năng lượng tái tạo."],
            [3, "Khi hoàn thành đồ án tốt nghiệp thiết kế chi tiết máy, sinh viên nghiêm túc tự giác khai báo nguồn tài liệu tham khảo và tuyệt đối không sao chép công trình của các khóa trước nhằm chấp hành Luật Sở hữu trí tuệ. Hành vi tự giác này là biểu hiện của hình thái ý thức nào?", "Khi hiểu rõ các quy định của pháp luật và tự nguyện tuân thủ chứ không phải vì sợ bị phạt, công dân đã hình thành nhận thức và thái độ tôn trọng pháp luật ở mức độ tự giác.", "Sinh viên chủ động trích dẫn đầy đủ nguồn tác giả khi làm nghiên cứu khoa học để tôn trọng quyền sở hữu trí tuệ theo quy định pháp luật."],
            [3, "Kỹ sư cơ khí chế tạo không chỉ chú trọng tính năng kỹ thuật, độ bền mà còn đầu tư thiết kế kiểu dáng, màu sắc sản phẩm công nghiệp hài hòa, đẹp mắt, phù hợp thị hiếu người tiêu dùng. Hoạt động này vận dụng vai trò của hình thái ý thức nào?", "Nhu cầu thưởng thức và sáng tạo cái đẹp không chỉ nằm trong hội họa hay âm nhạc mà còn đi trực tiếp vào thiết kế kiểu dáng công nghiệp để nâng cao giá trị sản phẩm.", "Một chiếc ô tô điện hiện đại không chỉ cần động cơ mạnh mẽ mà còn phải có thiết kế khí động học tinh tế, màu sắc hài hòa thu hút khách hàng."],
            [3, "Dù hạ tầng công nghệ số hiện đại đã phủ sóng rộng rãi tại các trường đại học, nhưng một bộ phận sinh viên vẫn giữ thói quen học tập thụ động kiểu 'thầy đọc – trò chép' nên lúng túng khi học Blended Learning. Nguyên nhân chủ yếu là gì?", "Phương tiện và môi trường học tập vật chất đã đổi mới nhanh chóng nhưng thói quen học tập thụ động từ phổ thông ăn sâu vào tâm lý khiến người học chưa kịp thích nghi.", "Trường đại học trang bị đầy đủ hệ thống học trực tuyến LMS hiện đại nhưng nhiều sinh viên vẫn đợi giảng viên đọc từng câu để chép vào vở."],
            [3, "Tại sao Chủ tịch Hồ Chí Minh khẳng định 'Trăm năm trồng người' và nhấn mạnh giáo dục lý tưởng cách mạng cho thế hệ trẻ ngay từ khi đất nước còn nhiều khó khăn về vật chất?", "Những tư tưởng khoa học và lý tưởng cách mạng tiên tiến có khả năng đi trước thực tại vật chất, dự báo tương lai và dẫn dắt con người hành động cải tạo xã hội.", "Ngay từ năm 1945 khi đất nước còn nghèo đói, Bác Hồ đã viết thư gửi học sinh nhân ngày khai trường, đặt niềm tin vào thế hệ trẻ đưa Việt Nam sánh vai cường quốc."],
            [3, "Chủ trương của Đảng Cộng sản Việt Nam về 'Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc', vừa giữ gìn truyền thống yêu nước, nhân ái, vừa tiếp thu tinh hoa văn hóa nhân loại là sự vận dụng trực tiếp nội dung nào của ý thức xã hội?", "Văn hóa mới không thể xây dựng từ số không mà luôn là sự tiếp nối có chọn lọc những giá trị tốt đẹp của dân tộc kết hợp với tinh hoa văn minh nhân loại.", "Người Việt Nam hiện đại vẫn giữ truyền thống 'Tôn sư trọng đạo', 'Uống nước nhớ nguồn' đồng thời tiếp thu tác phong công nghiệp và khoa học phương Tây."],
            [4, "Trong thời kỳ phong kiến Tây Âu thời Trung cổ, quyền lực Giáo hội bao trùm đời sống tinh thần; triết học bị coi là 'nô tì của thần học', văn học nghệ thuật phục vụ kinh thánh. Hiện tượng lịch sử này minh chứng rõ nét nhất cho đặc điểm nào của YTXH?", "Các lĩnh vực tinh thần trong xã hội luôn tác động qua lại lẫn nhau, và ở mỗi thời kỳ lịch sử thường có một hình thái giữ vị trí thống trị, chi phối mạnh mẽ các lĩnh vực khác.", "Thời Trung cổ châu Âu, từ kiến trúc nhà thờ Gothic, hội họa đến triết học kinh viện đều xoay quanh việc chứng minh và ca ngợi giáo lý tôn giáo."],
            [4, "Một sinh viên năm nhất nhận định: 'Vì tư tưởng con người thường lạc hậu hơn tồn tại xã hội, nên mọi quan điểm lý luận của thế hệ trước đều bảo thủ, trì trệ và cần phải xóa bỏ hoàn toàn để xây dựng tư duy mới'. Nhận định trên sai ở điểm nào?", "Đánh đồng toàn bộ di sản tư tưởng quá khứ là bảo thủ sẽ dẫn tới thái độ phủ định sạch trơn, bỏ qua những tư tưởng khoa học vượt trước và giá trị truyền thống cần kế thừa.", "Nếu xóa bỏ hoàn toàn đạo lý truyền thống hay các định lý khoa học cổ điển thì thế hệ sau không có nền tảng để sáng tạo cái mới."],
            [4, "Trong cuộc đấu tranh bảo vệ nền tảng tư tưởng của Đảng trên không gian mạng hiện nay, tại sao việc giữ vững trận địa tư tưởng chính trị lại có ý nghĩa sống còn đối với sự ổn định của toàn bộ đời sống tinh thần xã hội?", "Nhận thức chính trị phản ánh trực tiếp lợi ích giai cấp và quyền lực nhà nước nên giữ vai trò 'nhạc trưởng' chi phối đạo đức, pháp luật, văn hóa và sự ổn định xã hội.", "Khi thông tin xấu độc xuyên tạc làm lung lay niềm tin chính trị của giới trẻ thì sẽ kéo theo sự lệch chuẩn về đạo đức, lối sống và thái độ chấp hành pháp luật."],
            [4, "Phân tích sự khác biệt căn bản giữa 'Tâm lý xã hội' và 'Hệ tư tưởng' trong đời sống tinh thần của xã hội có giai cấp:", "Một bên là những cảm xúc, thói quen nảy sinh tự phát trực tiếp từ sinh hoạt hằng ngày; bên còn lại là hệ thống lý luận chặt chẽ do các nhà tư tưởng xây dựng tự giác vì lợi ích giai cấp.", "Tình cảm yêu nước tự phát của người nông dân khi làng xóm bị xâm lăng khác với đường lối kháng chiến toàn dân được tổng kết thành lý luận quân sự."],
            [4, "Tại sao Chủ nghĩa Mác - Lênin khẳng định rằng trong xã hội có giai cấp thì 'ý thức xã hội luôn mang tính giai cấp'?", "Vì các giai cấp có địa vị kinh tế và quyền lợi vật chất đối lập nhau nên cách họ nhìn nhận về công bằng, tự do hay đạo đức cũng khác nhau để bảo vệ lợi ích của phe mình.", "Cùng một cuộc đình công của công nhân, giới chủ coi đó là hành vi gây rối trật tự, còn người lao động coi đó là cuộc đấu tranh chính đáng đòi quyền sống."],
            [5, "Đánh giá tính đúng đắn của chủ trương sử dụng biện pháp cưỡng chế hành chính để nhanh chóng xóa bỏ hoàn toàn các phong tục, tập quán lạc hậu (tảo hôn, mê tín dị đoan) trong đời sống nhân dân:", "Thói quen và tập quán ăn sâu vào tâm lý cộng đồng qua nhiều thế hệ không thể xóa bỏ bằng mệnh lệnh hành chính nóng vội, mà phải cải thiện đời sống vật chất kết hợp giáo dục kiên trì.", "Muốn xóa bỏ nạn tảo hôn ở vùng cao hiệu quả phải phát triển kinh tế, mở trường học nâng cao dân trí kết hợp vận động già làng, trưởng bản chứ không chỉ phạt tiền."],
            [5, "Đánh giá quan điểm cho rằng: 'Chỉ cần đẩy mạnh phát triển kinh tế số, nâng cao thu nhập vật chất cho người dân thì các tệ nạn xã hội, tham nhũng và suy thoái đạo đức sẽ tự động biến mất'.", "Thu nhập vật chất tăng lên không tự động làm đạo đức tốt đẹp hơn; vì đời sống tinh thần có tính độc lập tương đối nên phải kết hợp phát triển kinh tế với giáo dục đạo đức và pháp luật nghiêm minh.", "Nhiều quốc gia có thu nhập bình quân đầu người rất cao nhưng vẫn đối mặt với tội phạm công nghệ cao, tệ nạn xã hội và khủng hoảng giá trị đạo đức."],
            [6, "Xây dựng đề án 'Xây dựng văn hóa ứng xử văn minh trên không gian mạng cho sinh viên Trường Đại học Kỹ thuật Công nghiệp trong kỷ nguyên trí tuệ nhân tạo', phương án tổng thể nào vận dụng sáng tạo nhất quy luật biện chứng giữa TTXH và YTXH?", "Để tạo môi trường mạng lành mạnh bền vững, cần kết hợp đồng bộ cả điều kiện vật chất – kỹ thuật (hạ tầng, công cụ giám sát) lẫn quy tắc pháp lý, giáo dục kỹ năng và sự tự giác của sinh viên.", "Nhà trường vừa nâng cấp hệ thống mạng an toàn, ban hành bộ quy tắc ứng xử số, vừa tổ chức tập huấn kỹ năng phản biện thông tin và phát huy vai trò tự quản của sinh viên."],

            // ================= CHUYÊN ĐỀ V: TRIẾT HỌC MÁC – LÊNIN VỀ CON NGƯỜI (3.227 - 3.265) =================
            [1, "Điền từ còn thiếu vào luận điểm kinh điển của C. Mác: 'Bản chất con người không phải là một cái trừu tượng cố hữu của cá nhân riêng biệt. Trong tính hiện thực của nó, bản chất con người là ...'.", "Con người không tồn tại cô lập như một hòn đảo mà tính cách, năng lực và nhân cách của mỗi người được hình thành từ sự đan xen, hòa quyện của toàn bộ các mối quan hệ xã hội.", "Một đứa trẻ lớn lên trong môi trường gia đình nhân ái, nhà trường kỷ luật và xã hội văn minh sẽ hình thành nhân cách hoàn toàn khác khi sống tách biệt."],
            [1, "Theo quan điểm của triết học Mác - Lênin, khái niệm 'tha hóa con người' dùng để chỉ hiện tượng nào?", "Đó là tình trạng ngược đời trong xã hội có bóc lột: đáng lẽ lao động giúp con người hạnh phúc và làm chủ, thì sản phẩm do chính người thợ làm ra lại biến thành sức mạnh xa lạ quay lại thống trị và nô dịch họ.", "Người công nhân làm việc kiệt sức tạo ra lợi nhuận khổng lồ giúp ông chủ mua thêm máy móc hiện đại để rồi chính máy móc đó lại thay thế và sa thải người công nhân."],
            [1, "Theo triết học Mác - Lênin, nguyên nhân sâu xa và quyết định trực tiếp dẫn đến sự tha hóa của con người trong lịch sử là gì?", "Khi tư liệu sản xuất rơi vào tay thiểu số người làm tài sản riêng, đại đa số người lao động mất quyền làm chủ quá trình sản xuất và bị tước đoạt thành quả lao động của chính mình.", "Trong xã hội tư hữu, người nông dân cày cấy trên ruộng đất của địa chủ phải nộp phần lớn lúa gạo thu hoạch được cho chủ đất."],
            [1, "Điền cụm từ thích hợp vào chỗ trống trong Tuyên ngôn của Đảng Cộng sản: 'Sự phát triển tự do của mỗi người là ... cho sự phát triển tự do của tất cả mọi người'.", "Trong xã hội mới nhân văn, tự do cá nhân không đối lập với cộng đồng; ngược lại, việc mỗi cá nhân được phát huy hết tài năng chính là tiền đề cần thiết để cả xã hội cùng phát triển tự do.", "Khi mỗi công dân đều được tự do học tập, sáng tạo khoa học và phát triển năng khiếu thì toàn xã hội sẽ có nguồn lực dồi dào để tiến bộ."],
            [1, "Theo quan điểm của chủ nghĩa duy vật lịch sử, lực lượng nào giữ vai trò là chủ thể chính, sáng tạo ra lịch sử?", "Lịch sử không phải là cuốn tiểu sử của riêng các bậc đế vương hay thiên tài, mà được tạo nên trước hết bởi hàng triệu người lao động trực tiếp sản xuất ra của cải nuôi sống xã hội và đấu tranh cải tạo xã hội.", "Chiến thắng Điện Biên Phủ năm 1954 làm nên từ sức mạnh của hàng chục vạn chiến sĩ và dân công hỏa tuyến gùi thồ lương thực, kéo pháo vượt núi."],
            [1, "Trong các bộ phận cấu thành khái niệm 'quần chúng nhân dân', lực lượng nào đóng vai trò là hạt nhân cơ bản nhất?", "Khái niệm này bao gồm nhiều tầng lớp tiến bộ thúc đẩy xã hội phát triển, nhưng lực lượng nòng cốt, quan trọng nhất luôn là những người trực tiếp lao động tạo ra của cải vật chất và giá trị tinh thần.", "Giai cấp công nhân, nông dân và đội ngũ trí thức lao động sáng tạo là lực lượng nòng cốt của nhân dân Việt Nam trong sự nghiệp dựng nước và giữ nước."],
            [1, "Quan điểm của triết học Mác - Lênin khẳng định con người là một thực thể thống nhất giữa hai phương diện nào?", "Con người vừa chịu sự chi phối của các quy luật tự nhiên – sinh lý cơ thể như mọi sinh vật, vừa mang các thuộc tính đặc trưng chỉ có ở cộng đồng xã hội như ngôn ngữ, lao động và tư duy.", "Con người vừa cần ăn uống, hít thở, trao đổi chất tự nhiên để duy trì sự sống, vừa giao tiếp bằng ngôn ngữ, học tập và tuân thủ chuẩn mực đạo đức xã hội."],
            [1, "Triết học Mác - Lênin tiếp cận và nghiên cứu con người xuất phát từ tiền đề nào?", "Khác với các trường phái suy đoán về con người trừu tượng chung chung mọi thời đại, triết học Mác bắt đầu từ những con người bằng xương bằng thịt đang sống và lao động trong hoàn cảnh lịch sử cụ thể.", "Muốn hiểu tâm lý và nhu cầu của thanh niên Việt Nam hiện nay, phải khảo sát cuộc sống, việc làm và môi trường số của họ trong thập niên 2020 chứ không suy đoán chung chung."],
            [2, "Theo quan điểm của C. Mác, câu nói: 'Giới tự nhiên là thân thể vô cơ của con người' có ý nghĩa gì?", "Con người không đứng bên ngoài hay tách rời tự nhiên; không khí, nguồn nước, đất đai và sinh quyển gắn bó sống còn với con người như chính một phần cơ thể của mình.", "Nếu con người tàn phá rừng đầu nguồn và gây ô nhiễm nguồn nước thì chính sức khỏe và sự sinh tồn của loài người sẽ bị hủy hoại trực tiếp."],
            [2, "Điểm khác biệt căn bản nhất trong quan niệm về con người của C. Mác so với các nhà triết học duy vật trước đó (như L. Phoiơbắc) là gì?", "Các nhà duy vật cũ chỉ nhìn thấy con người ở góc độ sinh học tự nhiên, tình cảm trừu tượng phi lịch sử; còn Mác chỉ ra bản chất xã hội và vai trò hoạt động thực tiễn cải tạo thế giới của con người.", "Phoiơbắc nói về tình yêu thương nhân loại chung chung không phân biệt giai cấp, còn Mác chỉ ra muốn giải phóng con người phải thông qua thực tiễn xóa bỏ áp bức bóc lột."],
            [2, "Luận điểm: 'Con người vừa là chủ thể của lịch sử, vừa là sản phẩm của lịch sử' được hiểu như thế nào là đúng nhất?", "Mỗi thế hệ sinh ra đều thừa hưởng hoàn cảnh vật chất và văn hóa do lịch sử để lại (sản phẩm), đồng thời bằng lao động và sáng tạo lại cải biến hoàn cảnh đó để viết tiếp trang sử mới (chủ thể).", "Thế hệ trẻ Việt Nam ngày nay thừa hưởng nền hòa bình và hạ tầng từ cha ông, đồng thời chính họ đang trực tiếp kiến tạo nền kinh tế số cho tương lai đất nước."],
            [2, "Theo triết học Mác - Lênin, khái niệm 'cá nhân' được xác định trong mối quan hệ trực tiếp với phạm trù nào?", "Một cá thể người chỉ trở thành 'cá nhân' mang nhân cách, quyền lợi và nghĩa vụ khi được đặt trong sự tương tác với cộng đồng xã hội xung quanh.", "Một em bé bị lạc trong rừng từ nhỏ và lớn lên cùng bầy sói chỉ mang hình hài sinh học chứ không có ngôn ngữ, tư duy hay nhân cách của một cá nhân xã hội."],
            [2, "Việc tuyệt đối hóa vai trò của cá nhân lãnh tụ, vĩ nhân và phủ nhận vai trò của quần chúng nhân dân sẽ dẫn đến sai lầm nào sau đây?", "Khi coi một cá nhân xuất chúng có thể tự mình quyết định toàn bộ vận mệnh lịch sử mà xem nhẹ sức mạnh của nhân dân, tư duy sẽ rơi vào duy tâm và dễ sinh ra tệ sùng bái cá nhân độc đoán.", "Tệ sùng bái cá nhân ở một số giai đoạn lịch sử khiến người lãnh đạo thoát ly quần chúng, đưa ra các quyết định chủ quan độc đoán gây tổn thất cho đất nước."],
            [2, "Theo quan điểm của chủ nghĩa Mác - Lênin, mục đích cao nhất của sự phát triển xã hội là gì?", "Tăng trưởng kinh tế hay phát triển khoa học kỹ thuật suy cho cùng đều chỉ là phương tiện; đích đến cao nhất của mọi tiến bộ xã hội là giải phóng con người và giúp mỗi người phát triển toàn diện.", "Mọi thành tựu tăng trưởng GDP của Việt Nam đều hướng tới việc nâng cao tuổi thọ, trình độ học vấn, thu nhập và hạnh phúc thực chất của người dân."],
            [2, "Theo quan điểm của C. Mác, điều kiện tiên quyết để khắc phục triệt để hiện tượng tha hóa con người và thực hiện giải phóng con người là gì?", "Chừng nào tư liệu sản xuất chủ yếu vẫn nằm trong tay thiểu số giai cấp bóc lột thì người lao động vẫn bị lệ thuộc và tha hóa; do đó phải xóa bỏ tận gốc chế độ tư hữu tư liệu sản xuất.", "Chỉ khi xóa bỏ chế độ chiếm hữu tư nhân tư bản và xây dựng chế độ làm chủ tập thể công bằng thì lao động mới thực sự trở thành hoạt động tự do sáng tạo của con người."],
            [2, "Sự nghiệp giải phóng con người theo quan điểm của triết học Mác - Lênin được bắt đầu từ đâu?", "Không thể giải phóng con người bằng lời cầu nguyện hay giáo dục đạo đức suông, mà phải bắt đầu từ cuộc đấu tranh hiện thực giải phóng giai cấp công nhân và nhân dân lao động khỏi áp bức bóc lột.", "Cuộc cách mạng giải phóng giai cấp công nhân và nhân dân lao động khỏi ách bóc lột tư bản là chìa khóa mở đường cho việc giải phóng toàn thể nhân loại."],
            [3, "Việc sinh viên tích cực tham gia thể dục thể thao, rèn luyện thể chất bên cạnh học tập kiến thức chuyên môn thể hiện sự vận dụng mối quan hệ nào của con người?", "Con người là sự thống nhất giữa mặt sinh học và mặt xã hội; chăm sóc thể chất khỏe mạnh tạo nền tảng vật chất vững chắc để phát huy trí tuệ và năng lực cống hiến xã hội.", "Sinh viên duy trì thói quen chạy bộ, bơi lội hằng ngày giúp cơ thể dẻo dai, tinh thần minh mẫn để học tập và nghiên cứu khoa học hiệu quả hơn."],
            [3, "Tại sao khi tuyển dụng nhân sự kỹ thuật hiện nay, bên cạnh bằng cấp chuyên môn, doanh nghiệp rất coi trọng kỹ năng làm việc nhóm, giao tiếp và đạo đức nghề nghiệp?", "Vì bản chất con người là tổng hòa các quan hệ xã hội; một kỹ sư dù giỏi chuyên môn cá nhân nhưng không biết phối hợp với đồng nghiệp thì khó hoàn thành các dự án lớn.", "Để phát triển một hệ thống phần mềm lớn, lập trình viên phải phối hợp nhịp nhàng với nhóm thiết kế giao diện, kiểm thử và khách hàng."],
            [3, "Hiện tượng một bộ phận người lao động trong các dây chuyền công nghiệp hiện đại cảm thấy căng thẳng, mệt mỏi, coi công việc chỉ là phương tiện kiếm sống đơn thuần mà không thấy niềm vui sáng tạo phản ánh hiện tượng gì?", "Khi công việc bị chia nhỏ đơn điệu, áp lực chỉ tiêu đè nặng khiến người lao động chỉ làm việc vì miếng cơm manh áo mà mất đi niềm vui sáng tạo tự thân, đó chính là biểu hiện của tha hóa lao động.", "Công nhân đứng máy lặp lại một thao tác vặn ốc suốt 8 tiếng mỗi ngày cảm thấy kiệt sức, chán nản và chỉ mong hết giờ làm việc."],
            [3, "Trong bối cảnh bùng nổ mạng xã hội, việc một số bạn trẻ sống thu mình, lệ thuộc hoàn toàn vào thế giới ảo và cắt đứt giao tiếp thực tế với gia đình, bạn bè sẽ dẫn đến hệ quả gì?", "Nhân cách và năng lực người chỉ trưởng thành qua sự tương tác sống động với gia đình, nhà trường và cộng đồng thực tế; tự cô lập trong thế giới ảo sẽ làm nghèo nàn bản chất xã hội của con người.", "Một số bạn trẻ nghiện game và mạng xã hội suốt ngày đêm dẫn đến ngại giao tiếp ngoài đời, thiếu kỹ năng ứng xử và mất kết nối với người thân."],
            [3, "Phương châm 'Dân là gốc' của Đảng Cộng sản Việt Nam trong suốt tiến trình lãnh đạo cách mạng là sự vận dụng trực tiếp nguyên lý triết học nào?", "Khẳng định nhân dân là cội nguồn sức mạnh và là lực lượng quyết định mọi thắng lợi của sự nghiệp cách mạng; mọi chủ trương đường lối đều phải xuất phát từ nguyện vọng và lợi ích của nhân dân.", "Trong đại dịch Covid-19 hay bão lũ thiên tai, chính sự đồng lòng, tự giác chấp hành và tương trợ của hàng triệu người dân là yếu tố quyết định giúp đất nước vượt qua khó khăn."],
            [3, "Khi phân tích thành công của các dự án KH-KT lớn (chế tạo vệ tinh, phát triển AI), sự kết hợp giữa nhà khoa học đầu ngành với đội ngũ kỹ sư, công nhân kỹ thuật đông đảo minh chứng cho mối quan hệ nào?", "Thành công của các công trình lớn luôn đòi hỏi sự kết hợp biện chứng: chuyên gia đầu ngành giữ vai trò định hướng giải pháp, còn đội ngũ kỹ sư và công nhân đông đảo trực tiếp hiện thực hóa sản phẩm.", "Dự án chế tạo vệ tinh MicroDragon của Việt Nam thành công nhờ sự dẫn dắt của các tiến sĩ vũ trụ cùng sự thi công tỉ mỉ của đội ngũ kỹ sư trẻ."],
            [3, "Việc Nhà nước Việt Nam triển khai các chính sách an sinh xã hội, giảm nghèo bền vững, miễn giảm học phí và chăm sóc sức khỏe toàn dân thể hiện mục tiêu cốt lõi nào của CNXH?", "Trong chế độ xã hội mới, đầu tư cho giáo dục, y tế và an sinh cho con người vừa là mục tiêu nhân văn cao nhất, vừa là cách tạo ra nguồn động lực khỏe mạnh, trí tuệ để phát triển đất nước.", "Chính sách miễn học phí cho học sinh phổ thông và mở rộng bảo hiểm y tế toàn dân giúp mọi trẻ em đều có cơ hội học tập và phát triển năng lực."],
            [3, "Trong truyền thống tư tưởng Việt Nam, vấn đề con người được quan tâm sâu sắc nhất ở khía cạnh nào?", "Khác với triết học phương Tây cổ đại thiên về giải thích nguồn gốc vũ trụ, tư tưởng truyền thống Việt Nam tập trung vào chuẩn mực đạo đức, tình nghĩa cộng đồng và trách nhiệm với Tổ quốc.", "Truyền thống 'Thương người như thể thương thân', 'Lá lành đùm lá rách' và tinh thần 'Giặc đến nhà đàn bà cũng đánh' của dân tộc Việt Nam."],
            [4, "Vai trò thực sự của lãnh tụ, vĩ nhân đối với tiến trình lịch sử theo quan điểm của chủ nghĩa duy vật lịch sử là gì?", "Lãnh tụ xuất sắc có thể nắm bắt quy luật, tập hợp quần chúng để thúc đẩy lịch sử tiến nhanh hơn (hoặc kìm hãm nếu sai lầm), nhưng không thể tùy ý xóa bỏ hay thay đổi quy luật khách quan của lịch sử.", "Nguyễn Ái Quốc đã tìm ra con đường cứu nước đúng đắn, dẫn dắt dân tộc Việt Nam giành độc lập sớm hơn nhưng không thể đi ngược quy luật phát triển của thời đại."],
            [4, "Đánh giá tính đúng/sai của nhận định: 'Anh hùng tạo thời thế và thời thế tạo anh hùng' theo quan điểm duy vật lịch sử:", "Nhận định này đúng vì thể hiện mối quan hệ hai chiều: hoàn cảnh lịch sử biến động rèn luyện và làm xuất hiện người anh hùng, ngược lại hành động sáng suốt của anh hùng làm xoay chuyển cục diện thời thế.", "Bối cảnh đất nước bị ngoại xâm cuối thế kỷ XIX – đầu thế kỷ XX đã hun đúc nên những nhà cách mạng kiệt xuất, và chính các nhà cách mạng ấy đã làm thay đổi vận mệnh dân tộc."],
            [4, "Bài thơ của Hồ Chí Minh: 'Ngủ thì ai cũng như lương thiện / Tỉnh dậy phân ra kẻ dữ hiền / Hiền, dữ phải đâu là tính sẵn / Phần nhiều do giáo dục mà nên' minh họa trực tiếp luận điểm nào?", "Con người sinh ra không mang sẵn bản tính thiện hay ác cố định từ trong bụng mẹ, mà nhân cách thiện hay ác được nhào nặn chủ yếu bởi môi trường giáo dục và các quan hệ xã hội khi trưởng thành.", "Một người có hoàn cảnh khó khăn nhưng được gia đình, nhà trường và cộng đồng giáo dục, giúp đỡ kịp thời sẽ trở thành công dân lương thiện, có ích."],
            [4, "Vị trí của con người trong chiến lược phát triển kinh tế - xã hội của Đảng Cộng sản Việt Nam hiện nay được xác định như thế nào?", "Con người được đặt ở vị trí trung tâm của mọi chiến lược phát triển với hai vai trò song hành: vừa là đích đến phục vụ cao nhất, vừa là nguồn sức mạnh sáng tạo trực tiếp thúc đẩy xã hội đi lên.", "Đầu tư nâng cao chất lượng y tế, giáo dục giúp người dân sống hạnh phúc hơn (đích đến), đồng thời chính nguồn nhân lực chất lượng cao đó lại thúc đẩy tăng trưởng kinh tế (động lực)."],
            [4, "Hành vi riêng có nào tạo nên sự khác biệt căn bản về chất giữa con người và con vật theo triết học Mác – Lênin?", "Con vật chỉ biết sử dụng những bộ phận cơ thể sẵn có để kiếm thức ăn từ tự nhiên, còn con người biết dùng trí tuệ chế tạo ra công cụ trung gian để cải biến giới tự nhiên phục vụ mình.", "Con ong xây tổ rất khéo nhưng chỉ làm theo bản năng bẩm sinh không đổi, còn người kiến trúc sư biết vẽ bản thiết kế trên giấy và chế tạo máy móc để xây nhà."],
            [4, "Con người khẳng định vai trò là chủ thể sáng tạo ra lịch sử thông qua hoạt động cơ bản nào?", "Lịch sử loài người không được viết nên bằng những ước mơ ngồi yên trong đầu, mà được tạo ra thông qua các hoạt động cải biến hiện thực như sản xuất vật chất, đấu tranh xã hội và thực nghiệm khoa học.", "Chính hoạt động sản xuất nông nghiệp, công nghiệp, nghiên cứu khoa học và đấu tranh bảo vệ Tổ quốc của các thế hệ người Việt đã tạo nên lịch sử Việt Nam."],
            [4, "Biểu hiện đặc trưng của hiện tượng tha hóa lao động trong xã hội có chế độ tư hữu là gì?", "Thay vì tìm thấy niềm vui sáng tạo và khẳng định năng lực bản thân trong công việc, người lao động lại cảm thấy bị ép buộc, kiệt quệ tinh thần và chỉ thấy tự do khi rời khỏi nơi làm việc.", "Người thợ cảm thấy công việc hằng ngày như một cực hình bắt buộc để đổi lấy tiền sống qua ngày, không có chút hứng thú sáng tạo nào."],
            [5, "Nguồn gốc kinh tế trực tiếp đẻ ra sự tha hóa lao động của con người trong lịch sử là gì?", "Khi tư liệu sản xuất thuộc sở hữu riêng của một nhóm người, lao động biến thành hàng hóa làm thuê và sản phẩm do người thợ làm ra bị chủ sở hữu chiếm đoạt, từ đó nảy sinh sự tha hóa.", "Trong các công xưởng tư bản thế kỷ XIX, chủ xưởng sở hữu toàn bộ máy móc và sản phẩm nên người công nhân bị tách rời khỏi thành quả lao động của chính mình."],
            [5, "Phân biệt tính lịch sử và tính vĩnh viễn trong các thuộc tính của con người theo quan điểm duy vật lịch sử:", "Những dấu ấn gắn với sự phân chia xã hội như tính giai cấp hay ranh giới dân tộc chỉ tồn tại trong những giai đoạn lịch sử nhất định, còn đặc trưng của loài người và bản sắc riêng của mỗi cá nhân tồn tại vĩnh viễn.", "Khi xã hội loài người tiến tới giai đoạn văn minh cao không còn giai cấp đối kháng, tính giai cấp sẽ biến mất nhưng cá tính sáng tạo của từng cá nhân vẫn luôn tồn tại."],
            [5, "Tại sao chủ nghĩa duy vật lịch sử khẳng định quần chúng nhân dân giữ vai trò quyết định sự phát triển của lịch sử?", "Vì sản xuất vật chất quyết định toàn bộ đời sống xã hội mà quần chúng nhân dân chính là chủ thể trực tiếp của sản xuất vật chất, đồng thời là nguồn sáng tạo văn hóa và lực lượng chủ yếu của mọi cuộc cách mạng.", "Toàn bộ lương thực, nhà cửa, máy móc và của cải nuôi sống xã hội đều do bàn tay và khối óc của hàng triệu người lao động tạo ra hằng ngày."],
            [5, "Luận điểm nổi tiếng của C. Mác và Ph. Ăngghen về mối quan hệ biện chứng giữa hoàn cảnh và con người được diễn đạt như thế nào?", "Con người không phải là nạn nhân bất lực của số phận; hoàn cảnh sống nhào nặn nên tính cách con người bao nhiêu thì bằng hoạt động thực tiễn, con người cũng có thể cải tạo hoàn cảnh sống bấy nhiêu.", "Môi trường sống ô nhiễm ảnh hưởng đến sức khỏe người dân, nhưng chính người dân có thể trồng rừng, phân loại rác và ứng dụng công nghệ xanh để làm sạch môi trường."],
            [5, "Mối quan hệ biện chứng giữa cá nhân và xã hội theo triết học Mác – Lênin được hiểu đúng nhất như thế nào?", "Cá nhân và xã hội nương tựa vào nhau để cùng phát triển: xã hội tạo môi trường, điều kiện cho cá nhân trưởng thành, còn sự nỗ lực sáng tạo của mỗi cá nhân lại góp phần đưa xã hội tiến bộ.", "Nhà nước và cộng đồng tạo điều kiện trường lớp, học bổng cho sinh viên học tập; sau khi tốt nghiệp, sinh viên đóng góp trí tuệ và thuế khóa xây dựng đất nước."],
            [5, "Thực chất của sự nghiệp giải phóng con người trong triết học Mác – Lênin là gì?", "Giải phóng con người không phải là sự ban ơn từ bên ngoài mà là quá trình xóa bỏ tận gốc chế độ tư hữu tư liệu sản xuất để chấm dứt mọi áp bức, bóc lột và tha hóa lao động.", "Xóa bỏ chế độ người bóc lột người để mọi công dân đều có quyền làm chủ tư liệu sản xuất và bình đẳng về cơ hội phát triển."],
            [6, "Tiêu chuẩn khách quan nhất để đánh giá giá trị của một con người trong xã hội theo quan điểm Mác – Lênin là gì?", "Thước đo giá trị chân chính của một đời người không nằm ở chức tước cao hay tài sản hưởng thụ nhiều, mà ở những giá trị thiết thực người đó đã cống hiến cho cộng đồng và sự tiến bộ xã hội.", "Các nhà khoa học cống hiến vắc-xin cứu sống hàng triệu người được nhân loại tôn vinh vĩnh viễn dù cuộc sống cá nhân của họ rất giản dị."],
            [6, "Vận dụng quan điểm triết học Mác – Lênin về con người vào chiến lược phát triển con người Việt Nam hiện nay, phương án nào toàn diện và đúng đắn nhất?", "Chiến lược phát triển con người phải bồi dưỡng hài hòa cả đạo đức, trí tuệ, thể chất lẫn thẩm mỹ, đồng thời giải quyết thỏa đáng lợi ích cá nhân trong sự thống nhất với lợi ích tập thể và xã hội.", "Chương trình giáo dục phổ thông mới hướng tới phát triển toàn diện phẩm chất và năng lực học sinh, kết hợp khuyến khích sáng tạo cá nhân với tinh thần trách nhiệm cộng đồng."]
        ]
    });

})(window);
