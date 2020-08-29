import { print } from './printSorting.js';

export const quickSort = function (arr, printFlag = false) {
	if (arr.length < 2) {
		return arr;
	}
	let pivot = arr[0];
	let previousArr = [],
		afterArr = [];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] <= pivot) {
			previousArr.push(arr[i]);
		} else {
			afterArr.push(arr[i]);
		}
	}
	if (printFlag) {
		print(arr, 0, false);
	}
	return quickSort(previousArr, printFlag)
		.concat(pivot)
		.concat(quickSort(afterArr, printFlag));
};

// const generateRandomArr = function (max) {
// 	let len = Math.floor(Math.random() * max);
// 	const tmpArr = [];
// 	let randomNumber = 0;
// 	for (let i = 0; i < len; i++) {
// 		randomNumber = Math.floor(Math.random() * max);
// 		tmpArr.push(randomNumber);
// 	}
// 	return tmpArr;
// };

// const qSort = function () {
// 	let randomArr = [];
// 	for (let i = 10; i < 100; i += 9) {
// 		randomArr.push(generateRandomArr(i));
// 	}
// 	for (let i = 0; i < randomArr.length; i++) {
// 		let a = randomArr[i];
// 		let b = quickSort(randomArr[i]);
// 		console.log(a, b);
// 	}
// };

// qSort();
