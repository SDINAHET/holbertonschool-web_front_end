const stock = {
  macbook: 2,
  iphone: 4
};

function processPayment(itemName) {
  stock[itemName]--;
  console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
  console.log(`No more ${itemName} in stock`);
  console.log(`Payment is not being processed`);
}

function processOrder(itemName, callbackPayment, callbackError) {
  console.log(`Verifying the stock of ${itemName}`);
  const itemKey = itemName.toLowerCase();

  if (!stock.hasOwnProperty(itemKey)) {
    console.log(`Item ${itemName} is not offered`);
    return;
  }

  if (stock[itemKey] > 0) {
    callbackPayment(itemKey);
  } else {
    callbackError(itemKey);
  }
}

const userInput = prompt("Please enter the item you would like to purchase (Macbook, iPhone)");

if (userInput) {
  processOrder(userInput.trim(), processPayment, processError);
}
