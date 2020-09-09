/** @format */

const firstNonRepeatedCharacter = function (string) {
	if (string.length === 0) return null;
	const result = string.split('').reduce((a, b) => {
		if (b in a) {
			a[b]++;
		} else {
			a[b] = 1;
		}
		return a;
	}, {});

	for (let key in result) {
		if (result[key] === 1) {
			return key;
		}
	}
};
module.exports = firstNonRepeatedCharacter;
