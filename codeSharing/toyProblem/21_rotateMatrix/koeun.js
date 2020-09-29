const rotateMatrix = function (matrix, direction) {
  // TODO: 여기에 코드를 작성합니다.
  if (matrix.length === 0) {
    return [];
  }

  let newArr = [];
  //-1일때를 먼저 해줘야 하나봄
  if (direction === -1) {
    for (let i = matrix.length - 1; i >= 0; i--) {
      for (let j = 0; j < matrix.length; j++) {
        newArr.push(matrix[j][i]);
      }
    }
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
      result.push(newArr.slice(0, matrix.length));
      newArr = newArr.slice(matrix.length);
    }
    return result;
  }

  if (matrix[0].length === matrix.length) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = matrix.length - 1; j >= 0; j--) {
        newArr.push(matrix[j][i]);
      }
    }
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
      result.push(newArr.slice(0, matrix.length));
      newArr = newArr.slice(matrix.length);
    }
    return result;
  } else if (matrix[0].length !== matrix.length) {
    for (let i = 0; i < matrix[0].length; i++) {
      for (let j = matrix.length - 1; j >= 0; j--) {
        newArr.push(matrix[j][i]);
      }
    }
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
      result.push(newArr.slice(0, matrix.length));
      newArr = newArr.slice(matrix.length);
    }
    return result;
  }
};
//가로는 matrix.length 부터
//[0,0],[0,1],[0,2],[0,3] -> [3,0],[2,0],[1,0],[0,0]
//[1,0],[1,1],[1,2],[1,3] -> [3,1],[2,1],[1,1],[0,1]
//[2,0],[2,1],[2,2],[2,3] -> [3,2],[2,2],[1,2],[0,2]
//[3,0],[3,1],[3,2],[3,3] -> [3,3],[2,3],[1,3],[0,3]

// [1, 2, 3], -> [3, 6, 9] === [0, 2], [1, 2], [2, 2]
// [4, 5, 6], -> [2, 5, 8] === [0, 1], [1, 1], [2, 1]
// [7, 8, 9], -> [1, 4, 7] === [0, 0], [1, 0], [2, 0]
