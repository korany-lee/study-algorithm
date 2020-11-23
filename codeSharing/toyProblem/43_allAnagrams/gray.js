const swap = (arr, i, j) => {
	const tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
};

const uniq = (arr) => {
	const obj = {};
	const result = [];
	for (let val of arr) {
		if (obj[val] === undefined) {
			obj[val] = 0;
		}
	}
	for (let key in obj) {
		result.push(key);
	}

	return result;
};

let allAnagrams = function (string) {
	// TODO: 여기에 코드를 작성합니다.
	const result = [];
	const tmpArr = string.split("");

	const findAnagrams = (arr, ptr, end) => {
		if (ptr === end) {
			result.push(arr.join(""));
		} else {
			for (let i = ptr; i <= end; i++) {
				swap(arr, ptr, i);
				findAnagrams(arr, ptr + 1, end);
				swap(arr, ptr, i);
			}
		}
	};

	findAnagrams(tmpArr, 0, string.length - 1);
	return uniq(result);
};
