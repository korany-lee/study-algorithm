const mergeSort = function (array) {
  if (array.length === 1) return array;

  let midIndex = Math.floor(array.length / 2);
  let head = array.slice(0, midIndex);
  let tail = array.slice(midIndex);

  return merge(mergeSort(head), mergeSort(tail));
}

const merge = (head, tail) => {
  let result = [];

  while (head.length || tail.length) {
    if (!tail.length || head[0] <= tail[0]) {
      result.push(head.shift());
    } 
    else if (!head.length || head[0] > tail[0]) {
      result.push(tail.shift()); 
    } 
  }
  return result;
};

// const merge = (head, tail) => {
//   let result = [];

//   while (head.length || tail.length) {
//     if (head.length && !tail.length) {
//       result.push(head.shift());
//     } 
//     else if (!head.length && tail.length) {
//       result.push(tail.shift()); 
//     }
//     else if (head[0] <= tail[0]) {
//       result.push(head.shift());
//     } 
//     else if (head[0] > tail[0]) {
//       result.push(tail.shift()); 
//     } 
//   }
//   return result;
// };