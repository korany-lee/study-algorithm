/** @format */

const nthFibonacci = function (n) {
	let cur = 0,
		num1 = 0,
		num2 = 1;
	while (n >= 0) {
		[cur, num1, num2] = [num1, num2, num1 + num2];
		n--;
	}
	return cur;
};
module.exports = nthFibonacci;
