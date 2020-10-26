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
	const countPath = (board, i, j) => {
		if (i > n - 1 || j > n - 1 || i < 0 || j < 0) {
			return;
		}
		if (i === n - 1 && j === n - 1) {
			count++;
			return;
		}
		if (!board.hasBeenVisited(i, j)) {
			board.togglePiece(i, j);
			countPath(board, i, j + 1);
			countPath(board, i + 1, j);
			countPath(board, i, j - 1);
			countPath(board, i - 1, j);
			board.togglePiece(i, j);
		}
	};

	let count = 0;
	const newBoard = makeBoard(n);
	countPath(newBoard, 0, 0);

	return count;
};

module.exports = robotPaths;

/** 최단거리
const factorial = (n) => {
  if ( n === 1 ) {
    return 1;
  }
  return n*factorial(n-1);
}

const robotPaths = function (n, board, i, j) {
  // TODO: 여기에 코드를 작성합니다.
  return n === 1 ? 1 : factorial(2*(n-1)) / (factorial(n-1) * factorial(n-1));
};
 */
