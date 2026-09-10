'use strict';
/* =========================================================
   MyCountryBeats — App Logic
   Sections:
   1. Data (categories + countries)
   2. Audio engine (tiny synth, no audio files)
   3. DOM references
   4. Toast helper
   5. Modal (How To Play)
   6. Custom country picker component
   7. Battle engine
   8. Confetti engine
   9. Init
   ========================================================= */

/* ---------- 1. Data ---------- */
const CATS = [
  { key: 'nature',  icon: '🏔️', label: 'Natural Beauty' },
  { key: 'army',    icon: '🎖️', label: 'Military Might' },
  { key: 'food',    icon: '🍜', label: 'Food' },
  { key: 'weather', icon: '☀️', label: 'Weather' },
  { key: 'culture', icon: '🏛️', label: 'Culture & History' },
  { key: 'tech',    icon: '🚀', label: 'Innovation' }
];

// Scores are 1-10 "for fun" approximations based on general reputation —
// not an official or scientific ranking. Tweak freely.
const COUNTRIES = [
  { name: 'United States',         flag: '🇺🇸', nature: 9,  army: 10, food: 7,  weather: 6, culture: 8,  tech: 10 },
  { name: 'Canada',                flag: '🇨🇦', nature: 10, army: 5,  food: 6,  weather: 4, culture: 6,  tech: 7 },
  { name: 'Brazil',                flag: '🇧🇷', nature: 10, army: 6,  food: 8,  weather: 7, culture: 9,  tech: 5 },
  { name: 'Mexico',                flag: '🇲🇽', nature: 8,  army: 4,  food: 10, weather: 8, culture: 8,  tech: 4 },
  { name: 'United Kingdom',        flag: '🇬🇧', nature: 6,  army: 8,  food: 5,  weather: 4, culture: 9,  tech: 8 },
  { name: 'France',                flag: '🇫🇷', nature: 8,  army: 8,  food: 10, weather: 6, culture: 10, tech: 7 },
  { name: 'Germany',               flag: '🇩🇪', nature: 6,  army: 7,  food: 6,  weather: 5, culture: 8,  tech: 9 },
  { name: 'Italy',                 flag: '🇮🇹', nature: 8,  army: 6,  food: 10, weather: 8, culture: 10, tech: 6 },
  { name: 'Spain',                 flag: '🇪🇸', nature: 8,  army: 6,  food: 9,  weather: 9, culture: 9,  tech: 6 },
  { name: 'Portugal',              flag: '🇵🇹', nature: 7,  army: 4,  food: 8,  weather: 8, culture: 7,  tech: 5 },
  { name: 'Russia',                flag: '🇷🇺', nature: 8,  army: 9,  food: 5,  weather: 3, culture: 8,  tech: 7 },
  { name: 'China',                 flag: '🇨🇳', nature: 7,  army: 9,  food: 9,  weather: 5, culture: 9,  tech: 9 },
  { name: 'Japan',                 flag: '🇯🇵', nature: 8,  army: 6,  food: 10, weather: 6, culture: 9,  tech: 10 },
  { name: 'South Korea',           flag: '🇰🇷', nature: 6,  army: 7,  food: 8,  weather: 5, culture: 7,  tech: 9 },
  { name: 'India',                 flag: '🇮🇳', nature: 8,  army: 8,  food: 9,  weather: 5, culture: 10, tech: 7 },
  { name: 'Pakistan',              flag: '🇵🇰', nature: 8,  army: 7,  food: 8,  weather: 5, culture: 7,  tech: 4 },
  { name: 'Indonesia',             flag: '🇮🇩', nature: 9,  army: 5,  food: 8,  weather: 6, culture: 7,  tech: 4 },
  { name: 'Thailand',              flag: '🇹🇭', nature: 9,  army: 4,  food: 9,  weather: 6, culture: 7,  tech: 4 },
  { name: 'Turkey',                flag: '🇹🇷', nature: 7,  army: 7,  food: 9,  weather: 7, culture: 8,  tech: 5 },
  { name: 'Egypt',                 flag: '🇪🇬', nature: 6,  army: 6,  food: 6,  weather: 6, culture: 9,  tech: 3 },
  { name: 'Nigeria',               flag: '🇳🇬', nature: 6,  army: 5,  food: 6,  weather: 5, culture: 7,  tech: 3 },
  { name: 'South Africa',          flag: '🇿🇦', nature: 9,  army: 5,  food: 6,  weather: 7, culture: 7,  tech: 4 },
  { name: 'Australia',             flag: '🇦🇺', nature: 10, army: 6,  food: 6,  weather: 7, culture: 6,  tech: 7 },
  { name: 'New Zealand',           flag: '🇳🇿', nature: 10, army: 3,  food: 6,  weather: 6, culture: 6,  tech: 6 },
  { name: 'Switzerland',           flag: '🇨🇭', nature: 10, army: 5,  food: 6,  weather: 6, culture: 6,  tech: 9 },
  { name: 'Netherlands',           flag: '🇳🇱', nature: 6,  army: 5,  food: 5,  weather: 4, culture: 7,  tech: 8 },
  { name: 'Sweden',                flag: '🇸🇪', nature: 8,  army: 5,  food: 5,  weather: 4, culture: 6,  tech: 9 },
  { name: 'Norway',                flag: '🇳🇴', nature: 10, army: 5,  food: 5,  weather: 3, culture: 6,  tech: 8 },
  { name: 'Iceland',               flag: '🇮🇸', nature: 10, army: 1,  food: 5,  weather: 3, culture: 5,  tech: 6 },
  { name: 'Greece',                flag: '🇬🇷', nature: 8,  army: 6,  food: 8,  weather: 8, culture: 10, tech: 5 },
  { name: 'Saudi Arabia',          flag: '🇸🇦', nature: 5,  army: 7,  food: 6,  weather: 3, culture: 6,  tech: 6 },
  { name: 'United Arab Emirates',  flag: '🇦🇪', nature: 5,  army: 6,  food: 6,  weather: 3, culture: 5,  tech: 8 },
  { name: 'Israel',                flag: '🇮🇱', nature: 6,  army: 8,  food: 7,  weather: 7, culture: 7,  tech: 9 },
  { name: 'Argentina',             flag: '🇦🇷', nature: 9,  army: 5,  food: 8,  weather: 7, culture: 8,  tech: 5 },
  { name: 'Colombia',              flag: '🇨🇴', nature: 9,  army: 5,  food: 7,  weather: 7, culture: 7,  tech: 4 },
  { name: 'Peru',                  flag: '🇵🇪', nature: 9,  army: 4,  food: 8,  weather: 6, culture: 8,  tech: 3 },
  { name: 'Vietnam',               flag: '🇻🇳', nature: 8,  army: 6,  food: 9,  weather: 6, culture: 7,  tech: 5 },
  { name: 'Philippines',           flag: '🇵🇭', nature: 9,  army: 4,  food: 6,  weather: 6, culture: 6,  tech: 4 },
  { name: 'Malaysia',              flag: '🇲🇾', nature: 8,  army: 4,  food: 8,  weather: 6, culture: 6,  tech: 5 },
  { name: 'Ukraine',               flag: '🇺🇦', nature: 6,  army: 7,  food: 5,  weather: 5, culture: 6,  tech: 5 },
  { name: 'Poland',                flag: '🇵🇱', nature: 6,  army: 6,  food: 5,  weather: 4, culture: 6,  tech: 6 }
].sort((a, b) => a.name.localeCompare(b.name));

/* ---------- 2. Audio engine ---------- */
const Audio2 = (() => {
  let ctx = null;
  let muted = false;

  function ensureCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    return ctx;
  }

  function tone(freq, dur, type = 'sine', delay = 0, vol = 0.18) {
    if (muted) return;
    const c = ensureCtx();
    const t0 = c.currentTime + delay;
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    gain.gain.setValueAtTime(0, t0);
    gain.gain.linearRampToValueAtTime(vol, t0 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
    osc.connect(gain).connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.02);
  }

  return {
    unlock: () => ensureCtx(),
    toggleMute: () => { muted = !muted; return muted; },
    isMuted: () => muted,
    click: () => tone(520, 0.08, 'square'),
    whoosh: () => tone(340, 0.12, 'sawtooth', 0, 0.08),
    ding: side => side === 'a' ? tone(660, 0.18, 'triangle') : tone(500, 0.18, 'triangle'),
    tie: () => tone(300, 0.15, 'sine'),
    fanfare: () => [523, 659, 784, 1046].forEach((f, i) => tone(f, 0.28, 'triangle', i * 0.14, 0.16)),
    milestone: () => [784, 988, 1174].forEach((f, i) => tone(f, 0.2, 'sine', i * 0.09, 0.14))
  };
})();

/* ---------- 3. DOM references ---------- */
const dom = {
  battleCount: document.getElementById('battleCount'),
  muteBtn: document.getElementById('muteBtn'),
  helpBtn: document.getElementById('helpBtn'),

  selectA: { trigger: document.getElementById('triggerA'), dropdown: document.getElementById('dropdownA'), search: document.getElementById('searchA'), list: document.getElementById('listA'), flag: document.getElementById('flagA'), label: document.getElementById('labelA') },
  selectB: { trigger: document.getElementById('triggerB'), dropdown: document.getElementById('dropdownB'), search: document.getElementById('searchB'), list: document.getElementById('listB'), flag: document.getElementById('flagB'), label: document.getElementById('labelB') },

  fightBtn: document.getElementById('fightBtn'),
  randomBtn: document.getElementById('randomBtn'),

  battleFlagA: document.getElementById('battleFlagA'),
  battleFlagB: document.getElementById('battleFlagB'),
  battleNameA: document.getElementById('battleNameA'),
  battleNameB: document.getElementById('battleNameB'),
  roundLabel: document.getElementById('roundLabel'),
  scoreRow: document.getElementById('scoreRow'),
  scoreA: document.getElementById('scoreA'),
  scoreB: document.getElementById('scoreB'),
  catIcon: document.getElementById('catIcon'),
  catName: document.getElementById('catName'),
  categoryCard: document.getElementById('categoryCard'),
  barA: document.getElementById('barA'),
  barB: document.getElementById('barB'),
  battleLog: document.getElementById('battleLog'),

  winnerFlag: document.getElementById('winnerFlag'),
  winnerName: document.getElementById('winnerName'),
  loserFlag: document.getElementById('loserFlag'),
  loserName: document.getElementById('loserName'),
  breakdown: document.getElementById('breakdown'),
  rematchBtn: document.getElementById('rematchBtn'),
  newBattleBtn: document.getElementById('newBattleBtn'),
  shareBtn: document.getElementById('shareBtn'),

  modalOverlay: document.getElementById('modalOverlay'),
  modalCloseBtn: document.getElementById('modalCloseBtn'),
  toast: document.getElementById('toast'),

  confettiCanvas: document.getElementById('confettiCanvas')
};

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* ---------- 4. Toast helper ---------- */
let toastTimer = null;
function showToast(message, duration = 2400) {
  dom.toast.textContent = message;
  dom.toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => dom.toast.classList.remove('show'), duration);
}

const MILESTONES = [5, 10, 25, 50, 100, 250];
function checkMilestone(count) {
  if (MILESTONES.includes(count)) {
    Audio2.milestone();
    showToast(`🎉 ${count} battles fought! Keep the streak going!`, 3200);
  }
}

/* ---------- 5. Modal (How To Play) ---------- */
function openModal() { dom.modalOverlay.classList.add('open'); }
function closeModal() { dom.modalOverlay.classList.remove('open'); }

dom.helpBtn.addEventListener('click', () => { Audio2.click(); openModal(); });
dom.modalCloseBtn.addEventListener('click', () => { Audio2.click(); closeModal(); localStorage.setItem('mcb_seen_intro', '1'); });
dom.modalOverlay.addEventListener('click', e => { if (e.target === dom.modalOverlay) closeModal(); });

/* ---------- 6. Custom country picker component ---------- */
const pickerState = { a: null, b: null };

function buildDropdown(sideKey) {
  const refs = sideKey === 'a' ? dom.selectA : dom.selectB;
  const otherKey = sideKey === 'a' ? 'b' : 'a';

  function render(filter = '') {
    const q = filter.trim().toLowerCase();
    const matches = COUNTRIES
      .map((c, idx) => ({ c, idx }))
      .filter(({ c }) => c.name.toLowerCase().includes(q));

    if (matches.length === 0) {
      refs.list.innerHTML = '<div class="dropdownEmpty">No countries match 🔍</div>';
      return;
    }

    refs.list.innerHTML = matches.map(({ c, idx }) => {
      const isTaken = pickerState[otherKey] === idx;
      return `<div class="dropdownItem${isTaken ? ' disabledItem' : ''}" data-idx="${idx}">
                <span class="flagSm">${c.flag}</span><span>${c.name}</span>
              </div>`;
    }).join('');
  }

  refs.trigger.addEventListener('click', () => {
    const isOpen = refs.dropdown.classList.contains('open');
    closeAllDropdowns();
    if (!isOpen) {
      Audio2.whoosh();
      refs.dropdown.classList.add('open');
      render(refs.search.value);
      refs.search.focus();
    }
  });

  refs.search.addEventListener('input', () => render(refs.search.value));

  refs.list.addEventListener('click', e => {
    const item = e.target.closest('.dropdownItem');
    if (!item || item.classList.contains('disabledItem')) return;
    const idx = parseInt(item.dataset.idx, 10);
    selectCountry(sideKey, idx);
    refs.dropdown.classList.remove('open');
    refs.search.value = '';
  });

  render();
}

function closeAllDropdowns() {
  dom.selectA.dropdown.classList.remove('open');
  dom.selectB.dropdown.classList.remove('open');
}
document.addEventListener('click', e => {
  if (!e.target.closest('.picker')) closeAllDropdowns();
});

function selectCountry(sideKey, idx) {
  const refs = sideKey === 'a' ? dom.selectA : dom.selectB;
  const country = COUNTRIES[idx];
  pickerState[sideKey] = idx;
  refs.flag.textContent = country.flag;
  refs.label.textContent = country.name;
  refs.label.classList.add('chosen');
  Audio2.click();
  refreshFightAvailability();
}

function refreshFightAvailability() {
  const { a, b } = pickerState;
  const ready = a !== null && b !== null && a !== b;
  dom.fightBtn.disabled = !ready;
}

dom.randomBtn.addEventListener('click', () => {
  Audio2.click();
  let ai = Math.floor(Math.random() * COUNTRIES.length);
  let bi = Math.floor(Math.random() * COUNTRIES.length);
  while (bi === ai) bi = Math.floor(Math.random() * COUNTRIES.length);
  selectCountry('a', ai);
  selectCountry('b', bi);
});

/* ---------- 7. Battle engine ---------- */
let battleState = null;

function startBattle() {
  const a = COUNTRIES[pickerState.a];
  const b = COUNTRIES[pickerState.b];

  battleState = { a, b, round: 0, scoreA: 0, scoreB: 0, totalA: 0, totalB: 0, results: [] };

  dom.battleFlagA.textContent = a.flag;
  dom.battleFlagB.textContent = b.flag;
  dom.battleFlagA.classList.add('entrance');
  dom.battleFlagB.classList.add('entrance');
  dom.battleNameA.textContent = a.name;
  dom.battleNameB.textContent = b.name;
  dom.scoreA.textContent = '0';
  dom.scoreB.textContent = '0';
  dom.barA.style.width = '0%';
  dom.barB.style.width = '0%';
  dom.battleLog.innerHTML = '';

  showScreen('battleScreen');
  setTimeout(nextRound, 300);
}

function floatPointPopup(side) {
  const el = document.createElement('span');
  el.className = `floatPoint ${side}`;
  el.textContent = '+1';
  dom.scoreRow.appendChild(el);
  setTimeout(() => el.remove(), 1000);
}

function nextRound() {
  if (battleState.round >= CATS.length) {
    setTimeout(finishBattle, 700);
    return;
  }

  const cat = CATS[battleState.round];
  dom.roundLabel.textContent = `Round ${battleState.round + 1} / ${CATS.length}`;
  dom.catIcon.textContent = cat.icon;
  dom.catName.textContent = cat.label;
  dom.barA.style.width = '0%';
  dom.barB.style.width = '0%';
  dom.battleLog.innerHTML = '';

  const vA = battleState.a[cat.key];
  const vB = battleState.b[cat.key];

  requestAnimationFrame(() => {
    setTimeout(() => {
      dom.barA.style.width = (vA * 10) + '%';
      dom.barB.style.width = (vB * 10) + '%';
    }, 120);
  });

  setTimeout(() => {
    let winner;
    if (vA > vB) { battleState.scoreA++; winner = 'a'; }
    else if (vB > vA) { battleState.scoreB++; winner = 'b'; }
    else { winner = 'tie'; }

    battleState.totalA += vA;
    battleState.totalB += vB;
    battleState.results.push({ cat, vA, vB, winner });

    dom.scoreA.textContent = battleState.scoreA;
    dom.scoreB.textContent = battleState.scoreB;
    dom.scoreRow.classList.remove('bump');
    void dom.scoreRow.offsetWidth;
    dom.scoreRow.classList.add('bump');
    dom.categoryCard.classList.remove('shake');
    void dom.categoryCard.offsetWidth;
    dom.categoryCard.classList.add('shake');

    if (winner === 'tie') {
      Audio2.tie();
      dom.battleLog.innerHTML = `<span>🤝 Tie in ${cat.label}!</span>`;
    } else {
      Audio2.ding(winner);
      floatPointPopup(winner);
      const c = winner === 'a' ? battleState.a : battleState.b;
      dom.battleLog.innerHTML = `<span>${c.flag} ${c.name} wins ${cat.label}!</span>`;
    }

    battleState.round++;
    setTimeout(nextRound, 1100);
  }, 1250);
}

function finishBattle() {
  let championIsA;
  if (battleState.scoreA !== battleState.scoreB) {
    championIsA = battleState.scoreA > battleState.scoreB;
  } else {
    championIsA = battleState.totalA >= battleState.totalB;
  }
  const champ = championIsA ? battleState.a : battleState.b;
  const loser = championIsA ? battleState.b : battleState.a;
  const champScore = championIsA ? battleState.scoreA : battleState.scoreB;
  const loserScore = championIsA ? battleState.scoreB : battleState.scoreA;

  dom.winnerFlag.textContent = champ.flag;
  dom.winnerName.textContent = champ.name;
  dom.loserFlag.textContent = loser.flag;
  dom.loserName.textContent = loser.name;

  dom.breakdown.innerHTML = battleState.results.map((r, i) => {
    let icon = r.winner === 'tie' ? '🤝' : (r.winner === 'a' ? battleState.a.flag : battleState.b.flag);
    return `<div class="breakRow" style="animation-delay:${i * 90}ms">
              <div class="breakCat">${r.cat.icon} ${r.cat.label}</div>
              <div class="breakWinner">${icon}</div>
            </div>`;
  }).join('');

  battleState.champ = champ;
  battleState.loser = loser;
  battleState.champScore = champScore;
  battleState.loserScore = loserScore;

  const count = parseInt(localStorage.getItem('mcb_battles') || '0', 10) + 1;
  localStorage.setItem('mcb_battles', count);
  dom.battleCount.textContent = count;

  showScreen('resultScreen');
  Audio2.fanfare();
  launchConfetti();
  checkMilestone(count);
}

dom.fightBtn.addEventListener('click', () => { Audio2.unlock(); Audio2.click(); startBattle(); });
dom.rematchBtn.addEventListener('click', () => { Audio2.click(); startBattle(); });
dom.newBattleBtn.addEventListener('click', () => {
  Audio2.click();
  pickerState.a = null; pickerState.b = null;
  dom.selectA.flag.textContent = '🏳️'; dom.selectA.label.textContent = 'Choose Country A';
  dom.selectB.flag.textContent = '🏳️'; dom.selectB.label.textContent = 'Choose Country B';
  dom.selectA.label.classList.remove('chosen'); dom.selectB.label.classList.remove('chosen');
  refreshFightAvailability();
  showScreen('homeScreen');
});
dom.shareBtn.addEventListener('click', () => {
  Audio2.click();
  const { champ, loser, champScore, loserScore } = battleState;
  const text = `${champ.flag} ${champ.name} just beat ${loser.flag} ${loser.name} ${champScore}-${loserScore} on MyCountryBeats! Who wins your matchup? 🌍`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
      .then(() => showToast('📋 Result copied — go paste it somewhere fun!'))
      .catch(() => showToast(text, 4000));
  } else {
    showToast(text, 4000);
  }
});

/* ---------- 8. Confetti engine ---------- */
const ctx2d = dom.confettiCanvas.getContext('2d');
function resizeCanvas() {
  dom.confettiCanvas.width = window.innerWidth;
  dom.confettiCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const CONFETTI_COLORS = ['#FF6B5B', '#3D8BFF', '#FFD23F', '#3CCB6F', '#8B5CF6'];
let particles = [];
let confettiAnimId = null;

function launchConfetti() {
  particles = [];
  for (let i = 0; i < 160; i++) {
    particles.push({
      x: Math.random() * dom.confettiCanvas.width,
      y: -20 - Math.random() * dom.confettiCanvas.height * 0.5,
      vx: (Math.random() - 0.5) * 3,
      vy: 2 + Math.random() * 3,
      size: 6 + Math.random() * 6,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.3,
      life: 0
    });
  }
  if (confettiAnimId) cancelAnimationFrame(confettiAnimId);
  animateConfetti();
}

function animateConfetti() {
  ctx2d.clearRect(0, 0, dom.confettiCanvas.width, dom.confettiCanvas.height);
  let alive = false;
  particles.forEach(p => {
    p.life++;
    p.x += p.vx; p.y += p.vy; p.vy += 0.03; p.rot += p.vr;
    if (p.y < dom.confettiCanvas.height + 20 && p.life < 480) alive = true;
    ctx2d.save();
    ctx2d.translate(p.x, p.y);
    ctx2d.rotate(p.rot);
    ctx2d.fillStyle = p.color;
    ctx2d.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
    ctx2d.restore();
  });
  if (alive) {
    confettiAnimId = requestAnimationFrame(animateConfetti);
  } else {
    ctx2d.clearRect(0, 0, dom.confettiCanvas.width, dom.confettiCanvas.height);
  }
}

/* ---------- 9. Init ---------- */
(function init() {
  dom.muteBtn.addEventListener('click', () => {
    const isMuted = Audio2.toggleMute();
    dom.muteBtn.textContent = isMuted ? '🔇' : '🔊';
  });

  buildDropdown('a');
  buildDropdown('b');
  refreshFightAvailability();

  dom.battleCount.textContent = localStorage.getItem('mcb_battles') || '0';

  if (!localStorage.getItem('mcb_seen_intro')) {
    setTimeout(openModal, 400);
  }
})();
