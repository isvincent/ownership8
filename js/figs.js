/* SVG 插圖：重繪課本圖 5-2-2 ~ 5-2-4 與概念圖 */
(function () {
  const C = { chen: '#4caf7d', yuan: '#f59e0b', ting: '#ec4899', lin: '#3b82f6', chenTai: '#a855f7' };

  // 簡單人物：頭、身體、名牌
  function person(x, y, color, name, opt = {}) {
    const s = opt.s || 1, flip = opt.flip ? -1 : 1;
    return `<g class="ppl" transform="translate(${x},${y}) scale(${s * flip},${s})">
      <circle cx="0" cy="-58" r="17" fill="#ffe0c2" stroke="#5b4636" stroke-width="2"/>
      <path d="M-17,-62 Q0,-84 17,-62 Q12,-72 0,-73 Q-12,-72 -17,-62Z" fill="#3a2a20"/>
      <circle cx="-6" cy="-58" r="2" fill="#333"/><circle cx="6" cy="-58" r="2" fill="#333"/>
      <path d="M-5,-50 Q0,-46 5,-50" stroke="#333" stroke-width="1.6" fill="none"/>
      <path d="M-22,-36 Q0,-46 22,-36 L26,10 L-26,10Z" fill="${color}" stroke="#334" stroke-width="1.5"/>
      <rect x="-20" y="10" width="16" height="34" rx="5" fill="#555"/><rect x="4" y="10" width="16" height="34" rx="5" fill="#555"/>
    </g>${name ? `<text x="${x}" y="${y + 66 * s}" class="svg-name" text-anchor="middle">${name}</text>` : ''}`;
  }
  function laptop(x, y, s = 1) {
    return `<g transform="translate(${x},${y}) scale(${s})"><rect x="-26" y="-34" width="52" height="34" rx="4" fill="#e0f2fe" stroke="#1e3a8a" stroke-width="2.5"/><rect x="-21" y="-29" width="42" height="24" fill="#93c5fd"/><path d="M-34,0 H34 L28,8 H-28Z" fill="#94a3b8" stroke="#1e3a8a" stroke-width="2"/></g>`;
  }
  function bubble(x, y, w, text, color = '#fff') {
    const lines = text.split('\n'), h = 18 + lines.length * 26;
    return `<g class="pop"><rect x="${x - w / 2}" y="${y - h}" width="${w}" height="${h}" rx="16" fill="${color}" stroke="#94a3b8" stroke-width="2"/>
      ${lines.map((l, i) => `<text x="${x}" y="${y - h + 34 + i * 26}" text-anchor="middle" class="svg-t">${l}</text>`).join('')}</g>`;
  }
  function pill(x, y, w, t, sub, color) {
    return `<g class="pop"><rect x="${x - w / 2}" y="${y}" width="${w}" height="${sub ? 66 : 44}" rx="22" fill="${color}"/>
      <text x="${x}" y="${y + 29}" text-anchor="middle" class="svg-pt" fill="#fff">${t}</text>
      ${sub ? `<text x="${x}" y="${y + 54}" text-anchor="middle" class="svg-s" fill="#fff">${sub}</text>` : ''}</g>`;
  }
  function house(x, y, s = 1, color = '#fca5a5') {
    return `<g transform="translate(${x},${y}) scale(${s})"><path d="M-50,0 L0,-46 L50,0Z" fill="#ef4444"/><rect x="-40" y="0" width="80" height="60" fill="${color}" stroke="#7f1d1d" stroke-width="2"/><rect x="-12" y="24" width="24" height="36" fill="#7c2d12"/><rect x="-34" y="10" width="16" height="16" fill="#e0f2fe"/><rect x="18" y="10" width="16" height="16" fill="#e0f2fe"/></g>`;
  }

  const FIGS = {
    subjectObject: () => `<svg viewBox="0 0 900 360" class="fig-svg" role="img" aria-label="權利主體與權利客體">
      <rect x="10" y="20" width="250" height="320" rx="24" fill="#fff7ed" stroke="#fb923c" stroke-width="3"/>
      <text x="135" y="62" text-anchor="middle" class="svg-h">權利主體：人</text>
      ${person(135, 220, C.chen, '所有權人')}
      <g class="flow"><path d="M270,180 H420" stroke="#f97316" stroke-width="6" marker-end="url(#ar1)"/><text x="345" y="165" text-anchor="middle" class="svg-s">直接支配・排他</text></g>
      <defs><marker id="ar1" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10Z" fill="#f97316"/></marker></defs>
      <rect x="430" y="20" width="460" height="320" rx="24" fill="#eff6ff" stroke="#60a5fa" stroke-width="3"/>
      <text x="660" y="62" text-anchor="middle" class="svg-h">權利客體</text>
      <rect x="450" y="80" width="200" height="240" rx="18" fill="#dbeafe"/><text x="550" y="110" text-anchor="middle" class="svg-t">物</text>
      <text x="550" y="150" text-anchor="middle" class="svg-s">🏠 不動產：土地、房屋</text>
      <text x="550" y="190" text-anchor="middle" class="svg-s">📱 動產：手機、衣服</text>
      <text x="550" y="230" text-anchor="middle" class="svg-s">🛵 汽機車</text>
      <text x="550" y="270" text-anchor="middle" class="svg-s">🐶 寵物也是動產</text>
      <rect x="670" y="80" width="200" height="240" rx="18" fill="#ede9fe"/><text x="770" y="110" text-anchor="middle" class="svg-t">精神產物</text>
      <text x="770" y="160" text-anchor="middle" class="svg-s">💡 專利權</text><text x="770" y="205" text-anchor="middle" class="svg-s">✍️ 著作權</text><text x="770" y="250" text-anchor="middle" class="svg-s">（智慧財產權）</text>
    </svg>`,

    powers: () => `<svg viewBox="0 0 900 260" class="fig-svg" role="img" aria-label="所有權的內容">
      <circle cx="450" cy="130" r="74" fill="#3b82f6"/><text x="450" y="124" text-anchor="middle" class="svg-h" fill="#fff">所有權</text><text x="450" y="152" text-anchor="middle" class="svg-s" fill="#fff">民法第765條</text>
      ${[['使用', '自己用電腦', 110, 60, '#22c55e'], ['收益', '出租收租金', 110, 200, '#f59e0b'], ['處分', '賣掉、送人', 790, 60, '#ef4444'], ['排除干涉', '不准別人亂動', 790, 200, '#8b5cf6']].map(([t, s, x, y, c]) =>
        `<g class="pop"><line x1="450" y1="130" x2="${x}" y2="${y}" stroke="${c}" stroke-width="4" stroke-dasharray="8 6"/><rect x="${x - 95}" y="${y - 36}" width="190" height="72" rx="20" fill="${c}"/><text x="${x}" y="${y - 6}" text-anchor="middle" class="svg-h" fill="#fff">${t}</text><text x="${x}" y="${y + 22}" text-anchor="middle" class="svg-s" fill="#fff">${s}</text></g>`).join('')}
    </svg>`,

    fig522: () => `<svg viewBox="0 0 900 400" class="fig-svg" role="img" aria-label="圖5-2-2 所有權的特性">
      <text x="450" y="30" text-anchor="middle" class="svg-t">圖5-2-2　小辰擁有一臺電腦，他可以主張什麼權利？</text>
      ${pill(150, 50, 230, '直接支配性', '自行決定如何使用', '#16a34a')}
      ${pill(450, 50, 230, '保護絕對性', '可主張物品的所有', '#16a34a')}
      ${pill(750, 50, 230, '排他性', '排除他人所有權主張', '#16a34a')}
      ${person(150, 300, C.chen, '小辰')}${laptop(150, 330, .8)}
      ${bubble(70, 200, 90, '送人', '#fef3c7')}${bubble(235, 200, 90, '賣掉', '#fef3c7')}
      ${person(410, 300, C.chen, '小辰')}${person(510, 320, C.yuan, '', { s: .8 })}${laptop(520, 340, .6)}
      ${bubble(430, 205, 250, '雖然電腦借給你很久，\n但還是我的！')}
      ${person(700, 300, C.yuan, '他人')}${laptop(800, 300, .9)}
      <g class="pop"><ellipse cx="770" cy="190" rx="90" ry="40" fill="#fff" stroke="#94a3b8" stroke-width="2"/><text x="770" y="198" text-anchor="middle" class="svg-s">💻 ➜ 💲</text><path d="M700,160 L840,220 M840,160 L700,220" stroke="#22c55e" stroke-width="8" opacity=".7"/></g>
      <text x="880" y="395" text-anchor="end" class="svg-note">＊註：小辰具完全行為能力。</text>
    </svg>`,

    fig523: () => `<svg viewBox="0 0 900 400" class="fig-svg" role="img" aria-label="圖5-2-3 所有權的特性：優先性">
      <text x="450" y="30" text-anchor="middle" class="svg-t">圖5-2-3　所有權的特性：優先性</text>
      ${pill(150, 50, 270, '小辰、元元約定交易', '', '#7c3aed')}${pill(450, 50, 280, '阿庭優先取得電腦所有權', '', '#7c3aed')}${pill(745, 50, 262, '元元不得主張電腦所有權', '', '#7c3aed')}
      ${person(110, 320, C.chen, '辰')}${person(200, 320, C.yuan, '元', { flip: true })}
      ${bubble(200, 220, 200, '＄5000元把電腦\n賣給我好嗎？', '#fef3c7')}${bubble(95, 160, 150, '好呀！沒問題～')}
      ${person(410, 320, C.chen, '辰')}${laptop(455, 300, .7)}${person(510, 320, C.ting, '庭', { flip: true })}
      ${bubble(510, 220, 200, '我出＄6000元\n向你買電腦！', '#fce7f3')}
      <path d="M440,292 C460,250 480,250 500,280" stroke="#ec4899" stroke-width="4" fill="none" marker-end="url(#ar2)"/>
      <defs><marker id="ar2" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10Z" fill="#ec4899"/></marker></defs>
      ${person(700, 320, C.yuan, '元')}${person(810, 320, C.ting, '庭', { flip: true })}${laptop(810, 330, .6)}
      ${bubble(705, 220, 210, '你明明是先答應\n賣給我的！', '#fee2e2')}
      <text x="880" y="395" text-anchor="end" class="svg-note">＊註：小辰、元元與阿庭具完全行為能力。</text>
    </svg>`,

    fig524: () => `<svg viewBox="0 0 900 380" class="fig-svg" role="img" aria-label="圖5-2-4 所有權的保障">
      <text x="450" y="30" text-anchor="middle" class="svg-t">圖5-2-4　小辰在民法第767條下有什麼保障？</text>
      ${pill(150, 50, 220, '返還請求權', '', '#16a34a')}${pill(450, 50, 240, '去除妨害請求權', '', '#16a34a')}${pill(750, 50, 240, '防止妨害請求權', '', '#16a34a')}
      ${person(95, 320, C.chen, '小辰')}${person(205, 320, C.yuan, '', { flip: true })}${laptop(225, 300, .7)}
      ${bubble(120, 205, 180, '把電腦還給我！', '#fee2e2')}
      ${person(390, 320, C.yuan, '小辰')}${person(500, 320, C.chen, '')}
      <g class="pop"><rect x="470" y="255" width="60" height="40" rx="4" fill="#fde68a" stroke="#333"/><text x="500" y="283" text-anchor="middle" font-size="22">⚠️</text></g>
      ${bubble(445, 220, 280, '我的電腦沒辦法開機使用了，\n請你把它修理好！')}
      ${person(680, 320, C.yuan, '小辰')}${person(820, 320, C.chen, '', { flip: true })}
      <g class="pop"><rect x="700" y="140" width="130" height="90" rx="10" fill="#fff" stroke="#334" stroke-width="3"/><text x="765" y="178" text-anchor="middle" class="svg-s">借用規範：</text><text x="765" y="208" text-anchor="middle" class="svg-s">不可更動設定</text></g>
    </svg>`,

    transfer: () => `<svg viewBox="0 0 900 330" class="fig-svg" role="img" aria-label="所有權移轉：動產交付與不動產登記">
      <rect x="10" y="10" width="430" height="310" rx="22" fill="#ecfdf5" stroke="#10b981" stroke-width="3"/>
      <text x="225" y="50" text-anchor="middle" class="svg-h">📱 動產：交付</text>
      ${person(90, 230, C.chen, '賣方')}${person(360, 230, C.ting, '買方', { flip: true })}
      <g class="slide-x"><rect x="200" y="160" width="50" height="80" rx="8" fill="#1f2937"/><rect x="206" y="168" width="38" height="60" rx="4" fill="#60a5fa"/></g>
      <text x="225" y="300" text-anchor="middle" class="svg-s">民法761：非將動產交付，不生效力</text>
      <rect x="460" y="10" width="430" height="310" rx="22" fill="#eff6ff" stroke="#3b82f6" stroke-width="3"/>
      <text x="675" y="50" text-anchor="middle" class="svg-h">🏠 不動產：登記</text>
      ${house(560, 150, .9)}
      <path d="M625,170 H700" stroke="#3b82f6" stroke-width="5" marker-end="url(#ar3)"/><defs><marker id="ar3" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10Z" fill="#3b82f6"/></marker></defs>
      <g class="pop"><rect x="710" y="110" width="150" height="120" rx="10" fill="#fff" stroke="#1e3a8a" stroke-width="3"/><text x="785" y="145" text-anchor="middle" class="svg-s">地政事務所</text><text x="785" y="180" text-anchor="middle" class="svg-t">土地登記簿</text><text x="785" y="212" text-anchor="middle" font-size="26">✅</text></g>
      <text x="675" y="300" text-anchor="middle" class="svg-s">民法758：非經登記，不生效力</text>
    </svg>`,

    arcade: () => `<svg viewBox="0 0 900 320" class="fig-svg" role="img" aria-label="騎樓剖面">
      <rect x="0" y="0" width="900" height="320" fill="#e0f2fe"/>
      <g class="rain">${Array.from({ length: 28 }, (_, i) => `<line x1="${20 + i * 32}" y1="${(i * 37) % 60}" x2="${10 + i * 32}" y2="${(i * 37) % 60 + 24}" stroke="#60a5fa" stroke-width="3"/>`).join('')}</g>
      <rect x="60" y="40" width="560" height="120" fill="#fcd34d" stroke="#92400e" stroke-width="3"/>
      ${[0, 1, 2, 3].map(i => `<rect x="${90 + i * 135}" y="60" width="70" height="60" fill="#bae6fd" stroke="#92400e" stroke-width="2"/>`).join('')}
      <rect x="60" y="160" width="40" height="120" fill="#b45309"/><rect x="330" y="160" width="40" height="120" fill="#b45309"/><rect x="580" y="160" width="40" height="120" fill="#b45309"/>
      <rect x="100" y="160" width="230" height="120" fill="#fef3c7" opacity=".6"/><rect x="370" y="160" width="210" height="120" fill="#fef3c7" opacity=".6"/>
      <rect x="620" y="40" width="10" height="240" fill="#92400e"/>
      <rect x="630" y="160" width="270" height="120" fill="#fde68a"/><text x="765" y="210" text-anchor="middle" class="svg-t">私人店面（一樓內縮）</text>
      <rect x="0" y="280" width="900" height="40" fill="#6b7280"/>
      <g class="walk">${person(200, 270, C.lin, '', { s: .7 })}${person(450, 270, C.ting, '', { s: .7 })}</g>
      <text x="340" y="215" text-anchor="middle" class="svg-h">🚶 騎樓：保留給行人</text>
      <text x="340" y="250" text-anchor="middle" class="svg-s">私有土地，提供公共通行</text>
    </svg>`,

    conceptMap: () => `<svg viewBox="0 0 960 520" class="fig-svg concept" role="img" aria-label="單元概念地圖">
      <defs><marker id="ar4" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10Z" fill="#94a3b8"/></marker></defs>
      ${[[480, 70, '所有權的物權特性', '#ff7a59', 300]].map(([x, y, t, c, w]) => `<rect x="${x - w / 2}" y="${y - 32}" width="${w}" height="64" rx="32" fill="${c}"/><text x="${x}" y="${y + 10}" text-anchor="middle" class="svg-h" fill="#fff">${t}</text>`).join('')}
      ${[[150, 200, '什麼是所有權', '#3b82f6', '#learn/what'], [480, 200, '保障與特性', '#10b981', '#learn/traits'], [810, 200, '限制與調和', '#f59e0b', '#learn/limit']].map(([x, y, t, c, h]) =>
        `<line x1="480" y1="102" x2="${x}" y2="${y - 30}" stroke="#94a3b8" stroke-width="3" marker-end="url(#ar4)"/><a href="${h}"><g class="node"><rect x="${x - 120}" y="${y - 30}" width="240" height="60" rx="18" fill="${c}"/><text x="${x}" y="${y + 9}" text-anchor="middle" class="svg-h" fill="#fff">${t}</text></g></a>`).join('')}
      ${[[150, ['使用・收益・處分', '憲法第15條', '市場經濟', '社會契約論'], '#dbeafe'], [480, ['直接支配性', '保護絕對性', '排他性（共有）', '優先性', '民法767 三請求權'], '#d1fae5'], [810, ['物權法定主義', '不動產登記', '動產交付', '騎樓', '智財與合理使用'], '#fef3c7']].map(([x, items, c]) =>
        items.map((t, i) => `<line x1="${x}" y1="230" x2="${x}" y2="262" stroke="#cbd5e1" stroke-width="2"/><rect x="${x - 110}" y="${262 + i * 50}" width="220" height="40" rx="12" fill="${c}" stroke="#94a3b8"/><text x="${x}" y="${289 + i * 50}" text-anchor="middle" class="svg-s">${t}</text>`).join('')).join('')}
    </svg>`
  };

  window.FIG = (name) => (FIGS[name] ? FIGS[name]() : '');
  window.FIGPARTS = { person, laptop, bubble, house, C };
})();
