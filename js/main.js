/**
 * MyCountryBeats - Main Game Controller
 * Seamlessly manages Lobby, Auto-Brawl in the Ring, and Victory Podium!
 */

document.addEventListener('DOMContentLoaded', () => {
    let countryA = 'US';
    let countryB = 'IT';
    let selectingCorner = 'A'; // 'A' or 'B'
    const engine = new BrawlEngine();

    // Screens
    const setupScreen = document.getElementById('setup-screen');
    const battleScreen = document.getElementById('battle-screen');
    const victoryScreen = document.getElementById('victory-screen');

    // Setup Lobby Elements
    const cardA = document.getElementById('card-a');
    const cardB = document.getElementById('card-b');
    const nameA = document.getElementById('name-a');
    const nameB = document.getElementById('name-b');
    const mascotA = document.getElementById('mascot-a');
    const mascotB = document.getElementById('mascot-b');
    const charBoxA = document.getElementById('char-box-a');
    const charBoxB = document.getElementById('char-box-b');
    const surpriseBtn = document.getElementById('surprise-btn');
    const startBrawlBtn = document.getElementById('start-brawl-btn');
    const soundToggleBtn = document.getElementById('sound-toggle-btn');

    // Ring Battle Elements
    const scoreboardNameA = document.getElementById('scoreboard-name-a');
    const scoreboardNameB = document.getElementById('scoreboard-name-b');
    const scoreValA = document.getElementById('score-val-a');
    const scoreValB = document.getElementById('score-val-b');
    const currentRoundPill = document.getElementById('current-round-pill');
    const matchTokenStrip = document.getElementById('match-token-strip');
    const categoryNameBig = document.getElementById('category-name-big');
    const categorySubQuestion = document.getElementById('category-sub-question');
    const boxingRing = document.getElementById('boxing-ring');

    // Tug of War Elements
    const tugTrackRed = document.getElementById('tug-track-red');
    const tugTrackBlue = document.getElementById('tug-track-blue');
    const tugCenterGlove = document.getElementById('tug-center-glove');

    // In-Ring Fighters & Overlays
    const ringSlotA = document.getElementById('ring-slot-a');
    const ringSlotB = document.getElementById('ring-slot-b');
    const ringCharA = document.getElementById('ring-char-a');
    const ringCharB = document.getElementById('ring-char-b');
    const ringTagA = document.getElementById('ring-tag-a');
    const ringTagB = document.getElementById('ring-tag-b');
    const crownA = document.getElementById('crown-a');
    const crownB = document.getElementById('crown-b');
    const pointsA = document.getElementById('points-a');
    const pointsB = document.getElementById('points-b');
    const dizzyA = document.getElementById('dizzy-a');
    const dizzyB = document.getElementById('dizzy-b');
    const koA = document.getElementById('ko-a');
    const koB = document.getElementById('ko-b');
    const statusPillA = document.getElementById('status-pill-a');
    const statusPillB = document.getElementById('status-pill-b');

    // Weapons & Impact Blast
    const weaponA = document.getElementById('weapon-a');
    const weaponB = document.getElementById('weapon-b');
    const impactBlast = document.getElementById('impact-blast');
    const blastText = document.getElementById('blast-text');

    // Verdict Banner & Control Buttons
    const roundWinnerBanner = document.getElementById('round-winner-banner');
    const winnerBannerTitle = document.getElementById('winner-banner-title');
    const winnerBannerReason = document.getElementById('winner-banner-reason');
    const pauseBrawlBtn = document.getElementById('pause-brawl-btn');
    const skipBrawlBtn = document.getElementById('skip-brawl-btn');
    const battleStatusIndicator = document.getElementById('battle-status-indicator');

    // Victory Podium Elements
    const victoryHeadline = document.getElementById('victory-headline');
    const victoryScorePill = document.getElementById('victory-score-pill');
    const victoryCharBox = document.getElementById('victory-char-box');
    const restartBrawlBtn = document.getElementById('restart-brawl-btn');
    const shareBrawlBtn = document.getElementById('share-brawl-btn');

    // Modal Elements
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalDismissBtn = document.getElementById('modal-dismiss-btn');
    const modalHeadingText = document.getElementById('modal-heading-text');
    const modalCountryGrid = document.getElementById('modal-country-grid');
    const arcadeToast = document.getElementById('arcade-toast');

    // Initialize UI
    function init() {
        renderSetupCharacters();
        setupEventListeners();
    }

    // Render Setup Lobby Characters with Custom Vector CountryBalls
    function renderSetupCharacters() {
        const cA = getCountry(countryA);
        const cB = getCountry(countryB);

        nameA.textContent = cA.name;
        nameB.textContent = cB.name;
        mascotA.textContent = cA.mascotTitle;
        mascotB.textContent = cB.mascotTitle;

        charBoxA.innerHTML = getCountryBallSVG(countryA, 'normal', 140);
        charBoxB.innerHTML = getCountryBallSVG(countryB, 'normal', 140);
    }

    // Event Listeners
    function setupEventListeners() {
        cardA.addEventListener('click', () => openCountryModal('A'));
        cardB.addEventListener('click', () => openCountryModal('B'));

        modalDismissBtn.addEventListener('click', closeCountryModal);
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) closeCountryModal();
        });

        // Surprise Random Matchup
        surpriseBtn.addEventListener('click', () => {
            sfx.boing();
            const keys = Object.keys(COUNTRIES);
            let randA = keys[Math.floor(Math.random() * keys.length)];
            let randB = keys[Math.floor(Math.random() * keys.length)];
            while (randB === randA) {
                randB = keys[Math.floor(Math.random() * keys.length)];
            }
            countryA = randA;
            countryB = randB;
            renderSetupCharacters();
            showToast('🎲 New random matchup rolled!');
        });

        // Sound FX Toggle
        soundToggleBtn.addEventListener('click', () => {
            const enabled = sfx.toggle();
            soundToggleBtn.textContent = enabled ? '🔊 Sound: ON' : '🔇 Sound: OFF';
            if (enabled) sfx.click();
        });

        // Start Brawl Main Action - Jump straight into the ring!
        startBrawlBtn.addEventListener('click', () => {
            sfx.bell();
            beginBrawlInTheRing();
        });

        // Pause / Resume Button
        pauseBrawlBtn.addEventListener('click', () => {
            sfx.click();
            const isPaused = engine.togglePause();
            pauseBrawlBtn.textContent = isPaused ? '▶️ Resume' : '⏸️ Pause';
            battleStatusIndicator.textContent = isPaused ? '⏸️ Brawl is paused' : '⚡ Auto-battling round by round...';
        });

        // Skip to Victory
        skipBrawlBtn.addEventListener('click', () => {
            sfx.punch();
            engine.skipAll();
        });

        // Play Again Button
        restartBrawlBtn.addEventListener('click', () => {
            sfx.click();
            victoryScreen.classList.remove('active');
            battleScreen.classList.remove('active');
            setupScreen.style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Share Scorecard
        shareBrawlBtn.addEventListener('click', () => {
            sfx.click();
            const cA = getCountry(countryA);
            const cB = getCountry(countryB);
            const text = `🥊 MyCountryBeats Showdown!\n` +
                         `${cA.flag} ${cA.name} [${engine.scoreA}] vs [${engine.scoreB}] ${cB.flag} ${cB.name}\n` +
                         `Winner: ${engine.scoreA > engine.scoreB ? cA.name + ' 🏆' : (engine.scoreB > engine.scoreA ? cB.name + ' 🏆' : 'It\'s a Tie!')}\n` +
                         `Play the Cartoon Brawl at MyCountryBeats! 🌍✨`;

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(() => {
                    showToast('Scorecard copied to clipboard! 📋');
                });
            } else {
                showToast('Scorecard copied! 📋');
            }
        });
    }

    // Open Country Selector Modal
    function openCountryModal(corner) {
        sfx.click();
        selectingCorner = corner;
        modalHeadingText.textContent = corner === 'A' ? 'Choose RED Corner Fighter' : 'Choose BLUE Corner Fighter';
        modalCountryGrid.innerHTML = '';

        Object.keys(COUNTRIES).forEach(code => {
            const c = COUNTRIES[code];
            const item = document.createElement('div');
            item.className = 'country-grid-button';
            item.innerHTML = `<span style="font-size: 1.6rem;">${c.flag}</span> <span>${c.name}</span>`;
            item.addEventListener('click', () => {
                sfx.punch();
                if (selectingCorner === 'A') countryA = code;
                else countryB = code;
                renderSetupCharacters();
                closeCountryModal();
            });
            modalCountryGrid.appendChild(item);
        });

        modalBackdrop.classList.add('active');
    }

    function closeCountryModal() {
        sfx.click();
        modalBackdrop.classList.remove('active');
    }

    // Setup 8-Round Match Token Tracker
    function setupMatchTokens() {
        matchTokenStrip.innerHTML = '';
        CATEGORIES.forEach((cat, i) => {
            const token = document.createElement('div');
            token.className = 'match-token';
            token.id = `match-token-${i}`;
            token.textContent = cat.icon;
            token.title = `Round ${i + 1}: ${cat.name}`;
            matchTokenStrip.appendChild(token);
        });
    }

    // Update Tug-of-War Meter
    function updateTugOfWarMeter(sA, sB) {
        const diff = sA - sB;
        let percentRed = 50 + diff * 8;
        percentRed = Math.max(12, Math.min(88, percentRed));

        tugTrackRed.style.width = `${percentRed}%`;
        tugTrackBlue.style.width = `${100 - percentRed}%`;
        tugCenterGlove.style.left = `${percentRed}%`;
    }

    // Begin Auto-Brawl in the Ring
    function beginBrawlInTheRing() {
        setupScreen.style.display = 'none';
        victoryScreen.classList.remove('active');
        battleScreen.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const cA = getCountry(countryA);
        const cB = getCountry(countryB);

        scoreboardNameA.textContent = `${cA.flag} ${cA.name}`;
        scoreboardNameB.textContent = `${cB.name} ${cB.flag}`;
        scoreValA.textContent = '0';
        scoreValB.textContent = '0';
        ringTagA.textContent = `${cA.flag} ${cA.name}`;
        ringTagB.textContent = `${cB.flag} ${cB.name}`;

        updateTugOfWarMeter(0, 0);
        setupMatchTokens();
        engine.setup(countryA, countryB);
        pauseBrawlBtn.textContent = '⏸️ Pause';
        battleStatusIndicator.textContent = '⚡ Auto-battling round by round...';

        // 1. Round Start Callback
        engine.onRoundStart = (round, state) => {
            currentRoundPill.textContent = `ROUND ${round.roundNum} / ${round.totalRounds}`;
            categoryNameBig.innerHTML = `<span>${round.category.icon}</span> <span>${round.category.name}</span>`;
            categorySubQuestion.textContent = round.category.question;

            // Highlight current round token
            document.querySelectorAll('.match-token').forEach(t => t.classList.remove('token-active'));
            const curToken = document.getElementById(`match-token-${state.index}`);
            if (curToken) curToken.classList.add('token-active');

            // Reset fighters to normal pose & position
            ringCharA.innerHTML = getCountryBallSVG(countryA, 'normal', 130);
            ringCharB.innerHTML = getCountryBallSVG(countryB, 'normal', 130);

            ringSlotA.className = 'ring-fighter-slot red-fighter-slot';
            ringSlotB.className = 'ring-fighter-slot blue-fighter-slot';
            crownA.className = 'winner-crown-ring';
            crownB.className = 'winner-crown-ring';
            pointsA.className = 'floating-points-ring';
            pointsB.className = 'floating-points-ring';
            dizzyA.style.display = 'none';
            dizzyB.style.display = 'none';
            koA.className = 'ko-stamp-ring';
            koB.className = 'ko-stamp-ring';
            statusPillA.style.display = 'none';
            statusPillB.style.display = 'none';

            impactBlast.className = 'impact-blast';
            roundWinnerBanner.style.display = 'none';

            // Launch weapons into the center
            weaponA.textContent = round.itemA.emoji;
            weaponB.textContent = round.itemB.emoji;
            weaponA.className = 'thrown-weapon thrown-left throw-left-anim';
            weaponB.className = 'thrown-weapon thrown-right throw-right-anim';
            sfx.whoosh();
        };

        // 2. Mid-Air Impact Collision & Directional Overpower
        engine.onImpact = (round) => {
            const isRedWin = round.winner === 'A';
            const isBlueWin = round.winner === 'B';

            // Winning weapon grows huge, losing weapon crumbles & shatters!
            if (isRedWin) {
                weaponA.className = 'thrown-weapon thrown-left overpower-left';
                weaponB.className = 'thrown-weapon thrown-right shatter-anim';
                blastText.textContent = `💥 ${cA.name.toUpperCase()} SMASH! ➡️`;
                blastText.style.background = 'linear-gradient(180deg, #FF4757 0%, #B31B2A 100%)';
            } else if (isBlueWin) {
                weaponB.className = 'thrown-weapon thrown-right overpower-right';
                weaponA.className = 'thrown-weapon thrown-left shatter-anim';
                blastText.textContent = `⬅️ ${cB.name.toUpperCase()} SMASH! 💥`;
                blastText.style.background = 'linear-gradient(180deg, #1E90FF 0%, #0984E3 100%)';
            } else {
                blastText.textContent = `💥 CLASH DRAW! 💥`;
                blastText.style.background = 'linear-gradient(180deg, #FFA502 0%, #D35400 100%)';
            }

            // Pop the impact blast & shake the arena
            impactBlast.className = 'impact-blast blast-anim';
            sfx.punch();

            boxingRing.classList.remove('stadium-shake-active');
            void boxingRing.offsetWidth;
            boxingRing.classList.add('stadium-shake-active');
        };

        // 3. Round Outcome: Physical Knockback into Ropes & Center Winner Strut!
        engine.onRoundResult = (round, state) => {
            // Clean up blast and weapons
            impactBlast.className = 'impact-blast';
            weaponA.style.display = 'none';
            weaponB.style.display = 'none';

            // Update scores
            scoreValA.textContent = state.scoreA;
            scoreValB.textContent = state.scoreB;
            updateTugOfWarMeter(state.scoreA, state.scoreB);

            roundWinnerBanner.style.display = 'flex';
            const curToken = document.getElementById(`match-token-${state.index}`);

            if (round.winner === 'A') {
                // RED CORNER WINS THE CLASH!
                sfx.boing();

                // Red Struts into Center Ring with Crown & Glory
                ringCharA.innerHTML = getCountryBallSVG(countryA, 'happy', 130);
                ringSlotA.className = 'ring-fighter-slot red-fighter-slot is-winner strut-left winner-jump';
                crownA.className = 'winner-crown-ring crown-pop';
                pointsA.className = 'floating-points-ring points-float';
                statusPillA.textContent = 'ROUND WINNER! 🏆';
                statusPillA.className = 'status-pill-ring pill-win';

                // Blue Launched Backwards into the Ropes with Dizzy Stars
                ringCharB.innerHTML = getCountryBallSVG(countryB, 'loser', 130);
                ringSlotB.className = 'ring-fighter-slot blue-fighter-slot is-loser knockback-right loser-wobble';
                dizzyB.style.display = 'block';
                koB.className = 'ko-stamp-ring ko-slam';
                statusPillB.textContent = 'KNOCKED OUT ❌';
                statusPillB.className = 'status-pill-ring pill-lose';

                // Winner Banner Callout
                roundWinnerBanner.className = 'round-winner-banner banner-red';
                winnerBannerTitle.textContent = `👑 RED CORNER WINS: ${cA.flag} ${cA.name}! (+1 PT)`;
                winnerBannerReason.textContent = `"${round.winText}"`;

                if (curToken) {
                    curToken.classList.remove('token-active');
                    curToken.classList.add('token-won-red');
                    curToken.textContent = cA.flag;
                }
            } else if (round.winner === 'B') {
                // BLUE CORNER WINS THE CLASH!
                sfx.boing();

                // Blue Struts into Center Ring with Crown & Glory
                ringCharB.innerHTML = getCountryBallSVG(countryB, 'happy', 130);
                ringSlotB.className = 'ring-fighter-slot blue-fighter-slot is-winner strut-right winner-jump';
                crownB.className = 'winner-crown-ring crown-pop';
                pointsB.className = 'floating-points-ring points-float';
                statusPillB.textContent = 'ROUND WINNER! 🏆';
                statusPillB.className = 'status-pill-ring pill-win';

                // Red Launched Backwards into the Ropes with Dizzy Stars
                ringCharA.innerHTML = getCountryBallSVG(countryA, 'loser', 130);
                ringSlotA.className = 'ring-fighter-slot red-fighter-slot is-loser knockback-left loser-wobble';
                dizzyA.style.display = 'block';
                koA.className = 'ko-stamp-ring ko-slam';
                statusPillA.textContent = 'KNOCKED OUT ❌';
                statusPillA.className = 'status-pill-ring pill-lose';

                // Winner Banner Callout
                roundWinnerBanner.className = 'round-winner-banner banner-blue';
                winnerBannerTitle.textContent = `👑 BLUE CORNER WINS: ${cB.flag} ${cB.name}! (+1 PT)`;
                winnerBannerReason.textContent = `"${round.winText}"`;

                if (curToken) {
                    curToken.classList.remove('token-active');
                    curToken.classList.add('token-won-blue');
                    curToken.textContent = cB.flag;
                }
            } else {
                // DRAW
                roundWinnerBanner.className = 'round-winner-banner banner-draw';
                winnerBannerTitle.textContent = `🤝 DEADLOCK! BOTH NATIONS HIT EQUALLY HARD!`;
                winnerBannerReason.textContent = round.winText;

                if (curToken) {
                    curToken.classList.remove('token-active');
                    curToken.classList.add('token-draw');
                }
            }
        };

        // 4. Battle Over - Victory Podium!
        engine.onBattleOver = (result) => {
            sfx.fanfare();
            sfx.cheer();
            confettiFireworks();

            battleScreen.classList.remove('active');
            victoryScreen.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });

            if (result.winner === 'A') {
                victoryHeadline.textContent = `🏆 ${cA.name.toUpperCase()} WINS THE MATCH!`;
                victoryCharBox.innerHTML = getCountryBallSVG(countryA, 'happy', 160);
            } else if (result.winner === 'B') {
                victoryHeadline.textContent = `🏆 ${cB.name.toUpperCase()} WINS THE MATCH!`;
                victoryCharBox.innerHTML = getCountryBallSVG(countryB, 'happy', 160);
            } else {
                victoryHeadline.textContent = `🤝 AN UNFORGETTABLE DRAW!`;
                victoryCharBox.innerHTML = `<div style="font-size: 5rem;">🌟</div>`;
            }

            victoryScorePill.textContent = `${cA.flag} ${result.scoreA}  —  ${result.scoreB} ${cB.flag}`;
        };

        // Start round 1!
        engine.start();
    }

    // Multi-color Confetti Fireworks
    function confettiFireworks() {
        const canvas = document.getElementById('confetti-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const colors = ['#FF4757', '#2ED573', '#FFA502', '#1E90FF', '#9B59B6', '#F1C40F'];

        for (let i = 0; i < 110; i++) {
            particles.push({
                x: canvas.width / 2 + (Math.random() * 260 - 130),
                y: canvas.height * 0.38,
                w: Math.random() * 12 + 6,
                h: Math.random() * 8 + 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                vx: (Math.random() - 0.5) * 16,
                vy: -(Math.random() * 16 + 6),
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
        arcadeToast.textContent = msg;
        arcadeToast.style.display = 'block';
        setTimeout(() => arcadeToast.style.display = 'none', 2600);
    }

    init();
});
