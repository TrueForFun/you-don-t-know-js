function WeedBankConstructor(weightLimit) {
  this.weightLimit = weightLimit;
  this.currentWeight = 0;
}

WeedBankConstructor.prototype.addWeed = function (amount) {
  if (this.currentWeight + amount <= this.weightLimit) {
    this.currentWeight = this.currentWeight + amount;
  } else {
    console.log(
      `You want add ${amount} weed, but the Bank has ${this.currentWeight} and ${this.weightLimit} is limit of this Bank.`
    );
  }
};

WeedBankConstructor.prototype.takeWeed = function (amount) {
  this.currentWeight = this.currentWeight - amount;
};

// ***************************************

class WeedBank {
  constructor(weightLimit) {
    this.weightLimit = weightLimit;
    this.currentWeight = 0;
  }
  addWeed(amount) {
    if (this.currentWeight + amount <= this.weightLimit) {
      this.currentWeight = this.currentWeight + amount;
    } else {
      console.log(
        `You want add ${amount} weed, but the Bank has ${this.currentWeight} and ${this.weightLimit} is limit of this Bank.`
      );
    }
  }

  takeWeed(amount) {
    this.currentWeight = this.currentWeight - amount;
  }
}

const bank = new WeedBank(50);

bank.addWeed(45);
bank.addWeed(10);

console.log("bank", bank);

const bank2 = new WeedBankConstructor(50);

bank2.addWeed(45);
bank2.addWeed(10);

console.log("bank2", bank2);
