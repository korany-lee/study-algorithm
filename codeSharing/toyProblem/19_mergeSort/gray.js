const merge = (leftArr, rightArr) => {
	let arr = [];

	while (leftArr.length > 0 && rightArr.length > 0) {
		if (leftArr[0] <= rightArr[0]) {
			arr.push(leftArr.shift());
		} else {
			arr.push(rightArr.shift());
		}
	}

	while (leftArr.length > 0) {
		arr.push(leftArr.shift());
	}

	while (rightArr.length > 0) {
		arr.push(rightArr.shift());
	}

	return arr;
};

const mergeSort = function (array) {
	// TODO: 코드를 여기에 작성합니다.
	if (array.length === 1) {
		return array;
	}

	let middle =
		array.length % 2 === 1 ? Math.floor(array.length / 2) : array.length / 2;
	let left = array.slice(0, middle);
	let right = array.slice(middle);

	left = mergeSort(left);
	right = mergeSort(right);

	return merge(left, right);
};

module.exports = mergeSort;
