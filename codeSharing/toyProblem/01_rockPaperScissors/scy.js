const rockPaperScissors = function (num) {
	// TODO: Your code here!
	num = num || 3;
	const specs = [['rock'], ['paper'], ['scissors']];
	const arr = [];

	if (num === 1) return specs;

	let result = rockPaperScissors(num - 1);

	for (let j = 0; j < specs.length; j++) {
		for (let i = 0; i < result.length; i++) {
			arr.push(specs[j].concat(result[i]));
		}
	}

	return arr;
};
module.exports = rockPaperScissors;
