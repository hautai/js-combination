class Combination {
  constructor() {
    this.lens = [];
    this.totalLen = 0;
    this.arrs = arguments;

    [ ...arguments ].forEach((arr, i) => {
      const arrLen = arr.length;
      this.lens[i] = arrLen
      this.totalLen += arrLen;
    });

    this.rLens = [ ...this.lens ].reverse();
    this.rArrs = [ ...this.arrs ].reverse();
    this.srArrs = this.rArrs.map(arr => arr.unshift(arr.pop()));
  }

  index(n) {
    n = n + 1;
    const srArrs = this.rArrs;
    const result = [];
    this.rLens.reduce((n, d, i) => {
      result[i] = srArrs[i][n % d];
      return Math.ceil(n / d);
    }, n);
    return result.reverse();
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