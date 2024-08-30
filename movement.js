// movement.js

export class SnakeController {
  constructor(snake) {
    this.snake = snake;
    this.direction = { x: 1, y: 0 };

    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
          this.changeDirection(0, -1);
          break;
        case "ArrowDown":
          this.changeDirection(0, 1);
          break;
        case "ArrowLeft":
          this.changeDirection(-1, 0);
          break;
        case "ArrowRight":
          this.changeDirection(1, 0);
          break;
      }
    });
  }

  update() {
    this.snake.direction = this.direction;
    this.snake.move();
  }

  changeDirection(x, y) {
    if (
      (x !== 0 && this.snake.direction.x === 0) ||
      (y !== 0 && this.snake.direction.y === 0)
    ) {
      this.direction = { x, y };
    }
  }
}
