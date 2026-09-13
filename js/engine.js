/**
 * MyCountryBeats - Arcade Game Engine
 * Orchestrates animations, visual clashes, round progression, and podium finale!
 */

class BrawlEngine {
    constructor() {
        this.countryA = null;
        this.countryB = null;
        this.categories = CATEGORIES;
        this.currentRoundIndex = 0;
        this.scoreA = 0;
        this.scoreB = 0;
        this.rounds = [];
        this.isAutoPlay = true;
        this.isPaused = false;
        this.timeoutId = null;

        // Event hooks
        this.onRoundStart = null;
        this.onImpact = null;
        this.onRoundResult = null;
        this.onBattleOver = null;
    }

    setup(codeA, codeB) {
        this.countryA = getCountry(codeA);
        this.countryB = getCountry(codeB);
        this.currentRoundIndex = 0;
        this.scoreA = 0;
        this.scoreB = 0;
        this.isAutoPlay = true;
        this.isPaused = false;
        if (this.timeoutId) clearTimeout(this.timeoutId);

        // Precompute rounds
        this.rounds = this.categories.map((cat, idx) => {
            const wA = this.countryA.weapons[cat.id];
            const wB = this.countryB.weapons[cat.id];
            let winner = 'A';
            if (wB.score > wA.score) winner = 'B';
            else if (wA.score === wB.score) winner = 'DRAW';

            return {
                roundNum: idx + 1,
                totalRounds: this.categories.length,
                category: cat,
                itemA: wA,
                itemB: wB,
                winner: winner,
                winText: winner === 'A' ? wA.win : (winner === 'B' ? wB.win : "Epic deadlock! Both nations scored equal glory!")
            };
        });
    }

    start() {
        this.playCurrentRound();
    }

    playCurrentRound() {
        if (this.isPaused) return;
        if (this.currentRoundIndex >= this.rounds.length) {
            this.finish();
            return;
        }

        const round = this.rounds[this.currentRoundIndex];

        // 1. Announce & Start Charge / Attack
        if (this.onRoundStart) {
            this.onRoundStart(round, {
                scoreA: this.scoreA,
                scoreB: this.scoreB,
                index: this.currentRoundIndex
            });
        }

        // 2. Impact Collision after items & characters meet in center
        this.timeoutId = setTimeout(() => {
            if (this.isPaused) return;

            if (this.onImpact) {
                this.onImpact(round);
            }

            // 3. Reveal Winner & Reactions
            setTimeout(() => {
                if (this.isPaused) return;

                if (round.winner === 'A') this.scoreA++;
                else if (round.winner === 'B') this.scoreB++;

                const isLastRound = this.currentRoundIndex === this.rounds.length - 1;

                if (this.onRoundResult) {
                    this.onRoundResult(round, {
                        scoreA: this.scoreA,
                        scoreB: this.scoreB,
                        index: this.currentRoundIndex,
                        isLastRound: isLastRound
                    });
                }

                // Auto-advance
                if (this.isAutoPlay && !this.isPaused) {
                    const delay = isLastRound ? 2400 : 2200;
                    this.timeoutId = setTimeout(() => {
                        this.next();
                    }, delay);
                }
            }, 650);

        }, 750);
    }

    next() {
        if (this.timeoutId) clearTimeout(this.timeoutId);
        this.currentRoundIndex++;
        if (this.currentRoundIndex < this.rounds.length) {
            this.playCurrentRound();
        } else {
            this.finish();
        }
    }

    togglePause() {
        this.isPaused = !this.isPaused;
        if (!this.isPaused) {
            this.next();
        }
        return this.isPaused;
    }

    skipAll() {
        if (this.timeoutId) clearTimeout(this.timeoutId);
        while (this.currentRoundIndex < this.rounds.length) {
            const round = this.rounds[this.currentRoundIndex];
            if (round.winner === 'A') this.scoreA++;
            else if (round.winner === 'B') this.scoreB++;
            this.currentRoundIndex++;
        }
        this.finish();
    }

    finish() {
        if (this.timeoutId) clearTimeout(this.timeoutId);
        let finalWinner = 'DRAW';
        if (this.scoreA > this.scoreB) finalWinner = 'A';
        else if (this.scoreB > this.scoreA) finalWinner = 'B';

        const winnerCountry = finalWinner === 'A' ? this.countryA : (finalWinner === 'B' ? this.countryB : null);
        const loserCountry = finalWinner === 'A' ? this.countryB : (finalWinner === 'B' ? this.countryA : null);

        if (this.onBattleOver) {
            this.onBattleOver({
                winner: finalWinner,
                winnerCountry: winnerCountry,
                loserCountry: loserCountry,
                scoreA: this.scoreA,
                scoreB: this.scoreB
            });
        }
    }
}

window.BrawlEngine = BrawlEngine;
