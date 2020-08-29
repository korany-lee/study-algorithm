function quickSort1(arr) {
  if (!arr.length) {
    return arr;
  }
  let pivotIdx = Math.floor(Math.random() * (arr.length));
  let pivot = arr[pivotIdx];
  let head = [];
  let tail = [];
  let exceptPivot = arr.slice(0, pivotIdx).concat(arr.slice(pivotIdx + 1));

  for (let el of exceptPivot) {
    if (el <= pivot) {
      head.push(el)
    } else {
      tail.push(el)
    }
  }
  return quickSort1(head).concat([pivot].concat(quickSort1(tail)));
  // return [...quickSort1(head), pivot, ...quickSort1(tail)];
};