// 헬퍼 함수가 필요하다면 얼마든지 만들어서 사용하세요!
const swap = (arr, i, j) => {
	let tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
};

const bubbleSort = function (array) {
	// TODO: Your code here!
	let length = array.length;
	let flag = false;
	do {
		flag = false;
		for (let j = 1; j < length; j++) {
			if (array[j - 1] > array[j]) {
				swap(array, j - 1, j);
				flag = true;
			}
		}
		length--;
	} while (flag);

	return array;
};

module.exports = bubbleSort;
