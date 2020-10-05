const makeHashTable = function () {
	let result = {};
	let storage = [];
	let storageLimit = 1000;
	result.insert = function (key, value /*...*/) {
		// `insert()` 함수를 구현하세요.
		const tuple = [key, value];
		const index = getIndexBelowMaxForKey(key, storageLimit);

		if (storage[index] === undefined) {
			storage[index] = [tuple];
		} else {
			let flag = true;
			for (let tuples of storage[index]) {
				if (tuples[0] === key) {
					tuples[1] = value;
					flag = false;
					break;
				}
			}
			if (flag) {
				storage[index].push(tuple);
			}
		}
	};

	result.retrieve = function (key /*...*/) {
		// `retrieve()` 함수를 구현하세요.
		const index = getIndexBelowMaxForKey(key, storageLimit);

		if (storage[index] === undefined) {
			return;
		} else {
			for (let tuples of storage[index]) {
				if (tuples[0] === key) {
					return tuples[1];
				}
			}
		}
	};
	result.remove = function (key /*...*/) {
		// `remove()` 함수를 구현하세요.
		const index = getIndexBelowMaxForKey(key, storageLimit);
		if (storage[index] === undefined) {
			return;
		}
		for (let i = 0; storage[index].length; i++) {
			if (storage[index][i][0] === key) {
				const tmpPrev = storage[index].slice(0, i);
				const tmpAfter = storage[index].slice(i + 1);
				storage[index] = tmpPrev.concat(tmpAfter);
			}
		}
	};
	return result;
};

// 이 함수는 "해시 함수" 입니다. 지금은 이 함수에 대해 걱정할 필요가 없습니다.
// 해시 함수는 문자열과 숫자 max를 인자로 받아, 문자열을 0에서 max-1 사이에 분포된 정수로 바꿔 리턴합니다.
const getIndexBelowMaxForKey = function (str, max) {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash = (hash << 5) + hash + str.charCodeAt(i);
		hash = hash & hash; // Convert to 32bit integer
		hash = Math.abs(hash);
	}
	return hash % max;
};
