const spiralTraversal = function (matrix) {
	let next = {
		top: "right",
		right: "bottom",
		bottom: "left",
		left: "top",
	};

	let cur = "top";
	let result = [];

	while (matrix.length) {
		if (cur === "top") {
			result.push(...matrix.shift());
			cur = next.top;
		} else if (cur === "right") {
			for (let i = 0; i < matrix.length; i++) {
				result.push(matrix[i].pop());
			}
			cur = next.right;
		} else if (cur === "bottom") {
			let temp = matrix.pop();
			result.push(...temp.reverse());
			cur = next.bottom;
		} else if (cur === "left") {
			for (let i = matrix.length - 1; i >= 0; i--) {
				result.push(matrix[i].shift());
			}
			cur = next.left;
		}
	}
	return result.filter((el) => el);
};
