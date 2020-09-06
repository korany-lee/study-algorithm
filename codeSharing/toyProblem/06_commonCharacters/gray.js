const commonCharacters = function (...strings) {
	// TODO: Your code here!
	// exception
	if (strings.length <= 1) {
		return strings;
	}

	let result = [];
	const [first, ...others] = strings;

	// compare first & second element of strings
	const compareStr = others[0].trim().split('');
	const firstArr = first.trim().split('');
	for (let str of firstArr) {
		// str is not blank, is not included in result, and is included in second element of strings
		if (str !== ' ' && !result.includes(str) && compareStr.includes(str)) {
			// then push str to array result
			result.push(str);
		}
	}

	// if the length of string is less than 2, return result as string type
	// else remove the element that was compared with first element, and push result to others
	//   and call this function again
	if (others.length < 2) {
		return result.join('');
	} else {
		others.shift();
		others.push(result.join(''));
		return commonCharacters(...others);
	}
};
