const swap = (arr, a, b) => {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
};

const bubbleSort = function (array) {
	// TODO: Your code here!
	if (!Array.isArray(array)) {
		throw new TypeError('bubbleSort accepts only arrays');
	}
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - i; j++) {
			if (array[j] > array[j + 1]) {
				swap(array, j, j + 1);
			}
		}
	}
	return array;
};
module.exports = bubbleSort;
