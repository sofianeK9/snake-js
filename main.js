import { Snake } from "./snake.js";
import { SnakeController } from "./movement.js";
import { Fruit } from "./fruit.js";
import { Score } from "./score.js";

const snake = new Snake();
const controller = new SnakeController(snake);
const fruit = new Fruit(snake.canvas, snake.gridSize);
let gameOver = false;
const score = new Score();

async function gameLoop() {
  controller.update();
  if (
    snake.snakeBody[0].x === fruit.position.x &&
    snake.snakeBody[0].y === fruit.position.y
  ) {
    fruit.regenerate();
    snake.grow();
  }

  if (snake.checkCollision()) {
    gameOver = true;
    let message = document.getElementById("message");
    message.style.color = "red";
    message.innerHTML = "Game Over!";
    document.getElementById("scoreBoard").classList.remove("hidden");
    await score.fetchScores();
    score.displayScores();

    return;
  }

  snake.drawSnake();
  fruit.drawFruit();
  if (!gameOver) {
    setTimeout(gameLoop, 200);
  }
}

gameLoop();
let reload = document.getElementById("speed");
reload.addEventListener("click", () => {
  gameLoop();
});
