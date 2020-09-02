const rockPaperScissors = function (n) {
	// TODO: Your code here!
	const possible = ['rock', 'paper', 'scissors'];
	let tmp = [];
	const result = [];

	for (let i = 0; i < 3; i++) {
		tmp.push(`${i}` + possible[i]);
		for (let j = 0; j < n; j++) {
			tmp.push(`${j}` + possible[j]);
			for (let k = 0; k < n; k++) {
				tmp.push(`${k}` + possible[k]);
				result.push([...tmp]);
				tmp.length--;
			}
			tmp.length--;
		}
		tmp.length--;
	}

	return result;
};
