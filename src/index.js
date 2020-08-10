class Combination {
  constructor() {
    const args = [ ...arguments ];
    this.sArrs = args.map(arr => {
      arr.unshift(arr.pop());
      return arr;
    });
    this.divisors = [];

    const totalLen = args.reverse().reduce((divisor, arr) => {
      this.divisors.unshift(divisor);
      return divisor * arr.length;
    }, 1);

    this.totalLen = totalLen;
  }

  index(n) {
    n = n + 1;
    console.log(this.sArrs);
    const divisors = this.divisors;
    return this.sArrs.reduce((result, arr, i) => {
      result[i] = arr[Math.ceil(n / divisors[i]) % arr.length];
      return result;
    }, []);
  }
}

module.exports = Combination;

/*
  combine() {
    const arrs = this.arrs;
    const lens = this.lens;
    const totalLen = this.totalLen;
    const result = new Array(totalLen);

    for (const i = 0; i < totalLen; i++) {

    }
  }
  */