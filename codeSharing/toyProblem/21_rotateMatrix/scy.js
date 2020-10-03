const rotateMatrix = function (matrix, direction) {
  let result = [];
  if (!matrix.length) {
    return [];
  }
  matrix[0].forEach((arr) => result.push([]));

  for (let i = matrix.length - 1; i >= 0; i--) {
    let arr = matrix[i];
    for (let j = 0; j < arr.length; j++) {
      result[j].push(arr[j]); //
    }
  }
  if (direction === -1) return rotateMatrix(rotateMatrix(result));
  return result;
};
