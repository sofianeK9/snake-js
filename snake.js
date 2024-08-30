export class Snake {
  constructor() {
    this.canvas = document.getElementById("gameCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.gridSize = 30;
    this.snakeBody = [{ x: 7, y: 7 }];
    this.direction = { x: 0, y: 0 };
    this.growing = false;
  }

  drawSnake() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "green";
    this.snakeBody.forEach((segment) => {
      this.ctx.fillRect(
        segment.x * this.gridSize,
        segment.y * this.gridSize,
        this.gridSize,
        this.gridSize
      );
    });
  }

  move() {
    const newHead = {
      x: this.snakeBody[0].x + this.direction.x,
      y: this.snakeBody[0].y + this.direction.y,
    };

    if (newHead.x < 0) newHead.x = this.canvas.width / this.gridSize - 1;
    if (newHead.x >= this.canvas.width / this.gridSize) newHead.x = 0;
    if (newHead.y < 0) newHead.y = this.canvas.height / this.gridSize - 1;
    if (newHead.y >= this.canvas.height / this.gridSize) newHead.y = 0;

    this.snakeBody.unshift(newHead);

    if (!this.growing) {
      this.snakeBody.pop();
    } else {
      this.growing = false;
    }
  }

  grow() {
    this.growing = true;
  }
  checkCollision() {
    const [head, ...body] = this.snakeBody;
    return body.some((segment) => segment.x === head.x && segment.y === head.y);
  }
}
