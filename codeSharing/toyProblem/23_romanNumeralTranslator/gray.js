const DIGIT_VALUES = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
};

const translateRomanNumeral = function (romanNumeral) {
	// TODO: 여기에 코드를 작성합니다.
	if (typeof romanNumeral !== 'string' || romanNumeral === '') {
		return romanNumeral === '' ? 0 : null;
	}

	if (romanNumeral.length === 1) {
		return DIGIT_VALUES[romanNumeral];
	} else {
		let result = 0;
		for (let i = 1; i < romanNumeral.length; i++) {
			let [prev, now] = [romanNumeral[i - 1], romanNumeral[i]];
			if (DIGIT_VALUES[prev] >= DIGIT_VALUES[now]) {
				result += DIGIT_VALUES[prev];
			} else {
				result -= DIGIT_VALUES[prev];
			}
		}
		result += DIGIT_VALUES[romanNumeral[romanNumeral.length - 1]];
		return result;
	}
};
