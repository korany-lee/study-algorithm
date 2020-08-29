import { print } from './printSorting.js';

export const insertionSort = (ranArr, printFlag) => {
	let len = ranArr.length;
	let tmp;
	for (let i = 0; i < len; i++) {
		tmp = ranArr[i];
		for (let j = i - 1; j >= 0; j--) {
			if (tmp < ranArr[j]) {
				ranArr[j + 1] = ranArr[j];
				ranArr[j] = tmp;
			} else {
				break;
			}
		}
		if (printFlag) {
			print(ranArr, 0, false);
		}
	}

	return ranArr;
};
