const Node = require('./node');

module.exports = function Vector() {
  let length = 0;
  let nodes = {};
  return {
    add(value) {
      Object.values(nodes).forEach(node => {
        node.increment();
      });
      nodes[length++] = Node(length, value);
    },
    get(period) {
      const ret = [];
      Object.values(nodes).forEach(node => {
        if (node.min <= period && period <= node.max) {
          ret.push(node.value);
        }
      });
      return ret;
    },
    at(period) {
      return nodes[period - 1].value;
    },
    each(cb) {
      Object.entries(nodes).forEach(([index, node]) => {
        cb(node.value, +index + 1);
      });
    },
    get length() {
      return length;
    }
  }
}