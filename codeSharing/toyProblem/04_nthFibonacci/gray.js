const nthFibonacci = function (n) {
	// TODO: Your code here!
	if (n === 0) {
		return 0;
	}
	if (n === 1 || n === 2) {
		return 1;
	}
	let tmp = [1, 1];
	for (let i = 2; i < n; i++) {
		tmp[i] = tmp[i - 1] + tmp[i - 2];
	}
	return tmp.pop();
};

module.exports = nthFibonacci;
