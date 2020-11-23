let makeHashTable = function () {
	let result = {};
	result.storage = [];
	result.storageLimit = 4;
	result.size = 0;

	result.insert = function (key, value /*...*/) {
		// TODO: 여기에 코드를 작성합니다.
		let index = getIndexBelowMaxForKey(key, result.storageLimit);
		let bucket = result.storage[index] || [];
		let flag = false;

		for (let tuple of bucket) {
			if (tuple[0] === key) {
				tuple[1] = value;
				flag = true;
			}
		}
		if (!flag) {
			let tuple = [key, value];
			bucket.push(tuple);
		}

		result.storage[index] = bucket;
		result.size++;

		if (result.size >= result.storageLimit * 0.75) {
			result.resize(result.storageLimit * 2);
		}
	};

	result.retrieve = function (key /*...*/) {
		// TODO: 여기에 코드를 작성합니다.
		let index = getIndexBelowMaxForKey(key, result.storageLimit);
		if (result.storage[index]) {
			let bucket = result.storage[index];
			let selected = bucket.filter((tuple) => tuple[0] === key);
			return selected[0][1];
		}
	};

	result.remove = function (key /*...*/) {
		// TODO: 여기에 코드를 작성합니다.
		let index = getIndexBelowMaxForKey(key, result.storageLimit);
		if (result.storage[index]) {
			delete result.storage[index];
			result.size--;
		}

		if (result.size <= result.storageLimit * 0.25) {
			result.resize(result.storageLimit / 2);
		}
	};

	result.resize = function (newStorageLimit) {
		let originLimit = result.storageLimit;
		result.storageLimit = newStorageLimit;

		let originStorage = result.storage;
		result.storage = [];

		result.size = 0;

		for (let bucket of originStorage) {
			if (bucket) {
				for (let tuple of bucket) {
					result.insert(tuple[0], tuple[1]);
				}
			}
		}
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
