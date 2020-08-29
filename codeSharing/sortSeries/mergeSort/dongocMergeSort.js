function mergeSort1(arr) {
  if (arr.length === 1) return arr;

  let midIdx = Math.floor(arr.length / 2);
  let head = arr.slice(0, midIdx);
  let tail = arr.slice(midIdx);

  return merge1(mergeSort1(head), mergeSort1(tail));
}

function merge1(head, tail) {
  let result = [];

  while (head.length || tail.length) {
    if (!tail.length || head[0] < tail[0]) {
      result.push(head.shift());
    } 
    else if (!head.length || head[0] >= tail[0]) {
      result.push(tail.shift()); 
    } 
  }
  return result;
}