/* 互動實驗室：7 個視覺化元件 */
(function () {
  const { person, laptop, house, C } = window.FIGPARTS;
  const A = () => window.APP;
  const L = () => A().lang;
  const tx = (zh, en) => (L() === 'en' ? en : zh);
  const shuffle = a => a.map(v => [Math.random(), v]).sort((x, y) => x[0] - y[0]).map(v => v[1]);

  /* 1. 物的分類器 */
  function sorter(el) {
    const items = [['🏠', '房屋', 'House', 'im'], ['🌾', '農地', 'Farmland', 'im'], ['🏢', '公寓', 'Apartment', 'im'], ['📱', '手機', 'Phone', 'mv'], ['👕', '衣服', 'Clothes', 'mv'], ['🛵', '機車', 'Scooter', 'mv'], ['🐶', '寵物狗', 'Pet dog', 'mv'], ['💻', '電腦', 'Computer', 'mv'], ['💡', '專利權', 'Patent', 'ip'], ['✍️', '著作權', 'Copyright', 'ip'], ['🌳', '土地上的樹', 'Tree on land', 'im'], ['🚗', '汽車', 'Car', 'mv']];
    let sel = null, ok = 0, tries = 0;
    const bins = [['im', '🏠 不動產', '🏠 Immovable'], ['mv', '📦 動產', '📦 Movable'], ['ip', '🧠 精神產物', '🧠 Intellectual']];
    el.innerHTML = `<p class="hint">${tx('點一個物品，再點它所屬的籃子。', 'Tap an item, then the right basket.')}</p>
      <div class="chips">${shuffle(items).map((it, i) => `<button class="chip" data-k="${it[3]}" data-i="${i}">${it[0]} ${tx(it[1], it[2])}</button>`).join('')}</div>
      <div class="bins">${bins.map(b => `<div class="bin" data-k="${b[0]}"><b>${tx(b[1], b[2])}</b><div class="bin-in"></div></div>`).join('')}</div>
      <div class="score-line"></div>`;
    const line = el.querySelector('.score-line');
    el.querySelectorAll('.chip').forEach(c => c.onclick = () => { el.querySelectorAll('.chip').forEach(x => x.classList.remove('on')); c.classList.add('on'); sel = c; A().sfx('tap'); });
    el.querySelectorAll('.bin').forEach(b => b.onclick = () => {
      if (!sel) return;
      tries++;
      if (sel.dataset.k === b.dataset.k) {
        ok++; b.querySelector('.bin-in').appendChild(sel); sel.classList.remove('on'); sel.disabled = true; sel.classList.add('placed'); A().sfx('ok'); b.classList.add('flash'); setTimeout(() => b.classList.remove('flash'), 500);
      } else { A().sfx('no'); sel.classList.add('shake'); setTimeout(() => sel && sel.classList.remove('shake'), 500); }
      sel = null;
      line.textContent = tx(`正確 ${ok}/${items.length}，嘗試 ${tries} 次`, `Correct ${ok}/${items.length}, ${tries} tries`);
      if (ok === items.length) { A().confetti(); A().log('lab', tx('物的分類器完成', 'Sorter done'), `${ok}/${tries}`); line.textContent += tx('　🎉 全部分類完成！', '  🎉 All sorted!'); }
    });
  }

  /* 2. 四特性情境轉盤 */
  function wheel(el) {
    const traits = ['直接支配性', '保護絕對性', '排他性', '優先性'], en = ['Direct control', 'Absolute protection', 'Exclusivity', 'Priority'];
    const cols = ['#22c55e', '#3b82f6', '#f59e0b', '#a855f7'];
    const pool = window.CASES.filter(c => c.k === 'trait');
    let rot = 0, cur = null, score = 0, n = 0;
    const seg = (i) => { const a0 = i * 90 - 90, a1 = a0 + 90, r = 120, p = d => [150 + r * Math.cos(d * Math.PI / 180), 150 + r * Math.sin(d * Math.PI / 180)]; const [x0, y0] = p(a0), [x1, y1] = p(a1), [tx_, ty] = p(a0 + 45).map((v, k) => 150 + (v - 150) * .6); return `<path d="M150,150 L${x0},${y0} A${r},${r} 0 0 1 ${x1},${y1}Z" fill="${cols[i]}"/><text x="${tx_}" y="${ty}" text-anchor="middle" class="svg-s" fill="#fff" transform="rotate(${a0 + 135} ${tx_} ${ty})">${traits[i]}</text>`; };
    el.innerHTML = `<div class="wheel-wrap"><svg viewBox="0 0 300 300" class="wheel"><g class="wheel-g">${[0, 1, 2, 3].map(seg).join('')}</g><circle cx="150" cy="150" r="22" fill="#fff" stroke="#334" stroke-width="3"/><path d="M150,8 L138,34 L162,34Z" fill="#ef4444"/></svg>
      <div class="wheel-side"><button class="btn big spin">🎡 ${tx('轉出一個情境', 'Spin a case')}</button><div class="case-box">${tx('按下轉盤，抽一個小辰的生活情境。', 'Spin to draw a scenario.')}</div>
      <div class="opts">${traits.map((t, i) => `<button class="btn opt" data-t="${t}" style="--c:${cols[i]}">${tx(t, en[i])}</button>`).join('')}</div><div class="score-line"></div></div></div>`;
    const g = el.querySelector('.wheel-g'), box = el.querySelector('.case-box'), line = el.querySelector('.score-line');
    el.querySelector('.spin').onclick = () => {
      rot += 720 + Math.random() * 360; g.style.transform = `rotate(${rot}deg)`; A().sfx('spin');
      cur = pool[Math.floor(Math.random() * pool.length)];
      setTimeout(() => { box.innerHTML = `📌 ${tx(cur.s, cur.e)}<br><small>${tx('這是哪一種特性？', 'Which trait?')}</small>`; box.classList.add('pop-in'); }, 900);
    };
    el.querySelectorAll('.opt').forEach(b => b.onclick = () => {
      if (!cur) return; n++;
      if (b.dataset.t === cur.a) { score++; A().sfx('ok'); box.innerHTML += `<div class="good">✅ ${tx('正確！', 'Correct!')} ${cur.a}</div>`; }
      else { A().sfx('no'); box.innerHTML += `<div class="bad">❌ ${tx('答案是', 'Answer:')} ${cur.a}</div>`; }
      cur = null; line.textContent = tx(`得分 ${score}/${n}`, `Score ${score}/${n}`);
      if (n % 5 === 0) A().log('lab', tx('四特性轉盤', 'Trait wheel'), `${score}/${n}`);
    });
  }

  /* 3. 優先性時間軸模擬器 */
  function priority(el) {
    const steps = [
      { zh: '① 小辰與元元約定：5千元買電腦（成立買賣契約 → 元元取得「債權」）', en: '① Chen & Yuan agree on $5,000 (contract → Yuan has a claim)', own: 'chen', yuan: 1 },
      { zh: '② 阿庭出價6千元，小辰反悔，與阿庭也成立買賣契約（阿庭也只有債權）', en: '② Ting offers $6,000; Chen also contracts with Ting (Ting has a claim too)', own: 'chen', yuan: 1, ting: 1 },
      { zh: '③ 小辰把電腦「交付」給阿庭 → 動產物權移轉，阿庭取得所有權', en: '③ Chen delivers the PC to Ting → Ting gets ownership', own: 'ting', yuan: 1 },
      { zh: '④ 元元：「你明明先答應我！」→ 債權只對小辰有效，不能對抗阿庭；元元可向小辰主張違約責任', en: '④ Yuan protests → her claim binds only Chen, not Ting; she can hold Chen liable for breach', own: 'ting', yuan: 2 }
    ];
    let i = 0;
    el.innerHTML = `<div class="tl-bar">${steps.map((s, k) => `<button class="tl-dot" data-k="${k}">${k + 1}</button>`).join('<span class="tl-line"></span>')}</div>
      <svg viewBox="0 0 900 300" class="fig-svg tl-svg"></svg><div class="tl-text"></div>
      <div class="row"><button class="btn prev">◀</button><button class="btn next">▶ ${tx('下一步', 'Next')}</button></div>`;
    const svg = el.querySelector('.tl-svg'), text = el.querySelector('.tl-text');
    const draw = () => {
      const s = steps[i], pos = { chen: 450, ting: 760, yuan: 140 };
      svg.innerHTML = `${person(140, 230, C.yuan, '元元')}${person(450, 230, C.chen, '小辰')}${person(760, 230, C.ting, '阿庭')}
        <g class="pc-move" style="transform:translateX(${pos[s.own] - 450}px)">${laptop(450, 120, 1.1)}<text x="450" y="70" text-anchor="middle" class="svg-t">👑 ${tx('所有權', 'Ownership')}</text></g>
        ${s.yuan ? `<g class="pop"><path d="M180,150 Q300,${s.yuan === 2 ? 40 : 90} 420,150" stroke="#f59e0b" stroke-width="4" fill="none" stroke-dasharray="10 6"/><text x="300" y="${s.yuan === 2 ? 60 : 100}" text-anchor="middle" class="svg-s">📄 ${tx('債權（只對小辰）', 'Claim (vs Chen only)')}</text></g>` : ''}
        ${s.ting ? `<g class="pop"><path d="M480,150 Q600,90 730,150" stroke="#ec4899" stroke-width="4" fill="none" stroke-dasharray="10 6"/><text x="605" y="100" text-anchor="middle" class="svg-s">📄 ${tx('債權', 'Claim')}</text></g>` : ''}
        ${s.yuan === 2 ? `<g class="pop"><path d="M180,190 L720,190" stroke="#ef4444" stroke-width="5"/><text x="450" y="185" text-anchor="middle" class="svg-t" fill="#ef4444">✖ ${tx('不能對抗阿庭', 'cannot beat Ting')}</text></g>` : ''}`;
      text.textContent = tx(s.zh, s.en);
      el.querySelectorAll('.tl-dot').forEach((d, k) => d.classList.toggle('on', k <= i));
      if (i === steps.length - 1) A().log('lab', tx('優先性時間軸', 'Priority timeline'), tx('看完4步驟', 'all 4 steps'));
    };
    el.querySelector('.next').onclick = () => { if (i < steps.length - 1) { i++; A().sfx('step'); draw(); } };
    el.querySelector('.prev').onclick = () => { if (i > 0) { i--; A().sfx('tap'); draw(); } };
    el.querySelectorAll('.tl-dot').forEach(d => d.onclick = () => { i = +d.dataset.k; A().sfx('tap'); draw(); });
    draw();
  }

  /* 4. 債權相對 vs 物權絕對 對抗網 */
  function network(el) {
    let mode = 'real';
    const people = [['小辰（契約相對人）', 'Chen (contract party)', 450, 70, true], ['路人甲', 'Stranger A', 160, 190, false], ['同學乙', 'Classmate B', 740, 190, false], ['鄰居丙', 'Neighbour C', 250, 320, false], ['店家丁', 'Shop D', 650, 320, false]];
    el.innerHTML = `<div class="row seg"><button class="btn tab on" data-m="real">🛡️ ${tx('物權（所有權）', 'Real right')}</button><button class="btn tab" data-m="claim">📄 ${tx('債權（契約）', 'Claim')}</button></div>
      <svg viewBox="0 0 900 400" class="fig-svg net"></svg><div class="net-text"></div>`;
    const svg = el.querySelector('.net'), t = el.querySelector('.net-text');
    const draw = () => {
      svg.innerHTML = `<circle cx="450" cy="215" r="58" fill="${mode === 'real' ? '#10b981' : '#f59e0b'}"/><text x="450" y="210" text-anchor="middle" class="svg-h" fill="#fff">${tx('元元', 'Yuan')}</text><text x="450" y="238" text-anchor="middle" class="svg-s" fill="#fff">${mode === 'real' ? tx('所有權人', 'Owner') : tx('債權人', 'Creditor')}</text>
        ${people.map(([z, e, x, y, party], k) => { const ok = mode === 'real' || party; return `<g class="net-p" data-k="${k}" style="cursor:pointer"><line x1="450" y1="215" x2="${x}" y2="${y}" stroke="${ok ? '#22c55e' : '#cbd5e1'}" stroke-width="${ok ? 5 : 3}" ${ok ? '' : 'stroke-dasharray="6 6"'} class="${ok ? 'flowline' : ''}"/><rect x="${x - 95}" y="${y - 24}" width="190" height="48" rx="24" fill="${ok ? '#dcfce7' : '#f1f5f9'}" stroke="${ok ? '#16a34a' : '#94a3b8'}" stroke-width="2"/><text x="${x}" y="${y + 7}" text-anchor="middle" class="svg-s">${ok ? '✅' : '🚫'} ${tx(z, e)}</text></g>`; }).join('')}`;
      t.innerHTML = mode === 'real' ? tx('<b>物權＝絕對權</b>：可以向「任何人」（不特定人）主張，所有人都不得干涉。', '<b>Real right = absolute</b>: assertable against anyone.') : tx('<b>債權＝相對權</b>：只能向「特定人」（契約相對人小辰）主張，不能對抗其他人。', '<b>Claim = relative</b>: only against the specific party (Chen).');
    };
    el.querySelectorAll('.tab').forEach(b => b.onclick = () => { mode = b.dataset.m; el.querySelectorAll('.tab').forEach(x => x.classList.toggle('on', x === b)); A().sfx('tap'); draw(); A().log('lab', tx('債權vs物權對抗網', 'Claim vs real right'), mode); });
    draw();
  }

  /* 5. 民法767 請求權判斷器 */
  function claims(el) {
    const pool = shuffle(window.CASES.filter(c => c.k === 'claim'));
    const names = window.CASE_KINDS.claim, en = ['Claim for return', 'Claim for removal', 'Claim for prevention'], icons = ['↩️', '🧹', '🚧'];
    let i = 0, score = 0;
    el.innerHTML = `<div class="law-strip">${tx('民法767：無權占有→返還｜已妨害→除去｜有妨害之虞→防止', 'Art. 767: unlawful possession → return | interference → removal | threat → prevention')}</div>
      <div class="claim-card"></div><div class="opts">${names.map((n, k) => `<button class="btn opt big" data-a="${n}" style="--c:${['#ef4444', '#f59e0b', '#3b82f6'][k]}">${icons[k]} ${tx(n, en[k])}</button>`).join('')}</div><div class="score-line"></div>`;
    const card = el.querySelector('.claim-card'), line = el.querySelector('.score-line');
    const show = () => { const c = pool[i % pool.length]; card.className = 'claim-card pop-in'; card.innerHTML = `<div class="num">${tx('情境', 'Case')} ${i + 1}</div>📌 ${tx(c.s, c.e)}`; };
    el.querySelectorAll('.opt').forEach(b => b.onclick = () => {
      const c = pool[i % pool.length];
      const right = b.dataset.a === c.a;
      A().sfx(right ? 'ok' : 'no'); if (right) score++;
      card.innerHTML += `<div class="${right ? 'good' : 'bad'}">${right ? '✅' : '❌'} ${tx('答案：', 'Answer: ')}${c.a}</div>`;
      i++; line.textContent = tx(`得分 ${score}/${i}`, `Score ${score}/${i}`);
      if (i === pool.length) A().log('lab', tx('767請求權判斷器', 'Art.767 judge'), `${score}/${i}`);
      setTimeout(show, 1300);
    });
    show();
  }

  /* 6. 所有權移轉流程：動產交付 vs 不動產登記 */
  function transfer(el) {
    const flows = {
      mv: { icon: '📱', name: ['動產：手機', 'Movable: phone'], steps: [['雙方談好價格（買賣契約成立）', 'Agree on price (contract)', false], ['買方付款', 'Buyer pays', false], ['賣方把手機「交付」給買方', 'Seller delivers the phone', true]], law: ['民法761：非將動產交付，不生效力', 'Art. 761: no effect without delivery'] },
      im: { icon: '🏠', name: ['不動產：房屋', 'Immovable: house'], steps: [['陳太太與林先生簽訂買賣契約', 'Mrs. Chen & Mr. Lin sign', false], ['林先生付清價款、拿到鑰匙', 'Mr. Lin pays and gets keys', false], ['雙方到地政事務所辦理移轉「登記」', 'Register transfer at land office', true]], law: ['民法758：非經登記，不生效力', 'Art. 758: no effect without registration'] }
    };
    let kind = 'mv', done = [];
    el.innerHTML = `<div class="row seg"><button class="btn tab on" data-k="mv">📱 ${tx('動產', 'Movable')}</button><button class="btn tab" data-k="im">🏠 ${tx('不動產', 'Immovable')}</button></div><div class="tf-body"></div>`;
    const body = el.querySelector('.tf-body');
    const draw = () => {
      const f = flows[kind], effective = f.steps.every((s, k) => !s[2] || done.includes(k));
      const owner = effective ? tx(kind === 'mv' ? '買方' : '林先生', kind === 'mv' ? 'Buyer' : 'Mr. Lin') : tx(kind === 'mv' ? '賣方' : '陳太太', kind === 'mv' ? 'Seller' : 'Mrs. Chen');
      body.innerHTML = `<div class="steps">${f.steps.map((s, k) => `<label class="step ${done.includes(k) ? 'on' : ''}"><input type="checkbox" data-k="${k}" ${done.includes(k) ? 'checked' : ''}> ${s[2] ? '⭐ ' : ''}${tx(s[0], s[1])}</label>`).join('')}</div>
        <div class="owner-meter ${effective ? 'ok' : ''}"><div class="big-ico">${f.icon}</div><div>${tx('目前所有權人', 'Current owner')}：<b>${owner}</b></div><div class="small">${tx(f.law[0], f.law[1])}</div></div>`;
      body.querySelectorAll('input').forEach(c => c.onchange = () => {
        const k = +c.dataset.k; done = c.checked ? [...done, k] : done.filter(x => x !== k); A().sfx(c.checked ? 'step' : 'tap'); draw();
        if (flows[kind].steps.every((s, j) => !s[2] || done.includes(j)) && c.checked && flows[kind].steps[k][2]) { A().sfx('win'); A().log('lab', tx('所有權移轉流程', 'Transfer flow'), kind); }
      });
    };
    el.querySelectorAll('.tab').forEach(b => b.onclick = () => { kind = b.dataset.k; done = []; el.querySelectorAll('.tab').forEach(x => x.classList.toggle('on', x === b)); A().sfx('tap'); draw(); });
    draw();
  }

  /* 7. 私有財產⇄公共利益天平 */
  function balance(el) {
    const topics = {
      arcade: { zh: '🏮 騎樓', en: '🏮 Arcade', lo: ['騎樓全面開放通行，但店家使用空間受限', 'Arcade fully open; shops lose space'], mid: ['店家可在劃定範圍擺放，行人仍可通行', 'Shops use a marked zone; pedestrians pass'], hi: ['店家可任意占用騎樓，行人只能走車道', 'Shops occupy freely; pedestrians walk on road'] },
      ip: { zh: '©️ 智慧財產權', en: '©️ IP', lo: ['作品任意複製，創作者缺乏動力', 'Free copying; creators lose motivation'], mid: ['保障著作權並保留合理使用（教學、評論、報導）', 'Copyright plus fair use (teaching, review, news)'], hi: ['任何引用都要授權，知識傳播受阻', 'Every use needs a licence; knowledge stalls'] },
      river: { zh: '🌊 河川資源', en: '🌊 River', lo: ['一律禁止利用河川，民生不便', 'All use banned; daily life suffers'], mid: ['政府管理河川，人民自由利用並依法防止汙染', 'Government manages; free use with pollution rules'], hi: ['無主物任意排放廢水，全民承受公害', 'Ownerless; anyone dumps waste'] }
    };
    let topic = 'arcade';
    el.innerHTML = `<div class="row seg">${Object.entries(topics).map(([k, v], i) => `<button class="btn tab ${i ? '' : 'on'}" data-k="${k}">${tx(v.zh, v.en)}</button>`).join('')}</div>
      <svg viewBox="0 0 600 240" class="fig-svg bal"><polygon points="300,200 270,236 330,236" fill="#64748b"/><g class="beam"><rect x="80" y="96" width="440" height="10" rx="5" fill="#334155"/><g class="pan l"><line x1="110" y1="101" x2="110" y2="150" stroke="#334155" stroke-width="3"/><ellipse cx="110" cy="160" rx="80" ry="20" fill="#3b82f6"/><text x="110" y="140" text-anchor="middle" class="svg-s">${tx('私有財產', 'Private')}</text></g><g class="pan r"><line x1="490" y1="101" x2="490" y2="150" stroke="#334155" stroke-width="3"/><ellipse cx="490" cy="160" rx="80" ry="20" fill="#f59e0b"/><text x="490" y="140" text-anchor="middle" class="svg-s">${tx('公共利益', 'Public')}</text></g></g><line x1="300" y1="101" x2="300" y2="200" stroke="#334155" stroke-width="6"/></svg>
      <label class="slider-l">${tx('所有權保障程度', 'Degree of ownership protection')}：<input type="range" min="0" max="100" value="50" class="rng"></label>
      <div class="bal-text"></div>`;
    const beam = el.querySelector('.beam'), r = el.querySelector('.rng'), t = el.querySelector('.bal-text');
    const draw = () => {
      const v = +r.value, ang = (v - 50) * -0.3, tp = topics[topic];
      beam.style.transform = `rotate(${ang}deg)`;
      const lv = v < 30 ? 'lo' : v > 70 ? 'hi' : 'mid';
      t.className = 'bal-text ' + lv;
      t.innerHTML = `${lv === 'mid' ? '⚖️ ' + tx('調和！', 'Balanced!') : lv === 'hi' ? '⚠️ ' + tx('過度保障私有財產', 'Over-protecting private property') : '⚠️ ' + tx('過度犧牲私有財產', 'Over-sacrificing private property')}<br>${tx(tp[lv][0], tp[lv][1])}`;
    };
    r.oninput = () => { draw(); A().sfx('tick'); };
    r.onchange = () => A().log('lab', tx('公私益天平', 'Balance'), `${topic}:${r.value}`);
    el.querySelectorAll('.tab').forEach(b => b.onclick = () => { topic = b.dataset.k; el.querySelectorAll('.tab').forEach(x => x.classList.toggle('on', x === b)); A().sfx('tap'); draw(); });
    draw();
  }

  window.WIDGETS = [
    { id: 'sorter', icon: '🧺', title: ['物的分類器', 'Sort the things'], desc: ['動產、不動產還是精神產物？把物品放進正確的籃子。', 'Movable, immovable or intellectual?'], run: sorter },
    { id: 'wheel', icon: '🎡', title: ['四特性情境轉盤', 'Trait wheel'], desc: ['轉出生活情境，判斷是哪一種所有權特性。', 'Spin a case and pick the trait.'], run: wheel },
    { id: 'priority', icon: '⏱️', title: ['優先性時間軸', 'Priority timeline'], desc: ['一步步看小辰、元元、阿庭的電腦歸誰。', 'Step through who owns the computer.'], run: priority },
    { id: 'network', icon: '🕸️', title: ['債權 vs 物權 對抗網', 'Claim vs real right'], desc: ['切換權利種類，看看可以向誰主張。', 'Switch rights and see who they bind.'], run: network },
    { id: 'claims', icon: '🛡️', title: ['民法767 請求權判斷器', 'Art. 767 judge'], desc: ['權利受侵害了！選出最適合的請求權。', 'Pick the right claim for each case.'], run: claims },
    { id: 'transfer', icon: '🔁', title: ['所有權移轉流程', 'Transfer flow'], desc: ['勾選步驟，看所有權何時真正移轉。', 'Tick steps and see when ownership moves.'], run: transfer },
    { id: 'balance', icon: '⚖️', title: ['私有財產⇄公共利益天平', 'Private vs public balance'], desc: ['拖動滑桿，找出騎樓、智財、河川的平衡點。', 'Slide to find the balance.'], run: balance }
  ];
})();
