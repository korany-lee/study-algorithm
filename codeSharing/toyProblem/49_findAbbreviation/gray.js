const spiralTraversal = function (matrix) {
	// TODO: 여기에 코드를 작성합니다.
	let top = 0,
		bottom = matrix.length - 1,
		left = 0,
		right = matrix[0].length - 1,
		x = 0,
		y = 0;
	const result = [];
	while (top <= bottom && left <= right) {
		if (x <= bottom && y <= right) {
			for (y = left; y <= right; y++) {
				result.push(matrix[x][y]);
			}
			top++;
			y = right;
			for (x = top; x <= bottom; x++) {
				result.push(matrix[x][y]);
			}
			right--;
			x = bottom;
		} else {
			for (y = right; y >= left; y--) {
				result.push(matrix[x][y]);
			}
			bottom--;
			y = left;
			for (x = bottom; x >= top; x--) {
				result.push(matrix[x][y]);
			}
			left++;
			x = top;
		}
	}

	return result;
};
