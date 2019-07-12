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
    }
  }
}