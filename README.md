# Arcade Games

Two classic arcade games that run entirely in the browser — no installation or server required. Open either HTML file directly in any web browser.

---

## Tic Tac Toe

A two-player Tic Tac Toe game for two people on the same device.

**File:** `tic-tac-toe.html`

### How to Play

1. Open `tic-tac-toe.html` in any web browser.
2. Players take turns clicking cells on the 3×3 grid.
3. **Player X** always goes first.
4. The first player to get three marks in a row (horizontally, vertically, or diagonally) wins.
5. If all 9 cells are filled with no winner, the game is a draw.
6. Click **New Game** to reset the board. Scores carry over between rounds.

### Features

- Two-player local play (same device, alternating turns)
- Win and draw detection
- Winning cells highlighted at the end of each round
- Scoreboard tracking wins for X, O, and draws

---

## Centipede

A browser remake of the classic Atari arcade game. Destroy the centipede before it reaches you.

**File:** `centipede.html`

### How to Play

1. Open `centipede.html` in any web browser.
2. Move your cannon around the player zone (bottom of the screen) and shoot the centipede.
3. Hit every segment to clear the level and advance.

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

## Tech Stack

All games are built with plain HTML, CSS, and vanilla JavaScript — no frameworks or dependencies.

| Layer | Details |
|-------|---------|
| Structure | HTML5 |
| Styling | CSS3 |
| Logic | Vanilla JavaScript |
| Rendering (Centipede) | HTML5 Canvas 2D |

## File Structure

```
arcade-games/
├── tic-tac-toe.html    # Two-player Tic Tac Toe
└── centipede.html      # Single-player Centipede arcade game
```
