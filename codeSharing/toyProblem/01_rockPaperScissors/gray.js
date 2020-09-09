const rockPaperScissors = function (n) {
	// TODO: Your code here!
	const possible = [['rock'], ['paper'], ['scissors']];
	if (n === 1) {
		return possible;
	}
	n = n || 3;
	const result = [];
	const before = rockPaperScissors(n - 1);

	for (let i = 0; i < possible.length; i++) {
		for (let j = 0; j < before.length; j++) {
			result.push(possible[i].concat(before[j]));
		}
	}

	return result;
};

module.exports = rockPaperScissors;

// 한 줄씩 새로 작성한다.
// n번만큼 작성할거야
// n번째에 r, p, s가 순서대로 들어가야 해
// n-1번째에 r, p, s가 순서대로 들어가야 해
// ... 0번째에 r, p, s가 순서대로 들어가야 해
