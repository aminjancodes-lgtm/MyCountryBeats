/**
 * MyCountryBeats - Clean App Controller
 * Auto-battle by default with arcade intro and dynamic tug-of-war meter!
 */

document.addEventListener('DOMContentLoaded', () => {
    let countryA = 'US';
    let countryB = 'IT';
    let selectingTarget = 'A';
    const engine = new BattleEngine();

    // Screens
    const setupScreen = document.getElementById('setup-screen');
    const battleScreen = document.getElementById('battle-screen');
    const victoryScreen = document.getElementById('victory-screen');
    const fightSplash = document.getElementById('fight-splash');
    const splashNameA = document.getElementById('splash-name-a');
    const splashNameB = document.getElementById('splash-name-b');

    // Setup Elements
    const cardA = document.getElementById('card-a');
    const cardB = document.getElementById('card-b');
    const flagA = document.getElementById('flag-a');
    const flagB = document.getElementById('flag-b');
    const nameA = document.getElementById('name-a');
    const nameB = document.getElementById('name-b');
    const mascotBadgeA = document.getElementById('mascot-badge-a');
    const mascotBadgeB = document.getElementById('mascot-badge-b');
    const surpriseBtn = document.getElementById('surprise-btn');
    const brawlStartBtn = document.getElementById('brawl-start-btn');
    const soundToggleBtn = document.getElementById('sound-toggle-btn');

    // Battle Elements
    const scoreNameA = document.getElementById('score-name-a');
    const scoreNameB = document.getElementById('score-name-b');
    const scoreValA = document.getElementById('score-val-a');
    const scoreValB = document.getElementById('score-val-b');
    const roundPill = document.getElementById('round-pill');
    const roundTrackerBar = document.getElementById('round-tracker-bar');
    const categoryTitle = document.getElementById('category-title');
    const categoryQuestion = document.getElementById('category-question');
    const stageRing = document.getElementById('stage-ring');

    // Tug of War Elements
    const tugRed = document.getElementById('tug-red');
    const tugBlue = document.getElementById('tug-blue');
    const tugGlove = document.getElementById('tug-glove');

    // Fighters & Overlays
    const fighterA = document.getElementById('fighter-a');
    const fighterB = document.getElementById('fighter-b');
    const avatarA = document.getElementById('avatar-a');
    const avatarB = document.getElementById('avatar-b');
    const tagA = document.getElementById('tag-a');
    const tagB = document.getElementById('tag-b');
    const crownA = document.getElementById('crown-a');
    const crownB = document.getElementById('crown-b');
    const pointsA = document.getElementById('points-a');
    const pointsB = document.getElementById('points-b');
    const dizzyA = document.getElementById('dizzy-a');
    const dizzyB = document.getElementById('dizzy-b');
    const koA = document.getElementById('ko-a');
    const koB = document.getElementById('ko-b');
    const statusA = document.getElementById('status-a');
    const statusB = document.getElementById('status-b');

    // Weapons & Collisions
    const weaponA = document.getElementById('weapon-a');
    const weaponB = document.getElementById('weapon-b');
    const impactExplosion = document.getElementById('impact-explosion');

    // Winner Banner & Controls
    const roundVerdictBanner = document.getElementById('round-verdict-banner');
    const verdictBigBadge = document.getElementById('verdict-big-badge');
    const verdictSubtext = document.getElementById('verdict-subtext');
    const pauseBtn = document.getElementById('pause-btn');
    const skipBtn = document.getElementById('skip-btn');
    const autoStatusHint = document.getElementById('auto-status-hint');

    // Victory Elements
    const victoryHeading = document.getElementById('victory-heading');
    const victoryScoreBadge = document.getElementById('victory-score-badge');
    const victoryMascot = document.getElementById('victory-mascot');
    const playAgainBtn = document.getElementById('play-again-btn');
    const shareResultBtn = document.getElementById('share-result-btn');

    // Modal Elements
    const countryModal = document.getElementById('country-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalTitleText = document.getElementById('modal-title-text');
    const modalList = document.getElementById('modal-list');
    const toastMsg = document.getElementById('toast-msg');

    // Initialize
    function init() {
        renderSetupCards();
        setupEvents();
    }

    // Render Setup Cards
    function renderSetupCards() {
        const cA = getCountry(countryA);
        const cB = getCountry(countryB);

        flagA.textContent = cA.flag;
        nameA.textContent = cA.name;
        mascotBadgeA.textContent = `${cA.mascot.emoji} ${cA.mascot.name}`;

        flagB.textContent = cB.flag;
        nameB.textContent = cB.name;
        mascotBadgeB.textContent = `${cB.mascot.emoji} ${cB.mascot.name}`;
    }

    // Event Handlers
    function setupEvents() {
        cardA.addEventListener('click', () => openModal('A'));
        cardB.addEventListener('click', () => openModal('B'));

        modalCloseBtn.addEventListener('click', closeModal);
        countryModal.addEventListener('click', (e) => {
            if (e.target === countryModal) closeModal();
        });

        // Surprise Me button
        surpriseBtn.addEventListener('click', () => {
            sfx.boing();
            const keys = Object.keys(CURATED_COUNTRIES);
            let randA = keys[Math.floor(Math.random() * keys.length)];
            let randB = keys[Math.floor(Math.random() * keys.length)];
            while (randB === randA) {
                randB = keys[Math.floor(Math.random() * keys.length)];
            }
            countryA = randA;
            countryB = randB;
            renderSetupCards();
            showToast('🎲 New random matchup!');
        });

        // Sound Toggle
        soundToggleBtn.addEventListener('click', () => {
            const enabled = sfx.toggle();
            soundToggleBtn.textContent = enabled ? '🔊 Sound: ON' : '🔇 Sound: OFF';
            if (enabled) sfx.click();
        });

        // Start Brawl with Arcade Intro Splash
        brawlStartBtn.addEventListener('click', launchFightIntro);

        // Pause / Resume Button
        pauseBtn.addEventListener('click', () => {
            sfx.click();
            const isPaused = engine.togglePause();
            pauseBtn.textContent = isPaused ? '▶️ Resume' : '⏸️ Pause';
            autoStatusHint.innerHTML = isPaused ? '<span>⏸️ Battle paused</span>' : '<span>⚡ Auto-battling round by round...</span>';
        });

        // Skip to Finish
        skipBtn.addEventListener('click', () => {
            sfx.punch();
            engine.skipAll();
        });

        // Play Again
        playAgainBtn.addEventListener('click', () => {
            sfx.click();
            victoryScreen.classList.remove('active');
            battleScreen.classList.remove('active');
            setupScreen.style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Share Scorecard
        shareResultBtn.addEventListener('click', () => {
            sfx.click();
            const cA = getCountry(countryA);
            const cB = getCountry(countryB);
            const text = `🥊 MyCountryBeats Showdown!\n` +
                         `${cA.flag} ${cA.name} [${engine.scoreA}] vs [${engine.scoreB}] ${cB.flag} ${cB.name}\n` +
                         `Winner: ${engine.scoreA > engine.scoreB ? cA.name + ' 🏆' : (engine.scoreB > engine.scoreA ? cB.name + ' 🏆' : 'Tied!')}\n` +
                         `Play at MyCountryBeats! 🌍✨`;

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(() => {
                    showToast('Scorecard copied to clipboard! 📋');
                });
            } else {
                showToast('Scorecard copied! 📋');
            }
        });
    }

    // Modal Functions
    function openModal(target) {
        sfx.click();
        selectingTarget = target;
        modalTitleText.textContent = target === 'A' ? 'Choose RED Corner' : 'Choose BLUE Corner';
        modalList.innerHTML = '';

        Object.keys(CURATED_COUNTRIES).forEach(code => {
            const c = CURATED_COUNTRIES[code];
            const item = document.createElement('div');
            item.className = 'country-pick-item';
            item.innerHTML = `<span style="font-size: 1.8rem;">${c.flag}</span> <span>${c.name}</span>`;
            item.addEventListener('click', () => {
                sfx.punch();
                if (selectingTarget === 'A') countryA = code;
                else countryB = code;
                renderSetupCards();
                closeModal();
            });
            modalList.appendChild(item);
        });

        countryModal.classList.add('active');
    }

    function closeModal() {
        sfx.click();
        countryModal.classList.remove('active');
    }

    // Launch Arcade Fight Intro Splash
    function launchFightIntro() {
        const cA = getCountry(countryA);
        const cB = getCountry(countryB);

        splashNameA.textContent = `${cA.flag} ${cA.name}`;
        splashNameB.textContent = `${cB.name} ${cB.flag}`;

        fightSplash.classList.add('active');
        sfx.bell();

        setTimeout(() => {
            fightSplash.classList.remove('active');
            startBrawl();
        }, 1200);
    }

    // Render Round Tracker Bar (8 Token Circles)
    function setupRoundTracker() {
        roundTrackerBar.innerHTML = '';
        CATEGORIES.forEach((cat, i) => {
            const token = document.createElement('div');
            token.className = 'round-token';
            token.id = `round-token-${i}`;
            token.textContent = cat.icon;
            token.title = `Round ${i + 1}: ${cat.name}`;
            roundTrackerBar.appendChild(token);
        });
    }

    // Update Tug-of-War Bar
    function updateTugOfWar(sA, sB) {
        const diff = sA - sB;
        let percentRed = 50 + diff * 7;
        percentRed = Math.max(15, Math.min(85, percentRed));

        tugRed.style.width = `${percentRed}%`;
        tugBlue.style.width = `${100 - percentRed}%`;
        tugGlove.style.left = `${percentRed}%`;
    }

    // Start Brawl
    function startBrawl() {
        setupScreen.style.display = 'none';
        victoryScreen.classList.remove('active');
        battleScreen.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const cA = getCountry(countryA);
        const cB = getCountry(countryB);

        scoreNameA.textContent = `${cA.flag} ${cA.name}`;
        scoreNameB.textContent = `${cB.name} ${cB.flag}`;
        scoreValA.textContent = '0';
        scoreValB.textContent = '0';
        avatarA.textContent = cA.mascot.emoji;
        avatarB.textContent = cB.mascot.emoji;
        tagA.textContent = `${cA.flag} ${cA.name}`;
        tagB.textContent = `${cB.flag} ${cB.name}`;

        updateTugOfWar(0, 0);
        setupRoundTracker();
        engine.setup(countryA, countryB);
        pauseBtn.textContent = '⏸️ Pause';
        autoStatusHint.innerHTML = '<span>⚡ Auto-battling round by round...</span>';

        // 1. Round Start Callback
        engine.onRoundStart = (round, state) => {
            roundPill.textContent = `ROUND ${round.roundNum} OF ${round.totalRounds}`;
            categoryTitle.innerHTML = `<span>${round.category.icon}</span> <span>${round.category.name}</span>`;
            categoryQuestion.textContent = round.category.question;

            // Highlight active round token
            document.querySelectorAll('.round-token').forEach(t => t.classList.remove('active'));
            const curToken = document.getElementById(`round-token-${state.index}`);
            if (curToken) curToken.classList.add('active');

            // Reset overlays & animations
            fighterA.className = 'fighter-unit red-unit';
            fighterB.className = 'fighter-unit blue-unit';
            crownA.className = 'winner-crown';
            crownB.className = 'winner-crown';
            pointsA.className = 'floating-points';
            pointsB.className = 'floating-points';
            dizzyA.style.display = 'none';
            dizzyB.style.display = 'none';
            koA.className = 'ko-stamp';
            koB.className = 'ko-stamp';
            statusA.style.display = 'none';
            statusB.style.display = 'none';

            impactExplosion.className = 'impact-explosion';
            roundVerdictBanner.style.display = 'none';

            // Prepare thrown weapons
            weaponA.textContent = round.itemA.emoji;
            weaponB.textContent = round.itemB.emoji;

            // Animate throw across
            weaponA.className = 'flying-weapon flying-left throw-left-anim';
            weaponB.className = 'flying-weapon flying-right throw-right-anim';
            sfx.whoosh();
        };

        // 2. Impact Collision Callback
        engine.onImpact = (round) => {
            weaponA.style.display = 'none';
            weaponB.style.display = 'none';

            // Show BAM!
            impactExplosion.className = 'impact-explosion impact-anim';
            sfx.punch();

            stageRing.classList.remove('shake-active');
            void stageRing.offsetWidth;
            stageRing.classList.add('shake-active');
        };

        // 3. Round Outcome Callback (UNMISTAKABLE WINNER HIGHLIGHTS)
        engine.onRoundResult = (round, state) => {
            impactExplosion.className = 'impact-explosion';

            scoreValA.textContent = state.scoreA;
            scoreValB.textContent = state.scoreB;
            updateTugOfWar(state.scoreA, state.scoreB);

            roundVerdictBanner.style.display = 'flex';
            const curToken = document.getElementById(`round-token-${state.index}`);

            if (round.winner === 'A') {
                // Country A (Red Corner) WINS
                sfx.boing();

                fighterA.className = 'fighter-unit red-unit is-winner winner-jump';
                crownA.className = 'winner-crown crown-pop';
                pointsA.className = 'floating-points points-float';
                statusA.textContent = 'WINNER! 🏆';
                statusA.className = 'round-status-pill status-win';

                fighterB.className = 'fighter-unit blue-unit is-loser loser-dizzy';
                dizzyB.style.display = 'block';
                koB.className = 'ko-stamp ko-stamp-slam';
                statusB.textContent = 'KO\'D ❌';
                statusB.className = 'round-status-pill status-lose';

                roundVerdictBanner.className = 'round-verdict-banner win-red';
                verdictBigBadge.textContent = `🏆 RED CORNER WINS: ${cA.flag} ${cA.name}! (+1 PT)`;
                verdictSubtext.textContent = `"${round.winText}"`;

                if (curToken) {
                    curToken.classList.remove('active');
                    curToken.classList.add('won-red');
                    curToken.textContent = cA.flag;
                }
            } else if (round.winner === 'B') {
                // Country B (Blue Corner) WINS
                sfx.boing();

                fighterB.className = 'fighter-unit blue-unit is-winner winner-jump';
                crownB.className = 'winner-crown crown-pop';
                pointsB.className = 'floating-points points-float';
                statusB.textContent = 'WINNER! 🏆';
                statusB.className = 'round-status-pill status-win';

                fighterA.className = 'fighter-unit red-unit is-loser loser-dizzy';
                dizzyA.style.display = 'block';
                koA.className = 'ko-stamp ko-stamp-slam';
                statusA.textContent = 'KO\'D ❌';
                statusA.className = 'round-status-pill status-lose';

                roundVerdictBanner.className = 'round-verdict-banner win-blue';
                verdictBigBadge.textContent = `🏆 BLUE CORNER WINS: ${cB.flag} ${cB.name}! (+1 PT)`;
                verdictSubtext.textContent = `"${round.winText}"`;

                if (curToken) {
                    curToken.classList.remove('active');
                    curToken.classList.add('won-blue');
                    curToken.textContent = cB.flag;
                }
            } else {
                // Draw
                roundVerdictBanner.className = 'round-verdict-banner win-draw';
                verdictBigBadge.textContent = `🤝 DRAW ROUND! BOTH SCORED EQUALLY!`;
                verdictSubtext.textContent = round.winText;

                if (curToken) {
                    curToken.classList.remove('active');
                    curToken.classList.add('draw');
                }
            }
        };

        // 4. Battle Over Callback
        engine.onBattleOver = (result) => {
            sfx.fanfare();
            sfx.cheer();
            confettiShower();

            battleScreen.classList.remove('active');
            victoryScreen.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });

            if (result.winner === 'A') {
                victoryHeading.textContent = `🏆 ${cA.name.toUpperCase()} WINS THE MATCH!`;
                victoryMascot.textContent = cA.mascot.emoji;
            } else if (result.winner === 'B') {
                victoryHeading.textContent = `🏆 ${cB.name.toUpperCase()} WINS THE MATCH!`;
                victoryMascot.textContent = cB.mascot.emoji;
            } else {
                victoryHeading.textContent = `🤝 IT'S AN EPIC DRAW!`;
                victoryMascot.textContent = '🌟';
            }

            victoryScoreBadge.textContent = `${cA.flag} ${result.scoreA}  —  ${result.scoreB} ${cB.flag}`;
        };

        // Start round 1!
        engine.start();
    }

    // Confetti shower
    function confettiShower() {
        const canvas = document.getElementById('confetti-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const colors = ['#FF4757', '#2ED573', '#FFA502', '#1E90FF', '#9B59B6'];

        for (let i = 0; i < 90; i++) {
            particles.push({
                x: canvas.width / 2 + (Math.random() * 200 - 100),
                y: canvas.height * 0.35,
                w: Math.random() * 12 + 6,
                h: Math.random() * 8 + 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                vx: (Math.random() - 0.5) * 14,
                vy: -(Math.random() * 14 + 6),
                gravity: 0.35,
                opacity: 1
            });
        }

        function render() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let alive = 0;
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += p.gravity;
                p.opacity -= 0.008;

                if (p.opacity > 0 && p.y < canvas.height) {
                    alive++;
                    ctx.save();
                    ctx.fillStyle = p.color;
                    ctx.globalAlpha = Math.max(0, p.opacity);
                    ctx.fillRect(p.x, p.y, p.w, p.h);
                    ctx.restore();
                }
            });

            if (alive > 0) requestAnimationFrame(render);
            else ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        render();
    }

    function showToast(msg) {
        toastMsg.textContent = msg;
        toastMsg.style.display = 'block';
        setTimeout(() => toastMsg.style.display = 'none', 2500);
    }

    init();
});
