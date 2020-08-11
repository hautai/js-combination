class Combination {
  constructor() {
    this.arrs = [ ...arguments ];
    this.divisors = [];

    this.totalLen = [ ...arguments ].reverse().reduce((divisor, arr) => {
      this.divisors.unshift(divisor);
      return divisor * arr.length;
    }, 1);
  }

  index(n) {
    const divisors = this.divisors;

    return this.arrs.reduce((result, arr, i) => {
      result[i] = arr[Math.floor(n / divisors[i]) % arr.length];

      return result;
    }, []);
  }

  combine() {
    const divisors = this.divisors;
    const arrs = this.arrs;
    const arrsLen = arrs.length;
    const totalLen = this.totalLen;

    const results = [];

    for (let i = 0; i < totalLen; i++) {
      results[i] = [];
    }

    for (let a = 0; a < arrsLen; a++) {
      const arr = arrs[a];
      const arrLen = arr.length;
      const divisor = divisors[a];

      for (let n = 0; n < totalLen; n ++) {
        results[n][a] = arr[Math.floor(n / divisor) % arrLen];
      }
    }

    return results
  }
}

module.exports = Combination;
