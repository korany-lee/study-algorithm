const characterFrequency = function (string) {
	// TODO: 코드를 여기에 작성합니다.
	const storage = [];
	let index, flag;
	for (let i = 0; i < string.length; i++) {
		flag = true;
		for (let j = 0; j < storage.length; j++) {
			if (string[i] === storage[j][0]) {
				storage[j][1]++;
				flag = false;
				break;
			}
		}
		if (flag) {
			storage.push([string[i], 1]);
		}
	}
	const result = storage.sort((a, b) => {
		if (b[1] - a[1] === 0) {
			return a[0].charCodeAt(0) - b[0].charCodeAt(0);
		}
		return b[1] - a[1];
	});
	return result;
};

module.exports = characterFrequency;
