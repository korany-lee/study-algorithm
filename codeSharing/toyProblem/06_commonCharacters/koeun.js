const commonCharacters = function (string1, string2) {
	let [first, ...args] = [...arguments];
	let [arr1, arr2, result] = [first, args[0], []];

	while (args.length !== 0) {
		result = testCommon(arr1, arr2);
		args.shift();
		[arr1, arr2] = [result, args[0]];
	}
	return result
		.reduce(function (a, b) {
			if (a.indexOf(b) < 0) a.push(b);
			return a;
		}, [])
		.join('');
};

function testCommon(a, b) {
	let temp = [];
	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < b.length; j++) {
			if (a[i] === b[j] && a[i] !== ' ') {
				temp.push(a[i]);
			}
		}
	}
	return temp;
}
module.exports = commonCharacters;
