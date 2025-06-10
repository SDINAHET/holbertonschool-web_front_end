const roomDimensions = {
  width: 50,
  length: 100,
  getArea: function () {
    return this.width * this.length;
  }
};

const boundGetArea = roomDimensions.getArea.bind(roomDimensions);

// Exemple de test :
console.log(boundGetArea()); // Affiche : 5000
