const getArray = (xLen, yLen) => {
	let arr = new Array(yLen);

	for (let i = 0; i < yLen; i++) {
		arr[i] = new Array(xLen);
	}
	return arr;
};

const rotateMatrix = function (matrix, direction = 1) {
	// TODO: 여기에 코드를 작성합니다.
	const xLen = matrix.length,
		yLen = !matrix[0] ? 0 : matrix[0].length;
	const result = getArray(xLen, yLen);

	if (direction === 1) {
		for (let x = 0, yOfMatrix = 0; yOfMatrix < yLen; yOfMatrix++, x++) {
			for (let y = 0, xOfMatrix = xLen - 1; xOfMatrix >= 0; xOfMatrix--, y++) {
				result[x][y] = matrix[xOfMatrix][yOfMatrix];
			}
		}
	} else {
		for (let x = 0, yOfMatrix = yLen - 1; yOfMatrix >= 0; yOfMatrix--, x++) {
			for (let y = 0, xOfMatrix = 0; xOfMatrix < xLen; xOfMatrix++, y++) {
				result[x][y] = matrix[xOfMatrix][yOfMatrix];
			}
		}
	}

	return result;
};

module.exports = rotateMatrix;
