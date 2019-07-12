module.exports = function Node(n, v) {
  let value = v;
  let range = [1, n];
  return {
    get min() {
      return range[0];
    },
    get max() {
      return range[1];
    },
    get value() {
      return value;
    },
    increment() {
      range[0]++ && range[1]++;
    }
  }
}