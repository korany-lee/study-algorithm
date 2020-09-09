/** @format */

const rockPaperScissors = function (n) {
	if (n === undefined) n = 3;
	// n개의 자릿수까지
	// i는 글자의 자릿수를 뜻함
	let result = [];
	let count = 0;

	while (result.length < Math.pow(3, n)) {
		let oneCase = [];
		for (let i = 0; i < n; i++) {
			if (i === 0) {
				// i가 일의 자리라면
				oneCase[i] = count % 3;
			} else {
				let digit = Math.floor(count / Math.pow(3, i));
				while (digit >= 3) {
					digit -= 3;
				}
				oneCase[i] = digit;
			}
		}
		count++;
		result.push(oneCase.reverse());
	}

	let finalResult = result.map((arr) =>
		arr.map((x) => {
			if (x === 0) {
				return 'rock';
			} else if (x === 1) {
				return 'paper';
			} else {
				return 'scissors';
			}
		})
	);

	return finalResult;
};

module.exports = rockPaperScissors;
