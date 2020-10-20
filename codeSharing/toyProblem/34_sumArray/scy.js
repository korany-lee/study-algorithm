const sumArray = function (array) {
  let obj = { max: array[0], curr: array[0] };
  for (let i = 1; i < array.length; i++) {
    obj.curr = Math.max(obj.curr + array[i], array[i]);
    obj.max = Math.max(obj.curr, obj.max);
  }
  return obj.max;
};
