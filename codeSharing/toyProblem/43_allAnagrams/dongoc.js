let allAnagrams = function (string) {
	if (string.length < 2) return [string];

	let result = [];

	for (let i = 0; i < string.length; i++) {
		let letter = string[i];

		let slicedStr = string.slice(0, i) + string.slice(i + 1);
		let other = allAnagrams(slicedStr);

		for (let j = 0; j < other.length; j++) {
			result.push(letter + other[j]);
		}
	}
	return [...new Set(result)];
};
