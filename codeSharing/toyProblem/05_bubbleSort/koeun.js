// i를 선언하여, 테스트를 원활하게 할 수 있습니다.
let i;

// 헬퍼 함수가 필요하다면 얼마든지 만들어서 사용하세요!
const sort = function (a, b) {
	return a - b;
};

const bubbleSort = function (array) {
	let temp, j;
	for (i = 0; i < array.length; i++) {
		for (j = 0; j < array.length - 1 - i; j++) {
			if (sort(array[j], array[j + 1]) > 0) {
				temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
};
module.exports = bubbleSort;
