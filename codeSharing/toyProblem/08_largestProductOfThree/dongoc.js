const largestProductOfThree = function (array) {
	let sorted = array.slice().sort((a, b) => b - a);
	let [neg2, neg1] = array.filter((num) => num < 0).sort((a, b) => a - b);
	return Math.max(
		...[sorted[0] * sorted[1] * sorted[2], sorted[0] * neg1 * neg2].filter(
			(num) => !Object.is(num, NaN)
		)
	);
};
// 경우의 수
// 1. 양수3 -> 가장 큰 양수 3개
// 2. 음수2 양수 -> 가장 큰 양수 1개, 가장 작은 음수 2개
// 3. 음수1 양수2 -> 가장 작은 양수 2개, 가장 큰 음수 1개 -> 1번과 같음 (어쩔 수 없는 경우이기 때문)
// 4. 음수3 -> 가장 큰 음수 3개 -> 1번과 같음
module.exports = largestProductOfThree;
