# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A small browser arcade: five self-contained HTML games/pages (`index.html`, `tic-tac-toe.html`, `centipede.html`, `asteroids.html`, `space-invaders.html`). No build step, no package manager, no dependencies — plain HTML5, CSS3, and vanilla JavaScript.

## Running / testing

There is no build or test tooling. To work on a game, just open the file directly in a browser (e.g. `open index.html` on macOS), or serve the directory with any static file server and navigate to it. `index.html` is the launcher and links to each game.

Run `npm install` once, then `npm run lint` to lint the HTML markup of all pages with [html-validate](https://html-validate.org/) (config in `.htmlvalidate.json`, extends `html-validate:recommended`). It checks markup structure/correctness only — it does not lint the inline CSS or JavaScript.

Verify changes by playing the game in the browser — check the golden path (start a round, score points, lose all lives / win) and edge cases (pause, game over, restart).

## Architecture

Each game is a **single self-contained `.html` file** with inline `<style>` and `<script>` blocks — there is no shared JS/CSS and no module system. When changing a game, all relevant code lives in that one file.

Common structure across the canvas-based games (`centipede.html`, `asteroids.html`, `space-invaders.html`, `frogger.html`):
- A single `<canvas id="c">` obtained via `getContext('2d')`, drawn from scratch every frame (vector/shape rendering, no sprite assets).
- A `requestAnimationFrame`-driven loop (`frame(ts)` → `update(dt)` + `draw()`), with a fixed set of lifecycle functions: `startGame`, `resumeAfterDeath`/`newRound`, `update`, `draw`, `updateHUD`, `overlay` (for start/pause/game-over screens).
- Keyboard input collected into a key-state map via `keydown`/`keyup` listeners (arrow keys / WASD / Space / P for pause).
- High scores persisted per-game to `localStorage` under per-game keys (`centipede_hi`, `asteroids_hi`, `sinvaders_hi`, `frogger_hi`), which `index.html` also reads to show high scores on the launcher cards.
- Lives, levels/waves, scoring tables, and difficulty ramps are implemented as in-file constants/state — see each game's section in `README.md` for the exact rules and point values before changing scoring or balance.

`frogger.html` uses a 600×650 canvas (13 rows × 50px) with a grid of river and road lanes. The frog's position is tracked as a continuous pixel x (`pixelX`) that drifts with log speeds in river rows, plus an integer `row`. Hop animation uses `fromX/fromY → toX/toY` with a parabolic arc over 130ms. `localStorage` key: `frogger_hi`. The Frogger card in `index.html` uses `--pink` as its accent color.

`tic-tac-toe.html` is DOM-based rather than canvas-based: it renders a 3×3 grid of cells, tracks a board array, and includes a minimax-based AI (`minimax`, `bestMove`) plus win detection (`winner`) and a persistent scoreboard.

`index.html` is the launcher: a styled grid of `<a class="card">` links to each game, plus a decorative animated canvas background (`spawnShooter`/`frame`) and a read of each game's high-score `localStorage` key.

## Key conventions

- Keep each game's HTML, CSS, and JS together in its single file — don't extract shared code into separate assets, as that would break the "open the file directly" workflow described in the README.
- When adding or changing scoring, lives, levels, or controls, update the corresponding section of `README.md` to match (it documents exact point values and rules per game).
- `localStorage` keys for high scores follow the `<game>_hi` naming pattern and must stay in sync between a game's own file and the reads in `index.html`.
