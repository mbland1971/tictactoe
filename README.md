# Arcade Games

Four classic arcade games that run entirely in the browser — no installation or server required.

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
- If any invader reaches the cannon's row (or lands), you lose a life.
- You start with **3 lives**. The game ends when all lives are lost.
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
| Each hop forward | 10 |
| Reach a lily pad | 50 + time bonus (10 × seconds remaining) |
| Clear a level (all 5 pads) | 1,000 bonus |

---

## Tech Stack

All games are built with plain HTML, CSS, and vanilla JavaScript — no frameworks or dependencies.

| Layer | Details |
|-------|---------|
| Structure | HTML5 |
| Styling | CSS3 |
| Logic | Vanilla JavaScript |
| Rendering (Centipede, Asteroids, Space Invaders) | HTML5 Canvas 2D |

## File Structure

```
arcade-games/
├── index.html            # Arcade launcher — start here
├── tic-tac-toe.html      # Two-player Tic Tac Toe
├── centipede.html        # Single-player Centipede arcade game
├── asteroids.html        # Single-player Asteroids arcade game
├── space-invaders.html   # Single-player Space Invaders arcade game
└── frogger.html          # Single-player Frogger arcade game
```
