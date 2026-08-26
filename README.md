# Arcade Games

Nine classic arcade games that run entirely in the browser — no installation or server required.

## Getting Started

Open `index.html` in any web browser to launch the arcade. From there, select any game to play.

---

## Tic Tac Toe

A two-player Tic Tac Toe game for two people on the same device.

### How to Play

1. Players take turns clicking cells on the 3×3 grid.
2. **Player X** always goes first.
3. The first player to get three marks in a row (horizontally, vertically, or diagonally) wins.
4. If all 9 cells are filled with no winner, the game is a draw.
5. Click **New Game** to reset the board. Scores carry over between rounds.

### Features

- Two-player local play (same device, alternating turns)
- Win and draw detection
- Winning cells highlighted at the end of each round
- Scoreboard tracking wins for X, O, and draws

---

## Centipede

A browser remake of the classic Atari arcade game. Destroy the centipede before it reaches you.

### How to Play

1. Move your cannon around the player zone (bottom of the screen) and shoot the centipede.
2. Hit every segment to clear the level and advance.

### Controls

| Key | Action |
|-----|--------|
| Arrow Keys or WASD | Move cannon |
| Space | Fire |
| P | Pause / Unpause |

### Rules

- The centipede starts at the top and winds its way down through the mushroom field, reversing direction each time it hits a wall or mushroom.
- **Shoot centipede segments** to destroy them. A hit segment turns into a mushroom.
- Hitting the **head** is worth **100 points**; hitting a **body segment** is worth **10 points**.
- **Destroying a mushroom** is worth **5 points**.
- If the centipede reaches you or touches your cannon, you lose a life.
- You start with **3 lives**. The game ends when all lives are lost.
- Each level the centipede gets longer and faster.
- Your high score is tracked for the session.

### Scoring

| Event | Points |
|-------|--------|
| Hit centipede head | 100 |
| Hit body segment | 10 |
| Destroy mushroom | 5 |
| Clear a level | 1,000 bonus |

---

## Asteroids

A browser remake of the classic Atari vector-graphics arcade game. Pilot your ship through an asteroid field and survive as long as possible.

### How to Play

1. Rotate your ship and thrust to navigate. Shoot all the asteroids to clear each level.
2. Large asteroids split into smaller ones when hit — finish them off completely.

### Controls

| Key | Action |
|-----|--------|
| Arrow Left / A | Rotate left |
| Arrow Right / D | Rotate right |
| Arrow Up / W | Thrust |
| Space | Fire |
| P | Pause / Unpause |

### Rules

- **Large asteroids** split into 2 medium ones when shot.
- **Medium asteroids** split into 2 small ones when shot.
- **Small asteroids** are destroyed outright.
- Clear all asteroids to advance to the next level — more asteroids spawn each level.
- A **UFO** occasionally flies across the screen and shoots at you. Destroy it for bonus points.
- Crashing into an asteroid or UFO (or being hit by a UFO bullet) costs a life.
- You start with **3 lives**. The game ends when all lives are lost.
- Your ship wraps around the screen edges.
- Your high score is saved for the session.

### Scoring

| Event | Points |
|-------|--------|
| Destroy large asteroid | 20 |
| Destroy medium asteroid | 50 |
| Destroy small asteroid | 100 |
| Destroy UFO | 200 |
| Clear a level | 1,000 bonus |

---

## Space Invaders

A browser remake of the classic Taito arcade game. Defend Earth from waves of descending alien invaders.

### How to Play

1. Move your cannon left and right and shoot the invaders before they reach the ground.
2. Use the shields for cover — but they degrade with each hit.

### Controls

| Key | Action |
|-----|--------|
| Arrow Left / A | Move left |
| Arrow Right / D | Move right |
| Space | Fire |
| P | Pause / Unpause |

### Rules

- The invader grid marches sideways, dropping one row each time it reaches a wall — and speeding up as aliens are destroyed.
- **Three alien types** are arranged in rows, each worth different point values.
- You can only have **one bullet in the air** at a time.
- Four **shields** protect you but erode when hit by your shots or enemy fire, and are destroyed when invaders march over them.
- A **mystery saucer** occasionally flies across the top of the screen for a random bonus.
- If any invader reaches the cannon's row, the invasion succeeds and the game ends immediately — remaining lives do not save you.
- You start with **3 lives**. The game also ends when all lives are lost to enemy fire.
- Your high score is saved for the session.

### Scoring

| Event | Points |
|-------|--------|
| Squid (bottom 2 rows) | 10 |
| Crab (middle 2 rows) | 20 |
| Octopus (top row) | 30 |
| Mystery saucer | 50 / 100 / 150 / 300 (random) |
| Clear a wave | 1,000 bonus |

---

## Frogger

A browser remake of the classic Konami arcade game. Guide your frog safely across a busy highway and a flowing river to reach the lily pads on the far bank.

### How to Play

1. Hop your frog up the screen — across traffic lanes and then across the river by riding logs.
2. Land on each of the five lily pads at the top to complete a level. Reach all five before the timer runs out.

### Controls

| Key | Action |
|-----|--------|
| Arrow Keys or WASD | Hop |
| P | Pause / Unpause |

### Rules

- You have **30 seconds** per frog. The timer bar at the bottom shows time remaining.
- **Road** (rows 7–11): five lanes of cars and trucks moving in alternating directions. Getting hit costs a life.
- **River** (rows 1–5): five lanes of logs moving in alternating directions. You must hop onto a log and ride it — stepping into open water is instant death. If a log carries you off the edge of the screen, you also die.
- **Median** (row 6) and the **start zone** (row 12) are safe.
- Landing on an already-claimed lily pad or between lily pads in the goal row costs a life.
- You start with **3 lives**. The game ends when all lives are lost.
- Each level the lanes speed up by 15%.
- Your high score is saved for the session.

### Scoring

| Event | Points |
|-------|--------|
| Advance to a row not yet reached this life | 10 |
| Reach a lily pad | 50 + time bonus (10 × seconds remaining) |
| Clear a level (all 5 pads) | 1,000 bonus |

---

## Tank Battle

A single-player tank battle game. Fight your way through waves of enemy tanks in a walled arena.

### How to Play

1. Drive your tank around the 600×600 arena, navigating between steel and brick walls.
2. Shoot enemy tanks before they shoot or ram you. Clear all enemies in a level to advance.

### Controls

| Key | Action |
|-----|--------|
| Arrow Keys or WASD | Move / rotate tank |
| Space | Fire |
| P | Pause / Unpause |

### Rules

- The arena is a 15×15 grid of 40px tiles, surrounded by indestructible **steel walls** (also forming a central fortress).
- **Brick walls** are destructible — shoot them to open new paths. Steel walls block shells without breaking.
- Moving (even into a blocked wall) rotates your tank to face that direction, so you can aim while pressed against a wall.
- Your shells destroy brick walls and enemy tanks on contact.
- Getting hit by an enemy shell or colliding with an enemy tank costs a life. You respawn at the starting position with ~1.6 seconds of flashing invulnerability.
- You start with **3 lives**. The game ends when all lives are lost.
- Each level has a pool of enemy tanks — `4 + (level − 1) × 2`, capped at 14 — with at most 3 active on the field at once. Destroyed tanks are replaced from the pool until it's empty.
- Clearing all enemies in a level advances you to the next level with more enemies and a harder mix of types.
- Enemy tanks navigate toward your position, avoiding walls (with some randomness to avoid getting stuck), and fire when they have a clear line of sight along a row or column.
- Enemy types are introduced progressively: basic only on level 1; basic and fast from level 2; all three types possible from level 3 onward.
- Your high score is saved for the session.

### Scoring

| Event | Points |
|-------|--------|
| Destroy basic tank (gray, 1 hit) | 100 |
| Destroy fast tank (yellow, 1 hit) | 200 |
| Destroy heavy tank (purple, 2 hits) | 300 |
| Clear a level | 1,000 bonus |

---

## Defender

A browser remake of the classic Williams arcade game. Patrol a scrolling planet and stop the
landers from carrying off your humanoids.

### How to Play

1. Fly left and right across a wrapping planet four screens wide — the scanner at the top shows the whole world at once.
2. Shoot the landers before they can lift a humanoid to the top of the screen.
3. If a lander is destroyed mid-abduction, catch the falling humanoid and carry it back down to the surface.

### Controls

| Key | Action |
|-----|--------|
| Arrow Left / A | Fly left (reverses the ship) |
| Arrow Right / D | Fly right (reverses the ship) |
| Arrow Up / W | Climb |
| Arrow Down / S | Dive |
| Space | Fire |
| B | Smart bomb |
| H | Hyperspace |
| P | Pause / Unpause |

### Rules

- The planet **wraps horizontally** — fly far enough in either direction and you return to where you started.
- Ten **humanoids** stand on the surface. **Landers** descend, grab one, and carry it to the top of the screen.
- A lander that reaches the top with a humanoid **fuses into a mutant** — fast, erratic, and hostile.
- Shoot a lander while it is carrying and the humanoid **falls**. Catch it in mid-air and set it down on the surface to rescue it. A humanoid that falls more than a short distance without being caught **dies on impact**.
- If **every humanoid is lost the planet is destroyed**, the surface turns to rubble, and every remaining lander instantly becomes a mutant.
- **Baiters** appear if you take too long over a wave, and they are faster than you are.
- **Bombers** lay mines. **Pods** break apart into fast **swarmers** when destroyed.
- A **smart bomb** destroys everything currently on screen. **Hyperspace** jumps you somewhere else on the planet, but roughly one jump in five is fatal.
- Colliding with any enemy, flying into the ground, or being shot costs a life.
- You start with **3 lives** and **3 smart bombs**, and earn one extra bomb per wave (up to 6).

### Scoring

| Event | Points |
|-------|--------|
| Lander | 150 |
| Mutant | 150 |
| Swarmer | 150 |
| Baiter | 200 |
| Bomber | 250 |
| Pod | 1,000 |
| Catch a falling humanoid | 250 |
| Return a humanoid to the surface | 500 |
| Each humanoid alive at the end of a wave | 100 × wave number |

---

## Missile Command

A browser remake of the classic Atari arcade game. Six cities, three missile batteries, and a
sky full of incoming warheads.

### How to Play

1. Move the crosshair with the mouse (or the arrow keys) and fire a counter-missile at it.
2. Counter-missiles detonate where you aimed, not where you clicked at the time — **lead the incoming missiles** and let them fly into the blast.
3. A blast destroys anything it touches, and each kill sets off another blast, so a well-placed shot can chain down a whole salvo.

### Controls

| Key | Action |
|-----|--------|
| Mouse | Aim the crosshair |
| Click | Fire from the nearest battery |
| Z / X / C | Fire from the left / centre / right battery |
| Arrow Keys / WASD | Aim without a mouse |
| Space | Fire from the nearest battery |
| P | Pause / Unpause |

### Rules

- You defend **six cities** with **three batteries** of **10 missiles each**. Ammunition does not carry over — every battery is refilled at the start of each wave.
- A battery that takes a direct hit is **destroyed for the rest of the wave**, along with its remaining missiles.
- **ICBMs** fall in straight lines. From wave 3, some are **MIRVs** that split into two or three warheads part-way down.
- From wave 4, **satellites** drift across the sky and launch missiles of their own.
- From wave 5, **smart bombs** appear: they steer around your blasts and have to be caught in the open or cornered.
- The **score multiplier** rises one step every two waves, up to **6×**.
- A **bonus city** is awarded every 10,000 points, if any have been destroyed.
- The game ends when **all six cities are gone**.

### Scoring

| Event | Points (before multiplier) |
|-------|--------|
| Destroy an ICBM | 25 |
| Destroy a satellite | 100 |
| Destroy a smart bomb | 125 |
| Each unused missile at the end of a wave | 5 |
| Each city still standing at the end of a wave | 100 |

---

## Pinball

An original single-table pinball machine. Keep the ball alive with the flippers, work the
drop-target banks, and stack the bonus multiplier before you drain.

### How to Play

1. Hold **Space** to pull the plunger back — the longer you hold, the harder the launch — then release to fire the ball onto the table.
2. Keep the ball in play with the two flippers at the bottom of the table.
3. Work the drop targets and the top rollover lanes to raise the bonus multiplier, which multiplies everything you score afterwards.

### Controls

| Key | Action |
|-----|--------|
| Arrow Left / A | Left flipper |
| Arrow Right / D | Right flipper |
| Space (hold, then release) | Pull and release the plunger |
| P | Pause / Unpause |

### Rules

- You get **3 balls** per game. The game ends when the third ball drains.
- Each ball begins with a **7-second ball save**: if the ball drains inside that window it is returned to the plunger lane once, free of charge.
- **Three pop bumpers** in the upper playfield kick the ball away on contact.
- **Two slingshots** flank the flippers and snap the ball back up the table.
- **Six drop targets** sit in two side banks of three. Knocking down all six clears both banks, scores a bonus, **raises the bonus multiplier**, and starts a **3-ball multiball** — once per ball. The banks then reset for another pass.
- **Three top rollover lanes** light as the ball rolls through them. Lighting all three scores a bonus, **raises the bonus multiplier**, and resets the lanes.
- The **bonus multiplier** starts at 1× and climbs to a maximum of **5×**. Every point you score is multiplied by it.
- While **multiball** is active, all scoring is **doubled again** on top of the bonus multiplier. Multiball ends when you are back down to a single ball.
- Your high score is saved for the session.

### Scoring

| Event | Points (before multiplier) |
|-------|--------|
| Pop bumper | 100 |
| Slingshot | 25 |
| Drop target | 500 |
| Clear all six drop targets | 5,000 (+1 bonus multiplier, starts multiball) |
| Top rollover lane | 250 |
| Light all three rollover lanes | 1,000 (+1 bonus multiplier) |

---

## Tech Stack

All games are built with plain HTML, CSS, and vanilla JavaScript — no frameworks or dependencies.

| Layer | Details |
|-------|---------|
| Structure | HTML5 |
| Styling | CSS3 |
| Logic | Vanilla JavaScript |

## Validation

This repository includes built-in validation tooling for the HTML files.

- `npm install` to install dev dependencies.
- `npm test` runs HTML validation via `html-validate`.
- `npm run validate` runs the dedicated validation agent in `test/validate-html.js`.

A GitHub Actions workflow is included at `.github/workflows/ci.yml` to run the validation on push and pull requests.

## Pre-commit Validation

This repo includes a tracked Husky pre-commit hook that runs `npm test` before each commit. After installing dependencies, the hook is automatically set up by the `prepare` script.

- `npm install`
- `npm test` to run HTML validation locally
- `npm run validate` to run the dedicated verification script in `test/validate-html.js`

If you want the hook to install on an existing checkout, re-run `npm install` or `npm run prepare`.
| Rendering (all games except Tic Tac Toe) | HTML5 Canvas 2D |

## File Structure

```
arcade-games/
├── index.html            # Arcade launcher — start here
├── tic-tac-toe.html      # Two-player Tic Tac Toe
├── centipede.html        # Single-player Centipede arcade game
├── asteroids.html        # Single-player Asteroids arcade game
├── space-invaders.html   # Single-player Space Invaders arcade game
├── frogger.html          # Single-player Frogger arcade game
├── tank.html             # Single-player Tank Battle arcade game
├── defender.html         # Single-player Defender arcade game
├── missile-command.html  # Single-player Missile Command arcade game
└── pinball.html          # Single-player Pinball arcade game
```
