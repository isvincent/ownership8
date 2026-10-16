/* 所有權的物權特性 — 主程式：路由、設定、音效、教材、練習、測驗、學習歷程 */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const KEY = 'ownership-course-v1';
  const store = (() => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } })();
  const S = Object.assign({ sound: 'on', device: 'auto', layout: 'auto', lang: 'zh', font: 'normal', theme: 'system', done: [], log: [], quizBest: 0, name: '', notes: [] }, store);
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { } };
  const t = k => (I18N[S.lang] && I18N[S.lang][k]) || I18N.zh[k] || k;
  const L = o => (o == null ? '' : typeof o === 'string' ? o : (S.lang === 'en' ? (o.en || o.zh) : o.zh));
  const tx = (zh, en) => (S.lang === 'en' ? en : zh);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const nl = s => esc(s).replace(/\n/g, '<br>');
  const shuffle = a => a.map(v => [Math.random(), v]).sort((x, y) => x[0] - y[0]).map(v => v[1]);

  /* ---------- 音效（WebAudio 合成，免外部檔案） ---------- */
  let ac = null;
  function tone(freq, dur, type = 'sine', vol = .15, when = 0) {
    if (S.sound !== 'on') return;
    try {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      const o = ac.createOscillator(), g = ac.createGain(), t0 = ac.currentTime + when;
      o.type = type; o.frequency.setValueAtTime(freq, t0);
      g.gain.setValueAtTime(vol, t0); g.gain.exponentialRampToValueAtTime(.001, t0 + dur);
      o.connect(g); g.connect(ac.destination); o.start(t0); o.stop(t0 + dur);
    } catch (e) { }
  }
  const SFX = {
    tap: () => tone(660, .08, 'triangle', .1),
    tick: () => tone(1200, .03, 'square', .03),
    step: () => { tone(523, .1, 'triangle'); tone(784, .12, 'triangle', .12, .08); },
    ok: () => { tone(660, .12, 'sine'); tone(880, .18, 'sine', .15, .1); },
    no: () => { tone(220, .2, 'sawtooth', .08); tone(180, .25, 'sawtooth', .08, .12); },
    spin: () => { for (let i = 0; i < 10; i++) tone(500 + i * 60, .05, 'square', .04, i * .07); },
    flip: () => tone(440, .1, 'triangle', .08),
    win: () => [523, 659, 784, 1047].forEach((f, i) => tone(f, .25, 'triangle', .14, i * .12)),
    open: () => { tone(392, .08, 'sine', .08); tone(587, .1, 'sine', .08, .06); }
  };
  const sfx = n => SFX[n] && SFX[n]();

  function confetti() {
    const box = document.createElement('div'); box.className = 'confetti';
    const cols = ['#ff7a59', '#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'];
    box.innerHTML = Array.from({ length: 60 }, (_, i) => `<i style="left:${Math.random() * 100}%;background:${cols[i % 6]};animation-delay:${Math.random() * .5}s;animation-duration:${1.6 + Math.random()}s;transform:rotate(${Math.random() * 360}deg)"></i>`).join('');
    document.body.appendChild(box); setTimeout(() => box.remove(), 3200);
  }

  function log(type, title, detail = '') {
    S.log.push({ time: new Date().toLocaleString('zh-TW', { hour12: false }), type, title, detail: String(detail) });
    if (S.log.length > 800) S.log.shift();
    save();
  }
  function toast(msg) { const d = document.createElement('div'); d.className = 'toast'; d.textContent = msg; document.body.appendChild(d); setTimeout(() => d.remove(), 2200); }

  window.APP = { get lang() { return S.lang; }, sfx, log, confetti, toast };

  /* ---------- 設定 ---------- */
  const SETTINGS = [
    ['full', 's_full', [['on', 'on'], ['off', 'off']]],
    ['sound', 's_sound', [['on', 'on'], ['off', 'off']]],
    ['device', 's_device', [['auto', 'auto'], ['phone', 'phone'], ['tablet', 'tablet'], ['desktop', 'desktop']]],
    ['layout', 's_layout', [['auto', 'auto'], ['portrait', 'portrait'], ['landscape', 'landscape']]],
    ['lang', 's_lang', [['zh', '繁體中文'], ['en', 'English']]],
    ['font', 's_font', [['small', 'small'], ['normal', 'normal'], ['large', 'large']]],
    ['theme', 's_theme', [['system', 'system'], ['light', 'light'], ['dark', 'dark']]]
  ];
  function applySettings() {
    const h = document.documentElement;
    h.dataset.device = S.device; h.dataset.layout = S.layout; h.dataset.font = S.font; h.lang = S.lang === 'en' ? 'en' : 'zh-Hant-TW';
    if (S.theme === 'system') h.removeAttribute('data-theme'); else h.dataset.theme = S.theme;
    const z = { small: .9, normal: 1, large: 1.18 }[S.font];
    $('#app').style.zoom = z;
    document.title = t('title');
    $('#brandTitle').textContent = t('title'); $('#brandSub').textContent = t('subtitle');
    $$('[data-nav]').forEach(a => { a.querySelector('span').textContent = t('nav_' + a.dataset.nav); });
    $('#setTitle').textContent = t('settings');
  }
  function renderSettings() {
    const full = document.fullscreenElement ? 'on' : 'off';
    $('#setBody').innerHTML = SETTINGS.map(([k, label, opts]) => `<div class="set-row"><div class="set-l">${t(label)}</div><div class="set-o">${opts.map(([v, lb]) => `<button class="sbtn ${(k === 'full' ? full : S[k]) === v ? 'on' : ''}" data-k="${k}" data-v="${v}">${k === 'lang' ? lb : t(lb)}</button>`).join('')}</div></div>`).join('');
    $$('.sbtn', $('#setBody')).forEach(b => b.onclick = async () => {
      const { k, v } = b.dataset;
      if (k === 'full') {
        try { if (v === 'on' && !document.fullscreenElement) await document.documentElement.requestFullscreen(); if (v === 'off' && document.fullscreenElement) await document.exitFullscreen(); } catch (e) { toast(tx('此瀏覽器不支援全螢幕', 'Fullscreen not supported')); }
      } else { S[k] = v; save(); }
      if (k === 'sound' && v === 'on') S.sound = 'on';
      sfx('tap'); applySettings(); renderSettings();
      if (k === 'lang') route();
    });
  }
  document.addEventListener('fullscreenchange', () => { if ($('#settings').classList.contains('open')) renderSettings(); });

  /* ---------- 頁面 ---------- */
  const pages = {};

  pages.home = () => {
    const pct = Math.round(S.done.length / LESSONS.length * 100);
    return `<section class="hero">
      <div class="hero-txt"><div class="badge">${tx('公民與社會 2 ・ 第5章 權利關係與財產權保障', 'Civics & Society 2 · Ch.5')}</div>
        <h1>${t('title')}</h1><p class="lead">${tx('什麼是所有權？所有權有何特性？法律如何保障與限制所有權？跟著小辰的電腦，一起探索財產權的秘密！', 'What is ownership? What are its traits? How does the law protect and limit it? Follow Xiao-Chen’s computer!')}</p>
        <div class="row"><a class="btn big primary" href="#learn/intro">🚀 ${t('start')}</a><a class="btn big" href="#guide">🧭 ${t('nav_guide')}</a></div>
        <div class="prog"><div class="prog-l">${t('progress')} ${pct}%</div><div class="bar"><i style="width:${pct}%"></i></div></div></div>
      <div class="hero-art">${heroArt()}</div></section>
      <section class="card"><h2>🗺️ ${tx('單元概念地圖', 'Concept map')}</h2>${FIG('conceptMap')}</section>
      <section class="grid tiles">${[['guide', '🧭', '#ff7a59', tx('學習目標、步驟與迷思', 'Goals & steps')], ['learn', '📖', '#3b82f6', tx('7 個單元完整教材', '7 full lessons')], ['ex', '✏️', '#10b981', tx('例題、基本／進階／素養題', 'Examples & exercises')], ['lab', '🎮', '#8b5cf6', tx('7 個互動視覺化元件', '7 interactive widgets')], ['ext', '🚀', '#f59e0b', tx('法條卡與延伸探究', 'Statutes & extensions')], ['prac', '🏋️', '#ec4899', tx('閃卡、快問快答、情境分類', 'Flashcards & drills')], ['quiz', '📝', '#ef4444', tx('20 題單元測驗', '20-question test')], ['log', '📊', '#14b8a6', tx('學習歷程與下載', 'Learning log')]].map(([k, i, c, d]) => `<a class="tile" href="#${k === 'learn' ? 'learn/intro' : k}" style="--c:${c}"><div class="ti">${i}</div><b>${t('nav_' + k)}</b><small>${d}</small></a>`).join('')}</section>`;
  };
  function heroArt() {
    const { person, laptop, house, C } = FIGPARTS;
    return `<svg viewBox="0 0 420 340" class="hero-svg"><circle cx="210" cy="170" r="150" fill="url(#hg)"/><defs><radialGradient id="hg"><stop offset="0" stop-color="#fff7ed"/><stop offset="1" stop-color="#fed7aa"/></radialGradient></defs>
      <g class="float1">${house(110, 120, .9)}</g><g class="float2">${laptop(320, 120, 1.3)}</g>
      ${person(210, 260, C.chen, '小辰', { s: 1.2 })}
      <g class="float3"><text x="70" y="250" font-size="40">🐶</text></g><g class="float1"><text x="330" y="250" font-size="40">📱</text></g><g class="float2"><text x="195" y="60" font-size="44">⚖️</text></g></svg>`;
  }

  pages.guide = () => {
    const Q = QUIZ.questions, lv = QUIZ.levels;
    return `<h1 class="ptitle">🧭 ${t('nav_guide')}</h1>
      <section class="card"><h2>🎯 ${tx('學習目標', 'Learning goals')}</h2><ol class="goals">${GUIDE.goals.map(g => `<li>${L(g)}</li>`).join('')}</ol></section>
      <section class="card"><h2>🪜 ${tx('建議學習步驟（約 57 分鐘）', 'Suggested path (~57 min)')}</h2><div class="steps-g">${GUIDE.steps.map((s, i) => `<div class="stp" style="--d:${i * .08}s"><div class="stp-i">${s.icon}</div><div><b>${tx('步驟', 'Step')} ${i + 1}｜${s.min} ${tx('分鐘', 'min')}</b><p>${L(s)}</p></div></div>`).join('')}</div></section>
      <section class="card"><h2>🔑 ${tx('關鍵詞雲（點一下看定義）', 'Keywords (tap for definitions)')}</h2><div class="cloud">${GUIDE.keywords.map((k, i) => `<button class="kw" style="--h:${(i * 37) % 360}" data-k="${k}">${k}</button>`).join('')}</div><div class="kw-def"></div></section>
      <section class="card"><h2>⚠️ ${tx('常見迷思（翻卡看正解）', 'Myths (flip for the truth)')}</h2><div class="grid myths">${GUIDE.myths.map(m => `<div class="flip"><div class="f-in"><div class="f-front">❌ ${L(m.wrong)}</div><div class="f-back">✅ ${L(m.right)}</div></div></div>`).join('')}</div></section>
      <section class="card"><h2>📐 ${tx('雙向細目表（單元測驗 20 題）', 'Two-way specification table (20 test items)')}</h2>
        <div class="tbl-wrap"><table class="spec"><thead><tr><th>${tx('教材內容', 'Content')}</th><th>${tx('頁次', 'Page')}</th>${lv.map((l, i) => `<th>${S.lang === 'en' ? QUIZ.levels_en[i] : l}</th>`).join('')}<th>${tx('題數', 'Items')}</th><th>%</th></tr></thead><tbody>
        ${QUIZ.units.map(u => { const n = Q.filter(q => q.unit === u.id).length; return `<tr><td>${u.id}. ${S.lang === 'en' ? u.en : u.name}</td><td>${u.pages}</td>${lv.map(l => { const ids = Q.map((q, i) => q.unit === u.id && q.level === l ? i + 1 : 0).filter(Boolean); return `<td class="${ids.length ? 'has' : ''}">${ids.join('、') || '—'}</td>`; }).join('')}<td><b>${n}</b></td><td>${n * 5}%</td></tr>`; }).join('')}
        <tr class="tot"><td>${tx('合計', 'Total')}</td><td></td>${lv.map(l => `<td>${Q.filter(q => q.level === l).length}</td>`).join('')}<td>20</td><td>100%</td></tr></tbody></table></div>
        <p class="small">${tx('表格中的數字是題號。', 'Numbers are item numbers.')}</p></section>`;
  };
  function afterGuide() {
    const defs = {}; CARDS.forEach(c => defs[c[0]] = c[1]);
    $$('.kw').forEach(b => b.onclick = () => { sfx('tap'); const k = b.dataset.k; const lesson = LESSONS.find(l => JSON.stringify(l.blocks).includes(k.split('（')[0].replace('・', ''))); $('.kw-def').innerHTML = `<b>${k}</b>：${defs[k] || tx('請到教材中找找看這個關鍵詞！', 'Find it in the lessons!')} ${lesson ? `<a href="#learn/${lesson.id}">→ ${L(lesson.title)}</a>` : ''}`; });
    $$('.flip').forEach(f => f.onclick = () => { f.classList.toggle('on'); sfx('flip'); });
  }

  pages.learn = (id) => {
    const i = Math.max(0, LESSONS.findIndex(l => l.id === id)), les = LESSONS[i];
    const done = S.done.includes(les.id);
    return `<div class="learn">
      <nav class="lnav">${LESSONS.map((l, k) => `<a href="#learn/${l.id}" class="${k === i ? 'on' : ''} ${S.done.includes(l.id) ? 'done' : ''}" style="--c:${l.color}"><span>${l.icon}</span>${L(l.title)}</a>`).join('')}</nav>
      <article class="lesson" style="--c:${les.color}">
        <header class="l-head"><div class="l-ico">${les.icon}</div><div><div class="small">${tx('課本', 'Textbook')} ${les.book}</div><h1>${L(les.title)}</h1></div></header>
        <div class="row"><button class="btn" id="pageBtn">${t('viewPage')}</button><button class="btn" id="speakBtn">🔊 ${tx('朗讀本單元', 'Read aloud')}</button></div>
        <div class="page-img" hidden><img src="assets/pages/p${les.page}.webp" alt="${tx('課本原頁', 'Textbook page')} ${les.book}" loading="lazy"></div>
        ${les.blocks.map(renderBlock).join('')}
        <div class="row l-foot">${i > 0 ? `<a class="btn" href="#learn/${LESSONS[i - 1].id}">${t('prev')}</a>` : '<span></span>'}
          <button class="btn primary big ${done ? 'ok' : ''}" id="doneBtn">${done ? t('doneAlready') : t('done')}</button>
          ${i < LESSONS.length - 1 ? `<a class="btn" href="#learn/${LESSONS[i + 1].id}">${t('next')}</a>` : `<a class="btn" href="#lab">${t('nav_lab')} →</a>`}</div>
      </article></div>`;
  };
  function renderBlock(b) {
    switch (b.t) {
      case 'q': return `<div class="b-q">❓ ${L(b)}</div>`;
      case 'lead': return `<p class="b-lead">${L(b)}</p>`;
      case 'p': return `<p class="b-p">${L(b)}</p>`;
      case 'h': return `<h2 class="b-h">${L(b)}</h2>`;
      case 'key': return `<div class="b-key">💎 ${L(b)}</div>`;
      case 'tip': return `<div class="b-tip">👩‍⚖️ ${L(b)}</div>`;
      case 'fig': return `<figure class="b-fig">${FIG(b.fig)}</figure>`;
      case 'img': return `<figure class="b-fig"><img src="${b.src}" alt="" loading="lazy"><figcaption>${L(b.cap)}</figcaption></figure>`;
      case 'dict': return `<aside class="b-dict"><b>📗 ${L(b.title)}</b><p>${nl(L(b))}</p></aside>`;
      case 'law': return `<div class="b-law"><b>📜 ${b.title}</b><p>「${L(b)}」</p></div>`;
      case 'trait': return `<div class="b-trait"><div class="tn">${b.n}</div><div><h3>${S.lang === 'en' ? b.en : b.zh}</h3><p>${L(b.body)}</p></div></div>`;
      case 'example': return `<div class="b-ex"><div class="ex-tag">${L(b.title)}</div><p>${L(b)}</p></div>`;
      case 'think': return `<div class="b-think"><b>🤔 ${L(b.title)}</b>${b.items.map((it, k) => `<div class="th-it"><p>${k + 1}. ${L(it)}</p><textarea placeholder="${t('yourAns')}" data-think="${esc(L(it)).slice(0, 30)}"></textarea><div class="row"><button class="btn sm save-think">💾 ${tx('記錄到學習歷程', 'Save to log')}</button><button class="btn sm reveal">${t('showRef')}</button></div><div class="ref" hidden>${L(it.ref)}</div></div>`).join('')}</div>`;
      case 'forum': return `<div class="b-forum"><b>🗣️ ${L(b.title)}</b><p>${nl(L(b))}</p><div class="th-it"><p><b>${L(b.ask)}</b></p><textarea placeholder="${t('yourAns')}" data-think="公民論壇"></textarea><div class="row"><button class="btn sm save-think">💾 ${tx('記錄到學習歷程', 'Save to log')}</button></div></div></div>`;
      default: return '';
    }
  }
  function bindThinks(root = document) {
    $$('.reveal', root).forEach(b => b.onclick = () => { const r = b.closest('.th-it').querySelector('.ref'); r.hidden = !r.hidden; sfx('flip'); });
    $$('.save-think', root).forEach(b => b.onclick = () => { const ta = b.closest('.th-it').querySelector('textarea'); if (!ta.value.trim()) return toast(tx('請先寫下想法', 'Write something first')); log('think', ta.dataset.think, ta.value.trim()); sfx('ok'); toast(tx('已記錄到學習歷程 ✓', 'Saved ✓')); });
  }
  function afterLearn(id) {
    const les = LESSONS.find(l => l.id === id) || LESSONS[0];
    $('#pageBtn').onclick = () => { const p = $('.page-img'); p.hidden = !p.hidden; sfx('open'); };
    $('#doneBtn').onclick = () => {
      if (!S.done.includes(les.id)) { S.done.push(les.id); save(); log('lesson', tx('完成閱讀', 'Finished'), L(les.title)); }
      sfx('win'); if (S.done.length === LESSONS.length) confetti();
      const b = $('#doneBtn'); b.textContent = t('doneAlready'); b.classList.add('ok');
      $$('.lnav a').forEach(a => { if (a.getAttribute('href') === '#learn/' + les.id) a.classList.add('done'); });
    };
    $('#speakBtn').onclick = () => {
      if (!('speechSynthesis' in window)) return toast(tx('此瀏覽器不支援語音', 'No speech support'));
      if (speechSynthesis.speaking) { speechSynthesis.cancel(); return; }
      const text = $$('.lesson .b-p, .lesson .b-key, .lesson .b-trait, .lesson .b-ex p, .lesson .b-dict p').map(e => e.textContent).join('。');
      const u = new SpeechSynthesisUtterance(text); u.lang = S.lang === 'en' ? 'en-US' : 'zh-TW'; u.rate = 1; speechSynthesis.speak(u);
    };
    bindThinks();
    log('view', tx('閱讀單元', 'Viewed'), L(les.title));
  }

  pages.ex = () => {
    const exBlocks = []; LESSONS.forEach(l => l.blocks.forEach(b => { if (['example', 'think', 'forum'].includes(b.t)) exBlocks.push([l, b]); }));
    const mc = (arr, key) => arr.map((q, i) => `<div class="mcq" data-set="${key}" data-i="${i}"><p class="mq"><b>${i + 1}.</b> ${L(q.q)}</p><div class="mopts">${q.o.map((o, k) => `<button class="mo" data-k="${k}">(${'ABCD'[k]}) ${L(o)}</button>`).join('')}</div><div class="mex" hidden></div></div>`).join('');
    return `<h1 class="ptitle">✏️ ${t('nav_ex')}</h1>
      <div class="row seg sticky-tabs"><a class="btn" href="#ex-a">📘 ${tx('課本例題', 'Examples')}</a><a class="btn" href="#ex-b">🟢 ${tx('基本題', 'Basic')}</a><a class="btn" href="#ex-c">🔵 ${tx('進階題', 'Advanced')}</a><a class="btn" href="#ex-d">🟣 ${tx('素養題', 'Literacy')}</a></div>
      <section class="card" id="ex-a"><h2>📘 ${tx('課本例題、請想想看、公民論壇', 'Textbook examples & questions')}</h2>${exBlocks.map(([l, b]) => `<div class="from">📍 ${L(l.title)}（${l.book}）</div>${renderBlock(b)}`).join('')}</section>
      <p class="note">ℹ️ ${tx('本節課本無獨立習題，以下基本題、進階題、素養題依教材內容自編，供練習使用。', 'The textbook section has no separate exercises; the following are written from the lesson for practice.')}</p>
      <section class="card" id="ex-b"><h2>🟢 ${tx('基本題', 'Basic')}</h2>${mc(EXERCISES.basic, 'basic')}</section>
      <section class="card" id="ex-c"><h2>🔵 ${tx('進階題', 'Advanced')}</h2>${mc(EXERCISES.advanced, 'advanced')}</section>
      <section class="card" id="ex-d"><h2>🟣 ${tx('素養題', 'Literacy tasks')}</h2>${EXERCISES.literacy.map((q, i) => `<div class="lit"><div class="scene">${L(q.scene)}</div><p><b>${i + 1}.</b> ${L(q.q)}</p><div class="th-it"><textarea placeholder="${t('yourAns')}" data-think="${tx('素養題', 'Literacy')} ${i + 1}"></textarea><div class="row"><button class="btn sm save-think">💾 ${tx('記錄到學習歷程', 'Save to log')}</button><button class="btn sm reveal">${t('showRef')}</button></div><div class="ref" hidden>${L(q.ref)}</div></div></div>`).join('')}</section>`;
  };
  function afterEx() {
    bindThinks();
    $$('.sticky-tabs a').forEach(a => a.onclick = e => { e.preventDefault(); $(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' }); });
    $$('.mcq').forEach(box => {
      const q = EXERCISES[box.dataset.set][+box.dataset.i];
      $$('.mo', box).forEach(b => b.onclick = () => {
        if (box.classList.contains('answered')) return;
        box.classList.add('answered');
        const k = +b.dataset.k, ok = k === q.a;
        b.classList.add(ok ? 'right' : 'wrong'); $$('.mo', box)[q.a].classList.add('right');
        const ex = $('.mex', box); ex.hidden = false; ex.innerHTML = `${ok ? '✅ ' + t('correct') : '❌ ' + t('answer') + ' (' + 'ABCD'[q.a] + ')'}　${L(q.ex)} <button class="btn sm again">↻</button>`;
        $('.again', ex).onclick = () => { box.classList.remove('answered'); $$('.mo', box).forEach(x => x.classList.remove('right', 'wrong')); ex.hidden = true; };
        sfx(ok ? 'ok' : 'no'); log('exercise', `${box.dataset.set} ${+box.dataset.i + 1}`, ok ? '✔' : '✘');
      });
    });
  }

  pages.lab = (id) => {
    const w = WIDGETS.find(x => x.id === id) || WIDGETS[0];
    return `<h1 class="ptitle">🎮 ${t('nav_lab')}</h1>
      <div class="grid wtabs">${WIDGETS.map((x, i) => `<a class="wtab ${x.id === w.id ? 'on' : ''}" href="#lab/${x.id}" style="--d:${i * .05}s"><span>${x.icon}</span><b>${S.lang === 'en' ? x.title[1] : x.title[0]}</b></a>`).join('')}</div>
      <section class="card widget"><h2>${w.icon} ${S.lang === 'en' ? w.title[1] : w.title[0]}</h2><p class="small">${S.lang === 'en' ? w.desc[1] : w.desc[0]}</p><div id="wbox"></div></section>`;
  };
  function afterLab(id) { const w = WIDGETS.find(x => x.id === id) || WIDGETS[0]; w.run($('#wbox')); }

  pages.ext = () => `<h1 class="ptitle">🚀 ${t('nav_ext')}</h1>
    ${EXTEND.map(e => e.laws ? `<section class="card"><h2>${e.icon} ${L(e.title)}</h2><div class="grid laws">${e.laws.map(([n, s]) => `<div class="lawcard"><b>${n}</b><p>${s}</p></div>`).join('')}</div></section>`
    : `<section class="card ext"><h2>${e.icon} ${L(e.title)}</h2><p>${L(e)}</p></section>`).join('')}
    <section class="card"><h2>🔗 ${tx('延伸資源', 'Resources')}</h2><ul class="links">
      <li><a href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=B0000001" target="_blank" rel="noopener">${tx('全國法規資料庫：民法', 'Civil Code (Laws & Regulations Database)')}</a></li>
      <li><a href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0070017" target="_blank" rel="noopener">${tx('全國法規資料庫：著作權法', 'Copyright Act')}</a></li>
      <li><a href="https://www.tipo.gov.tw/" target="_blank" rel="noopener">${tx('經濟部智慧財產局', 'Taiwan Intellectual Property Office')}</a></li>
      <li><a href="https://creativecommons.org/licenses/?lang=zh-TW" target="_blank" rel="noopener">${tx('創用 CC 授權條款', 'Creative Commons licenses')}</a></li></ul></section>`;

  /* ---------- 練習 ---------- */
  let pracMode = 'cards';
  pages.prac = () => `<h1 class="ptitle">🏋️ ${t('nav_prac')}</h1>
    <div class="row seg">${[['cards', '🃏', tx('閃卡', 'Flashcards')], ['tf', '⚡', tx('是非快問快答', 'True/False sprint')], ['case', '🧩', tx('情境分類', 'Case sorting')], ['term', '🔤', tx('名詞配對', 'Term match')]].map(([k, i, n]) => `<button class="btn tab ${pracMode === k ? 'on' : ''}" data-m="${k}">${i} ${n}</button>`).join('')}</div>
    <section class="card" id="pbox"></section>`;
  function afterPrac() {
    $$('.tab').forEach(b => b.onclick = () => { pracMode = b.dataset.m; $$('.tab').forEach(x => x.classList.toggle('on', x === b)); sfx('tap'); runPrac(); });
    runPrac();
  }
  function runPrac() {
    const box = $('#pbox');
    if (pracMode === 'cards') {
      let deck = shuffle(CARDS.map((c, i) => i)), i = 0, known = 0;
      const draw = () => {
        const c = CARDS[deck[i]];
        box.innerHTML = `<div class="small">${i + 1} / ${deck.length}　｜　${tx('已熟悉', 'Known')} ${known}</div>
          <div class="fcard"><div class="f-in"><div class="f-front">${S.lang === 'en' ? c[2] : c[0]}<small>${tx('點擊翻面', 'Tap to flip')}</small></div><div class="f-back">${S.lang === 'en' ? c[3] : c[1]}</div></div></div>
          <div class="row"><button class="btn" id="fNo">🔁 ${tx('還不熟', 'Again')}</button><button class="btn primary" id="fYes">👍 ${tx('我會了', 'Got it')}</button><button class="btn" id="fSh">🔀 ${tx('洗牌', 'Shuffle')}</button></div>`;
        $('.fcard', box).onclick = () => { $('.fcard', box).classList.toggle('on'); sfx('flip'); };
        $('#fYes').onclick = () => { known++; sfx('ok'); next(); };
        $('#fNo').onclick = () => { deck.push(deck[i]); sfx('tap'); next(); };
        $('#fSh').onclick = () => { deck = shuffle(deck); i = 0; known = 0; sfx('spin'); draw(); };
      };
      const next = () => { i++; if (i >= deck.length) { box.innerHTML = `<div class="result">🎉 ${tx('閃卡完成！熟悉', 'Done! Known')} ${known} ${tx('張', 'cards')}<br><button class="btn primary" id="again">↻</button></div>`; log('practice', tx('閃卡', 'Flashcards'), known + '/' + CARDS.length); confetti(); $('#again').onclick = runPrac; } else draw(); };
      draw();
    } else if (pracMode === 'tf') {
      let pool = shuffle(TF), i = 0, sc = 0, left = 60, timer;
      box.innerHTML = `<div class="tf-head"><div class="timer">⏱️ <b id="tl">60</b>s</div><div>${tx('得分', 'Score')} <b id="ts">0</b></div></div><div class="tf-q" id="tq"></div><div class="row"><button class="btn big tfb ok-b" data-v="1">⭕ ${tx('對', 'True')}</button><button class="btn big tfb no-b" data-v="0">❌ ${tx('錯', 'False')}</button></div><div id="tfb"></div>`;
      const show = () => { const q = pool[i % pool.length]; $('#tq').textContent = S.lang === 'en' ? q[1] : q[0]; $('#tq').className = 'tf-q pop-in'; };
      const end = () => { clearInterval(timer); box.innerHTML = `<div class="result">⚡ ${tx('時間到！答對', 'Time! Correct')} ${sc} / ${i}<br><button class="btn primary" id="again">↻ ${tx('再玩一次', 'Again')}</button></div>`; log('practice', tx('是非快問快答', 'T/F sprint'), sc + '/' + i); sfx('win'); if (sc >= 10) confetti(); $('#again').onclick = runPrac; };
      $$('.tfb', box).forEach(b => b.onclick = () => { const q = pool[i % pool.length], ok = (b.dataset.v === '1') === q[2]; sc += ok ? 1 : 0; i++; sfx(ok ? 'ok' : 'no'); $('#ts').textContent = sc; $('#tfb').innerHTML = `<div class="${ok ? 'good' : 'bad'}">${ok ? '✅' : '❌'} ${S.lang === 'en' ? q[1] : q[0]} → ${q[2] ? tx('對', 'True') : tx('錯', 'False')}</div>`; if (i >= pool.length) end(); else show(); });
      show();
      timer = setInterval(() => { left--; const e = $('#tl'); if (!e) return clearInterval(timer); e.textContent = left; if (left <= 10) sfx('tick'); if (left <= 0) end(); }, 1000);
    } else if (pracMode === 'case') {
      let pool = shuffle(CASES), i = 0, sc = 0;
      const draw = () => {
        if (i >= pool.length) { box.innerHTML = `<div class="result">🧩 ${tx('完成！答對', 'Done! Correct')} ${sc} / ${pool.length}<br><button class="btn primary" id="again">↻</button></div>`; log('practice', tx('情境分類', 'Case sorting'), sc + '/' + pool.length); sfx('win'); $('#again').onclick = runPrac; return; }
        const c = pool[i], opts = CASE_KINDS[c.k];
        box.innerHTML = `<div class="small">${i + 1} / ${pool.length}　｜　${tx('答對', 'Correct')} ${sc}</div><div class="claim-card pop-in">📌 ${S.lang === 'en' ? c.e : c.s}<div class="small">${c.k === 'trait' ? tx('屬於哪一種所有權特性？', 'Which trait?') : c.k === 'claim' ? tx('可主張哪一種請求權？', 'Which claim?') : tx('屬於哪一種所有權限制？', 'Which limit?')}</div></div><div class="opts">${opts.map(o => `<button class="btn opt big" data-o="${o}">${o}</button>`).join('')}</div><div id="cfb"></div>`;
        $$('.opt', box).forEach(b => b.onclick = () => { const ok = b.dataset.o === c.a; if (ok) sc++; sfx(ok ? 'ok' : 'no'); $('#cfb').innerHTML = `<div class="${ok ? 'good' : 'bad'}">${ok ? '✅' : '❌'} ${tx('答案：', 'Answer: ')}${c.a}</div>`; $$('.opt', box).forEach(x => x.disabled = true); i++; setTimeout(draw, 1100); });
      };
      draw();
    } else {
      let pool = shuffle(CARDS).slice(0, 10), i = 0, sc = 0;
      const draw = () => {
        if (i >= pool.length) { box.innerHTML = `<div class="result">🔤 ${tx('完成！答對', 'Done! Correct')} ${sc} / ${pool.length}<br><button class="btn primary" id="again">↻</button></div>`; log('practice', tx('名詞配對', 'Term match'), sc + '/' + pool.length); sfx('win'); $('#again').onclick = runPrac; return; }
        const c = pool[i], opts = shuffle([c, ...shuffle(CARDS.filter(x => x !== c)).slice(0, 3)]);
        box.innerHTML = `<div class="small">${i + 1} / ${pool.length}</div><div class="claim-card pop-in">📖 ${S.lang === 'en' ? c[3] : c[1]}</div><div class="opts">${opts.map(o => `<button class="btn opt big" data-o="${o[0]}">${S.lang === 'en' ? o[2] : o[0]}</button>`).join('')}</div><div id="cfb"></div>`;
        $$('.opt', box).forEach(b => b.onclick = () => { const ok = b.dataset.o === c[0]; if (ok) sc++; sfx(ok ? 'ok' : 'no'); b.classList.add(ok ? 'right' : 'wrong'); $$('.opt', box).forEach(x => x.disabled = true); i++; setTimeout(draw, 900); });
      };
      draw();
    }
  }

  /* ---------- 測驗 ---------- */
  let QZ = null;
  pages.quiz = () => `<h1 class="ptitle">📝 ${t('nav_quiz')}</h1><section class="card" id="qbox"></section>`;
  function afterQuiz() { quizIntro(); }
  function quizIntro() {
    const hist = S.log.filter(l => l.type === 'quiz').slice(-5);
    $('#qbox').innerHTML = `<div class="q-intro"><div class="big-ico">📝</div><h2>${L({ zh: QUIZ.title, en: 'Unit test (20 items)' })}</h2>
      <p>${tx('共 20 題單選題，每題 5 分。題目與選項順序隨機，交卷後可看詳解與錯題檢討。', '20 single-choice items, 5 points each. Order is shuffled; review answers after submitting.')}</p>
      <p>🏆 ${tx('最高分', 'Best')}：<b>${S.quizBest}</b></p>
      ${hist.length ? `<p class="small">${tx('最近成績', 'Recent')}：${hist.map(h => h.detail).join('、')}</p>` : ''}
      <button class="btn big primary" id="qStart">${t('q_start')}</button></div>`;
    $('#qStart').onclick = startQuiz;
  }
  function startQuiz() {
    QZ = { items: shuffle(QUIZ.questions.map((q, i) => i)).map(i => ({ i, order: shuffle([0, 1, 2, 3]), pick: null })), cur: 0, t0: Date.now() };
    sfx('open'); drawQ();
  }
  function drawQ() {
    const it = QZ.items[QZ.cur], q = QUIZ.questions[it.i], en = S.lang === 'en';
    const answered = QZ.items.filter(x => x.pick !== null).length;
    $('#qbox').innerHTML = `<div class="q-top"><div>${tx('第', 'Q')} ${QZ.cur + 1} / 20</div><div class="bar"><i style="width:${answered / 20 * 100}%"></i></div><div>⏱️ <span id="qt">0:00</span></div></div>
      <div class="q-card pop-in"><div class="q-meta">${q.unit}｜${q.level}｜${q.page}</div><p class="q-text">${en ? q.q_en : q.q}</p>
      <div class="q-opts">${it.order.map((k, j) => `<button class="qo ${it.pick === k ? 'on' : ''}" data-k="${k}"><span>${'ABCD'[j]}</span>${en ? q.options_en[k] : q.options[k]}</button>`).join('')}</div></div>
      <div class="q-dots">${QZ.items.map((x, j) => `<button class="qd ${x.pick !== null ? 'a' : ''} ${j === QZ.cur ? 'c' : ''}" data-j="${j}">${j + 1}</button>`).join('')}</div>
      <div class="row"><button class="btn" id="qPrev" ${QZ.cur ? '' : 'disabled'}>${t('prev')}</button>${QZ.cur < 19 ? `<button class="btn primary" id="qNext">${t('next')}</button>` : ''}<button class="btn ${answered === 20 ? 'primary' : ''}" id="qSub">📤 ${t('q_submit')}（${answered}/20）</button></div>`;
    $$('.qo').forEach(b => b.onclick = () => { it.pick = +b.dataset.k; sfx('tap'); setTimeout(() => { if (QZ.cur < 19) QZ.cur++; drawQ(); }, 250); $$('.qo').forEach(x => x.classList.toggle('on', x === b)); });
    $$('.qd').forEach(b => b.onclick = () => { QZ.cur = +b.dataset.j; drawQ(); });
    $('#qPrev').onclick = () => { QZ.cur--; drawQ(); };
    if ($('#qNext')) $('#qNext').onclick = () => { QZ.cur++; drawQ(); };
    $('#qSub').onclick = () => { const left = 20 - QZ.items.filter(x => x.pick !== null).length; if (left && !confirm(tx(`還有 ${left} 題未作答，確定交卷？`, `${left} unanswered. Submit?`))) return; finishQuiz(); };
    clearInterval(QZ.tm); const tick = () => { const s = Math.floor((Date.now() - QZ.t0) / 1000), e = $('#qt'); if (e) e.textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; }; tick(); QZ.tm = setInterval(tick, 1000);
  }
  function finishQuiz() {
    clearInterval(QZ.tm);
    const en = S.lang === 'en', secs = Math.floor((Date.now() - QZ.t0) / 1000);
    const right = QZ.items.filter(x => x.pick === QUIZ.questions[x.i].answer).length, score = right * 5;
    const byUnit = {}; QZ.items.forEach(x => { const q = QUIZ.questions[x.i]; byUnit[q.unit] = byUnit[q.unit] || [0, 0]; byUnit[q.unit][1]++; if (x.pick === q.answer) byUnit[q.unit][0]++; });
    S.quizBest = Math.max(S.quizBest, score); save();
    log('quiz', tx('單元測驗', 'Unit test'), `${score}${tx('分', ' pts')}（${right}/20，${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}）`);
    sfx(score >= 60 ? 'win' : 'no'); if (score >= 80) confetti();
    const msg = score >= 90 ? tx('太厲害了！所有權專家 🏆', 'Excellent! 🏆') : score >= 70 ? tx('很不錯！再複習錯題就更完美 👍', 'Good! Review mistakes 👍') : score >= 60 ? tx('及格了！建議再到互動實驗室練習 💪', 'Passed! Try the Lab 💪') : tx('別灰心，回到教材再讀一次吧 📖', 'Keep going — reread the lessons 📖');
    $('#qbox').innerHTML = `<div class="q-res"><div class="ring" style="--p:${score}"><b>${score}</b><small>${t('q_score')}</small></div><h2>${msg}</h2><p>${tx('答對', 'Correct')} ${right}/20　｜　${t('q_time')} ${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}</p>
      <div class="unit-bars">${QUIZ.units.map(u => { const [a, b] = byUnit[u.id] || [0, 0]; return `<div class="ub"><span>${u.id}. ${en ? u.en : u.name}</span><div class="bar"><i style="width:${b ? a / b * 100 : 0}%"></i></div><b>${a}/${b}</b></div>`; }).join('')}</div>
      <div class="row"><button class="btn primary" id="qRe">↻ ${t('q_retry')}</button></div></div>
      <h3>📋 ${t('q_review')}</h3>${QZ.items.map((x, j) => { const q = QUIZ.questions[x.i], ok = x.pick === q.answer; return `<div class="rv ${ok ? 'ok' : 'ng'}"><p><b>${j + 1}. ${ok ? '✅' : '❌'}</b> ${en ? q.q_en : q.q}</p><p>${tx('你的答案', 'Yours')}：${x.pick === null ? '—' : (en ? q.options_en[x.pick] : q.options[x.pick])}　｜　${t('answer')}：<b>${en ? q.options_en[q.answer] : q.options[q.answer]}</b></p><p class="small">💡 ${en ? q.explain_en : q.explain}（${q.page}）</p></div>`; }).join('')}`;
    $('#qRe').onclick = startQuiz;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ---------- 學習歷程 ---------- */
  const typeName = { view: ['📖', '閱讀', 'View'], lesson: ['✅', '完成單元', 'Lesson'], lab: ['🎮', '互動實驗', 'Lab'], exercise: ['✏️', '習題', 'Exercise'], practice: ['🏋️', '練習', 'Practice'], quiz: ['📝', '測驗', 'Test'], think: ['💭', '思考', 'Thinking'], note: ['📒', '心得', 'Note'] };
  pages.log = () => {
    const cnt = k => S.log.filter(l => l.type === k).length;
    return `<h1 class="ptitle">📊 ${t('log_title')}</h1>
      <section class="grid stats">${[['📖', tx('完成單元', 'Lessons'), `${S.done.length}/${LESSONS.length}`], ['🎮', tx('互動實驗', 'Lab'), cnt('lab')], ['🏋️', tx('練習次數', 'Practice'), cnt('practice') + cnt('exercise')], ['🏆', tx('測驗最高分', 'Best test'), S.quizBest]].map(([i, n, v]) => `<div class="stat"><div>${i}</div><b>${v}</b><small>${n}</small></div>`).join('')}</section>
      <section class="card"><div class="row"><label>${t('log_name')}：<input id="nm" value="${esc(S.name)}" placeholder="例：201 王小明 05"></label></div>
        <textarea id="noteTa" placeholder="${t('log_note')}"></textarea><div class="row"><button class="btn primary" id="noteSave">💾 ${t('log_save')}</button></div>
        <div class="row"><button class="btn" id="dCsv">⬇️ ${t('log_dl_csv')}</button><button class="btn" id="dTxt">⬇️ ${t('log_dl_txt')}</button><button class="btn" id="dJson">⬇️ ${t('log_dl_json')}</button><button class="btn danger" id="dClr">🗑️ ${t('log_clear')}</button></div></section>
      <section class="card"><h2>🕒 ${tx('學習時間軸', 'Timeline')}</h2>${S.log.length ? `<ul class="tline">${S.log.slice().reverse().slice(0, 200).map(l => `<li><span class="tico">${(typeName[l.type] || ['•'])[0]}</span><div><b>${esc(l.title)}</b> ${l.detail ? '— ' + esc(l.detail) : ''}<div class="small">${l.time}・${S.lang === 'en' ? (typeName[l.type] || [, , l.type])[2] : (typeName[l.type] || [, l.type])[1]}</div></div></li>`).join('')}</ul>` : `<p>${t('log_empty')}</p>`}</section>`;
  };
  function download(name, text, type) {
    const blob = new Blob([type === 'text/csv' ? '﻿' + text : text], { type: type + ';charset=utf-8' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }
  function afterLog() {
    $('#nm').onchange = e => { S.name = e.target.value.trim(); save(); };
    $('#noteSave').onclick = () => { const v = $('#noteTa').value.trim(); if (!v) return; log('note', tx('學習心得', 'Reflection'), v); sfx('ok'); route(); };
    const stamp = () => new Date().toISOString().slice(0, 10);
    const who = () => S.name || tx('未填姓名', 'anonymous');
    $('#dCsv').onclick = () => { const rows = [['姓名', '時間', '類型', '項目', '內容'], ...S.log.map(l => [who(), l.time, (typeName[l.type] || [, l.type])[1], l.title, l.detail])]; download(`學習歷程_所有權的物權特性_${stamp()}.csv`, rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\r\n'), 'text/csv'); sfx('ok'); };
    $('#dTxt').onclick = () => { const head = `所有權的物權特性｜學習歷程\n姓名：${who()}\n完成單元：${S.done.length}/${LESSONS.length}\n測驗最高分：${S.quizBest}\n匯出時間：${new Date().toLocaleString('zh-TW', { hour12: false })}\n${'='.repeat(30)}\n`; download(`學習歷程_所有權的物權特性_${stamp()}.txt`, head + S.log.map(l => `[${l.time}] ${(typeName[l.type] || [, l.type])[1]}｜${l.title}${l.detail ? '：' + l.detail : ''}`).join('\n'), 'text/plain'); sfx('ok'); };
    $('#dJson').onclick = () => { download(`學習歷程_所有權的物權特性_${stamp()}.json`, JSON.stringify({ name: who(), done: S.done, quizBest: S.quizBest, log: S.log }, null, 2), 'application/json'); sfx('ok'); };
    $('#dClr').onclick = () => { if (!confirm(tx('確定清除所有學習紀錄？', 'Clear all records?'))) return; S.log = []; S.done = []; S.quizBest = 0; save(); sfx('no'); route(); };
  }

  pages.dl = () => `<h1 class="ptitle">📥 ${t('nav_dl')}</h1>
    <section class="grid dls">
      <a class="dl" href="assets/所有權的物權特性.pdf" download><div>📕</div><b>${tx('原始教材 PDF', 'Original PDF')}</b><small>所有權的物權特性.pdf（1.8 MB）</small></a>
      <a class="dl" href="雙向細目表與測驗題.md" download><div>📐</div><b>${tx('雙向細目表與 20 題', 'Spec table & 20 items')}</b><small>Markdown</small></a>
      <a class="dl" href="data/quiz.json" download><div>🧾</div><b>${tx('測驗題庫 JSON', 'Quiz JSON')}</b><small>quiz.json</small></a>
      <a class="dl" href="video/所有權的物權特性_影片簡報.html" target="_blank"><div>🎬</div><b>${tx('9:16 影片簡報', '9:16 video lesson')}</b><small>HTML</small></a>
      <a class="dl" href="https://padlet.com/vincent532/padlet-s024k8esh2vcj370l965" target="_blank" rel="noopener"><div>🧱</div><b>${tx('Padlet 教學板', 'Padlet board')}</b><small>padlet.com</small></a>
    </section>
    <section class="card"><h2>🖼️ ${tx('課本原頁（點擊放大）', 'Textbook pages (tap to enlarge)')}</h2><div class="grid thumbs">${[1, 2, 3, 4, 5, 6, 7].map(p => `<button class="thumb" data-p="${p}"><img src="assets/pages/p${p}.webp" alt="p.${108 + p}" loading="lazy"><span>p.${108 + p}</span></button>`).join('')}</div></section>`;
  function afterDl() {
    $$('.dl').forEach(a => a.addEventListener('click', () => { sfx('ok'); log('view', tx('下載', 'Download'), a.querySelector('b').textContent); }));
    $$('.thumb').forEach(b => b.onclick = () => { sfx('open'); const d = document.createElement('div'); d.className = 'lightbox'; d.innerHTML = `<img src="assets/pages/p${b.dataset.p}.webp" alt="">`; d.onclick = () => d.remove(); document.body.appendChild(d); });
  }

  /* ---------- 路由 ---------- */
  const after = { guide: afterGuide, learn: afterLearn, ex: afterEx, lab: afterLab, prac: afterPrac, quiz: afterQuiz, log: afterLog, dl: afterDl };
  function route() {
    if (window.speechSynthesis) speechSynthesis.cancel();
    if (QZ) clearInterval(QZ.tm);
    let [p, arg] = (location.hash.slice(1) || 'home').split('/');
    if (!pages[p]) { p = 'home'; }
    const main = $('#main');
    main.innerHTML = pages[p](arg);
    main.classList.remove('enter'); void main.offsetWidth; main.classList.add('enter');
    $$('[data-nav]').forEach(a => a.classList.toggle('on', a.dataset.nav === p));
    if (after[p]) after[p](arg);
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', () => { sfx('tap'); route(); });

  /* ---------- 啟動 ---------- */
  const NAV = [['home', '🏠'], ['guide', '🧭'], ['learn', '📖'], ['ex', '✏️'], ['lab', '🎮'], ['ext', '🚀'], ['prac', '🏋️'], ['quiz', '📝'], ['log', '📊'], ['dl', '📥']];
  $('#nav').innerHTML = NAV.map(([k, i]) => `<a href="#${k === 'learn' ? 'learn/intro' : k}" data-nav="${k}"><b>${i}</b><span></span></a>`).join('');
  $('#setBtn').onclick = () => { $('#settings').classList.add('open'); renderSettings(); sfx('open'); };
  $('#setClose').onclick = $('#setMask').onclick = () => { $('#settings').classList.remove('open'); sfx('tap'); };
  document.addEventListener('keydown', e => { if (e.key === 'Escape') $('#settings').classList.remove('open'); });
  applySettings(); route();
})();
