const firstNonRepeatedCharacter = function (string) {
	// TODO: Your code here!
	let tmpArr = string.split('');
	let obj = {};
	let result = [];

	// 객체에 str의 모든 글자마다 카운팅
	for (let key of tmpArr) {
		if (key in obj === false) {
			obj[key] = 0;
		}
		obj[key]++;
	}

	// 카운트가 1인 것만 걸러줌
	for (let key in obj) {
		if (obj[key] === 1) {
			result.push(key);
		}
	}

	// result가 없으면 return null
	if (result.length === 0) {
		return null;
	}

	// 카운트가 1인 친구들의 인덱스를 찾음
	result = result.map((x) => tmpArr.indexOf(x));

	// 인덱스가 가장 빠른 친구를 리턴
	return tmpArr[Math.min(...result)];
};

module.exports = firstNonRepeatedCharacter;
