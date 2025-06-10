function divideBy(firstNumber) {
  return function (secondNumber) {
    return secondNumber / firstNumber;
  };
}

function addBy(firstNumber) {
  return function (secondNumber) {
    return secondNumber + firstNumber;
  };
}

// Création des closures
const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);

// Tests demandés
console.log(addBy100(20));     // 120
console.log(divideBy10(20));   // 2
console.log(divideBy100(200)); // 2
console.log(addBy1000(20));    // 1020
