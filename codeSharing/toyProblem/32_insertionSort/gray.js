var testingTransform = function (array) {
	var transform = [];

	for (var i = 0; i < array.length; i++)
		transform.push({ value: array[i], i: i });

	return transform;
};

const copyObj = (obj) => {
	let copy = {};
	for (let key in obj) {
		if (typeof obj[key] == 'object' && obj[key] != null)
			copy[key] = copyObj(obj[key]);
		else if (Array.isArray(obj[key])) copy[key] = copyArr(obj[key]);
		else copy[key] = obj[key];
	}
	return copy;
};

const copyArr = (arr) => {
	const tmp = [];
	for (let val of arr) {
		if (Array.isArray(val)) {
			tmp.push(copyArr(val));
		} else if (typeof val === 'object') {
			tmp.push(copyObj(val));
		} else {
			tmp.push(val);
		}
	}
	return tmp;
};

const swap = (arr, i, j) => {
	let tmp;
	if (typeof arr[i] === 'object' && typeof arr[j] === 'object') {
		tmp = copyObj(arr[i]);
		arr[i] = copyObj(arr[j]);
		arr[j] = tmp;
	} else {
		tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = arr[i];
	}
};

const doubleLoop = (array, flag, callback) => {
	if (!flag) {
		for (let i = 1; i < array.length; i++) {
			let tmpObj = copyObj(array[i]);
			let j = i - 1;

			while (j >= 0 && array[j].value > tmpObj.value) {
				array[j + 1] = copyObj(array[j]);
				j--;
			}
			array[j + 1] = tmpObj;
		}
	} else {
		for (let i = 1; i < array.length; i++) {
			let tmpObj = typeof array[i] === 'object' ? copyObj(array[i]) : array[i];
			let j = i - 1;

			while (j >= 0 && callback(tmpObj, array[j]) < 0) {
				array[j + 1] =
					typeof array[j] === 'object' ? copyObj(array[j]) : array[j];
				j--;
			}
			array[j + 1] = tmpObj;
		}
	}
};

var insertionSort = function (array, compareNumbers) {
	// TODO: 코드를 여기에 작성합니다.
	if (typeof compareNumbers !== 'function') {
		doubleLoop(array, false);
	} else {
		doubleLoop(array, true, compareNumbers);
	}
	return array;
};

module.exports = insertionSort;
