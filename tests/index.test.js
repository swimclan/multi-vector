const Vector = require('../src/vector');
const Node = require('../src/node');

describe('Node()', () => {
  let n;
  beforeEach(() => {
    n = Node(1, 20);
  });
  test('It will create a new node with a value and a min and max', () => {
    expect(n.value).toEqual(20);
    expect(n.min).toEqual(1);
    expect(n.max).toEqual(1);
  });

  test('It will incremement the node\'s range', () => {
    n.increment();
    expect(n.min).toEqual(2);
    expect(n.max).toEqual(2);
  });
});

describe('Vector()', () => {
  let v;
  beforeEach(() => {
    v = Vector();
  });
  test('It will create an empty vector upon factory execution', () => {
    expect(v.get(1)).toEqual([]);
  });

  test('It will add a new node to the vector', () => {
    v.add(23);
    expect(v.get(1)).toEqual([23]);
  });

  test('It will retrieve a vector array for a given period', () => {
    v.add(12);
    v.add(23);
    v.add(34);
    v.add(45);
    expect(v.get(4)).toEqual([12, 23, 34, 45]);
    expect(v.get(3)).toEqual([23, 34, 45]);
    expect(v.get(2)).toEqual([34, 45]);
    expect(v.get(1)).toEqual([45]);
  });
});