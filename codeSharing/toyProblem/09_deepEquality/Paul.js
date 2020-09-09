/** @format */

const deepEquals = function (apple, orange) {
  const arg1 = Object.entries(apple).flat(Infinity);
  const arg2 = Object.entries(orange).flat(Infinity);
  args1.every((value, index) => value === args2[index]);
};

deepEquals({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 3 } }); // true
