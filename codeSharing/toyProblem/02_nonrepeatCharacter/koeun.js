const firstNonRepeatedCharacter = function (string) {
	let [nonCount, nonCharacter, obj] = [1, '', {}];

	if (string === '') {
		return null;
	}
	for (let i = 0; i < string.length; i++) {
		if (!(string[i] in obj)) {
			obj[string[i]] = 1;
		} else {
			obj[string[i]]++;
		}
	}
	for (let key in obj) {
		if (obj[key] === 1) {
			return key;
		}
	}
};
module.exports = firstNonRepeatedCharacter;
