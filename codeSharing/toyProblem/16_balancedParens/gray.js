const balancedParens = function (input) {
	// TODO: your solution here
	if (input === '') {
		return true;
	}

	let stack = [];
	for (let i = 0; i < input.length; i++) {
		if (input[i] === '(' || input[i] === '{' || input[i] === '[') {
			stack.push(input[i]);
		}
		if (input[i] === ')') {
			if (stack.pop() !== '(') {
				return false;
			}
		} else if (input[i] === '}') {
			if (stack.pop() !== '{') {
				return false;
			}
		} else if (input[i] === ']') {
			if (stack.pop() !== '[') {
				return false;
			}
		}
	}

	return stack.length === 0;
};

module.exports = balancedParens;
