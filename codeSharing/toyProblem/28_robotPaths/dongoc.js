const makeBoard = function (n) {
  let board = [];
  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function (i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function (i, j) {
    return !!this[i][j];
  };
  return board;
};

const robotPaths = function (n, board, i, j) {
  if (n === 1) return 1;

  board = board || makeBoard(n);
  let count = 0;

  const recursion = (n, board, i, j) => {
    if (i >= n || i < 0 || j >= n || j < 0 || board.hasBeenVisited(i , j)) {
      return;
    }
    board.togglePiece(i, j);

    if (i === (n - 1) && j === (n - 1)) {
      count++;
      board.togglePiece(i, j)
      return;
    }
    recursion(n, board, i + 1, j);
    recursion(n, board, i - 1, j);
    recursion(n, board, i, j + 1);
    recursion(n, board, i, j - 1);

    board.togglePiece(i, j);
  }
  
  recursion(n, board, 0, 0)
  return count;
};
