# Rock Paper Scissors Game

This is a simple Rock Paper Scissors game created as a challenge from Frontend Mentor. The game is built using React, and it allows the player to play against the computer by choosing one of the three options: Rock, Paper, or Scissors.

## How to Play

1. When you open the game, you will see three buttons representing Rock, Paper, and Scissors.
2. Click on any button to make your choice.
3. The computer will then randomly choose its option.
4. The result will be displayed on the screen, indicating whether you won, lost, or it's a tie.
5. Your score will be updated based on the game's outcome.
6. You can play again by clicking the "PLAY AGAIN" button.

## Components

### Game Component

The `Game` component is responsible for rendering the game's main interface. It displays the player's choices, the computer's choice, and the game result. It also includes the "Play Again" button to start a new round.

### App Component

The `App` component is the root component of the game. It handles the game's logic, including keeping track of the score, checking the game's result, and rendering the different components.

### ScoreBoard Component

The `ScoreBoard` component displays the current score of the player.

### RulesBtn Component

The `RulesBtn` component allows the player to view the game rules.

### PopUp Component

The `PopUp` component displays the game rules when triggered by the "Rules" button.

## How the Game Works

1. The game starts with the player choosing one of the three buttons (Rock, Paper, or Scissors).
2. The computer then randomly selects its choice from the available options.
3. After a short delay, the computer's choice is revealed, and the result of the game is displayed on the screen.
4. The player's score is updated accordingly based on the game outcome.
5. The player can play again by clicking the "PLAY AGAIN" button, which resets the game for a new round.

## Features

- Simple and intuitive interface.
- Real-time game results and score tracking.
- Responsive design for different screen sizes.

## Technologies Used

- React: JavaScript library for building user interfaces.
- HTML: Markup language for structuring the web page.
- CSS: Styling the components and layout.

## Running the Game Locally

To run the game locally on your machine, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in the terminal.
3. Install the required dependencies using `npm install`.
4. Start the development server with `npm start`.
5. The game will open in your default web browser at `http://localhost:3000/`.

## About Frontend Mentor

Frontend Mentor is a platform that offers coding challenges for front-end developers. These challenges are designed to improve your skills and help you gain real-world experience by building projects. To know more, visit [Frontend Mentor](https://www.frontendmentor.io/).

## Credits

The game was created by [Bakare](https://github.com/bakeji). The challenge and design were provided by Frontend Mentor.