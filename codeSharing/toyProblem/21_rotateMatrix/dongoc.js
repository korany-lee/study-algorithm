const rotateMatrix = function (matrix, direction) {
    if (matrix.length < 1) return matrix
    direction = direction || 1;
    let [result, temp] = [[], []];
    if (direction === 1) {
      for (let col = 0; col < matrix[0].length; col++) { // col에 있는 친구들 먼저 고정!
        for (let row = matrix.length - 1; row >= 0; row--) { // 순서대로 말고!
          temp.push(matrix[row][col]) // 각 row에 col 친구들을 옮겨줘!
        }
        result.push(temp.slice()) 
        temp.length = 0;
      }
    }
    if (direction === -1) {
      for (let col = matrix[0].length - 1; col >= 0; col--) { // col에 있는 친구들 먼저 고정!
        for (let row = 0; row < matrix.length; row++) { // 이번엔 순서대로!
          temp.push(matrix[row][col]) // 각 row에 있는 col 친구들을 옮겨줘!
        }
        result.push(temp.slice()) 
        temp.length = 0;
      }
    }
    return result;
  };
  /*
  [ 
    [0, 9, 5, 1],
    [1, 7, 6, 2],
    [2, 8, 7, 3],
    [3, 2, 8, 4],
  ]
  
  [ 
    [0, 9, 5, 1, 3],
    [1, 7, 6, 2, 7],
    [2, 8, 7, 3, 9],
    [3, 2, 8, 4, 5],
  ]
  
  [ 
    [0, 9, 5, 1],
    [1, 7, 6, 2],
    [2, 8, 7, 3],
    [3, 2, 8, 4],
    [4, 3, 7, 2],
  ]
  */