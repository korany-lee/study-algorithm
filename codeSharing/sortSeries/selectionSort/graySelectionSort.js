import { print } from './printSorting.js';

export const selectionSort = function (arr, printFlag) {
	let min = 0;
	for (let i = 0; i < arr.length - 1; i++) {
		min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[min] > arr[j]) {
				min = j;
			}
		}
		if (arr[i] > arr[min]) {
			let tmp = arr[i];
			arr[i] = arr[min];
			arr[min] = tmp;
		}
		if (printFlag) {
			print(arr, 0, false);
		}
	}
	return arr;
};
