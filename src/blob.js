export class Blob {
  constructor() {
    this.foodLvl = 100;
    this.mood = 100;
    this.energy = 100;
    this.cleanliness = 100;
    this.remainingDay = 1000;
    this.str = 0;
    this.agi = 0;
    this.int = 0;
  }
  start() {
    this.food();
    this.feed();
    this.happiness();
    this.attention();
    this.dirty();
    this.dayTimer();
  }

  dayTimer() {
    setInterval(() => {
      this.remainingDay--;
    }, 10000)
  }

  train(stat) {
    return (amount) => {
      this[stat] += amount;
      console.log(stat + " Stat is now: " + this[stat]);
    }
  }

  food() {
    setInterval(() => {
      this.foodLvl--;
    }, 1000)
  }

  feed(amount) {
    return (foodType) => {
      this.foodLvl += amount;
    }
  }

  work(amount) {
    this.energy -= amount;
    this.foodLvl -= amount;
  }
  sleep() {
    this.energy = 100;
  }
  happiness() {
    setInterval(() => {
      this.mood --;
    }, 3000)
  }
  attention() {
    setInterval(() => {
      this.energy --;
    }, 3000)
  }
  dirty() {
    setInterval(() => {
      this.cleanliness --;
    }, 5000)
  }
}
