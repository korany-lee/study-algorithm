const sumArray = function (array) {
	//TODO: 코드를 여기에 작성합니다.
	if (array.length <= 1) {
		return array[0] !== undefined ? array[0] : 0;
	} else if (array.every((x) => x <= 0)) {
		return Math.max(...array);
	}

	let result = 0,
		sum = array[0];
	for (let i = 1; i < array.length; i++) {
		if (sum > 0) {
			sum += array[i];
		} else {
			sum = array[i];
		}
		if (result < sum) {
			result = sum;
		}
	}

	return result;
};

module.exports = sumArray;
