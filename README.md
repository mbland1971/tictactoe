# Tic Tac Toe

A simple two-player Tic Tac Toe game that runs entirely in the browser — no installation or server required.

## How to Play

1. Open `tic-tac-toe.html` in any web browser.
2. Players take turns clicking cells on the 3×3 grid.
3. **Player X** always goes first.
4. The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins.
5. If all 9 cells are filled with no winner, the game is a draw.
6. Click **New Game** to reset the board. Scores carry over between rounds.

## Features

- Two-player local play (same device, alternating turns)
- Automatic win and draw detection
- Winning cells are highlighted at the end of each round
- Scoreboard tracking wins for X, O, and draws
- Fully self-contained — one HTML file with no dependencies

## Tech Stack

| Layer      | Details                          |
|------------|----------------------------------|
| Structure  | HTML5                            |
| Styling    | CSS3 (grid layout, animations)   |
| Logic      | Vanilla JavaScript (no libraries)|

## File Structure

```
tictactoe/
└── tic-tac-toe.html   # Complete game (markup, styles, and logic in one file)
```
