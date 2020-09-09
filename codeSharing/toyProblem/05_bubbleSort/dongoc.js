// second try (double for loop ver.)
const bubbleSort = function (array) {
	for (let i = array.length - 1; i >= 0; i--) {
		for (let j = 0; j < i; j++) {
			if (array[j] > array[j + 1]) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
			}
		}
	}
	return array;
};

//first try (recursion ver.)
// const bubbleSort = function (array) {
// 	for (let i = 0; i < array.length - 1; i++) {
// 		if (array[i] > array[i + 1]) {
// 			[array[i], array[i + 1]] = [array[i + 1], array[i]];
// 		}
// 	}
// 	if (!array.length) return array;
// 	else return bubbleSort(array.slice(0, -1)).concat(array.slice(-1));
// };
module.exports = bubbleSort;
