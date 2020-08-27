import { print } from './printSorting.js';

export const bubbleSort = (ranArr, printFlag) => {
	let len = ranArr.length;
	let flag = false;
	do {
		flag = false;
		for (let i = 1; i < len; i++) {
			if (ranArr[i - 1] > ranArr[i]) {
				let tmp = ranArr[i - 1];
				ranArr[i - 1] = ranArr[i];
				ranArr[i] = tmp;
				flag = true;
			}
		}
		if (printFlag) {
			print(ranArr);
		}
		len--;
	} while (flag);
};
