/** @format */

const bubbleSort = function (array) {
	for (let i = array.length; i >= 0; i--) {
		for (let j = 0; j < i; j++) {
			if (array[j] > array[j + 1]) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
			}
		}
	}
	return array;
};
module.exports = bubbleSort;
