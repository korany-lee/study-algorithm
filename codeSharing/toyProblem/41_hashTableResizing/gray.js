const copyArr = (arr) => {
	if (arr.length === 0) {
		return;
	}

	const result = [];
	let tmp;

	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			result[i] = copyArr(arr[i]);
		} else {
			result[i] = arr[i];
		}
	}

	return result;
};

let makeHashTable = function () {
	let result = {};
	let storage = [];
	let storageLimit = 4;
	let size = 0;
	result.insert = function (key, value /*...*/) {
		// TODO: 여기에 코드를 작성합니다.
		let tuple = [key, value];
		let index = getIndexBelowMaxForKey(key, storageLimit);
		if (storage[index] === undefined) {
			storage[index] = [tuple];
		} else {
			let flag = true;
			for (let tuple of storage[index]) {
				if (tuple[0] === key) {
					tuple[1] = value;
					flag = false;
				}
			}
			if (flag) {
				storage[index].push(tuple);
			}
		}
		size++;
		if (size >= storageLimit * 0.75) {
			let tmpStorage = copyArr(storage);
			storageLimit *= 2;
			storage = new Array(storageLimit);
			for (let bucket of tmpStorage) {
				if (Array.isArray(bucket)) {
					for (tuple of bucket) {
						index = getIndexBelowMaxForKey(tuple[0], storageLimit);
						if (storage[index] === undefined) {
							storage[index] = [tuple];
						} else {
							storage[index].push(tuple);
						}
					}
				}
			}
		}
	};

	result.retrieve = function (key /*...*/) {
		// TODO: 여기에 코드를 작성합니다.
		const index = getIndexBelowMaxForKey(key, storageLimit);

		if (Array.isArray(storage[index])) {
			if (storage[index].length > 1) {
				for (let tuple of storage[index]) {
					if (tuple[0] === key) {
						return tuple[1];
					}
				}
			} else if (storage[index].length === 1) {
				return storage[index][0][1];
			}
		}

		return null;
	};

	result.remove = function (key /*...*/) {
		// TODO: 여기에 코드를 작성합니다.
		const index = getIndexBelowMaxForKey(key, storageLimit);
		let tmp;

		if (Array.isArray(storage[index])) {
			if (storage[index].length > 2) {
				for (let tuple of storage[index]) {
					if (tuple[0] === key) {
						tmp = tuple[1];
						tuple = null;
					}
				}
				// for ( let i = 0; i < storage[index]; i++ ) {
				//   if ( storage[index][i][0] === key ) {
				//     storage[index][i] = null;
				//     return tmp;
				//   }
				// }
			} else {
				tmp = storage[index][0][1];
				storage[index].length = 0;
			}
			size--;
		}

		if (size <= storageLimit * 0.25 && size >= 8) {
			let tmpStorage = copyArr(storage);
			storageLimit /= 2;
			storage = new Array(storageLimit);
			for (let bucket of tmpStorage) {
				if (Array.isArray(bucket)) {
					for (tuple of bucket) {
						index = getIndexBelowMaxForKey(tuple[0], storageLimit);
						if (storage[index] === undefined) {
							storage[index] = [tuple];
						} else {
							storage[index].push(tuple);
						}
					}
				}
			}
		}
		return tmp;
	};

	return result;
};

// 아래는 '해쉬 함수 (hashing function)' 입니다. 건드리지 않고 사용만 하시면 됩니다.
// 주어진 문자열을 0 과 max - 1 사이에서 골고루 분포된 정수 하나로 변환된 값을 반환합니다.
const getIndexBelowMaxForKey = function (str, max) {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash = (hash << 5) + hash + str.charCodeAt(i);
		hash = hash & hash; // Convert to 32bit integer
		hash = Math.abs(hash);
	}
	return hash % max;
};
