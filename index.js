console.log("champion is here");
function formatAmount(amount) {
  return "$" + amount.toFixed(2);
}

console.log(formatAmount(1999));

/*var askForPhonePurchase = prompt(
  `Only today You are able to buy the IPhone with extra discount! Would you like it to buy it right now?`
);
var anotherPhone = prompt(
  `Would you like to buy another one for your close friends`
);*/

const THRESHOLD = 230;
const TAX_RATE = 0.08;
var phonePrice = 99.99;
var accessoryPrice = 9.99;
var bankBalance = 302.13;
amount = 0;

const getMaxPhonesBuyingAmount = function (limit) {
  const taxedPhonePrice = getTaxedPrice(phonePrice);
  const phonesQuantity = Math.floor(limit / taxedPhonePrice);
  return phonesQuantity * taxedPhonePrice;
};

amount = getMaxPhonesBuyingAmount(bankBalance);

console.log({ amount });

if (amount < THRESHOLD) {
  amount = amount + getTaxedPrice(accessoryPrice);
}

function getTaxedPrice(price) {
  return price + price * TAX_RATE;
}

function printAmount(amt) {
  console.log(amt.toFixed(2));
}

// I need to bind the answer with the next question of buyings
// if (true) {function calculateTheFinalPurchaseAmount()}

function calculateTheFinalPurchaseAmount(amt) {
  // calculate the amount with the tax
  amt = amt + amt * TAX_RATE;
  return amt;
}
