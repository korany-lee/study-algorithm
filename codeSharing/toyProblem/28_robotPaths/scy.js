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
  // TODO: 여기에 코드를 작성합니다.
  let count = 0;
  board = board || new makeBoard(n);

  const findPath = (i, j) => {
    if (i === n - 1 && j === n - 1) {
      count++;
      return;
    }
    if (i < 0 || i >= n || j < 0 || j >= n) {
      return;
    }
    if (board.hasBeenVisited(i, j)) {
      return;
    } else {
      board.togglePiece(i, j);
      findPath(i, j + 1);
      findPath(i + 1, j);
      findPath(i, j - 1);
      findPath(i - 1, j);
      board.togglePiece(i, j);
    }
  };
  findPath(0, 0);
  return count;
};

// if(n === 2) return 2;
// if(n === 3) return 12;
// if(n === 4) return 184;
// if(n === 5) return 8512;
// if(n === 6) return 1262816
