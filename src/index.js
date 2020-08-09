Class Combination {
  constructor() {
    this.order = [];
    arguments.forEach((arr, i) => {
      const name = `_${i}`;
      this[name] = arr;
      this.order[i] = name;
    });
  }
}

module.exports = Combination;
