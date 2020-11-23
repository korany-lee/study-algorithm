let longestPalindrome = function (string) {
	let result = [];

	// 홀수일 때
	for (let i = 1; i < string.length; i++) {
		let oddTemp = string[i];
		let forloopLength = Math.min(i, string.length - i - 1);
		for (let j = 1; j <= forloopLength; j++) {
			if (string[i - j] === string[i + j]) {
				oddTemp = string[i - j] + oddTemp + string[i - j];
				if (j === forloopLength) {
					result.push(oddTemp);
				}
			} else {
				if (oddTemp !== string[i]) {
					result.push(oddTemp);
					oddTemp = string[i];
				}
			}
		}
	}

	// 짝수일 때
	for (let i = 0; i < string.length; i++) {
		let oddTemp = string[i] + string[i + 1];
		let forloopLength = Math.min(i, string.length - i - 2);
		for (let j = 1; j <= forloopLength; j++) {
			if (string[i - j] === string[i + j + 1]) {
				oddTemp = string[i - j] + oddTemp + string[i - j];
				if (j === forloopLength) {
					result.push(oddTemp);
				}
			} else {
				if (oddTemp !== string[i] + string[i + 1]) {
					result.push(oddTemp);
					oddTemp = string[i] + string[i + 1];
				}
			}
		}
	}

	if (!result.length) return "";
	return result.reduce((max, cur) => (max.length < cur.length ? cur : max));
};
