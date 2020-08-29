import { print } from './printSorting.js';

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

export const mergeSort = (arr, printFlag = false) => {
	if (arr.length === 1) {
		return arr;
	}

	let middle =
		arr.length % 2 === 1 ? Math.floor(arr.length / 2) : arr.length / 2;
	let left = arr.slice(0, middle);
	let right = arr.slice(middle);

	left = mergeSort(left);
	right = mergeSort(right);

	return merge(left, right);
};
