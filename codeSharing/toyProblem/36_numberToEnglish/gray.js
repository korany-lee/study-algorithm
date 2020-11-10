const numbersToWords = {
	0: 'zero',
	1: 'one',
	2: 'two',
	3: 'three',
	4: 'four',
	5: 'five',
	6: 'six',
	7: 'seven',
	8: 'eight',
	9: 'nine',
	10: 'ten',
	11: 'eleven',
	12: 'twelve',
	13: 'thirteen',
	14: 'fourteen',
	15: 'fifteen',
	16: 'sixteen',
	17: 'seventeen',
	18: 'eighteen',
	19: 'nineteen',
	20: 'twenty',
	30: 'thirty',
	40: 'forty',
	50: 'fifty',
	60: 'sixty',
	70: 'seventy',
	80: 'eighty',
	90: 'ninety',
};

const numbersToPlace = {
	10: 'ten',
	100: 'hundred',
	1000: 'thousand',
	1000000: 'million',
	1000000000: 'billion',
	1000000000000: 'trillion',
	1000000000000000: 'quadrillion',
	1000000000000000000: 'quintillion',
};

const numbersLength = {
	2: numbersToPlace[10],
	3: numbersToPlace[100],
	4: numbersToPlace[1000],
	7: numbersToPlace[1000000],
	10: numbersToPlace[1000000000],
	13: numbersToPlace[1000000000000],
	15: numbersToPlace[1000000000000000],
	19: numbersToPlace[1000000000000000000],
};

const isMatch = (str) => {
	for (let key in numbersToWords) {
		if (key === str) {
			return true;
		}
	}
	return false;
};

const isMatchNTP = (str) => {
	for (let key in numbersToPlace) {
		if (key === str) {
			return true;
		}
	}
	return false;
};

const genStr = (str) => {
	if (isMatch(str)) return numbersToWords[str];
	else if (isMatchNTP(str)) return 'one ' + numbersToPlace[str];
	else if (str.length <= 2)
		return numbersToWords[str[0] + '0'] + '-' + numbersToWords[str[1]];
	else {
		if (str.length <= 3) {
			let [first, ...others] = str.split('');
			others = String(Number(others.join('')));
			first = numbersToWords[first] + ' ' + numbersLength[3];
			others = genStr(others);
			return first + (others === 'zero' ? '' : ' ' + others);
		} else if (str.length < 7) {
			str = str.split('');
			let [first, others] = [str.slice(0, 1), str.slice(1)];
			while (others.length > 3) {
				let tmp = others.shift();
				first.push(tmp);
			}
			first = genStr(first.join(''));
			others = genStr(String(Number(others.join(''))));
			return (
				first + ' ' + numbersLength[4] + (others === 'zero' ? '' : ' ' + others)
			);
		} else {
			str = str.split('');
			let [first, others] = [str.slice(0, 1), str.slice(1)];
			let i = 0,
				j = 0;
			if (str.length < 10) {
				i = 6;
				j = 7;
			} else if (str.length < 13) {
				i = 9;
				j = 10;
			} else if (str.length < 15) {
				i = 12;
				j = 13;
			} else if (str.length < 19) {
				i = 15;
				j = 15;
			}
			while (others.length > i) {
				let tmp = others.shift();
				first.push(tmp);
			}
			first = genStr(first.join(''));
			others = genStr(String(Number(others.join(''))));
			return (
				first + ' ' + numbersLength[j] + (others === 'zero' ? '' : ' ' + others)
			);
		}
	}

	return str;
};

Number.prototype.toEnglish = function () {
	// return my value as english words
	if (this === '') return '';
	let str = String(this).split('');
	let dotPosition = str.lastIndexOf('.');
	let dotStr = '',
		minus = '';

	if (dotPosition !== -1) {
		str = str.slice(0, dotPosition);
		dotStr = str.slice(dotPosition + 1);
	}

	if (str[0] === '-') {
		str.shift();
		minus = 'minus';
	}

	str = str.join('');
	dotStr = dotStr === '' ? '' : dotStr.join('');

	return genStr(str) + (dotStr === '' ? '' : 'and' + genStr(dotStr));
};
