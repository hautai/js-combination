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
/*
  combine() {
    const divisors = this.divisors;
    const sArrs = this.sArrs;
    const sArrsLen = sArrs.length;
    const totalLen = this.totalLen;
    const results = Array(totalLen).fill([]);

    for (let s = 0; s < sArrsLen; s++) {
      const sArr = sArrs[s];
      const sArrLen = sArr.length;
      const divisor = divisors[s];
      //console.log(sArr);

      for (let n = 0; n < totalLen; n ++) {
        //console.log(n, divisor, s);
        results[n][s] = sArr[Math.floor(n / divisor) % sArrLen];
        //console.log(results);
      }
    }
    return results
  }
  */
}

const arr1 = ['A', 'B', 'C'];
const arr2 = ['a', 'b', 'c'];
const arr3 = ['0', '1'];

const test = new Combination(arr1, arr2, arr3);
//const result = test.combine();

for (let i = 0; i < 18; i++) {
  console.log(test.index(i));
}

module.exports = Combination;
