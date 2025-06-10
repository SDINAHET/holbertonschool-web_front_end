function studentHogwarts() {
  // Variables privées
  let privateScore = 0;
  let name = null;

  // Méthode privée
  function changeScoreBy(points) {
    privateScore += points;
  }

  // Méthodes publiques
  return {
    setName(newName) {
      name = newName;
    },
    rewardStudent() {
      changeScoreBy(1);
    },
    penalizeStudent() {
      changeScoreBy(-1);
    },
    getScore() {
      return `${name}: ${privateScore}`;
    }
  };
}

// Instance Harry
const harry = studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore()); // Harry: 4

// Instance Draco
const draco = studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore()); // Draco: -2
