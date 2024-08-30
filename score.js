export class Score {
  constructor() {
    this.scores = [];
  }

  async fetchScores() {
    try {
      const response = await fetch("https://randomuser.me/api/?results=10");
      const data = await response.json();
      this.scores = data.results.map((user) => ({
        name: `${user.name.first} ${user.name.last}`,
        score: Math.floor(Math.random() * 100),
      }));
      this.scores.sort((a, b) => b.score - a.score);
    } catch (error) {
      console.log("Erreur lors de la récupération des scores :", error);
    }
  }

  displayScores() {
    const scoreBoard = document.getElementById("scoreBoard");
    scoreBoard.innerHTML = "";
    this.scores.forEach((score, index) => {
      const scoreItem = document.createElement("div");
      scoreItem.textContent = `${index + 1}. ${score.name}: ${score.score}`;
      scoreBoard.appendChild(scoreItem);
    });
  }
}
