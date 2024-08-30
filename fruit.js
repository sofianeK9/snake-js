export class Fruit {
  constructor(canvas, gridSize) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.gridSize = gridSize;
    this.position = this.getRandomPosition();
  }

  getRandomPosition() {
    const x = Math.floor(Math.random() * (this.canvas.width / this.gridSize));
    const y = Math.floor(Math.random() * (this.canvas.width / this.gridSize));
    return { x, y };
  }

  drawFruit() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(
      this.position.x * this.gridSize,
      this.position.y * this.gridSize,
      this.gridSize,
      this.gridSize
    );
  }

  regenerate() {
    this.position = this.getRandomPosition();
  }
}
