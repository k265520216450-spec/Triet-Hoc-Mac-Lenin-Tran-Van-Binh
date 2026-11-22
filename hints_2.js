/**
- ============================================================================
- FILE DỮ LIỆU & BỘ MÁY GỢI Ý ÔN TẬP ĐA CHƯƠNG (CHƯƠNG 1 - 2 - 3)
- Tên file trên GitHub: hints_2.js (đặt cùng thư mục gốc với index.html)
- Nội dung: Trọn bộ 240 câu Chương 2 (2.1 – 2.240) + Bảng Trùm Cuối + Modal tra cứu
- ============================================================================
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

    // 2. Kho quản lý dữ liệu gợi ý đa chương (tự động ghép nối với hints_1.js, hints_3.js...)
    const ReviewHints = global.ReviewHints || {
        chapters: {
            1: null,
            2: null,
            3: null
        },

        state: {
            chapter: 2,
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

        getTopic(chapterNum, num) {
            const ch = this.chapters[chapterNum];
            if (!ch || !ch.topics.length) return `Chương ${chapterNum}`;
            const found = ch.topics.find(t => num >= t.start && num <= t.end);
            return found ? found.name : `Chương ${chapterNum}`;
        },

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
                            <div id="rhModalSub" style="font-size:12px;opacity:0.7;">Chương 2 • 240 câu (2.1 – 2.240)</div>
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
                                placeholder="Nhập số câu (VD: 15, 2.136) hoặc gõ từ khóa đề...">
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
                                        <th>Phạm trù / Quy luật</th>
                                        <th>Chốt hạ / Bản chất cốt lõi</th>
                                        <th>Câu tiêu biểu & Bẫy cần tránh</th>
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

        open(chapterNum = 2, numOrQuestionText = 1) {
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

    global.ReviewHints = ReviewHints;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectStyles);
    } else {
        injectStyles();
    }

    // =========================================================================
    // 3. NẠP DỮ LIỆU CHƯƠNG 2 (240 CÂU: 2.1 – 2.240)
    // =========================================================================
    ReviewHints.registerChapter(2, {
        title: 'Chương 2: Chủ nghĩa duy vật biện chứng',
        prefix: '2.',
        topics: [
            { start: 1, end: 79, shortLabel: 'I. Vật chất & Ý thức (2.1–2.79)', name: 'I. Vật chất, ý thức và mối quan hệ vật chất - ý thức' },
            { start: 80, end: 199, shortLabel: 'II. Phép BCDV (2.80–2.199)', name: 'II. Phép biện chứng duy vật (2 nguyên lý, 6 cặp phạm trù, 3 quy luật)' },
            { start: 200, end: 240, shortLabel: 'III. Lý luận nhận thức (2.200–2.240)', name: 'III. Lý luận nhận thức (Nhận thức, thực tiễn, chân lý)' }
        ],
        cheatSheet: [
            ['Định nghĩa vật chất (Lênin)', 'Thực tại khách quan (đối lập ý thức)', '2.3, 2.13, 2.15 (Không đồng nhất với khối lượng hay vật thể cụ thể)'],
            ['Vận động & Đứng im', 'Vận động tuyệt đối; Đứng im tương đối', '2.18, 2.19, 2.31 (Nguồn gốc vận động là mâu thuẫn tự thân 2.20)'],
            ['Nguồn gốc & Bản chất Ý thức', 'Cần: Óc người + TGKQ | Đủ: Lao động + Ngôn ngữ', '2.7, 2.8, 2.38 (Hạt nhân ý thức = Tri thức; AI không có ý thức 2.43)'],
            ['Quan hệ Vật chất – Ý thức', 'Vật chất quyết định; Ý thức tác động qua thực tiễn', '2.24, 2.26, 2.66 (Ý thức tự nó không thể trực tiếp làm đổi vật chất)'],
            ['2 Nguyên lý Phép BCDV', 'Mối liên hệ phổ biến -> Toàn diện | Phát triển -> Phát triển', '2.103, 2.106, 2.134 (Kết hợp lịch sử - cụ thể 2.135, 2.144)'],
            ['6 Cặp phạm trù cơ bản', 'Chung trong Riêng; Nội dung quyết định Hình thức', '2.88, 2.176 (Đơn nhất -> Chung qua thử nghiệm 2.149; Bản chất != Hiện tượng 2.148)'],
            ['Quy luật Lượng – Chất', 'Cách thức phát triển (Độ -> Điểm nút -> Bước nhảy)', '2.118–2.121 (Tránh nóng vội tả khuynh & bảo thủ hữu khuynh 2.180)'],
            ['Quy luật Mâu thuẫn', 'Nguồn gốc, động lực (Hạt nhân phép BCDV)', '2.123, 2.124 (Thống nhất tương đối, đấu tranh tuyệt đối 2.181)'],
            ['Quy luật Phủ định của phủ định', 'Khuynh hướng phát triển (Đường xoáy ốc, có kế thừa)', '2.127, 2.129, 2.156 (Phủ định biện chứng không xóa sạch trơn)'],
            ['Nhận thức & Thực tiễn', 'Cảm tính (3) -> Lý tính (3) -> Thực tiễn', '2.209, 2.211 (Thực tiễn là cơ sở, động lực, mục đích, tiêu chuẩn chân lý 2.214)']
        ],
        questions: [
            // ================= CHUYÊN ĐỀ I: VẬT CHẤT, Ý THỨC VÀ MỐI QUAN HỆ GIỮA CHÚNG (2.1 - 2.79) =================
            [1, "Đặc điểm chung của các quan niệm triết học duy vật thời kỳ cổ đại về vật chất là gì?", "Các nhà tư tưởng cổ đại nhìn thế giới trực quan nên thường lấy một hoặc vài chất cụ thể có sẵn trong tự nhiên như nước, lửa, không khí, nguyên tử để coi đó là khởi nguyên của vạn vật.", "Talét cho rằng khởi nguyên của thế giới là nước, Hêraclít cho là lửa, còn Đêmôcrít cho là những hạt nguyên tử nhỏ bé."],
            [1, "Đặc điểm chung của các quan niệm triết học duy vật thời kỳ cận đại về vật chất là gì?", "Chịu ảnh hưởng mạnh mẽ của cơ học cổ điển Newton, các nhà duy vật thế kỷ XVII–XVIII thường gắn vật chất với một đại lượng đo lường cơ học quen thuộc và giải thích mọi biến đổi theo kiểu máy móc.", "Người ta từng tin rằng cứ có khối lượng là vật chất và mọi chuyển động trong vũ trụ đều vận hành như chiếc đồng hồ cơ học."],
            [1, "Chọn đáp án đúng điền vào chỗ trống sau: ... là một phạm trù triết học dùng để chỉ thực tại khách quan được đem lại cho con người trong cảm giác, được cảm giác của chúng ta chép lại, chụp lại, phản ánh, và tồn tại không lệ thuộc vào cảm giác?", "Đây là mở đầu định nghĩa kinh điển của V.I. Lênin nhằm chỉ toàn bộ thế giới tồn tại bên ngoài, độc lập với suy nghĩ chủ quan của con người.", "Dù con người có nhắm mắt lại hay chưa từng biết đến một hành tinh xa xôi nào đó thì hành tinh ấy vẫn tồn tại khách quan."],
            [1, "Theo Ph. Ăngghen, một trong những phương thức tồn tại cơ bản của vật chất là gì?", "Không có vật chất nào đứng yên bất biến tuyệt đối; mọi dạng vật chất từ hạt vi mô đến thiên hà đều tồn tại thông qua sự biến đổi không ngừng.", "Các electron luôn chuyển động quanh hạt nhân nguyên tử và Trái Đất luôn tự quay quanh trục đồng thời quay quanh Mặt Trời."],
            [1, "Tính thống nhất vật chất của thế giới được hiểu như thế nào?", "Thế giới quanh ta muôn hình vạn trạng nhưng không có thế giới ma quỷ siêu nhiên nào tách rời; tất cả đều bắt nguồn từ vật chất và lịch sử loài người cũng tiến hóa từ giới tự nhiên.", "Từ hòn đá vô tri, cái cây đến bộ não con người đều được cấu tạo từ các nguyên tố hóa học và hạt cơ bản của cùng một thế giới."],
            [1, "Theo quan niệm của Triết học Mác - Lênin, ý thức là gì?", "Bộ óc người không sao chép thụ động như chiếc máy photocopy mà biết chọn lọc, khái quát và nhào nặn thông tin từ bên ngoài thành ý tưởng mới.", "Khi quan sát hình dáng chim bay, con người không chỉ ghi nhớ hình ảnh con chim mà còn sáng tạo ra bản vẽ thiết kế máy bay."],
            [1, "Điều kiện cần cho sự ra đời của ý thức là gì?", "Muốn có suy nghĩ, con người trước hết phải có cơ quan vật chất đặc biệt tinh vi để xử lý thông tin và có thế giới bên ngoài tác động vào giác quan.", "Một người bị tổn thương nặng vỏ não hoặc tách biệt hoàn toàn mọi kích thích giác quan thì không thể hình thành nhận thức bình thường."],
            [1, "Điều kiện đủ cho sự ra đời của ý thức là gì?", "Có bộ óc tự nhiên vẫn chưa đủ thành ý thức người; chính quá trình cải tạo tự nhiên bằng công cụ và giao tiếp bằng hệ thống ký hiệu tiếng nói đã đánh thức tư duy con người.", "Những đứa trẻ bị lạc vào rừng và lớn lên cùng bầy thú tuy có bộ não người nhưng không biết lao động và không có ngôn ngữ nên không có ý thức người."],
            [1, "Nội dung nào dưới đây phản ánh đầy đủ nhất về bản chất của ý thức?", "Ý thức không phải là thứ có sẵn bẩm sinh trong tự nhiên thuần túy, mà là sự phản ánh chủ động, sáng tạo của con người gắn liền với các quan hệ giao tiếp và thực tiễn cộng đồng.", "Cùng nhìn một bức tranh nhưng mỗi người có cảm nhận và sáng tạo ý tưởng khác nhau tùy vào vốn sống và tri thức xã hội của mình."],
            [1, "Ý nghĩa phương pháp luận được rút ra từ Mối quan hệ giữa vật chất và ý thức là gì?", "Vì thực tại khách quan có trước và quyết định suy nghĩ nên mọi kế hoạch phải bám sát thực tế, đồng thời phải phát huy trí tuệ, sự chủ động sáng tạo của con người.", "Khi lập kế hoạch khởi nghiệp, sinh viên phải khảo sát vốn và thị trường thực tế, đồng thời tích cực tìm giải pháp công nghệ mới để cạnh tranh."],
            [2, "Bổ sung để được một khẳng định đúng: “Định nghĩa về vật chất của V.I.Lênin...”?", "Lênin không quy vật chất về một hạt hay một chất cụ thể nào, nhưng cũng không coi vật chất chung chung tách rời thế giới hữu hình; phạm trù vật chất tồn tại thông qua vô vàn dạng cụ thể.", "Vật chất không phải là một cục vô hình nằm ngoài vũ trụ mà biểu hiện qua điện trường, từ trường, nguyên tử, nước, không khí và xã hội."],
            [2, "Theo quan điểm của chủ nghĩa duy vật biện chứng, vật chất là:", "Thuộc tính chung nhất phân biệt mọi dạng vật chất với tư duy tinh thần chính là sự tồn tại khách quan bên ngoài và không phụ thuộc vào ý muốn của con người.", "Sóng điện từ Wi-Fi mắt thường không nhìn thấy nhưng vẫn tồn tại khách quan trong không gian dù ta có biết hay không."],
            [2, "Chọn đáp án đúng về phạm trù vật chất theo quan điểm của triết học Mác - Lênin?", "Mác – Lênin vượt qua tầm nhìn hạn hẹp của người xưa (chỉ thấy nước, lửa, nguyên tử) bằng cách khái quát thuộc tính bao trùm nhất của toàn bộ thế giới vật chất.", "Dù khoa học sau này có tìm ra hạt nhỏ hơn quark đi nữa thì chúng vẫn thuộc về phạm trù thực tại khách quan."],
            [2, "Nội dung nào dưới đây trong định nghĩa vật chất của V.I. Lênin giải quyết được mặt thứ nhất của vấn đề cơ bản của triết học?", "Mặt thứ nhất hỏi giữa vật chất và ý thức cái nào có trước, cái nào quyết định; cụm từ khẳng định thực tại khách quan tồn tại độc lập không lệ thuộc cảm giác chính là câu trả lời dứt khoát.", "Con người có cảm giác nóng lạnh là do nhiệt độ môi trường bên ngoài tác động vào, chứ không phải cảm giác sinh ra nhiệt độ."],
            [2, "Chọn đáp án đúng về điểm đặc biệt và tính sáng tạo trong phương pháp định nghĩa vật chất của V.I. Lênin?", "Thông thường muốn định nghĩa một khái niệm người ta quy nó về khái niệm rộng hơn, nhưng vì đây là phạm trù rộng nhất nên Lênin phải đặt nó đối lập trực diện với phạm trù rộng thứ hai là ý thức.", "Giống như muốn định nghĩa 'ánh sáng' một cách khái quát nhất, người ta đặt nó đối lập với 'bóng tối'."],
            [2, "Hãy chỉ ra một đáp án sai khi phân tích về nội dung định nghĩa vật chất dưới đây?", "Thế giới vật chất chỉ tồn tại khách quan bên ngoài ý thức; ghép thêm từ 'thế giới chủ quan' vào định nghĩa vật chất là sai lệch hoàn toàn sang chủ nghĩa duy tâm.", "Giấc mơ hay nỗi buồn nằm trong thế giới tinh thần chủ quan của mỗi người nên không thể gọi là vật thể vật chất."],
            [2, "Khẳng định: “vật chất là phức hợp những cảm giác của con người”, đó là quan điểm của trường phái triết học nào?", "Khi cho rằng quả táo chỉ là tập hợp của cảm giác màu đỏ, vị ngọt, mùi thơm do giác quan cá nhân tạo ra thì lập trường đó tuyệt đối hóa cảm giác chủ quan của con người.", "Triết gia G. Berkeley từng tuyên bố 'tồn tại tức là được cảm giác', coi mọi vật chỉ là tổ hợp cảm giác của chủ thể."],
            [2, "Theo quan điểm của chủ nghĩa duy vật biện chứng, khẳng định nào sau đây là đúng?", "Sự biến đổi diễn ra ở mọi nơi mọi lúc không ngừng nghỉ, còn sự ổn định đứng yên chỉ xảy ra trong một mối quan hệ nhất định và trong một khoảng thời gian giới hạn.", "Hành khách ngồi yên trên ghế tàu hỏa đang chạy là đứng im tương đối so với toa tàu, nhưng đang vận động cùng đoàn tàu so với đường ray."],
            [2, "Chọn đáp án đúng nhất về vận động của vật chất:", "Không có lực lượng thần bí nào từ bên ngoài 'cú hích đầu tiên' đẩy vật chất chạy; tự thân vật chất vốn dĩ đã luôn vận động không có điểm đầu hay điểm cuối.", "Các phản ứng nhiệt hạch trong lòng Mặt Trời diễn ra tự thân do tương tác vật chất bên trong chứ không cần ai châm lửa."],
            [2, "Nguồn gốc vận động của vật chất theo triết học Mác - Lênin là:", "Mọi sự vật đều chứa đựng những yếu tố, xu hướng trái ngược nhau bên trong; chính sự tương tác qua lại giữa chúng tạo ra động lực tự thân làm sự vật biến đổi.", "Trong một nguyên tử, lực hút và lực đẩy giữa các hạt bên trong duy trì sự vận động liên tục của nguyên tử đó."],
            [2, "Quan điểm nào cho rằng, không gian, thời gian, vận động không liên quan với nhau và ở bên ngoài vật chất?", "Cách nhìn chia cắt cứng nhắc coi không gian như chiếc hộp rỗng tuếch có sẵn và thời gian trôi đều độc lập với vật chất bên trong là đặc trưng của tư duy cơ học thế kỷ XVII–XVIII.", "Cơ học cổ điển Newton từng quan niệm không gian tuyệt đối và thời gian tuyệt đối tồn tại tách rời khỏi các vật thể."],
            [2, "Bản chất của ý thức theo quan điểm của chủ nghĩa duy vật biện chứng là gì?", "Ý thức không phải là bản sao cứng nhắc hay thuần túy phản xạ sinh học, mà là quá trình bộ óc người tiếp nhận, xử lý và tái tạo thế giới bên ngoài một cách chủ động, sáng tạo.", "Từ những dữ liệu thực nghiệm rời rạc, nhà khoa học khái quát thành định luật vật lý mới giúp dự báo hiện tượng chưa xảy ra."],
            [2, "Tại sao ý thức có khả năng tác động trở lại hiện thực khách quan?", "Suy nghĩ nằm trong đầu tự nó không thể nhấc nổi một viên gạch; ý thức chỉ biến thành sức mạnh vật chất khi chỉ đạo bàn tay và công cụ của con người hành động.", "Bản vẽ thiết kế ngôi nhà trên máy tính chỉ trở thành ngôi nhà thật khi kỹ sư và công nhân thi công xây dựng ngoài công trường."],
            [2, "Theo quan điểm của chủ nghĩa duy vật biện chứng, mệnh đề nào dưới đây là đúng?", "Tư duy biện chứng không xem quan hệ này là một chiều thụ động mà thấy rõ hai chiều: vật chất sinh ra và quyết định ý thức, đồng thời ý thức có tính độc lập tương đối và tác động trở lại vật chất.", "Điều kiện kinh tế quyết định đường lối phát triển, nhưng đường lối đúng đắn lại thúc đẩy kinh tế tăng trưởng nhanh hơn."],
            [2, "Hãy xác định mệnh đề đúng về vai trò của ý thức?", "Ý thức tự nó không thể tự biến đổi thế giới bên ngoài, mà phải thông qua hành động thực tế có mục đích của con người mới cải tạo được hiện thực.", "Ý tưởng tiết kiệm điện chỉ làm giảm hóa đơn tiền điện khi con người thực sự tắt các thiết bị không cần thiết."],
            [2, "Ý thức có thể tác động ngược trở lại vật chất thông qua hoạt động nào dưới đây?", "Cầu nối duy nhất đưa những ý tưởng, kế hoạch trong bộ óc con người ra cải biến thế giới vật chất chính là hành động thực tiễn.", "Thuật toán điều khiển tự động chỉ điều tiết được dây chuyền sản xuất khi kỹ sư lập trình và triển khai trên thiết bị thực tế."],
            [2, "Chọn đáp án đúng về vai trò của vật chất đối với ý thức theo quan điểm của chủ nghĩa duy vật biện chứng?", "Vật chất đóng vai trò quyết định toàn diện: từ việc tạo ra bộ óc người (nguồn gốc), cung cấp chất liệu phản ánh (nội dung), làm thay đổi ý thức khi hoàn cảnh đổi, đến việc tạo điều kiện hiện thực hóa ý thức.", "Sự phát triển của công nghệ bán dẫn và máy tính đã tạo ra nội dung tri thức mới về khoa học dữ liệu và trí tuệ nhân tạo."],
            [3, "Xã hội loài người có được coi là một bộ phận của thế giới vật chất không?", "Dù con người hành động có mục đích và suy nghĩ, nhưng nền sản xuất vật chất và các quan hệ kinh tế xã hội vẫn vận hành theo quy luật khách quan không phụ thuộc ý muốn chủ quan, tạo nên bậc thang tổ chức vật chất cao nhất.", "Các quy luật cung – cầu trên thị trường hay quy luật quan hệ sản xuất phù hợp lực lượng sản xuất đều tồn tại khách quan như quy luật tự nhiên."],
            [3, "Khi đánh giá một công nghệ mới, việc chỉ căn cứ vào một thuộc tính riêng như khối lượng, kích thước hoặc trạng thái vật lý để kết luận “đó có phải là vật chất hay không” là chưa phù hợp vì:", "Sóng vô tuyến, trường điện từ hay dữ liệu lưu trữ trên chip không có khối lượng theo kiểu hòn đá nhưng vẫn tồn tại khách quan, nên không thể đồng nhất vật chất với một thuộc tính vật lý hẹp.", "Tín hiệu mạng 5G vô hình không cầm nắm được nhưng vẫn là dạng tồn tại vật chất khách quan truyền tải thông tin."],
            [3, "Trong nghiên cứu kỹ thuật, khi một vật liệu mới bị thay thế bởi vật liệu khác, cách hiểu nào phù hợp với quan niệm của triết học Mác – Lênin?", "Vật chất không tự nhiên sinh ra và không tự nhiên mất đi mà chỉ chuyển hóa từ dạng cụ thể này sang dạng cụ thể khác.", "Khi thay thế dây cáp đồng bằng cáp quang thủy tinh, dạng vật liệu cụ thể thay đổi nhưng thế giới vật chất vẫn bảo toàn và vận động."],
            [3, "Trong sản xuất công nghiệp, việc dây chuyền máy móc vẫn hoạt động ổn định trong một khoảng thời gian dù bên trong luôn diễn ra các quá trình cơ học, vật lý và hóa học thể hiện mối quan hệ nào?", "Sự vận hành ổn định của dây chuyền trong một ca làm việc là trạng thái cân bằng tạm thời trong một hệ quy chiếu nhất định, còn bên trong các linh kiện luôn biến đổi vật lý, hóa học không ngừng.", "Động cơ điện chạy êm ở tốc độ định mức (đứng im tương đối về trạng thái vận hành) nhưng bên trong dòng điện, từ trường và ma sát cơ học luôn biến đổi liên tục."],
            [3, "Trong quá trình nghiên cứu biến đổi khí hậu, việc theo dõi nhiệt độ, thời gian diễn biến và sự thay đổi không gian của các hiện tượng tự nhiên cho thấy không gian và thời gian được xem là:", "Mọi quá trình vật chất đều diễn ra ở một vị trí, quy mô nhất định và theo một trình tự trước sau; không gian và thời gian gắn liền với vật chất đang vận động.", "Một cơn bão nhiệt đới luôn có tọa độ địa lý, bán kính ảnh hưởng (không gian) và thời gian hình thành, tan rã xác định."],
            [3, "Khi một quá trình vật chất đã diễn ra, không thể làm cho nó quay trở lại nguyên trạng quá khứ theo cách tuyệt đối. Điều này phù hợp với đặc điểm nào của thời gian?", "Khác với không gian có 3 chiều (dài, rộng, cao) có thể đi tới đi lui, thời gian chỉ vận động theo một hướng duy nhất không thể đảo ngược.", "Một thanh thép đã bị gỉ sét theo năm tháng không thể tự quay ngược thời gian trở lại trạng thái ban đầu."],
            [3, "Khi một công nghệ mới được hình thành trên cơ sở các thành tựu của nhiều lĩnh vực khoa học khác nhau, việc này phản ánh cách hiểu nào về thế giới?", "Các lĩnh vực vật lý, hóa học, sinh học hay tin học đều nghiên cứu những mặt khác nhau của cùng một thế giới vật chất thống nhất nên thành tựu của ngành này làm cơ sở cho ngành kia.", "Chiếc điện thoại thông minh là kết tinh của vật lý chất bán dẫn, hóa học pin lithium và toán học thuật toán phần mềm."],
            [3, "Khi một sự vật được con người nhận thức dưới dạng hình ảnh tinh thần trong đầu óc, điều này thể hiện:", "Cái cây ở ngoài sân là vật chất khách quan, còn hình ảnh cái cây trong trí nhớ mỗi người mang dấu ấn chủ quan của người quan sát chứ không phải cái cây thật nằm trong đầu.", "Cùng quan sát một bản thiết kế mạch điện, kỹ sư giàu kinh nghiệm sẽ nhìn ra ngay nguyên lý hoạt động sâu hơn người mới học."],
            [3, "Khi sử dụng các hệ thống trí tuệ nhân tạo trong học tập kỹ thuật, nhận định nào phù hợp nhất với quan điểm về nguồn gốc tự nhiên của ý thức?", "Máy tính chỉ xử lý tín hiệu điện tử theo thuật toán lập trình sẵn; ý thức đích thực chỉ nảy sinh ở bộ óc sinh học bậc cao của con người khi tương tác với thế giới khách quan.", "Chatbot AI có thể giải bài tập rất nhanh nhưng không hề có cảm xúc, tự nhận thức hay hiểu ý nghĩa cuộc sống như sinh viên."],
            [3, "Trong phát triển nguồn nhân lực chất lượng cao, việc đầu tư vào giáo dục, khoa học – công nghệ và môi trường thực tiễn phù hợp nhất với quan điểm nào về nguồn gốc xã hội của ý thức?", "Tư duy và năng lực sáng tạo của con người không tự nảy sinh trong phòng kín mà trưởng thành qua học tập, lao động thực tế và trao đổi ngôn ngữ trong cộng đồng.", "Sinh viên kỹ thuật được thực hành tại xưởng trường và làm đồ án nhóm sẽ phát triển tư duy nghề nghiệp nhanh hơn nhiều so với chỉ đọc sách một mình."],
            [3, "Trong quá trình học tập và nghiên cứu kỹ thuật, việc tích lũy tri thức giúp nâng cao khả năng nhận thức và giải quyết vấn đề phù hợp với quan điểm nào về kết cấu của ý thức?", "Trong cấu trúc của ý thức (gồm tri thức, tình cảm, niềm tin, ý chí...), hiểu biết khoa học giữ vai trò cốt lõi định hướng cho tình cảm và hành động đúng đắn.", "Có nhiệt tình sửa máy nhưng thiếu kiến thức điện tử thì dễ làm hỏng mạch; có tri thức chuyên môn vững mới bắt đúng bệnh thiết bị."],
            [3, "Khi kinh nghiệm thao tác kỹ thuật được thực hiện gần như tự động sau quá trình rèn luyện lâu dài, hiện tượng này phù hợp nhất với cấp độ nào của ý thức?", "Những tri thức và kỹ năng được lặp đi lặp lại nhiều lần sẽ lắng sâu vào tầng dưới của ý thức, giúp con người thao tác thuần thục mà không cần suy nghĩ căng thẳng từng bước.", "Người thợ hàn lâu năm hay người gõ phím thành thạo có thể thao tác chuẩn xác gần như phản xạ tự nhiên mà không cần nhìn từng phím."],
            [3, "Khả năng nhận ra điểm mạnh, điểm yếu của bản thân sau quá trình học tập để từ đó lập kế hoạch khắc phục hạn chế và phát huy ưu điểm phản ánh điều gì về ý thức?", "Con người không chỉ nhận thức thế giới bên ngoài mà còn có khả năng quay vào soi chiếu, đánh giá và điều chỉnh chính bản thân mình.", "Sau kỳ thi giữa kỳ, sinh viên tự nhận thấy mình yếu phần lập trình vi điều khiển nên lập thời gian biểu luyện tập thêm mỗi tối."],
            [3, "Trong hoạt động nghiên cứu và phát triển, việc sử dụng mô hình mô phỏng để dự đoán kết quả trước khi triển khai thực tế thể hiện khả năng nào của ý thức?", "Nhờ nắm bắt quy luật khách quan, tư duy con người có thể đi trước hiện thực để hình dung trước kết quả và thử nghiệm phương án tối ưu trước khi chế tạo thật.", "Kỹ sư mô phỏng khí động học của ô tô trên phần mềm trước khi đúc khuôn chế tạo mẫu xe thực tế."],
            [3, "Trong hoạt động nghiên cứu khoa học, khi kết quả giả thuyết không phù hợp với thực nghiệm, cách xử lý nào phù hợp với phương pháp luận duy vật biện chứng?", "Hiện thực khách quan và thực nghiệm là thước đo cuối cùng; khi suy đoán chủ quan mâu thuẫn với thực tế thì phải sửa suy đoán chứ không được bóp méo số liệu.", "Khi mạch điện lắp thực tế không chạy đúng như tính toán lý thuyết ban đầu, kỹ sư phải đo kiểm lại linh kiện và sửa sơ đồ nguyên lý."],
            [3, "Việc một hệ thống trí tuệ nhân tạo (AI) có thể xử lý dữ liệu, nhận diện hình ảnh và tạo văn bản nhưng vẫn phụ thuộc vào dữ liệu, thuật toán và thiết kế của con người phù hợp với nhận định nào?", "AI dù thông minh đến đâu vẫn là công cụ phần cứng – phần mềm do con người chế tạo, không có đời sống xã hội và ý thức tự thân như con người.", "Mô hình ngôn ngữ lớn chỉ dự đoán từ tiếp theo dựa trên xác suất dữ liệu con người huấn luyện chứ không có mục đích sống riêng."],
            [3, "Khi một hệ thống trí tuệ nhân tạo xử lý dữ liệu theo thuật toán do con người thiết kế, kết luận phù hợp theo quan điểm của Triết học Mác - Lênin là:", "Công cụ tính toán chỉ bắt chước một số quy trình logic của tư duy người ở tốc độ cao, chứ không thể đồng nhất máy móc với ý thức xã hội của con người.", "Máy tính chơi cờ vua thắng đại kiện tướng nhờ tính toán hàng triệu nước đi mỗi giây nhưng không hề biết vui mừng khi thắng cuộc."],
            [3, "Khi đánh giá sự phát triển của một nền kinh tế, việc chỉ dựa vào mong muốn chủ quan mà không xem xét năng suất lao động, công nghệ và nguồn lực thực tế là biểu hiện của cách tiếp cận nào?", "Đặt ý muốn chủ quan lên trên điều kiện vật chất và quy luật khách quan là căn bệnh duy ý chí, dễ dẫn tới thất bại trong thực tiễn.", "Đặt chỉ tiêu tăng trưởng cao ngất ngưởng trong khi hạ tầng, vốn và nhân lực đều thiếu hụt."],
            [3, "Khi điều kiện vật chất thay đổi làm thay đổi nội dung nhận thức và quan niệm của con người, điều đó thể hiện:", "Đời sống vật chất và công nghệ thay đổi là nguồn gốc làm nảy sinh những khái niệm, tư duy và quan niệm mới tương ứng trong đầu óc con người.", "Sự phổ biến của điện thoại thông minh và thanh toán không tiền mặt làm thay đổi hẳn thói quen tiêu dùng và quan niệm mua sắm của người dân."],
            [3, "Trong hoạt động phát triển công nghệ, việc sử dụng các quy luật vật lý, hóa học và sinh học để tạo ra sản phẩm mới phù hợp với quan điểm nào về vai trò của ý thức?", "Khi con người nhận thức đúng quy luật tự nhiên và vận dụng vào lao động chế tạo thì tri thức sẽ biến thành sản phẩm vật chất phục vụ đời sống.", "Hiểu rõ quy luật cảm ứng điện từ, con người chế tạo ra máy phát điện và động cơ điện phục vụ sản xuất."],
            [3, "Một chương trình đào tạo kỹ thuật muốn nâng cao chất lượng nhân lực cần đồng thời phát triển cơ sở vật chất, phòng thí nghiệm, chương trình học và năng lực tư duy. Cách tiếp cận này phù hợp nhất với quan điểm nào?", "Muốn đào tạo hiệu quả phải đứng trên cả hai chân: vừa bảo đảm trang thiết bị thực hành (điều kiện vật chất), vừa đổi mới phương pháp và phát huy trí tuệ người học (ý thức).", "Trường đại học vừa đầu tư phòng thí nghiệm tự động hóa hiện đại, vừa cập nhật giáo trình và khuyến khích sinh viên nghiên cứu sáng tạo."],
            [3, "Khi điều kiện vật chất đã thay đổi nhưng cách nghĩ và phương pháp tổ chức vẫn giữ nguyên là không phù hợp. Vì vậy, việc điều chỉnh nhận thức là cần thiết vì:", "Ý thức là sự phản ánh thế giới vật chất; khi thực tế đã đổi mới mà tư duy vẫn bảo thủ bám lấy lối mòn cũ thì hành động sẽ lạc hậu, kém hiệu quả.", "Khi doanh nghiệp đã chuyển sang quản lý số mà nhân viên vẫn giữ thói quen ghi chép sổ sách thủ công rời rạc thì quy trình sẽ bị tắc nghẽn."],
            [3, "Khi cơ sở vật chất và công nghệ thay đổi nhanh chóng, yêu cầu phù hợp đối với đào tạo nguồn nhân lực kỹ thuật là:", "Không thể chỉ mua máy móc mới mà giữ giáo trình cũ, cũng không thể chỉ nói lý thuyết suông mà thiếu thiết bị; cần kết hợp đồng bộ hạ tầng vật chất với đổi mới tri thức và phương pháp.", "Khi công nghệ xe điện phát triển nhanh, các khoa cơ khí động lực phải vừa trang bị mô hình thực hành xe điện vừa cập nhật kiến thức pin và điều khiển điện tử."],
            [3, "Câu tục ngữ, thành ngữ nào sau đây phản ánh vai trò quyết định của vật chất đối với ý thức?", "Câu dân gian nhấn mạnh điều kiện sinh hoạt vật chất tối thiểu (cơm ăn áo mặc) là nền tảng để con người duy trì đạo lý và hoạt động tinh thần.", "Chỉ khi kinh tế gia đình và xã hội ấm no, đủ đầy thì việc học hành, lễ nghĩa mới có điều kiện phát triển thuận lợi."],
            [3, "Câu thành ngữ nào sau đây phản ánh sự tác động trở lại của ý thức đối với vật chất?", "Khi con người có sự đồng lòng về ý chí, tinh thần và trí tuệ, sức mạnh tinh thần ấy có thể chuyển hóa thành hành động cải tạo cả những công việc tự nhiên khó khăn nhất.", "Sự đồng lòng quyết tâm của cả tập thể giúp hoàn thành những công trình kỹ thuật phức tạp vượt tiến độ đề ra."],
            [3, "Vận dụng nội dung triết học nào dưới đây để giải thích hiện tượng: “Trẻ em ở thành thị thường năng động, thông minh hơn trẻ em ở nông thôn”?", "Môi trường sống, điều kiện dinh dưỡng, trường lớp và phương tiện tiếp cận thông tin (yếu tố vật chất) khác nhau sẽ tác động trực tiếp đến sự phát triển trí tuệ (ý thức).", "Trẻ em được tiếp xúc sớm với sách vở, công nghệ và môi trường giao tiếp rộng mở thường có phản xạ tư duy nhanh nhạy hơn."],
            [3, "Vận dụng nội dung triết học nào dưới đây để giải thích việc: “Xét về tương quan lực lượng, cơ sở vật chất có sự chênh lệch rất lớn nhưng Việt Nam đã giành thắng lợi trong cuộc đấu tranh chống lại 2 cường quốc lớn nhất thế giới là thực dân Pháp và đế quốc Mỹ ở thế kỷ XX”?", "Ý thức không thụ động lệ thuộc hoàn toàn vào vũ khí vật chất; ý chí độc lập dân tộc, tinh thần yêu nước và đường lối chiến tranh nhân dân sáng tạo đã tạo ra sức mạnh vượt trội.", "Nghệ thuật quân sự sáng tạo và lòng yêu nước nồng nàn đã giúp quân dân ta đánh bại đối phương có tiềm lực kinh tế và vũ khí hiện đại hơn gấp bội."],
            [4, "Nguyên nhân chủ yếu làm xuất hiện khủng hoảng trong quan niệm duy vật về vật chất cuối thế kỷ XIX, đầu thế kỷ XX là gì?", "Các phát minh về tia X, hiện tượng phóng xạ và điện tử chứng minh nguyên tử không phải là hạt nhỏ nhất bất biến, làm sụp đổ quan niệm cũ đồng nhất vật chất với nguyên tử.", "Khi J.J. Thomson tìm ra điện tử năm 1897, nhiều nhà vật lý hoang mang tưởng rằng 'vật chất tiêu tan mất' vì họ từng coi nguyên tử là giới hạn cuối cùng."],
            [4, "Bản chất khoa học của định nghĩa vật chất của V.I.Lênin được thể hiện rõ nhất ở điểm nào?", "Thay vì liệt kê từng vật thể cụ thể dễ bị lỗi thời khi khoa học tiến bộ, Lênin chỉ ra thuộc tính bản chất nhất: tồn tại khách quan độc lập với ý thức.", "Dù sau này vật lý học có khám phá ra vật chất tối hay năng lượng tối thì chúng vẫn nằm trọn trong định nghĩa thực tại khách quan của Lênin."],
            [4, "Mối quan hệ giữa các hình thức vận động cơ bản của vật chất được phản ánh đúng nhất ở nhận định nào?", "Năm hình thức vận động sắp xếp từ thấp đến cao (cơ -> lý -> hóa -> sinh -> xã hội); hình thức cao nảy sinh từ hình thức thấp và chứa đựng các hình thức thấp bên trong.", "Trong hoạt động sống của cơ thể người (vận động sinh học) luôn bao hàm các phản ứng hóa học trao đổi chất, xung điện vật lý và chuyển động cơ học."],
            [4, "Nhận định nào phản ánh đúng nhất mối quan hệ giữa không gian, thời gian và vật chất?", "Không có vật chất nào tồn tại ngoài không gian – thời gian, và ngược lại không có không gian – thời gian trống rỗng tách rời vật chất.", "Thuyết tương đối của Einstein đã chứng minh không gian và thời gian gắn bó mật thiết với sự phân bố và vận động của vật chất."],
            [4, "Chọn đáp án đúng nhất về nguồn gốc tự nhiên của ý thức theo quan điểm của chủ nghĩa duy vật biện chứng.", "Chỉ có bộ óc người mà bị cô lập khỏi thế giới bên ngoài thì không có gì để phản ánh; ngược lại thế giới bên ngoài mà không tác động vào bộ óc người thì cũng không sinh ra ý thức.", "Ánh sáng và âm thanh từ môi trường tác động vào mắt, tai truyền lên vỏ não tạo nên hình ảnh nhận thức của con người."],
            [4, "Chọn đáp án đúng nhất về nguồn gốc xã hội của ý thức theo quan điểm của chủ nghĩa duy vật biện chứng.", "Chính hoạt động chế tạo công cụ sản xuất và nhu cầu trao đổi thông tin trong cộng đồng đã biến bộ não vượn thành bộ não người có tư duy.", "Trong quá trình cùng nhau săn bắt và chế tác công cụ đá, người nguyên thủy hình thành ngôn ngữ giao tiếp và tư duy trừu tượng."],
            [4, "Mối quan hệ nào giải thích trực tiếp nhất vai trò của ngôn ngữ đối với ý thức?", "Tư duy không thể tồn tại trần trụi nếu không có từ ngữ, ký hiệu để định hình ý nghĩ, lưu trữ tri thức qua các thế hệ và truyền đạt cho người khác.", "Nhờ có chữ viết và thuật ngữ khoa học mà các định luật vật lý từ hàng trăm năm trước được lưu giữ và truyền dạy cho sinh viên ngày nay."],
            [4, "Bản chất của ý thức được phản ánh đầy đủ nhất trong nhận định nào?", "Bộ óc người tiếp nhận thông tin từ thế giới bên ngoài nhưng luôn lọc qua lăng kính nhu cầu, kinh nghiệm chủ quan để cải biến và sáng tạo ra cái mới.", "Từ hiện tượng quả táo rơi, Newton không chỉ thấy vật rơi xuống đất mà khái quát thành định luật vạn vật hấp dẫn."],
            [4, "Phân tích nào làm rõ nhất sự khác nhau về bản chất giữa trí tuệ nhân tạo và ý thức con người?", "AI xử lý bit dữ liệu theo chương trình có sẵn, còn ý thức người là sản phẩm tiến hóa sinh học – xã hội gắn với lao động, ngôn ngữ, cảm xúc và mục đích tự thân.", "Một robot hàn tự động làm việc chính xác 24/24 nhưng không có ý thức nghề nghiệp hay khát vọng sáng tạo như người kỹ sư thiết kế ra nó."],
            [4, "Mối quan hệ giữa vật chất và ý thức được phân tích đúng nhất theo quan điểm duy vật biện chứng là gì?", "Vật chất giữ vai trò gốc sinh ra và quyết định nội dung ý thức, nhưng ý thức không thụ động mà thông qua thực tiễn có thể thúc đẩy hoặc kìm hãm sự phát triển của vật chất.", "Điều kiện kinh tế quyết định mức đầu tư cho khoa học, ngược lại các phát minh khoa học lại tạo ra bước nhảy vọt cho nền kinh tế."],
            [4, "Theo anh (chị), nhận định nào sau đây không phù hợp với quan điểm của chủ nghĩa duy vật biện chứng?", "Chủ nghĩa duy vật khẳng định vật chất có trước và sinh ra ý thức; cho rằng ý thức tồn tại độc lập không do vật chất sinh ra là lập trường duy tâm.", "Quan niệm cho rằng 'linh hồn hay ý niệm có trước vũ trụ và tạo ra thế giới vật chất' đi ngược lại chủ nghĩa duy vật biện chứng."],
            [4, "Theo chủ nghĩa duy vật biện chứng, phát biểu nào sau đây không đúng về sự tác động trở lại của ý thức đối với vật chất?", "Ý thức tự thân nằm trong đầu óc không thể tự biến đổi thế giới bên ngoài nếu thiếu bàn tay, công cụ và hành động thực tiễn của con người.", "Một ý tưởng sáng chế dù hay đến đâu nếu chỉ nằm trong suy nghĩ mà không chế tạo thử nghiệm thì không thể tạo ra sản phẩm."],
            [5, "Phương án nào đánh giá đúng nhất giá trị phương pháp luận của định nghĩa vật chất của Lênin?", "Định nghĩa này giải phóng khoa học khỏi sự bế tắc khi mô hình cũ sụp đổ, cổ vũ các nhà khoa học tự tin khám phá sâu hơn vào cấu trúc vô tận của thế giới vật chất.", "Nhờ định nghĩa của Lênin, vật lý hiện đại không bị rơi vào duy tâm khi khám phá ra hạt cơ bản, phản vật chất hay sóng hấp dẫn."],
            [5, "Phương án nào phù hợp nhất với quan niệm về tính vĩnh cửu và vô tận của không gian và thời gian?", "Mỗi sự vật cụ thể có giới hạn kích thước và tuổi thọ nhất định, nhưng toàn bộ thế giới vật chất vận động thì không có điểm khởi đầu hay kết thúc tuyệt đối.", "Một ngôi sao có lúc sinh ra và tắt đi, nhưng vũ trụ vật chất thì tồn tại vĩnh viễn và vô tận trong không gian, thời gian."],
            [5, "Giải pháp nào tối ưu nhất để khắc phục bệnh chủ quan, duy ý chí của con người?", "Muốn không rơi vào ảo tưởng áp đặt ý muốn cá nhân, mọi quyết định phải bắt đầu từ khảo sát thực tế khách quan và tuân theo quy luật.", "Trước khi mở rộng dây chuyền sản xuất, doanh nghiệp phải khảo sát sức mua thực tế của thị trường và năng lực tài chính hiện có."],
            [5, "Quan điểm nào dưới đây phù hợp nhất với phương pháp luận của chủ nghĩa duy vật biện chứng trong việc khắc phục tư tưởng bảo thủ, trì trệ?", "Ngược lại với duy ý chí là thái độ ỷ lại, thụ động chờ đợi hoàn cảnh; muốn vượt qua trì trệ phải chủ động đổi mới tư duy và sáng tạo dựa trên quy luật khách quan.", "Không ngồi chờ thị trường tự phục hồi mà chủ động nghiên cứu cải tiến mẫu mã, ứng dụng công nghệ mới phù hợp xu thế tiêu dùng."],
            [5, "Trong quá trình triển khai chuyển đổi số quốc gia, phương án nào phản ánh đầy đủ nhất quan điểm của chủ nghĩa duy vật biện chứng về mối quan hệ giữa vật chất và ý thức?", "Chuyển đổi số thành công đòi hỏi vừa xây dựng hạ tầng viễn thông, trung tâm dữ liệu (vật chất), vừa đổi mới tư duy quản trị và năng lực số của con người qua thực tiễn.", "Triển khai chính phủ số cần đồng thời đầu tư máy chủ, đường truyền internet và tập huấn kỹ năng số cho cán bộ, người dân."],
            [5, "Theo phương pháp luận của triết học Mác – Lênin, phương án nào phản ánh đầy đủ nhất việc kết hợp đúng vai trò của vật chất và ý thức trong phát triển?", "Phải chống cả hai thái cực sai lầm: vừa tôn trọng điều kiện thực tế và quy luật khách quan, vừa phát huy tối đa trí tuệ, tính chủ động sáng tạo qua hành động thực tiễn.", "Trong học tập đại học, sinh viên vừa căn cứ vào chương trình đào tạo và thời gian thực tế, vừa chủ động sáng tạo phương pháp tự học hiệu quả."],
            [5, "Trong bối cảnh đẩy mạnh công nghiệp hóa, hiện đại hóa và hội nhập quốc tế, phương án nào dưới đây đánh giá đúng và đầy đủ nhất việc vận dụng nguyên lý “Ý thức không bao giờ có thể là cái gì khác hơn là tồn tại được ý thức...” vào thực tiễn cách mạng Việt Nam hiện nay?", "Luận điểm này khẳng định đời sống tinh thần phản ánh đời sống vật chất, nên phải lấy phát triển kinh tế làm nền tảng vật chất đồng thời chăm lo văn hóa, giáo dục và con người.", "Việt Nam vừa tập trung phát triển công nghiệp, hạ tầng hiện đại, vừa đầu tư giáo dục đào tạo nguồn nhân lực chất lượng cao và giữ gìn bản sắc văn hóa."],
            [5, "Trong quá trình vận dụng quan điểm của chủ nghĩa duy vật biện chứng về sự tác động trở lại của ý thức đối với vật chất vào hoạt động thực tiễn, nhận định nào dưới đây KHÔNG thể hiện đúng bản chất của quan điểm này?", "Nhận thức đúng mới chỉ là điều kiện định hướng; nếu thiếu nguồn lực vật chất và tổ chức thực hiện kém thì kết quả thực tiễn vẫn không thể tự động thành công.", "Có bản thiết kế cầu đường chuẩn xác nhưng thiếu vốn, vật liệu và thi công ẩu thì công trình vẫn không thể hoàn thành đạt chuẩn."],
            [5, "Từ quan điểm: “Thực chất, nói đến vai trò của ý thức là nói đến tính năng động, sáng tạo của con người. Tính năng động, sáng tạo ấy lý giải vì sao cùng xuất phát điểm và điều kiện như nhau nhưng người này thì tiến lên, kẻ kia lại thụt lùi.”, nhận định nào dưới đây KHÔNG phù hợp nhất với quan điểm của chủ nghĩa duy vật biện chứng?", "Sự nỗ lực sáng tạo tạo nên khác biệt giữa các cá nhân trong cùng hoàn cảnh, nhưng không bao giờ biến ý thức thành lực lượng tuyệt đối thay thế hoàn toàn điều kiện vật chất.", "Hai sinh viên cùng điều kiện học tập như nhau, người chủ động tự học sẽ tiến bộ hơn, nhưng cả hai vẫn phải dựa trên nền tảng tri thức và cơ sở vật chất thực tế."],
            [6, "Nếu anh (chị) được giao xây dựng mô hình phát triển năng lực kỹ thuật số cho sinh viên Trường Đại học Kỹ thuật Công nghiệp, phương án tổng thể nào dưới đây cần được ưu tiên lựa chọn nhất theo quan điểm của chủ nghĩa duy vật biện chứng về mối quan hệ giữa vật chất và ý thức?", "Mô hình tối ưu phải kết hợp đồng bộ hai mặt: đầu tư phòng lab, thiết bị công nghệ (cơ sở vật chất) đi đôi với đổi mới chương trình, kỹ năng và tư duy sáng tạo của sinh viên.", "Nhà trường trang bị hệ thống thực hành IoT, CNC hiện đại đồng thời tổ chức các câu lạc bộ sáng tạo kỹ thuật và cập nhật học phần công nghệ số."],
            [6, "Nếu anh (chị) được giao đề xuất mô hình phát triển năng lực tự học cho sinh viên kỹ thuật, phương án nào dưới đây nên được lựa chọn nhất?", "Tự học bền vững cần kết hợp nền tảng kiến thức và tài liệu chuẩn (cơ sở khách quan) với ý thức tự giác, mục tiêu rõ ràng và thực hành giải quyết bài toán thực tế.", "Sinh viên kết hợp giáo trình, phòng thí nghiệm của trường với kế hoạch tự học mỗi ngày và tham gia làm dự án kỹ thuật thực tế."],
            [6, "Nếu anh (chị) được giao thiết kế mô hình phát triển năng lực giải quyết các vấn đề mới cho sinh viên kỹ thuật, phương án nào dưới đây cần được ưu tiên lựa chọn nhất theo quan điểm về sự thống nhất giữa phản ánh và sáng tạo của ý thức?", "Quy trình tư duy sáng tạo khoa học luôn đi theo vòng lặp: khảo sát dữ liệu thực tế (phản ánh) -> đề xuất giải pháp mới (sáng tạo) -> thử nghiệm thực tế -> cải tiến liên tục.", "Khi thiết kế robot tự hành, nhóm sinh viên đo đạc địa hình thực tế, lập thuật toán mới, chạy thử trên sa hình và hiệu chỉnh theo sai số đo được."],
            [6, "Nếu anh (chị) được giao thiết kế mô hình kết nối đào tạo kỹ thuật với doanh nghiệp nhằm phát triển ý thức nghề nghiệp và năng lực của sinh viên, phương án nào dưới đây cần được ưu tiên lựa chọn nhất theo quan điểm của chủ nghĩa Mác – Lênin về vai trò của lao động đối với sự hình thành và phát triển ý thức?", "Ý thức nghề nghiệp chỉ hình thành sâu sắc khi sinh viên trực tiếp tham gia lao động giải quyết bài toán sản xuất thật có sản phẩm đầu ra và phản hồi đánh giá cụ thể.", "Sinh viên năm cuối tham gia kỳ thực tập kỹ sư tại nhà máy, trực tiếp thiết kế – vận hành dây chuyền theo đơn đặt hàng và nghiệm thu sản phẩm."],

            // ================= CHUYÊN ĐỀ II: PHÉP BIỆN CHỨNG DUY VẬT (2.80 - 2.199) =================
            [1, "Điền vào chỗ trống: “... là sự thống nhất giữa thế giới quan duy vật biện chứng và phương pháp luận biện chứng duy vật; giữa lý luận nhận thức và lôgíc biện chứng; được chứng minh bằng sự phát triển của khoa học tự nhiên trước đó”.", "Đây là tên gọi học thuyết cốt lõi của C. Mác và Ph. Ăngghen nghiên cứu những quy luật vận động, phát triển phổ biến nhất của tự nhiên, xã hội và tư duy.", "Học thuyết này xem xét mọi sự vật trong mối liên hệ ràng buộc lẫn nhau và luôn vận động, phát triển không ngừng."],
            [1, "Thế nào là biện chứng khách quan?", "Bản thân thế giới tự nhiên và xã hội vốn dĩ đã liên hệ, vận động và biến đổi không ngừng dù con người có quan sát hay không.", "Sự biến đổi của khí hậu, quá trình tiến hóa sinh giới hay sự vận động của nền kinh tế thị trường đều diễn ra khách quan."],
            [1, "Thế nào là biện chứng chủ quan?", "Khi bộ óc con người phản ánh đúng sự vận động, liên hệ của thế giới bên ngoài vào trong tư duy và khái niệm thì đó là biện chứng của quá trình nhận thức.", "Quá trình tư duy của nhà khoa học đi từ chưa biết đến biết, từ biết ít đến biết nhiều và điều chỉnh khái niệm theo thực tiễn."],
            [1, "“Mối liên hệ” là gì?", "Các sự vật không đứng cô lập mà luôn ràng buộc, quy định và tác động qua lại làm biến đổi lẫn nhau.", "Nhiệt độ, áp suất và thể tích của một khối khí luôn ràng buộc lẫn nhau: nhiệt độ tăng thì áp suất hoặc thể tích biến đổi theo."],
            [1, "Tính khách quan của mối liên hệ là gì?", "Sự ràng buộc giữa các sự vật là cái vốn có của bản thân thế giới vật chất thống nhất, không phải do con người tự nghĩ ra hay gán ghép vào.", "Mối liên hệ giữa lực hấp dẫn của Mặt Trăng và hiện tượng thủy triều trên Trái Đất tồn tại khách quan hàng tỷ năm."],
            [1, "Chọn cụm từ thích hợp vào dấu ... để được luận điểm đúng của chủ nghĩa duy vật biện chứng: “Khi xem xét các sự vật hiện tượng, các quan điểm toàn diện, quan điểm phát triển, quan điểm lịch sử cụ thể phải...”.", "Ba nguyên tắc phương pháp luận này gắn bó hữu cơ bổ sung cho nhau trong nhận thức khoa học, không thể chia cắt hay đối lập nhau.", "Khi đánh giá một dự án kỹ thuật, ta vừa xét đủ các mặt kinh tế – kỹ thuật (toàn diện), vừa xét xu hướng tương lai (phát triển) và hoàn cảnh triển khai (lịch sử - cụ thể)."],
            [1, "Chọn cụm từ thích hợp vào dấu ... để được luận điểm của chủ nghĩa duy vật biện chứng: “Nguyên lý về mối liên hệ phổ biến và nguyên lý về sự phát triển phải...”.", "Hai nguyên lý này liên hệ mật thiết với nhau (nhờ có liên hệ tác động qua lại mới tạo ra sự phát triển) nhưng mỗi nguyên lý giải quyết một phương diện riêng chứ không đồng nhất.", "Nguyên lý mối liên hệ phổ biến trả lời sự vật tồn tại như thế nào trong không gian quan hệ, còn nguyên lý phát triển chỉ ra xu hướng vận động theo thời gian."],
            [1, "Chọn cụm từ thích hợp vào dấu ... để được định nghĩa về phạm trù: “phạm trù là những ... phản ánh những mặt, những thuộc tính, những mối liên hệ chung, cơ bản nhất của các sự vật và hiện tượng thuộc một lĩnh vực nhất định”.", "So với các khái niệm thông thường chỉ một nhóm vật hẹp, phạm trù triết học có độ khái quát bao trùm rộng lớn nhất.", "Các thuật ngữ như 'vật chất', 'ý thức', 'nguyên nhân', 'kết quả', 'bản chất', 'hiện tượng' đều là những khái niệm rộng nhất."],
            [1, "Chọn đáp án thích hợp vào dấu ...: “Cái ... chỉ tồn tại trong cái ... thông qua cái riêng mà biểu hiện sự tồn tại của mình”.", "Không có 'cái cây nói chung' hay 'con người nói chung' lơ lửng ngoài đời thực; đặc điểm chung chỉ nằm bên trong từng sự vật cá biệt.", "Thuộc tính dẫn điện của kim loại (cái chung) chỉ tồn tại bên trong từng sợi dây đồng, thanh nhôm hay miếng bạc cụ thể (cái riêng)."],
            [1, "Chọn đáp án thích hợp vào dấu ...: “Cái ... là cái toàn bộ, phong phú hơn cái ...”.", "Mỗi sự vật cụ thể không chỉ chứa các đặc điểm chung giống loài khác mà còn có vô vàn nét riêng độc đáo nên nó đầy đặn, đa dạng hơn.", "Một sinh viên cụ thể (cái riêng) vừa có đặc điểm chung của sinh viên Việt Nam, vừa có quê quán, tính cách và sở thích riêng nên phong phú hơn khái niệm 'sinh viên'."],
            [1, "Chọn đáp án thích hợp vào dấu ...: “Cái ... là cái bộ phận, nhưng sâu sắc hơn cái ...”.", "Tuy chỉ là một phần thuộc tính nằm trong sự vật cụ thể nhưng nó phản ánh những quy luật, bản chất lặp lại ổn định của cả một lớp sự vật.", "Quy luật cung – cầu (cái chung) tuy chỉ là một mặt của nền kinh tế Việt Nam (cái riêng) nhưng phản ánh bản chất sâu sắc của mọi nền kinh tế hàng hóa."],
            [1, "Chọn đáp án thích hợp vào dấu ...: “Cái ... và cái ... có thể chuyển hóa lẫn nhau trong quá trình phát triển của sự vật”.", "Cái mới tiến bộ ban đầu chỉ xuất hiện lẻ tẻ ở một chỗ, sau đó nhân rộng thành phổ biến; ngược lại cái cũ phổ biến dần thu hẹp thành tàn dư cá biệt.", "Một sáng kiến cải tiến kỹ thuật ban đầu chỉ có ở một phân xưởng (cái đơn nhất), sau được áp dụng rộng rãi thành tiêu chuẩn toàn ngành (cái chung)."],
            [1, "Chọn đáp án thích hợp vào chỗ trống: “Ngẫu nhiên là cái không do ...(1)... kết cấu vật chất quyết định, mà do ...(2)... quyết định”.", "Cái tất nhiên bắt nguồn từ bản chất bên trong sự vật, còn cái ngẫu nhiên nảy sinh do sự giao thoa bất ngờ của các yếu tố tác động từ bên ngoài.", "Hạt thóc giống tốt nảy mầm là do cấu trúc di truyền bên trong (tất nhiên), còn việc bị chim sà xuống ăn mất là do tác động bên ngoài (ngẫu nhiên)."],
            [1, "Chọn đáp án thích hợp vào dấu ...: “Nội dung là ... những mặt, những yếu tố, những quá trình tạo nên sự vật”.", "Nội dung bao gồm toàn bộ các bộ phận, yếu tố vật chất và quá trình cấu thành nên bản thân sự vật đó.", "Nội dung của một cuốn giáo trình là toàn bộ hệ thống kiến thức, khái niệm và lập luận được trình bày bên trong."],
            [1, "Chọn đáp án thích hợp vào dấu ...: “Hình thức là hệ thống ... giữa các yếu tố của sự vật”.", "Hình thức không chỉ là vỏ bọc bề ngoài mà chủ yếu là phương thức tổ chức, sắp xếp và liên kết tương đối bền vững giữa các yếu tố bên trong nội dung.", "Cách sắp xếp các nguyên tử carbon tạo nên cấu trúc tinh thể khác nhau (hình thức) biến cùng nguyên tố carbon thành than chì mềm hoặc kim cương siêu cứng."],
            [1, "Chọn đáp án thích hợp vào chỗ trống: “Bản chất là tổng hợp tất cả những mặt, những mối liên hệ ...(1)... bên trong sự vật, quy định sự ...(2)... của sự vật”.", "Bản chất không phải cái thoáng qua bên ngoài mà là những mối liên hệ cốt lõi, tất yếu, tương đối ổn định chi phối toàn bộ sự vận động và phát triển của sự vật.", "Bản chất của giai cấp tư sản là chiếm hữu tư nhân tư liệu sản xuất và thu giá trị thặng dư từ lao động làm thuê."],
            [1, "Chọn đáp án thích hợp vào dấu ...: “Hiện tượng là ... của bản chất”.", "Bản chất ẩn giấu bên trong và bộc lộ ra bên ngoài cho giác quan con người quan sát được thông qua vô số biểu hiện cụ thể.", "Màu sắc biến đổi khi đun nóng hay kết tủa xuất hiện trong ống nghiệm là biểu hiện ra bên ngoài của bản chất phản ứng hóa học."],
            [1, "Chọn đáp án thích hợp vào dấu ...: “Khả năng là phạm trù triết học chỉ ... khi có các điều kiện thích hợp”.", "Khả năng không phải chuyện hoang đường không thể xảy ra, mà là những mầm mống, xu hướng tiềm tàng chưa thành sự thật nhưng sẽ nảy sinh khi đủ điều kiện.", "Trong quả trứng gà đã thụ tinh có tiềm năng nở thành gà con nếu được ấp ở nhiệt độ và độ ẩm thích hợp."],
            [1, "Chọn đáp án thích hợp vào dấu ...: “Hiện thực là phạm trù triết học chỉ cái...”.", "Phân biệt với khả năng là cái chưa có trong thực tế, hiện thực chỉ toàn bộ những gì đang tồn tại thực sự trong tự nhiên và xã hội.", "Ngôi trường đại học, sinh viên đang ngồi học và các phòng thí nghiệm đang hoạt động là những gì hiện có đang tồn tại."],
            [1, "Chọn đáp án thích hợp vào chỗ trống: “Chất là phạm trù triết học dùng để chỉ ...(1)... khách quan ...(2)... là sự thống nhất hữu cơ những thuộc tính làm cho sự vật là nó chứ không là cái khác”.", "Mỗi sự vật có những đặc tính cơ bản gắn liền với sự tồn tại của nó giúp ta phân biệt sự vật này với sự vật khác.", "Tính dẫn điện, ánh kim và tính dẻo là những thuộc tính cơ bản làm nên chất của kim loại, phân biệt với phi kim."],
            [1, "Chọn đáp án thích hợp vào chỗ trống: “Lượng là phạm trù triết học dùng để chỉ ...(1)... của sự vật về mặt ...(2)... của sự vận động và phát triển cũng như các thuộc tính của sự vật”.", "Lượng biểu thị mặt đo đếm, kích cỡ, tốc độ nhanh chậm hay trình độ cao thấp vốn có của sự vật.", "Chiều cao 1m70, cân nặng 56kg hay tốc độ xử lý 3.5 GHz của chip đều là những thông số về lượng."],
            [2, "Bổ sung để được một nhận định đúng theo phép biện chứng duy vật: “Phát triển là xu hướng vận động ...”?", "Không phải mọi sự thay đổi đều là phát triển; phát triển chỉ dùng để chỉ khuynh hướng vận động đi lên từ trình độ thấp đến trình độ cao, hoàn thiện hơn.", "Sự tiến hóa của các thế hệ máy tính từ máy dùng đèn điện tử cồng kềnh lên vi mạch bán dẫn siêu nhỏ hiệu năng cao."],
            [2, "Theo phép biện chứng duy vật, luận điểm nào sau đây là sai?", "Bản chất và hiện tượng thống nhất nhưng không đồng nhất; hiện tượng có thể giả tạo đánh lừa cảm giác, nên muốn hành động đúng phải dựa vào bản chất chứ không chạy theo hiện tượng bề ngoài.", "Thấy một người nói lời hoa mỹ (hiện tượng) mà vội tin ngay không tìm hiểu hành động thực chất bên trong (bản chất) sẽ dễ bị lừa."],
            [2, "“Mọi sự vật, hiện tượng luôn gắn bó trong mối liên hệ phổ biến.”. Quan điểm này phản ánh nội dung nguyên lý nào của triết học Mác-Lênin?", "Khẳng định không có sự vật nào tồn tại cô lập tuyệt đối mà đều nằm trong mạng lưới tác động qua lại chằng chịt với các sự vật khác.", "Sự phát triển của ngành công nghiệp ô tô điện kéo theo sự phát triển của ngành khai thác pin lithium, trạm sạc và lưới điện thông minh."],
            [2, "Câu thành ngữ “Một con ngựa đau, cả tàu bỏ cỏ” tương đồng với nội dung triết học nào dưới đây?", "Sự biến đổi trạng thái của một cá thể trong đàn kéo theo sự ảnh hưởng dây chuyền tới toàn bộ các cá thể còn lại trong tập thể.", "Trong một dây chuyền sản xuất tự động, chỉ cần một cảm biến bị lỗi là toàn bộ hệ thống băng chuyền phía sau phải dừng hoạt động."],
            [2, "Câu thành ngữ nào dưới đây có nội dung tương đồng với nguyên lý về mối liên hệ phổ biến trong phép biện chứng duy vật?", "Tác động vào một mắt xích nhỏ nhưng lại gây ra sự rung chuyển dây chuyền sang các sự vật, hiện tượng khác có liên quan.", "Khi giá xăng dầu thế giới tăng mạnh lập tức kéo theo giá cước vận tải, giá thực phẩm và chi phí sinh hoạt đều biến động theo."],
            [2, "Khi nhìn vào sự thay đổi của công nghệ từ 2G -> 3G -> 4G -> 5G, chúng ta thấy biểu hiện rõ của nguyên lý nào?", "Quá trình nâng cấp liên tục từ tốc độ truyền dữ liệu thấp lên tốc độ siêu cao và độ trễ cực thấp thể hiện khuynh hướng đi lên không ngừng của công nghệ.", "Từ mạng 2G chỉ nghe gọi nhắn tin tiến lên 5G kết nối vạn vật IoT và điều khiển phẫu thuật từ xa."],
            [2, "“Cái riêng, Cái chung”; “Nguyên nhân, Kết quả”; “Tất nhiên, Ngẫu nhiên”; “Nội dung, Hình thức”; “Bản chất, Hiện tượng”; “Khả năng, Hiện thực” đó là các ... của triết học Mác - Lênin.", "Đây là 6 cặp khái niệm triết học cơ bản nhất phản ánh những mối liên hệ phổ biến lặp đi lặp lại trong toàn bộ thế giới.", "Trong mọi ngành khoa học kỹ thuật hay xã hội, các nhà nghiên cứu đều dùng 6 cặp phạm trù cơ bản này để phân tích vấn đề."],
            [2, "Các phạm trù được hình thành do đâu?", "Phạm trù không phải có sẵn từ trước khi có con người hay bẩm sinh trong đầu mà được tư duy con người khái quát dần thông qua quá trình lao động và nhận thức thế giới.", "Qua hàng nghìn năm quan sát gieo hạt nảy mầm, đun nước sôi, con người mới khái quát nên các phạm trù 'nguyên nhân', 'kết quả', 'chất', 'lượng'."],
            [2, "Cái riêng là một phạm trù triết học được hiểu là?", "Dùng để chỉ một chỉnh thể sự vật, hiện tượng hay một quá trình xác định, độc lập tương đối với các sự vật khác.", "Trường Đại học Kỹ thuật Công nghiệp Thái Nguyên là một cái riêng trong hệ thống các trường đại học kỹ thuật ở Việt Nam."],
            [2, "Cái đơn nhất là một phạm trù triết học được hiểu là?", "Chỉ những đặc điểm, thuộc tính cá biệt chỉ xuất hiện ở duy nhất một sự vật trong một quan hệ xác định mà không lặp lại ở sự vật khác.", "Mã số sinh viên K265520216450 là cái đơn nhất chỉ thuộc về một sinh viên duy nhất trong toàn trường."],
            [2, "Phạm trù triết học nào dùng để chỉ những thuộc tính chung, không những có ở một kết cấu vật chất nhất định mà còn được lặp lại trong nhiều sự vật, hiện tượng hay quá trình riêng lẻ khác?", "Chỉ những mặt, thuộc tính giống nhau được lặp đi lặp lại ở nhiều sự vật riêng lẻ khác nhau.", "Cấu trúc gồm hạt nhân mang điện dương và lớp vỏ electron mang điện âm là đặc điểm lặp lại ở mọi nguyên tử hóa học."],
            [2, "Ở con người, yếu tố nào được coi là cái đặc thù, đơn nhất để phân biệt giữa người này với người khác?", "Tên gọi hay nhóm máu có thể trùng lặp giữa hàng triệu người, nhưng đường vân trên đầu ngón tay mỗi người là độc bản không trùng với bất kỳ ai.", "Cơ quan công an sử dụng dữ liệu sinh trắc học vân tay trên căn cước công dân để định danh chính xác từng công dân."],
            [2, "Phạm trù nhằm chỉ sự tác động lẫn nhau giữa các mặt trong một sự vật hoặc giữa các sự vật với nhau, gây ra một biến đổi nào đó, gọi là gì?", "Cái có trước, đóng vai trò tác động tương tác để sinh ra một sự biến đổi mới.", "Sự ma sát cơ học giữa hai bề mặt kim loại không được bôi trơn gây ra hiện tượng sinh nhiệt và mài mòn chi tiết máy."],
            [2, "Phạm trù nhằm chỉ những biến đổi xuất hiện do tác động lẫn nhau giữa các mặt trong một sự vật hoặc giữa các sự vật với nhau gây ra, gọi là gì?", "Cái xuất hiện sau, là sản phẩm biến đổi được sinh ra từ sự tương tác của các yếu tố trước đó.", "Hiện tượng hiệu ứng nhà kính làm Trái Đất nóng lên là biến đổi xuất hiện sau quá trình phát thải khí CO2 quá mức."],
            [2, "Có rất nhiều loại nguyên nhân, như: nguyên nhân cơ bản, nguyên nhân chủ yếu, nguyên nhân bên trong, nguyên nhân bên ngoài, nguyên nhân chủ quan, nguyên nhân khách quan... Điều đó chứng tỏ:", "Trong thực tế, một hiện tượng xảy ra hiếm khi chỉ do một tác nhân đơn lẻ mà thường là sự tổng hợp của nhiều loại tác nhân khác nhau cùng tác động.", "Một vụ ùn tắc giao thông có thể do đồng thời nhiều nguyên nhân: mật độ xe đông, đường hẹp, trời mưa và ý thức vượt đèn đỏ."],
            [2, "Cái do các nhân tố bên ngoài, do sự ngẫu hợp của nhiều hoàn cảnh bên ngoài quyết định, gọi là gì?", "Điều xảy ra không theo quy luật nội tại cố định mà do sự gặp gỡ tình cờ của nhiều yếu tố bên ngoài tạo nên.", "Trên đường đi học đúng giờ mọi ngày nhưng hôm nay bỗng gặp xe tải hỏng chắn ngang đường gây tắc đường đột xuất."],
            [2, "Luận điểm nào sau đây là luận điểm của chủ nghĩa duy vật biện chứng về bản chất, hiện tượng?", "Cả quy luật cốt lõi bên trong lẫn biểu hiện bên ngoài đều thuộc về bản thân sự vật khách quan chứ không phải do con người tưởng tượng ra.", "Tính dẫn điện của đồng (bản chất) và việc bóng đèn sáng lên khi nối dây đồng vào nguồn điện (hiện tượng) đều tồn tại khách quan."],
            [2, "Vai trò của quy luật từ những sự thay đổi dần về lượng dẫn đến sự thay đổi về chất và ngược lại (quy luật lượng – chất)?", "Trong 3 quy luật cơ bản của phép biện chứng, quy luật này giải đáp câu hỏi: sự vật biến đổi và phát triển bằng cách thức nào.", "Sự phát triển diễn ra bằng cách tích lũy dần dần về số lượng, quy mô cho tới ngưỡng giới hạn thì thực hiện bước chuyển biến căn bản sang chất mới."],
            [2, "Khoảng giới hạn lớn hơn 0°C và nhỏ hơn 100°C của nước trong điều kiện áp suất bình thường được gọi là gì trong quy luật lượng - chất?", "Trong khoảng nhiệt độ này, nước có nóng lên hay nguội đi thì bản chất vẫn giữ nguyên ở trạng thái lỏng chứ chưa biến thành đá hay hơi nước.", "Từ 1°C đến 99°C ở áp suất 1 atm, nước vẫn giữ nguyên trạng thái thể lỏng."],
            [2, "Giới hạn 0°C và 100°C của nước trong điều kiện áp suất bình thường được gọi là gì trong quy luật lượng - chất?", "Đây là hai mốc giới hạn cực hạn mà khi nhiệt độ chạm tới đó, nước không còn giữ được trạng thái lỏng nữa mà bắt đầu chuyển thể.", "Tại đúng mốc 0°C nước bắt đầu đông đặc thành băng, và tại mốc 100°C nước bắt đầu sôi hóa hơi."],
            [2, "Khi nước chuyển từ trạng thái lỏng sang trạng thái khí tại 100°C được gọi là gì trong quy luật lượng - chất?", "Đây là giai đoạn chuyển hóa căn bản về chất của sự vật khi sự tích lũy về lượng đã vượt qua giới hạn điểm nút.", "Nước lỏng chuyển sang hơi nước có tính chất vật lý hoàn toàn khác biệt như khả năng giãn nở mạnh và bay hơi tự do."],
            [2, "Câu thành ngữ “Có công mài sắt, có ngày nên kim” tương đồng với nội dung triết học nào dưới đây?", "Sự kiên trì tích lũy công sức từng chút một qua thời gian dài sẽ làm thay đổi kích thước và biến thanh sắt thô thành chiếc kim nhỏ hữu ích.", "Mỗi ngày học thuộc 10 từ vựng tiếng Trung, sau 6 tháng tích lũy đủ lượng từ vựng để giao tiếp thành thạo."],
            [2, "Quy luật mâu thuẫn có vị trí, vai trò như thế nào trong phép biện chứng duy vật?", "Lênin gọi quy luật này là hạt nhân của phép biện chứng vì nó chỉ ra nguồn gốc, động lực tự thân sâu xa nhất thúc đẩy mọi sự vật vận động.", "Nhờ có mâu thuẫn giữa cái cũ và cái mới, giữa nhu cầu và khả năng mà con người luôn sáng tạo để phát triển."],
            [2, "Vai trò của quy luật thống nhất và đấu tranh của các mặt đối lập (quy luật mâu thuẫn)?", "Nếu quy luật lượng – chất chỉ ra cách thức, quy luật phủ định chỉ ra khuynh hướng, thì quy luật này trả lời câu hỏi: động lực từ đâu làm sự vật phát triển.", "Mâu thuẫn giữa yêu cầu công nghệ ngày càng cao với trình độ kỹ thuật hiện có thúc đẩy các kỹ sư liên tục nghiên cứu cải tiến."],
            [2, "Mâu thuẫn nổi lên hàng đầu ở một giai đoạn phát triển nhất định của sự vật, chi phối các mâu thuẫn khác trong giai đoạn đó được gọi là mâu thuẫn gì?", "Trong nhiều mâu thuẫn cùng tồn tại, có một mâu thuẫn giữ vai trò trọng tâm quyết định cục diện ở thời điểm hiện tại, giải quyết được nó thì các mâu thuẫn khác mới được tháo gỡ.", "Trong thời kỳ kháng chiến chống ngoại xâm, mâu thuẫn giữa toàn thể dân tộc Việt Nam với đế quốc xâm lược nổi lên hàng đầu chi phối mọi nhiệm vụ khác."],
            [2, "Trong mâu thuẫn biện chứng, các mặt đối lập quan hệ với nhau như thế nào?", "Hai mặt trái ngược nhau không tách rời nhau mà vừa nương tựa làm tiền đề cho nhau tồn tại, vừa bài trừ, xung đột làm biến đổi lẫn nhau.", "Trong nền kinh tế thị trường, sản xuất và tiêu dùng vừa làm điều kiện tồn tại cho nhau, vừa luôn có xu hướng vượt qua nhau thúc đẩy kinh tế tăng trưởng."],
            [2, "Vai trò của quy luật phủ định của phủ định?", "Quy luật này vạch ra chiều hướng vận động tổng quát của sự phát triển qua nhiều chu kỳ: không đi thẳng tắp cũng không quay tròn tại chỗ mà tiến lên cao hơn.", "Qua các lần cải tiến thế hệ sản phẩm, mỗi thế hệ mới vừa kế thừa ưu điểm đời trước vừa vượt lên trình độ công nghệ cao hơn."],
            [2, "Trong quy luật phủ định của phủ định, sự thay thế sự vật này bằng sự vật kia được gọi là gì?", "Khi sự vật cũ hết vai trò lịch sử và nhường chỗ cho sự vật mới ra đời thay thế trong quá trình vận động.", "Hạt thóc gieo xuống đất nảy mầm thành cây lúa non, tức là cây lúa đã thay thế sự tồn tại của hạt thóc ban đầu."],
            [2, "Con đường phát triển của sự vật mà quy luật phủ định của phủ định vạch ra là con đường nào?", "Sau ít nhất hai lần phủ định, sự vật dường như lặp lại một số đặc điểm ban đầu nhưng ở trình độ cao hơn, giống như những vòng xoáy mở rộng vươn lên.", "Từ xã hội công hữu nguyên thủy -> xã hội tư hữu có giai cấp -> xã hội công hữu văn minh hiện đại trên nền tảng đại công nghiệp."],
            [3, "Vận dụng quan điểm toàn diện của phép biện chứng duy vật để giải quyết mối quan hệ giữa tăng trưởng kinh tế và bảo vệ môi trường ở nước ta hiện nay, giải pháp nào sau đây là phù hợp nhất?", "Tư duy toàn diện không hy sinh môi trường để chạy theo tăng trưởng bằng mọi giá, cũng không đóng cửa ngừng sản xuất, mà đặt cả hai trong thế thống nhất hài hòa.", "Phát triển các khu công nghiệp xanh gắn liền với hệ thống xử lý nước thải đạt chuẩn và sử dụng năng lượng tái tạo ngay từ khâu quy hoạch."],
            [3, "Vận dụng nguyên lý về mối liên hệ phổ biến của phép biện chứng duy vật, khi nghiên cứu tình trạng ô nhiễm môi trường tại một địa phương, cách tiếp cận nào sau đây là phù hợp nhất?", "Ô nhiễm môi trường không chỉ do một ống khói nhà máy mà là kết quả đan xen của điều kiện tự nhiên, hoạt động sản xuất kinh tế và ý thức, chính sách quản lý xã hội.", "Khi đánh giá ô nhiễm dòng sông, phải khảo sát đồng thời dòng chảy tự nhiên, nước thải công nghiệp, rác thải sinh hoạt dân cư và quy định xử phạt."],
            [3, "Theo nguyên lý về mối liên hệ phổ biến của phép biện chứng duy vật, khi xây dựng kế hoạch học tập ở bậc đại học, sinh viên nên lựa chọn cách thức nào sau đây?", "Kế hoạch học tập hiệu quả phải đặt các môn học trong sự cân đối hài hòa với năng lực cá nhân, quỹ thời gian, điều kiện tài chính và chuẩn đầu ra nghề nghiệp.", "Sinh viên sắp xếp số tín chỉ mỗi kỳ vừa sức, kết hợp môn đại cương với chuyên ngành, ngoại ngữ và thời gian tự học, rèn luyện sức khỏe."],
            [3, "Theo quan điểm phát triển của triết học Mác - Lênin, khi đánh giá kết quả học tập của một sinh viên từ học lực yếu vươn lên học lực giỏi, giảng viên nên lựa chọn cách đánh giá nào sau đây?", "Quan điểm phát triển không đóng khung con người bằng định kiến quá khứ mà nhìn nhận cả quá trình nỗ lực vươn lên, tìm ra động lực tiến bộ và triển vọng phía trước.", "Giảng viên ghi nhận sự bứt phá từ điểm yếu lên điểm giỏi, phân tích phương pháp học hiệu quả của sinh viên để khuyến khích tiếp tục phát huy."],
            [3, "Trong quá trình phát triển đất nước, Đảng và Nhà nước Việt Nam triển khai đường lối đối ngoại độc lập, tự chủ, đa phương hóa, đa dạng hóa; kết hợp chặt chẽ giữa hợp tác kinh tế, quốc phòng - an ninh với ngoại giao văn hóa và bảo vệ môi trường trong hội nhập quốc tế là sự vận dụng trực tiếp nguyên tắc phương pháp luận nào của phép biện chứng duy vật?", "Việc gắn kết đồng bộ nhiều lĩnh vực (kinh tế, quốc phòng, văn hóa, môi trường) trong một chỉnh thể đối ngoại thống nhất thể hiện cái nhìn bao quát mọi mặt liên quan.", "Việt Nam vừa ký kết các hiệp định thương mại tự do, vừa hợp tác gìn giữ hòa bình Liên Hợp Quốc và giao lưu văn hóa với các nước."],
            [3, "Tư tưởng Hồ Chí Minh “Dĩ bất biến, ứng vạn biến” được Đảng và Nhà nước vận dụng trong đường lối đối ngoại thông qua việc kiên định mục tiêu chiến lược, đồng thời điều chỉnh phương thức và giải pháp phù hợp với sự biến đổi của bối cảnh trong nước và quốc tế. Cách vận dụng này thể hiện rõ nhất nguyên tắc phương pháp luận nào của phép biện chứng duy vật?", "Mọi sách lược ngoại giao không áp dụng rập khuôn một kiểu mà luôn linh hoạt điều chỉnh theo từng thời điểm, từng đối tác và hoàn cảnh lịch sử cụ thể.", "Kiên định mục tiêu độc lập dân tộc và chủ nghĩa xã hội (bất biến), nhưng sách lược ngoại giao năm 1946 khác với thời kỳ đổi mới hội nhập ngày nay (ứng vạn biến)."],
            [3, "Theo quy luật chuyển hóa từ những thay đổi về lượng dẫn đến những thay đổi về chất và ngược lại của phép biện chứng duy vật, giải pháp nào sau đây có ý nghĩa quyết định đối với việc nâng cao năng lực học tập của sinh viên?", "Năng lực thực chất không thể có được bằng cách học dồn ép vài đêm trước kỳ thi mà phải tích lũy kiến thức, kỹ năng đều đặn hằng ngày qua từng học phần.", "Sinh viên duy trì thói quen đọc tài liệu, làm bài tập và thực hành thí nghiệm đều đặn mỗi tuần để kiến thức ngấm sâu thành năng lực nghề nghiệp."],
            [3, "Trong quá trình xây dựng chương trình đào tạo, một trường đại học tiến hành thiết kế hệ thống các học phần theo một kết cấu logic nhằm bảo đảm nội dung kiến thức chuyên ngành được truyền tải đầy đủ, phù hợp với mục tiêu đào tạo là biểu hiện mối quan hệ biện chứng của cặp phạm trù nào trong phép biện chứng duy vật?", "Khối kiến thức chuyên ngành cần truyền đạt là mặt bên trong, còn cách sắp xếp trình tự các môn học thành khung chương trình logic là phương thức tổ chức biểu hiện của nó.", "Chương trình đào tạo kỹ sư bố trí các môn toán – lý đại cương trước, sau đó đến cơ sở ngành rồi mới đến chuyên ngành và đồ án tốt nghiệp."],
            [3, "Vận dụng mối quan hệ giữa cái chung và cái riêng của phép biện chứng duy vật, khi Việt Nam nghiên cứu áp dụng một mô hình công nghiệp hóa đã thành công ở một số quốc gia trên thế giới, cách tiếp cận nào sau đây phù hợp nhất?", "Những nguyên lý thành công phổ biến của thế giới phải được chắt lọc và điều chỉnh linh hoạt cho vừa vặn với đặc điểm kinh tế, xã hội, văn hóa cụ thể của Việt Nam.", "Việt Nam học hỏi kinh nghiệm phát triển công nghiệp bán dẫn của Hàn Quốc, Đài Loan nhưng thiết kế lộ trình đào tạo nhân lực và ưu đãi phù hợp điều kiện nước ta."],
            [3, "Khi tiếp cận các thông tin có quan điểm khác nhau về cùng một vấn đề kinh tế - xã hội trên không gian mạng, việc vận dụng quy luật thống nhất và đấu tranh của các mặt đối lập giúp sinh viên lựa chọn cách xử lý nào sau đây?", "Thay vì tin mù quáng một chiều hay a dua theo đám đông, tư duy biện chứng đặt các luồng ý kiến trái ngược cạnh nhau để phân tích, phản biện và tìm ra bản chất sự thật.", "Khi đọc hai luồng ý kiến trái chiều về tác động của AI đến việc làm, sinh viên đối chiếu số liệu từ cả hai phía để đánh giá khách quan."],
            [3, "Vận dụng quy luật phủ định của phủ định, khi đổi mới chương trình đào tạo đại học, phương án nào sau đây là phù hợp nhất?", "Đổi mới giáo dục không phải là xóa sạch toàn bộ chương trình cũ làm lại từ đầu mà là giữ lại những học phần nền tảng giá trị và cập nhật kiến thức, công nghệ mới.", "Chương trình đào tạo kỹ thuật giữ vững các môn cơ sở kỹ thuật cốt lõi đồng thời bổ sung học phần Trí tuệ nhân tạo và Tự động hóa thông minh."],
            [3, "Một doanh nghiệp chuyển từ quy trình sản xuất thủ công sang tự động hóa, đồng thời tiếp tục phát huy những phương thức quản lý đã được kiểm chứng trong thực tiễn. Tình huống này phản ánh sự vận dụng nội dung nào của phép biện chứng duy vật?", "Sự thay thế công nghệ mới vượt trội hơn công nghệ cũ nhưng vẫn giữ lại những kinh nghiệm quản lý hiệu quả đã có chính là tính kế thừa trong phát triển.", "Nhà máy nâng cấp dây chuyền lắp ráp robot tự động nhưng vẫn duy trì quy trình kiểm soát chất lượng Kaizen hiệu quả trước đó."],
            [3, "Vận dụng quy luật phủ định của phủ định, sinh viên nên lựa chọn cách học nào để nâng cao năng lực học tập?", "Kiến thức bậc sau luôn xây dựng trên nền tảng kiến thức bậc trước; nắm chắc kiến thức cũ rồi mở rộng, nâng cấp lên trình độ cao hơn sẽ tạo thành vòng xoáy tiến bộ.", "Từ kiến thức vật lý đại cương về mạch điện, sinh viên tiếp tục đào sâu lên kỹ thuật điện tử công suất và thiết kế hệ thống nhúng."],
            [3, "Giả sử một sinh viên đạt giải thưởng nghiên cứu khoa học cấp Bộ sau nhiều năm kiên trì tích lũy kiến thức và rèn luyện kỹ năng. Theo cặp phạm trù khả năng - hiện thực, nhận định nào sau đây là phù hợp nhất?", "Năng lực nghiên cứu được ươm mầm qua quá trình học tập là tiền đề bên trong, còn giải thưởng cấp Bộ chỉ trở thành sự thật khi hội tụ đủ nỗ lực, đề tài tốt và sự hướng dẫn phù hợp.", "Sinh viên tích lũy kiến thức lập trình suốt 3 năm (khả năng), kết hợp sự hướng dẫn của giảng viên và thiết bị phòng lab để hoàn thành sản phẩm đạt giải (hiện thực)."],
            [3, "Khi thị trường có nhiều biến động, một doanh nghiệp tiến hành rà soát các điều kiện kinh doanh và điều chỉnh chiến lược cho phù hợp với bối cảnh mới. Cách tiếp cận này thể hiện sự vận dụng nguyên tắc phương pháp luận nào của phép biện chứng duy vật?", "Mọi chiến lược chỉ đúng trong một không gian, thời gian và điều kiện xác định; khi bối cảnh thị trường thay đổi thì giải pháp cũng phải điều chỉnh tương ứng.", "Khi chi phí logistics tăng và xu hướng tiêu dùng xanh lên ngôi, doanh nghiệp điều chỉnh chuỗi cung ứng nội địa và chuyển sang bao bì thân thiện môi trường."],
            [3, "Giải pháp nào dưới đây thể hiện đầy đủ nhất việc vận dụng phép biện chứng duy vật trong nghiên cứu khoa học của sinh viên?", "Nghiên cứu biện chứng đòi hỏi cái nhìn tổng thể toàn diện, đặt đối tượng trong quá trình vận động biến đổi và dùng thực nghiệm thực tế làm thước đo kiểm chứng cuối cùng.", "Khi nghiên cứu tối ưu hóa động cơ, sinh viên xét đồng thời hiệu suất, nhiệt độ, độ bền vật liệu, xu hướng cải tiến và chạy thử nghiệm trên băng thử thực tế."],
            [3, "Một sinh viên mới ra trường gặp nhiều áp lực trong công việc và có ý định nghỉ việc sau một thời gian ngắn. Vận dụng nguyên tắc phát triển của phép biện chứng duy vật để đưa ra lời khuyên phù hợp nhất?", "Mọi quá trình trưởng thành nghề nghiệp đều đi từ bỡ ngỡ, khó khăn ban đầu đến thành thạo; cần bình tĩnh phân tích nguyên nhân áp lực và kiên trì rèn luyện để vượt qua.", "Mới đi làm chưa quen quy trình nên áp lực là bình thường; sinh viên nên lập kế hoạch học hỏi đồng nghiệp và nâng cao kỹ năng thay vì bỏ cuộc sớm."],
            [3, "Trong một vụ tai nạn giao thông xảy ra khi xe mất phanh trên đoạn đường trơn trượt, để đề xuất giải pháp phòng ngừa lâu dài, cơ quan chức năng nên lựa chọn cách tiếp cận nào sau đây?", "Một tai nạn thường do nhiều nguyên nhân đan xen (xe hỏng phanh, đường trơn, người lái chủ quan); muốn phòng ngừa tận gốc phải phân tích đủ các yếu tố để tìm ra nguyên nhân chính.", "Cơ quan chức năng vừa siết chặt kiểm định phanh xe, vừa cải tạo mặt đường chống trơn trượt và tuyên truyền kỹ năng xử lý tình huống cho tài xế."],
            [3, "Nếu phát hiện một sinh viên có biểu hiện học tập tốt trên lớp nhưng lại gian lận trong các kỳ thi, vận dụng mối quan hệ giữa bản chất và hiện tượng, giảng viên nên thực hiện cách đánh giá nào sau đây là đúng đắn nhất?", "Không thể chỉ nhìn một biểu hiện tích cực bên ngoài mà kết luận vội; cần đối chiếu thái độ trên lớp với hành vi trong phòng thi và quá trình tự học để thấy rõ thực chất.", "Giảng viên kiểm tra đánh giá qua nhiều kênh (vấn đáp, bài tập lớn, thi tập trung) để nhận diện chính xác năng lực và tính trung thực của sinh viên."],
            [3, "Trong một xưởng sản xuất, khi công nhân phát hiện một sáng kiến kỹ thuật mới, độc đáo, nếu vận dụng mối quan hệ giữa cái đơn nhất và cái chung, ban giám đốc nên lựa chọn cách làm nào sau đây là phù hợp nhất?", "Một ý tưởng mới mẻ ban đầu còn ở dạng đơn lẻ cần được nuôi dưỡng, thử nghiệm hoàn thiện ở quy mô nhỏ trước khi nhân rộng thành quy trình chuẩn toàn nhà máy.", "Ban giám đốc cho chạy thử sáng kiến tiết kiệm điện ở một tổ sản xuất, đo lường hiệu quả ổn định rồi mới áp dụng cho toàn bộ các phân xưởng."],
            [3, "Để chuyển đổi chất từ “sinh viên đại học” sang chất mới là “kỹ sư”, sinh viên các trường kỹ thuật cần thực hiện quá trình tích lũy về lượng như thế nào cho đúng quy luật triết học Mác - Lênin?", "Muốn chạm tới điểm nút tốt nghiệp để nhận bằng kỹ sư, sinh viên phải tích lũy đủ cả số lượng tín chỉ lẫn kiến thức, kỹ năng của toàn bộ các học phần theo quy định.", "Hoàn thành đầy đủ khoảng 150 tín chỉ các môn đại cương, cơ sở ngành, chuyên ngành, thực tập và bảo vệ thành công đồ án tốt nghiệp."],
            [3, "Một doanh nghiệp khởi nghiệp đã nhanh chóng mở rộng số lượng chi nhánh khi năng lực quản lý, nhân sự và nguồn vốn chưa đáp ứng yêu cầu. Vận dụng quy luật lượng - chất, nhận định nào sau đây phù hợp nhất?", "Mở rộng quy mô ồ ạt khi nội lực về vốn, nhân sự và quản trị chưa tích lũy đủ ngưỡng cần thiết là biểu hiện của bệnh nóng vội, đốt cháy giai đoạn.", "Một chuỗi cà phê khởi nghiệp mở liền 20 chi nhánh trong 6 tháng khi quy trình vận hành và dòng tiền chưa vững dẫn tới thua lỗ hàng loạt."],
            [3, "Sau khi hoàn thành môn học Triết học Mác - Lênin, tư duy của sinh viên có sự thay đổi căn bản về chất. Theo quy luật lượng - chất, chất mới này sẽ tác động trở lại quá trình tích lũy tri thức tiếp theo của sinh viên như thế nào?", "Khi đã có phương pháp tư duy biện chứng khoa học (chất mới), cách thức tiếp thu và tổng hợp kiến thức ở các môn học sau sẽ bài bản, sâu sắc và hiệu quả hơn.", "Sau khi nắm vững tư duy toàn diện và phân tích mâu thuẫn, sinh viên tiếp cận các môn kỹ thuật chuyên ngành có hệ thống và logic hơn."],
            [3, "Trong một nhóm sinh viên thực hiện đề tài nghiên cứu khoa học, các thành viên có quan điểm khác nhau về cách phân chia nhiệm vụ và hướng triển khai đề tài. Vận dụng phương pháp luận của quy luật thống nhất và đấu tranh giữa các mặt đối lập, nhóm nên lựa chọn cách giải quyết nào sau đây?", "Không né tránh bất đồng cũng không áp đặt độc đoán; nhóm cần thẳng thắn thảo luận, phân tích ưu nhược điểm từng ý kiến trên cơ sở mục tiêu chung để thống nhất giải pháp.", "Nhóm 8 tổ chức họp phân tích thế mạnh từng thành viên, thống nhất chia việc thiết kế mạch, viết code và làm báo cáo dựa trên tiến độ chung."],
            [3, "Vận dụng tính đa dạng, phong phú của mâu thuẫn, việc phân biệt mâu thuẫn bên trong (năng suất lao động, cơ cấu kinh tế...) và mâu thuẫn bên ngoài (biến động thị trường thế giới) khi xử lý khó khăn kinh tế của một quốc gia có ý nghĩa phương pháp luận nào sau đây?", "Nội lực và những bất cập bên trong nền kinh tế giữ vai trò quyết định sự phát triển, còn tác động từ thị trường quốc tế là điều kiện bên ngoài cần ứng phó linh hoạt.", "Khi xuất khẩu gặp khó do suy thoái toàn cầu, Việt Nam tập trung nâng cao năng suất nội địa và kích cầu trong nước đồng thời đa dạng hóa thị trường xuất khẩu."],
            [3, "Theo quan điểm của triết học Mác - Lênin, sự thống nhất giữa đồng hóa và dị hóa trong cơ thể sống được thể hiện như thế nào?", "Quá trình tổng hợp chất và phân giải chất trong cơ thể luôn diễn ra song song; sự cân bằng giữa chúng chỉ mang tính tương đối để duy trì sự sống trong từng giai đoạn.", "Ở người trưởng thành, quá trình đồng hóa và dị hóa cân bằng tương đối giữ ổn định thể trạng, nhưng khi về già dị hóa trội hơn làm cơ thể lão hóa."],
            [3, "Vận dụng tính kế thừa của quy luật phủ định của phủ định, việc xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc trong bối cảnh hội nhập quốc tế hiện nay cần thực hiện theo giải pháp nào sau đây?", "Phủ định biện chứng không bảo thủ ôm giữ hủ tục cũ cũng không lai căng mất gốc, mà chắt lọc tinh hoa truyền thống kết hợp tiếp thu giá trị văn minh nhân loại.", "Giữ gìn áo dài, lễ hội truyền thống và đạo lý uống nước nhớ nguồn, đồng thời loại bỏ mê tín dị đoan và tiếp thu văn hóa ứng xử văn minh hiện đại."],
            [3, "Khi một thế hệ điện thoại thông minh mới thay thế thế hệ trước với nhiều cải tiến về công nghệ và tính năng, điều đó thể hiện đặc điểm nào của phủ định biện chứng?", "Sự ra đời của thế hệ mới là tất yếu khách quan do yêu cầu nâng cao trải nghiệm, đồng thời nó luôn giữ lại những công nghệ cốt lõi hiệu quả của đời máy trước.", "iPhone hoặc Samsung thế hệ mới giữ lại màn hình OLED, bảo mật sinh trắc học của đời cũ nhưng nâng cấp chip xử lý và tích hợp trí tuệ nhân tạo."],
            [3, "Trong quá trình học tập, một sinh viên thường đạt điểm cao trong các bài kiểm tra nhưng gặp khó khăn khi vận dụng kiến thức vào tình huống thực tế. Nếu vận dụng cặp phạm trù bản chất - hiện tượng, nhận định nào sau đây phù hợp nhất?", "Điểm số bài kiểm tra chỉ là một biểu hiện trong hoàn cảnh cụ thể, chưa phản ánh trọn vẹn năng lực thực chất; cần xem xét thêm khả năng thực hành và giải quyết vấn đề.", "Một sinh viên học thuộc lòng công thức nên điểm thi viết cao nhưng khi vào xưởng thực hành lại lúng túng không đấu nối được mạch điện."],
            [3, "Trong tình huống dịch bệnh Covid bùng phát, Chính phủ đồng thời triển khai các biện pháp y tế, bảo đảm an sinh xã hội và duy trì hoạt động lưu thông hàng hóa. Cách tiếp cận này thể hiện rõ nhất việc vận dụng quan điểm phương pháp luận nào của triết học Mác - Lênin?", "Chống dịch không thể chỉ đóng băng mọi thứ vì y tế, đời sống dân sinh và chuỗi cung ứng kinh tế liên hệ chặt chẽ với nhau; phải giải quyết đồng bộ các mặt.", "Vừa tiêm vắc-xin diện rộng, vừa hỗ trợ lương thực cho người lao động mất việc và mở luồng xanh vận chuyển hàng hóa thiết yếu."],
            [3, "Vận dụng quy luật thống nhất và đấu tranh của các mặt đối lập vào quá trình tự rèn luyện, mâu thuẫn nào sau đây có thể trở thành động lực thúc đẩy sinh viên phát triển năng lực?", "Chính sự chênh lệch giữa yêu cầu ngày càng cao của kiến thức khoa học với trình độ hiểu biết còn hạn chế hiện tại thúc đẩy sinh viên nỗ lực học tập vươn lên.", "Khi gặp bài toán điều khiển tự động khó vượt quá kiến thức hiện có, sinh viên chủ động tìm đọc tài liệu và tự học thêm để giải quyết."],
            [3, "Một sinh viên không đạt yêu cầu trong kỳ thi đánh giá kỹ năng chuyên môn do tâm lý thiếu ổn định khi làm bài. Vận dụng cặp phạm trù nguyên nhân - kết quả, cách xử lý nào sau đây phù hợp nhất?", "Kết quả thi trượt thường do nhiều nguyên nhân đan xen giữa tâm lý phòng thi, độ vững kiến thức và phương pháp ôn tập; phải rà soát cả ba để khắc phục tận gốc.", "Sinh viên vừa luyện tập nắm chắc kiến thức chuyên môn để tự tin hơn, vừa tập làm bài dưới áp lực thời gian để rèn bản lĩnh tâm lý."],
            [3, "Một sinh viên có khả năng đạt học bổng nhờ kết quả học tập tốt, nhưng để đạt được học bổng, sinh viên vẫn phải đáp ứng các tiêu chí về số tín chỉ, điểm rèn luyện và các điều kiện khác. Tình huống này cho thấy nhận định nào sau đây phù hợp nhất?", "Tiềm năng sẵn có muốn biến thành kết quả hiện thực bắt buộc phải hội tụ đầy đủ các điều kiện quy định đi kèm.", "Điểm trung bình đạt loại xuất sắc (khả năng) chỉ trở thành học bổng thực tế (hiện thực) khi sinh viên đăng ký đủ số tín chỉ tối thiểu và đạt điểm rèn luyện tốt."],
            [3, "Một người kiên trì tập luyện thể thao, tăng dần cường độ vận động và từng bước cải thiện tỷ lệ mỡ, khối lượng cơ. Tuy nhiên, những thay đổi này chưa làm cơ thể chuyển sang một trạng thái mới về chất. Theo quy luật lượng - chất, giới hạn mà sự thay đổi về lượng chưa làm thay đổi căn bản về chất được gọi là gì?", "Khoảng giới hạn mà các chỉ số cơ, mỡ thay đổi tiệm tiến nhưng chưa vượt qua ngưỡng để tạo ra sự biến đổi căn bản về thể trạng được gọi là khoảng ổn định của chất cũ.", "Trong những tuần đầu tập gym, chỉ số cơ bắp nhích lên từng chút một nhưng vóc dáng tổng thể vẫn đang nằm trong giới hạn biến đổi dần về lượng."],
            [3, "Một sinh viên tích lũy đủ số tín chỉ, hoàn thành các học phần và đáp ứng các điều kiện tốt nghiệp theo quy định của chương trình đào tạo. Xét theo quy luật lượng - chất, trạng thái mà tại đó sự tích lũy về lượng tạo điều kiện cho sự thay đổi về chất được gọi là gì?", "Thời điểm mà khối lượng tín chỉ và kiến thức tích lũy đã chạm đúng mốc giới hạn quy định để chuẩn bị chuyển đổi thân phận từ sinh viên sang kỹ sư.", "Hoàn thành tín chỉ cuối cùng và đủ chuẩn đầu ra ngoại ngữ, tin học chính là chạm tới mốc giới hạn quyết định để xét tốt nghiệp."],
            [4, "Điều gì phản ánh đầy đủ nhất nội dung của nguyên lý về mối liên hệ phổ biến?", "Mọi sự vật, hiện tượng trong thế giới đều tồn tại trong sự ràng buộc, quy định và tác động qua lại lẫn nhau một cách khách quan, phổ biến chứ không cô lập.", "Từ hạt vi mô, sinh vật đến các thiết chế xã hội đều nằm trong mạng lưới tương tác đa chiều của thế giới vật chất."],
            [4, "Một doanh nghiệp có năng suất lao động thấp. Qua phân tích, doanh nghiệp phát hiện nguyên nhân không chỉ nằm ở trình độ người lao động mà còn liên quan đến công nghệ, tổ chức sản xuất, cơ chế tiền lương và thị trường đầu ra. Nhận định nào sau đây làm rõ nhất ý nghĩa của việc nhận thức tính đa dạng của các mối liên hệ?", "Các mối liên hệ rất phong phú và có vị trí khác nhau (bên trong, bên ngoài, chủ yếu, thứ yếu); cần đặt từng yếu tố trong tương quan với hệ thống và đánh giá đúng vai trò riêng của nó.", "Doanh nghiệp phân loại rõ công nghệ lạc hậu là nguyên nhân bên trong chủ yếu, còn biến động thị trường là tác động bên ngoài để ưu tiên đầu tư nâng cấp máy móc trước."],
            [4, "Khi phân tích xu hướng hội nhập kinh tế quốc tế của một quốc gia đang phát triển, điều gì phản ánh bản chất của nguyên lý về sự phát triển?", "Phát triển không phải là con đường trải hoa hồng thẳng tắp mà là quá trình quanh co, phức tạp, có thể gặp khó khăn tạm thời nhưng xu hướng chung tất yếu là tiến lên trình độ cao hơn.", "Quá trình hội nhập kinh tế giúp Việt Nam tiếp cận công nghệ và thị trường lớn, dù đôi lúc chịu cú sốc chuỗi cung ứng nhưng nền kinh tế vẫn vươn lên quy mô lớn hơn."],
            [4, "Yếu tố nào quyết định tính khách quan của mối liên hệ giữa các sự vật, hiện tượng?", "Sự tác động và chuyển hóa lẫn nhau là thuộc tính vốn có nằm ngay trong cấu trúc vật chất của các sự vật, tồn tại độc lập với ý muốn nhận thức của con người.", "Sự quang hợp của cây xanh phụ thuộc vào ánh sáng Mặt Trời và khí CO2 là quy luật tự nhiên vốn có từ trước khi loài người xuất hiện."],
            [4, "Khi vận dụng quan điểm phát triển vào nhận thức một sự vật, yêu cầu nào sau đây phù hợp nhất?", "Không nhìn sự vật như bức ảnh chụp đứng yên một chỗ mà phải theo dõi cả quá khứ hình thành, trạng thái hiện tại và dự báo xu hướng biến đổi tiếp theo của nó.", "Khi đánh giá một công nghệ năng lượng mới, cần xem xét lịch sử cải tiến, hiệu suất hiện tại và tiềm năng giảm giá thành trong 10 năm tới."],
            [4, "Một chính sách hỗ trợ khởi nghiệp từng đem lại hiệu quả cao tại một địa phương nhưng khi áp dụng tại địa phương khác lại cho kết quả hạn chế. Phân tích nào sau đây phù hợp nhất với quan điểm lịch sử - cụ thể?", "Mỗi địa phương có trình độ kinh tế, nguồn nhân lực và đặc thù văn hóa khác nhau nên không thể bê nguyên xi chính sách nơi này áp đặt cứng nhắc cho nơi khác.", "Mô hình khởi nghiệp công nghệ phần mềm rất thành công ở Đà Nẵng nhưng nếu áp dụng nguyên mẫu cho một tỉnh miền núi thuần nông thì sẽ kém hiệu quả."],
            [4, "Khi vận dụng một nguyên tắc chung vào những trường hợp cụ thể, nhận định nào phù hợp nhất với quan hệ giữa cái chung và cái riêng?", "Cái chung chỉ tồn tại thông qua cái riêng và gắn liền với đặc thù riêng; do đó khi áp dụng nguyên lý chung phải cụ thể hóa cho sát với từng đối tượng.", "Cùng là nguyên lý tiết kiệm năng lượng (cái chung) nhưng giải pháp cho nhà máy luyện kim sẽ khác với giải pháp cho tòa nhà văn phòng (cái riêng)."],
            [4, "Khi phân tích mối quan hệ giữa mô hình kinh tế thị trường chung trên thế giới và mô hình kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam, nhận định nào làm rõ nhất tính biện chứng của cặp phạm trù cái chung và cái riêng?", "Mô hình của Việt Nam là một chỉnh thể cụ thể phong phú, vừa mang đầy đủ quy luật chung của kinh tế thị trường thế giới, vừa mang bản sắc đặc thù định hướng xã hội chủ nghĩa.", "Kinh tế thị trường Việt Nam vừa vận hành theo quy luật giá trị, cung cầu như thế giới, vừa giữ vai trò chủ đạo của kinh tế nhà nước và gắn tăng trưởng với công bằng xã hội."],
            [4, "Theo phép biện chứng duy vật, nhận định nào sau đây làm rõ nhất tính phức tạp của mối quan hệ nhân - quả?", "Nhân và quả không đơn giản là đường thẳng một chiều mà đan xen phức tạp: một nguyên nhân sinh ra nhiều kết quả, một kết quả do nhiều nguyên nhân, và kết quả có thể tác động ngược lại nguyên nhân.", "Phá rừng (nguyên nhân) gây ra lũ quét và xói mòn đất (nhiều kết quả), sau đó đất bạc màu lại làm người dân khó canh tác hơn (kết quả tác động ngược lại)."],
            [4, "Khi phân tích một hiện tượng để xác định nguyên nhân, yêu cầu nào phù hợp nhất với phương pháp luận của cặp phạm trù nguyên nhân - kết quả?", "Phải phân biệt nguyên nhân thực sự với cái cớ hay sự kiện chỉ xảy ra trước về thời gian; ưu tiên tìm nguyên nhân chủ yếu bên trong gắn với điều kiện hoàn cảnh cụ thể.", "Khi máy tính bị sập nguồn liên tục, kỹ sư kiểm tra nguyên nhân bên trong như quá nhiệt CPU hoặc lỗi bộ nguồn chứ không chỉ đổ lỗi do vừa cài một phần mềm."],
            [4, "Theo phép biện chứng duy vật, bản chất của mối quan hệ giữa cái tất nhiên và cái ngẫu nhiên được thể hiện rõ nhất ở nhận định nào sau đây?", "Hai phạm trù này không tách rời nhau: cái tất nhiên luôn vạch đường đi cho mình thông qua vô số cái ngẫu nhiên, còn cái ngẫu nhiên bổ sung và làm biểu hiện của cái tất nhiên thêm phong phú.", "Giá cả hàng hóa xoay quanh giá trị (tất nhiên) thông qua những biến động lên xuống từng ngày của cung cầu thị trường (ngẫu nhiên)."],
            [4, "Nhận định nào sau đây phân tích đúng nhất mối quan hệ giữa nội dung và hình thức theo quan điểm của phép biện chứng duy vật?", "Nội dung thay đổi trước và quyết định hình thức, nhưng hình thức không thụ động mà có thể thúc đẩy nội dung phát triển nếu phù hợp hoặc kìm hãm nếu lỗi thời.", "Một bài thuyết trình có nội dung nghiên cứu hay (nội dung) nếu trình bày slide khoa học, trực quan (hình thức phù hợp) sẽ truyền tải hiệu quả gấp bội."],
            [4, "Theo phép biện chứng duy vật, khi một bản chất được biểu hiện qua nhiều hiện tượng khác nhau, điều đó cho thấy gì?", "Một quy luật cốt lõi bên trong khi đi qua các hoàn cảnh môi trường khác nhau sẽ bộc lộ thành muôn vàn vẻ ngoài sinh động, phong phú hơn bản chất thuần túy.", "Cùng là bản chất ánh sáng truyền đi trong môi trường nhưng khi gặp lăng kính thì tán sắc cầu vồng, khi gặp gương thì phản xạ, khi gặp lỗ nhỏ thì nhiễu xạ."],
            [4, "Theo phép biện chứng duy vật, yếu tố nào có vai trò quyết định trực tiếp đối với việc một khả năng trở thành hiện thực?", "Trong tự nhiên khả năng tự chuyển hóa khi đủ điều kiện khách quan, còn trong xã hội phải hội tụ đủ cả điều kiện khách quan lẫn hoạt động thực tiễn chủ quan của con người.", "Ý tưởng chế tạo máy bay không người lái chỉ trở thành sản phẩm thật khi hội tụ đủ công nghệ pin nhẹ, cảm biến cân bằng, vi xử lý và kỹ sư chế tạo."],
            [4, "Nhận định nào sau đây phân tích đúng nhất mối quan hệ giữa “độ”, “điểm nút” và “bước nhảy” trong quá trình phát triển của sự vật?", "Sự vật biến đổi lượng trong khoảng an toàn (độ) cho đến khi chạm giới hạn cực hạn (điểm nút) thì bùng nổ sự chuyển hóa căn bản sang chất mới (bước nhảy).", "Đun nước từ 20°C lên 99°C là trong 'độ', chạm 100°C là 'điểm nút', và nước sôi bốc hơi chuyển thể là 'bước nhảy'."],
            [4, "Nội dung nào sau đây là ý nghĩa phương pháp luận quan trọng nhất được rút ra từ quy luật lượng - chất?", "Phải chống đồng thời hai căn bệnh: nóng vội đốt cháy giai đoạn khi chưa tích lũy đủ lượng (tả khuynh) và rụt rè bảo thủ không dám hành động khi điều kiện đã chín muồi (hữu khuynh).", "Trong khởi nghiệp, không mở rộng quy mô khi chưa đủ vốn và quy trình (tránh nóng vội), nhưng khi sản phẩm đã được thị trường đón nhận mạnh thì phải quyết đoán mở rộng (tránh bảo thủ)."],
            [4, "Nhận định nào sau đây phản ánh đúng nhất mối quan hệ giữa sự thống nhất và đấu tranh của các mặt đối lập trong quy luật mâu thuẫn?", "Sự nương tựa cân bằng giữa hai mặt trái ngược chỉ tạm thời giữ cho sự vật ổn định tương đối, còn sự xung đột, đấu tranh giữa chúng diễn ra liên tục không ngừng làm sự vật phát triển.", "Trong quá trình học tập, sự cân bằng giữa kiến thức đã biết và bài tập quen thuộc chỉ tạm thời; chính sự va chạm với kiến thức mới khó hơn thúc đẩy tư duy phát triển."],
            [4, "Nhận định nào sau đây phản ánh đúng nhất mối quan hệ giữa tính kế thừa và khuynh hướng phát triển trong quy luật phủ định của phủ định?", "Phủ định biện chứng giữ lại hạt nhân hợp lý của cái cũ để làm nền tảng cho cái mới cao hơn, tạo nên bước tiến hình xoáy ốc vừa có tính chu kỳ vừa đi lên.", "Hệ điều hành Windows 11 phủ định Windows 10 nhưng vẫn kế thừa nhân kiến trúc và tính tương thích ứng dụng, đồng thời nâng cấp giao diện và bảo mật AI."],
            [5, "Theo nguyên lý về mối liên hệ phổ biến, khi đánh giá một vấn đề kinh tế - xã hội có nhiều yếu tố tác động đan xen, cách tiếp cận nào phù hợp nhất?", "Toàn diện không có nghĩa là dàn trải cào bằng mọi thứ như nhau, mà phải nhìn tổng thể hệ thống đồng thời biết chỉ ra đâu là mối liên hệ cơ bản, chủ yếu nhất.", "Khi giải quyết bài toán ùn tắc đô thị, cần xem xét cả hạ tầng, phương tiện công cộng và dân số, trong đó xác định phát triển giao thông công cộng khối lượng lớn là khâu đột phá."],
            [5, "Theo phương pháp luận của triết học Mác - Lênin, khi đánh giá một quá trình phát triển của đối tượng có giai đoạn chững lại hoặc xuất hiện bước lùi, nhận định nào nên được lựa chọn?", "Sự phát triển diễn ra theo đường xoáy ốc quanh co nên có thể xuất hiện những khúc quanh hay thụt lùi cục bộ; cần nhìn xu hướng tổng thể cả quá trình để đánh giá khách quan.", "Một doanh nghiệp công nghệ có thể giảm lợi nhuận ngắn hạn trong năm đầu đầu tư R&D, nhưng xét cả chu kỳ 5 năm thì năng lực lõi và doanh thu tăng trưởng vượt bậc."],
            [5, "Theo phương pháp luận của quan điểm lịch sử - cụ thể, trước sự khác biệt về điều kiện phát triển giữa các địa phương, phương án nào phù hợp nhất khi xây dựng chính sách phát triển kinh tế - xã hội?", "Cần kết hợp hài hòa giữa định hướng khung thống nhất của cả nước với việc cụ thể hóa cơ chế, giải pháp sát hợp với lợi thế và điều kiện thực tế từng địa phương.", "Cùng thực hiện chiến lược phát triển kinh tế xanh của quốc gia, tỉnh ven biển tập trung điện gió ngoài khơi còn tỉnh miền núi tập trung kinh tế rừng và dược liệu."],
            [5, "Có quan điểm cho rằng: “Mỗi sự vật đều có những đặc điểm riêng, vì vậy từ một số trường hợp cụ thể không thể rút ra kết luận chung có giá trị nhận thức.” Nhận định nào sau đây đánh giá thuyết phục nhất ý kiến trên?", "Cái chung nằm ngay trong lòng các cái riêng; bằng tư duy khái quát khoa học từ việc nghiên cứu nhiều trường hợp cụ thể, con người hoàn toàn rút ra được quy luật chung bản chất.", "Từ việc quan sát sự rơi của nhiều vật thể khác nhau trong thực tế, các nhà vật lý đã khái quát nên định luật rơi tự do và gia tốc trọng trường."],
            [5, "Một sinh viên cho rằng: “Khi đã xác định được nguyên nhân dẫn đến một hiện tượng, chỉ cần tác động vào nguyên nhân đó là có thể kiểm soát kết quả.” Theo quan điểm duy vật biện chứng, đánh giá nào thuyết phục nhất?", "Quan hệ nhân – quả luôn chịu sự chi phối của môi trường và điều kiện đi kèm; cùng một nguyên nhân nhưng đặt trong điều kiện khác nhau sẽ cho ra kết quả khác nhau.", "Cùng một hạt giống lúa tốt (nguyên nhân) nhưng gieo ở vùng đất phù sa đủ nước sẽ cho năng suất cao, còn gieo ở đất nhiễm mặn sẽ còi cọc."],
            [5, "Trong bối cảnh trí tuệ nhân tạo (AI) phát triển nhanh chóng làm thay đổi thị trường lao động, để đảm bảo năng lực cạnh tranh nghề nghiệp lâu dài cho bản thân, hãy vận dụng mối quan hệ biện chứng giữa cái tất nhiên và cái ngẫu nhiên để đưa ra cách tiếp cận hợp lý nhất?", "Phải dựa vào cái tất nhiên làm gốc (nền tảng kiến thức chuyên môn vững và tư duy cốt lõi), đồng thời rèn sự linh hoạt để đón đầu những cơ hội nghề nghiệp mới xuất hiện.", "Sinh viên kỹ thuật nắm vững nguyên lý chuyên ngành và kỹ năng giải quyết vấn đề, đồng thời nhạy bén học thêm các công cụ AI mới để nắm bắt cơ hội việc làm."],
            [5, "Theo phương pháp luận của cặp phạm trù khả năng - hiện thực, khi một mục tiêu có nhiều khả năng thực hiện, cách lựa chọn nào phù hợp nhất?", "Không chạy theo khả năng viển vông thiếu cơ sở; phải đối chiếu các khả năng với nguồn lực thực tế đang có và các điều kiện cần thiết để chọn phương án khả thi nhất.", "Khi chọn đề tài đồ án tốt nghiệp, sinh viên cân nhắc năng lực lập trình hiện có, thời gian 4 tháng và thiết bị phòng lab để chọn đề tài khả thi nhất."],
            [5, "Một hiện tượng bên ngoài có thể phản ánh chưa đầy đủ, thậm chí sai lệch về bản chất của sự vật. Trước tình huống đó, quan điểm nào nên được lựa chọn?", "Không được tin mù quáng vào một biểu hiện bề ngoài riêng lẻ, cũng không tách rời hiện tượng; phải tổng hợp nhiều biểu hiện và phân tích mối liên hệ bên trong để tìm bản chất.", "Thấy chiếc đũa cắm vào cốc nước trông như bị gãy (hiện tượng khúc xạ), nhà khoa học phân tích tính chất truyền ánh sáng qua hai môi trường để hiểu đúng bản chất."],
            [5, "Để thúc đẩy phát triển kinh tế số, kinh tế xanh và kinh tế tuần hoàn theo định hướng Văn kiện Đại hội XIV của Đảng (nội dung mới của nền kinh tế), theo phương pháp luận về mối quan hệ giữa nội dung và hình thức, chính sách nào sau đây là phù hợp nhất?", "Khi các mô hình kinh tế mới (nội dung) đã hình thành năng động thì bộ máy quản lý, hành lang pháp lý (hình thức) phải được đổi mới tương ứng để mở đường cho nội dung phát triển.", "Ban hành cơ chế thử nghiệm có kiểm soát (sandbox) và khung pháp lý cho kinh tế tuần hoàn, tín chỉ carbon để doanh nghiệp yên tâm đầu tư."],
            [5, "Để đưa nước ta trở thành quốc gia phát triển, có công nghiệp hiện đại theo định hướng tại Văn kiện Đại hội XIV của Đảng, vận dụng quy luật lượng - chất, chính sách phát triển khoa học - công nghệ nào nên được ưu tiên?", "Không thể có năng lực công nghệ tự chủ chỉ bằng cách mua thiết bị ngoại nhập tức thời; phải kiên trì tích lũy nội lực về giáo dục, nhân lực và hạ tầng nghiên cứu để tạo bước nhảy bền vững.", "Đầu tư bài bản cho đào tạo kỹ sư bán dẫn, AI và các phòng thí nghiệm trọng điểm quốc gia để từng bước làm chủ công nghệ lõi."],
            [5, "Đứng trước mâu thuẫn giữa việc doanh nghiệp áp dụng công nghệ trí tuệ nhân tạo (AI) để tăng năng suất lao động và nguy cơ người lao động bị mất việc làm, theo quy luật thống nhất và đấu tranh giữa các mặt đối lập, cách tiếp cận nào sau đây là hợp lý nhất?", "Không ngăn cản tiến bộ công nghệ cũng không bỏ mặc người lao động bị đào thải; giải quyết mâu thuẫn tiến bộ nhất là vừa ứng dụng AI vừa đào tạo lại kỹ năng cho nhân lực thích ứng.", "Doanh nghiệp triển khai tự động hóa kết hợp mở các khóa đào tạo chuyển đổi kỹ năng số giúp công nhân chuyển sang vận hành và giám sát hệ thống thông minh."],
            [5, "Để thực hiện mục tiêu đổi mới căn bản, toàn diện giáo dục đại học trong kỷ nguyên số theo định hướng Văn kiện Đại hội XIV, theo phương pháp luận của quy luật phủ định của phủ định, giải pháp nào sau đây là tối ưu nhất?", "Kế thừa những giá trị cốt lõi của giáo dục đại học (tư duy nền tảng, tương tác học thuật trực tiếp) đồng thời tích hợp công nghệ số, AI và học liệu mở hiện đại.", "Kết hợp giảng dạy trực tiếp và thực hành phòng thí nghiệm truyền thống với hệ thống quản lý học tập số LMS và phòng thí nghiệm mô phỏng ảo."],
            [6, "Nếu anh (chị) được giao xây dựng kế hoạch phát triển toàn diện bản thân trong 4 năm đại học để đáp ứng yêu cầu nguồn nhân lực chất lượng cao thời kỳ mới, giải pháp tổng hợp nào sau đây tối ưu nhất?", "Vận dụng quan điểm toàn diện và phát triển: kết hợp hài hòa giữa kiến thức chuyên môn, ngoại ngữ – kỹ năng số và rèn luyện thể lực trong một lộ trình xuyên suốt 4 năm.", "Sinh viên vừa học chắc các môn kỹ thuật, vừa luyện tiếng Anh/tiếng Trung, học lập trình web/AI và duy trì chạy bộ, tập thể lực đều đặn."],
            [6, "Nếu anh (chị) được giao xây dựng phương án xử lý mâu thuẫn giữa yêu cầu đổi mới và yêu cầu duy trì sự ổn định, dựa vào phương pháp luận của quy luật thống nhất và đấu tranh giữa các mặt đối lập, phương án tổng thể nào nên được lựa chọn?", "Đổi mới và ổn định là hai mặt thống nhất biện chứng; cần phân tích đúng mâu thuẫn chủ yếu của từng thời kỳ để có lộ trình đổi mới phù hợp trên nền tảng ổn định.", "Cải tiến quy trình quản lý từng bước có kiểm thử trước khi chuyển đổi toàn diện để vừa nâng cao hiệu quả vừa không làm gián đoạn sản xuất."],
            [6, "Nếu anh (chị) là người quản lý Trung tâm khởi nghiệp công nghệ của trường đại học, phương án nào phù hợp nhất để đưa các ý tưởng nghiên cứu (khả năng) thành sản phẩm thương mại (hiện thực)?", "Muốn biến ý tưởng thành sản phẩm ra thị trường phải tạo đủ chuỗi điều kiện hỗ trợ: thẩm định tính khả thi, cố vấn kỹ thuật, cấp vốn ươm tạo và kết nối doanh nghiệp.", "Trung tâm tổ chức đánh giá đề tài sinh viên, hỗ trợ không gian chế tạo mẫu thử (prototype) và kết nối quỹ đầu tư thương mại hóa sản phẩm."],
            [6, "Nếu phải đề xuất một Kế hoạch tự học để đạt chuẩn đầu ra ngoại ngữ quốc tế trong 1 năm, theo phương pháp luận của quy luật lượng - chất, lộ trình nào sau đây là tối ưu nhất?", "Tích lũy lượng từ vựng, ngữ pháp và kỹ năng nghe nói đều đặn mỗi ngày theo lộ trình tăng dần độ khó sẽ tạo ra bước nhảy vững chắc đạt chuẩn đầu ra.", "Duy trì học 45–60 phút mỗi ngày trong 12 tháng theo từng chặng từ cơ bản đến luyện đề thi thử định kỳ thay vì đợi tháng cuối mới học nhồi nhét."],
            [6, "Nếu anh (chị) là thành viên ban xây dựng chương trình đào tạo đại học mới, phương án nào phù hợp nhất với yêu cầu tích lũy về lượng để tạo ra sự thay đổi về chất?", "Thiết kế chương trình theo nguyên tắc tích lũy dần từ nền tảng đến chuyên sâu qua từng học kỳ để đến cuối khóa sinh viên đủ năng lực giải quyết đồ án tốt nghiệp.", "Bố trí kiến thức khoa học cơ bản ở năm nhất, cơ sở ngành ở năm hai, chuyên ngành ở năm ba và thực tập – đồ án tốt nghiệp ở năm tư."],

            // ================= CHUYÊN ĐỀ III: LÝ LUẬN NHẬN THỨC (2.200 - 2.240) =================
            [1, "Giai đoạn nhận thức diễn ra trên cơ sở sự tác động trực tiếp của các sự vật lên các giác quan của con người là giai đoạn nhận thức nào?", "Đây là bậc thang nhận thức đầu tiên, nảy sinh khi mắt nhìn, tai nghe, tay chạm trực tiếp vào sự vật bên ngoài.", "Khi chạm tay vào cốc nước nóng và nhìn thấy hơi nước bốc lên, mắt và xúc giác đang tiếp nhận trực tiếp tín hiệu từ cốc nước."],
            [1, "Hình thức nào là hình thức đầu tiên của giai đoạn nhận thức cảm tính?", "Nhận thức cảm tính gồm 3 nấc thang theo thứ tự: phản ánh từng thuộc tính riêng lẻ -> tổng hợp thành hình ảnh trọn vẹn -> lưu giữ hình ảnh trong trí nhớ; nấc đầu tiên chỉ phản ánh từng nét lẻ.", "Khi cắn một miếng chanh, vị chua riêng lẻ tác động vào đầu lưỡi tạo nên tín hiệu đầu tiên trước khi bạn hình dung trọn vẹn quả chanh."],
            [1, "Đặc điểm chung của các hình thức nhận thức cảm tính là gì?", "Giác quan của con người chỉ tiếp xúc mặt đối mặt với sự vật và mới ghi nhận được những biểu hiện bên ngoài chứ chưa đi sâu vào quy luật cốt lõi bên trong.", "Nhìn bằng mắt thường ta thấy Mặt Trời mọc đằng Đông lặn đằng Tây (tiếp xúc trực tiếp vẻ bề ngoài), chưa thấy được bản chất Trái Đất tự quay."],
            [1, "Theo quan niệm của Triết học Mác - Lênin, thực tiễn là gì?", "Khác với suy nghĩ thuần túy trong đầu hay bản năng loài vật, khái niệm này hội tụ đủ 4 yếu tố: hoạt động vật chất, có mục đích, mang tính lịch sử - xã hội và nhằm cải biến thế giới.", "Hoạt động công nhân chế tạo ô tô điện trong nhà máy hay nông dân canh tác lúa công nghệ cao đều là những hoạt động vật chất cải tạo tự nhiên gắn với trình độ xã hội từng thời kỳ."],
            [1, "Chọn đáp án thích hợp vào dấu ...: “Thực tiễn là toàn bộ những ... có mục đích, mang tính lịch sử xã hội của con người nhằm cải tạo tự nhiên và xã hội”.", "Điểm phân biệt cốt lõi giữa thực tiễn với hoạt động tư duy tinh thần là nó phải diễn ra bằng hành động vật chất cụ thể tác động vào thế giới khách quan.", "Việc ngồi suy nghĩ ý tưởng thiết kế mạch điện là hoạt động tinh thần, còn việc cầm mỏ hàn lắp ráp linh kiện thật trên bo mạch mới là hoạt động vật chất."],
            [1, "Hãy lựa chọn câu trả lời đúng. Chân lý là gì?", "Một nhận định không chỉ cần phản ánh đúng thực tế khách quan mà còn phải vượt qua thước đo kiểm chứng của thực tiễn mới được khẳng định là tri thức chân thực.", "Định luật vạn vật hấp dẫn hay công thức định luật Ôm I = U/R phản ánh đúng quy luật tự nhiên và luôn chính xác khi đo kiểm thực nghiệm."],
            [1, "Khái niệm nào dưới đây chỉ sự phản ánh hiện thực khách quan vào bộ não người một cách tích cực, năng động, sáng tạo dựa trên cơ sở thực tiễn và đưa ra tri thức đúng?", "Đây là quá trình con người chủ động khám phá thế giới khách quan trên nền tảng thực tiễn để hình thành nên hiểu biết và tri thức về sự vật.", "Quá trình kỹ sư quan sát hiện tượng, đo đạc thông số, phân tích nguyên lý và rút ra quy luật vận hành của động cơ chính là quá trình nhận thức."],
            [2, "Theo quan điểm của chủ nghĩa duy vật biện chứng, mục đích của nhận thức là gì?", "Con người học tập và nghiên cứu khoa học không phải chỉ để cất trong ngăn kéo cho vui mà để quay lại định hướng và giải quyết các nhu cầu cải tạo đời sống.", "Nghiên cứu vật lý bán dẫn và trí tuệ nhân tạo cuối cùng nhằm chế tạo chip hiệu năng cao và phần mềm phục vụ sản xuất, y tế, đời sống con người."],
            [2, "Theo chủ nghĩa duy vật biện chứng, nguồn gốc “duy nhất và cuối cùng” của nhận thức là gì?", "Nếu không có đối tượng bên ngoài tồn tại độc lập để con người tiếp xúc và phản ánh thì bộ não cũng không có chất liệu gì để hình thành tri thức.", "Mọi công thức toán học, vật lý hay hóa học suy đến cùng đều bắt nguồn từ việc quan sát và khái quát các quan hệ, quy luật của thế giới vật chất khách quan."],
            [2, "Nhận thức cảm tính được thực hiện dưới các hình thức nào?", "Nhớ bộ ba nấc thang trực quan: tiếp nhận từng nét lẻ -> ghép thành hình ảnh trọn vẹn -> lưu giữ hình ảnh đó trong trí nhớ khi sự vật không còn trước mắt.", "Nhìn màu đỏ của quả táo (cảm giác), nhận ra trọn vẹn quả táo tròn căng (tri giác), và hôm sau nhắm mắt vẫn hình dung lại được quả táo ấy (biểu tượng)."],
            [2, "Sự phản ánh trừu tượng, khái quát những đặc điểm chung, bản chất của các sự vật được gọi là giai đoạn nhận thức nào?", "Khi vượt qua vẻ bề ngoài mà giác quan nhìn thấy để dùng tư duy logic rút ra quy luật, bản chất bên trong sự vật, con người đã bước sang giai đoạn nhận thức bậc cao.", "Không chỉ nhìn thấy nước sôi ở 100°C mà hiểu được bản chất động năng phân tử thắng áp suất khí quyển là tư duy trừu tượng."],
            [2, "Tư duy trừu tượng được thể hiện dưới các hình thức cơ bản nào?", "Bộ ba hình thức của nhận thức lý tính đi từ việc định nghĩa bản chất sự vật -> nối các định nghĩa để khẳng định hoặc phủ định -> rút ra kết luận mới từ các tiền đề đã biết.", "Từ định nghĩa 'kim loại' (khái niệm), khẳng định 'đồng là kim loại' (phán đoán), ta rút ra 'đồng dẫn điện' (suy luận)."],
            [2, "Hình thức hoạt động thực tiễn cơ bản nhất quy định đến các hình thức khác là hình thức nào?", "Con người trước hết phải làm ra lương thực, quần áo, nhà ở và công cụ lao động để duy trì sự sống thì mới có điều kiện làm chính trị hay nghiên cứu khoa học.", "Nền công nghiệp chế tạo và nông nghiệp hiện đại tạo ra của cải vật chất và thiết bị làm cơ sở cho mọi hoạt động nghiên cứu và quản lý xã hội."],
            [2, "Hoạt động thực tiễn là hoạt động chủ yếu, cơ bản dẫn đến sự ra đời của ý thức, vì:", "Nếu chỉ đứng nhìn từ xa thì sự vật giấu kín quy luật bên trong; chính khi con người dùng công cụ tác động trực tiếp vào đối tượng thì nó mới bộc lộ thuộc tính và bản chất.", "Khi con người dùng búa ghè đá, nung quặng kim loại hay đo kiểm mạch điện bằng đồng hồ vạn năng, vật liệu mới bộc lộ độ cứng, tính nóng chảy và điện trở."],
            [2, "Thực tiễn đóng vai trò gì đối với nhận thức?", "Hãy nhớ trọn bộ 4 vai trò kinh điển của thực tiễn đối với nhận thức: nơi xuất phát, động lực thúc đẩy, đích phục vụ và thước đo kiểm chứng đúng sai.", "Nhu cầu đo đạc ruộng đất thúc đẩy hình học ra đời (cơ sở, động lực), hình học quay lại phục vụ xây dựng (mục đích) và được kiểm chứng qua các công trình bền vững (tiêu chuẩn chân lý)."],
            [2, "Theo quan điểm của chủ nghĩa duy vật biện chứng, bệnh giáo điều là do tuyệt đối hóa vai trò của yếu tố nào dưới đây?", "Ngược lại với bệnh kinh nghiệm (chỉ tin vào trải nghiệm vụn vặt), căn bệnh này tôn sùng sách vở, công thức có sẵn một cách cứng nhắc mà xa rời thực tế sinh động.", "Áp dụng máy móc công thức quản lý hoặc mô hình kinh tế từ sách giáo khoa nước ngoài mà không khảo sát điều kiện thực tế tại địa phương."],
            [2, "Chọn đáp án đúng điền vào chỗ trống: “Chân lý là những tri thức.... với hiện thực khách quan và được thực tiễn kiểm nghiệm”.", "Mối quan hệ giữa tri thức chân thực trong đầu óc con người và thế giới khách quan bên ngoài là sự ăn khớp, tương thích với nhau.", "Công thức tính chu kỳ con lắc đơn phản ánh ăn khớp với chuyển động thực tế của con lắc khi đo bằng đồng hồ bấm giây."],
            [2, "Câu thành ngữ nào dưới đây phản ánh mối quan hệ giữa nhận thức và thực tiễn?", "Câu dân gian nói về việc trực tiếp đi ra ngoài trải nghiệm thực tế cuộc sống sẽ giúp con người mở mang tri thức và hiểu biết.", "Sinh viên đi thực tế tại nhà máy, công trường chỉ một vài tuần nhưng học được rất nhiều kinh nghiệm vận hành mà đọc sách khó hình dung hết."],
            [2, "Tiêu chuẩn để kiểm tra chân lý là gì?", "Số đông đồng tình hay uy tín của người nổi tiếng vẫn có thể nhầm lẫn; chỉ có thước đo khách quan duy nhất nằm ngoài ý thức mới phân định được đúng sai.", "Từng có thời hầu hết mọi người tin Trái Đất đứng yên ở tâm vũ trụ, nhưng thực nghiệm thiên văn học đã bác bỏ quan niệm đó."],
            [3, "Phương án nào dưới đây thể hiện sự vận dụng quan điểm của chủ nghĩa duy vật biện chứng vào giải quyết những vấn đề phức tạp trong cuộc sống?", "Mọi nhận thức và giải pháp đúng đắn đều phải bắt đầu từ việc tiếp xúc trực tiếp với hiện thực, thu thập thông tin trung thực chứ không đoán mò.", "Trước khi đề xuất giải pháp giảm ùn tắc tại cổng trường, nhóm nghiên cứu phải đo đếm lưu lượng xe thực tế vào các khung giờ cao điểm."],
            [3, "Một sinh viên học lý thuyết rất giỏi nhưng khi vận dụng kiến thức đó trong thực tiễn lại lúng túng. Vậy, sinh viên đó đang thiếu điều gì trong quá trình nhận thức theo quan điểm của Triết học Mác - Lênin?", "Con đường nhận thức chỉ trọn vẹn khi khép kín chu trình: từ thực tiễn -> lý luận -> quay trở lại vận dụng vào thực tiễn; đứt gãy khâu quay về thực hành sẽ gây lúng túng.", "Sinh viên thuộc lòng định luật Ôm và nguyên lý transistor trên giấy nhưng chưa từng cầm mỏ hàn và đồng hồ đo trên bo mạch thật nên khi sửa mạch bị lúng túng."],
            [3, "Để tránh “bệnh giáo điều”, cần thực hiện nguyên tắc nào theo quan điểm của Triết học Mác - Lênin?", "Lý thuyết trong sách chỉ là kim chỉ nam; muốn không rơi vào rập khuôn máy móc thì luôn phải đưa lý thuyết ra cọ xát và kiểm nghiệm trong điều kiện thực tế.", "Khi áp dụng một thuật toán điều khiển từ tài liệu nghiên cứu vào mô hình robot thực tế, kỹ sư phải chạy thử nghiệm và hiệu chỉnh tham số theo sai số thực."],
            [3, "Việc áp dụng phương pháp “học đi đôi với hành” trong thực tiễn là sự vận dụng trực tiếp nguyên lý nào của lý luận nhận thức duy vật biện chứng?", "Học lý thuyết phải gắn liền với thực hành vì hoạt động thực tiễn vừa là nền tảng nảy sinh tri thức, vừa là mục đích và thước đo kiểm tra mức độ hiểu bài.", "Sinh viên học lập trình web xong liền tự tay code một trang web trắc nghiệm hoàn chỉnh để kiểm chứng kiến thức HTML, CSS và JavaScript."],
            [3, "Vì sao trong việc xây dựng và hoạch định các chính sách phát triển kinh tế - xã hội của nước ta, không thể chỉ dựa vào ý muốn chủ quan của nhà lãnh đạo? Hãy lựa chọn đáp án phù hợp nhất theo lý luận nhận thức duy vật biện chứng?", "Đường lối, chủ trương thuộc về nhận thức của con người; muốn chủ trương đúng đắn và khả thi thì điểm xuất phát bắt buộc phải từ điều kiện thực tế bên ngoài.", "Chính sách chuyển đổi số nông nghiệp phải xuất phát từ hạ tầng internet, trình độ người nông dân và quy mô canh tác thực tế ở từng vùng."],
            [3, "Vận dụng lý luận nhận thức của chủ nghĩa Mác - Lênin vào quá trình nghiên cứu khoa học của sinh viên: Trong nghiên cứu mà các số liệu thực nghiệm thay đổi so với giả thuyết ban đầu, sinh viên cần phải làm gì?", "Khi suy đoán lý thuyết va chạm với kết quả đo đạc trung thực từ thực nghiệm thì thực nghiệm là tiêu chuẩn chân lý buộc ta phải sửa lại giả thuyết.", "Khi thử nghiệm bộ nguồn hạ áp thấy điện áp ra sụt mạnh khi tải cao khác với tính toán ban đầu, nhóm sinh viên phải tính lại cuộn cảm và sửa sơ đồ mạch."],
            [3, "Phương án nào dưới đây khẳng định Lý luận nhận thức duy vật biện chứng có vai trò làm cơ sở phương pháp luận cho hoạt động nhận thức và thực tiễn?", "Lý luận nhận thức mácxít cung cấp cả niềm tin con người nhận thức được thế giới, cách tư duy biện chứng khoa học lẫn nguyên tắc lấy thực tiễn làm gốc.", "Nhờ nắm vững lý luận nhận thức, nhà khoa học tự tin khám phá công nghệ mới, luôn bám sát số liệu thực nghiệm và không ngừng hoàn thiện lý thuyết."],
            [3, "Để nâng cao hiệu quả trong quá trình học tập, sinh viên cần vận dụng quan điểm về nhận thức của Triết học Mác - Lênin như thế nào?", "Nhận thức chỉ sâu sắc và bền vững khi kết hợp chặt chẽ giữa tiếp thu lý luận trên giảng đường với việc rèn luyện giải quyết các bài toán thực tế.", "Sau mỗi buổi học lý thuyết môn Kỹ thuật điện, sinh viên làm ngay bài tập tính toán mạch và lắp mạch thực hành trên breadboard."],
            [3, "Vận dụng quan điểm về nhận thức của Triết học Mác - Lênin trong thực tiễn cuộc sống, việc đưa ra mục tiêu phấn đấu trong tương lai của em, cần dựa trên những căn cứ nào?", "Mục tiêu đúng đắn phải được xây dựng từ việc đánh giá trung thực thực lực hiện có của chính mình kết hợp với hoàn cảnh, nhu cầu khách quan của xã hội.", "Sinh viên ngành Điều khiển và Tự động hóa đặt mục tiêu trở thành kỹ sư thiết kế hệ thống nhúng dựa trên thế mạnh lập trình của bản thân và nhu cầu tuyển dụng của các khu công nghiệp."],
            [3, "Câu nói: “Thất bại là mẹ thành công” phản ánh nội dung triết học nào trong lý luận nhận thức duy vật biện chứng?", "Con người không thể nắm bắt chân lý hoàn hảo ngay lập tức; việc mắc sai sót, rút kinh nghiệm từ thực tiễn thất bại là bước đệm tự nhiên để tiến tới hiểu biết đúng.", "Thomas Edison thử nghiệm hàng nghìn vật liệu dây tóc bóng đèn thất bại trước khi tìm ra sợi carbon phù hợp giúp bóng đèn phát sáng bền bỉ."],
            [4, "Hãy phân tích mối quan hệ giữa nhận thức cảm tính và nhận thức lý tính để trả lời câu hỏi: “Tại sao nhận thức lý tính cao cấp hơn nhưng lại phụ thuộc vào nhận thức cảm tính”?", "Tư duy trừu tượng giống như nhà máy chế biến tinh xảo: sản phẩm của nó có giá trị cao hơn nguyên liệu thô, nhưng nếu không có nguyên liệu đầu vào từ giác quan thì nhà máy không có gì để xử lý.", "Bác sĩ chẩn đoán ra căn bệnh tiềm ẩn (lý tính) phải dựa trên các triệu chứng quan sát được và chỉ số xét nghiệm đo đạc trực tiếp từ bệnh nhân (cảm tính)."],
            [4, "Tại sao chủ nghĩa duy vật biện chứng khẳng định nhận thức của con người là một quá trình “vô tận”?", "Đối tượng của nhận thức là thế giới vật chất rộng lớn vô cùng và liên tục nảy sinh những hiện tượng, quy luật mới, nên hành trình khám phá của nhân loại không bao giờ có điểm dừng cuối cùng.", "Khi vật lý học khám phá xong cấu trúc nguyên tử thì lại mở ra thế giới hạt hạ nguyên tử, vật chất tối và năng lượng tối vô tận phía trước."],
            [4, "Luận điểm nào dưới đây thể hiện rõ bản chất của lý luận nhận thức duy vật biện chứng theo quan điểm của triết học Mác – Lênin?", "Bản chất lý luận nhận thức mácxít bao trùm trọn vẹn 3 trụ cột: phản ánh sáng tạo thế giới khách quan, đặt thực tiễn ở vị trí trung tâm và vận động theo chu trình từ trực quan đến tư duy rồi quay lại thực tiễn.", "Quá trình phát triển vắc-xin đi từ quan sát dịch tễ (cảm tính), phân tích cấu trúc virus (lý tính) đến thử nghiệm lâm sàng và tiêm chủng cộng đồng (thực tiễn)."],
            [4, "Phân tích vai trò của thực tiễn trong việc khắc phục tính phiến diện của nhận thức?", "Khi chỉ đứng một góc quan sát ta dễ rơi vào định kiến một chiều; tham gia hoạt động thực tiễn đa dạng buộc con người tiếp xúc nhiều mặt của sự vật để chỉnh sửa lại cái nhìn hẹp hòi.", "Khi trực tiếp vận hành sản phẩm trong nhiều điều kiện thời tiết khác nhau, kỹ sư phát hiện ra những điểm yếu mà tính toán trên bàn giấy đã bỏ sót."],
            [4, "Trong quá trình nhận thức, “bệnh kinh nghiệm” và “bệnh giáo điều” đều là biểu hiện của tư duy nào?", "Một bên chỉ tôn thờ kinh nghiệm thực tế mà coi thường lý luận, bên kia chỉ bám lấy lý luận sách vở mà xa rời thực tiễn — cả hai đều chia cắt cứng nhắc lý luận với thực tiễn.", "Người thợ chỉ làm theo thói quen cũ không chịu học nguyên lý mới (bệnh kinh nghiệm) và sinh viên chỉ thuộc lý thuyết không biết thực hành (bệnh giáo điều) đều mắc lối nhìn phiến diện."],
            [4, "Tại sao khẳng định rằng: “chân lý mang tính cụ thể”?", "Không có chân lý chung chung trừu tượng đúng cho mọi lúc mọi nơi; một mệnh đề chỉ đúng khi đặt trong những giới hạn xác định về hoàn cảnh, không gian và thời gian.", "Khẳng định 'nước sôi ở 100°C' chỉ là chân lý trong điều kiện áp suất khí quyển tiêu chuẩn 1 atm; lên đỉnh núi cao áp suất thấp thì nước sôi ở nhiệt độ thấp hơn."],
            [4, "Câu nói của Lênin: “Từ trực quan sinh động đến tư duy trừu tượng, từ tư duy trừu tượng đến thực tiễn, đó là con đường biện chứng của nhận thức chân lý” phản ánh điều gì?", "Chu trình nhận thức bắt đầu từ thực tiễn tác động vào giác quan, nâng lên tư duy khái quát rồi nhất thiết phải quay trở về thực tiễn để kiểm chứng và cải tạo hiện thực.", "Từ việc quan sát hiện tượng cảm ứng điện từ (trực quan sinh động), Faraday và Maxwell xây dựng phương trình điện từ trường (tư duy trừu tượng), rồi ứng dụng chế tạo máy phát điện và kiểm chứng trong công nghiệp (thực tiễn)."],
            [4, "Để một giả thuyết khoa học mới được thừa nhận, thì cần phải kiểm chứng bằng thí nghiệm và thực nghiệm. Điều này thể hiện quan điểm nào của triết học Mác - Lênin?", "Một giả thuyết dù lập luận logic đẹp đẽ đến đâu vẫn chỉ là phỏng đoán cho tới khi được thực nghiệm khách quan xác nhận là đúng.", "Thuyết tương đối rộng của Einstein dự đoán ánh sáng bị bẻ cong khi đi qua trường hấp dẫn của Mặt Trời, và chỉ được giới khoa học thừa nhận rộng rãi sau quan sát nhật thực năm 1919."],
            [5, "Phương án nào dưới đây không phản ảnh đúng vai trò của thực tiễn với chân lý?", "Thực tiễn là thước đo phân định đúng sai, nhưng trong đời sống thực tế luôn tồn tại cả cái tiến bộ lẫn sai lầm, hủ tục; không thể đánh đồng mọi thứ đang có ngoài đời đều là chân lý.", "Tệ nạn tham nhũng hay mê tín dị đoan có tồn tại trong thực tế xã hội nhưng đó là những hiện tượng tiêu cực sai trái chứ tuyệt đối không phải là chân lý."],
            [5, "Theo lý luận nhận thức duy vật biện chứng của Chủ nghĩa Mác - Lênin, giải pháp nào dưới đây là tối ưu nhất để phát triển nguồn nhân lực con người trong trường học?", "Để tránh cả bệnh giáo điều lẫn bệnh kinh nghiệm, đào tạo con người toàn diện phải gắn kết chặt chẽ giữa trang bị lý luận khoa học với thực hành và trải nghiệm thực tiễn.", "Chương trình đào tạo kỹ sư kết hợp hài hòa giữa bài giảng lý thuyết trên lớp, thí nghiệm tại phòng lab và kỳ thực tập giải quyết bài toán thực tế tại doanh nghiệp."],
            [5, "Tại sao phương pháp biện chứng lại được coi là công cụ sắc bén nhất để nhận thức chân lý?", "Thế giới khách quan vốn dĩ không đứng yên bất biến hay tách rời nhau; chỉ có phương pháp tư duy phản ánh đúng sự liên hệ và vận động biến đổi đó mới nắm bắt được bản chất chân thực.", "Khi phân tích một sự cố kỹ thuật, phương pháp biện chứng giúp kỹ sư lần theo cả chuỗi liên hệ linh kiện và quá trình vận hành theo thời gian thay vì nhìn một điểm tĩnh tại."],
            [6, "Vận dụng lý luận nhận thức duy vật biện chứng của chủ nghĩa Mác – Lênin, em hãy lựa chọn giải pháp tối ưu nhất giúp sinh viên giữ vững bản lĩnh chính trị, tư tưởng trong giai đoạn hiện nay?", "Bản lĩnh vững vàng không đến từ việc tự đóng cửa bịt tai hay chỉ dựa kinh nghiệm cá nhân, mà đến từ sự kết hợp giữa nền tảng lý luận khoa học, trải nghiệm thực tiễn và năng lực tư duy phản biện trước luồng thông tin đa chiều.", "Sinh viên nắm vững kiến thức lý luận chính trị, tích cực tham gia hoạt động tình nguyện xã hội và biết đối chiếu số liệu khách quan để nhận diện tin giả trên mạng xã hội."]
        ]
    });

})(window);
