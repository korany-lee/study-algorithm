// 키패드 문자열을 제공해 드리겠습니다!
const phoneDigitsToLetters = {
	0: '0',
	1: '1',
	2: 'ABC',
	3: 'DEF',
	4: 'GHI',
	5: 'JKL',
	6: 'MNO',
	7: 'PQRS',
	8: 'TUV',
	9: 'WXYZ',
};

const telephoneWords = function (digitString) {
	// TODO: return every combination that can be spelled on a phone with these digits
	const paramArr = digitString.split('');
	const newArr = [];
	const result = [];
	for (let key of paramArr) {
		newArr.push(phoneDigitsToLetters[key].split(''));
	}
	const [first, ...exceptFirst] = newArr;
	for (let i = 0; i < first.length; i++) {
		const tmp1 = first[i];
		const [second, ...exceptSecond] = exceptFirst;
		for (let j = 0; j < second.length; j++) {
			let tmp2 = tmp1;
			tmp2 += second[j];
			const [third, fourth] = exceptSecond;
			for (let k = 0; k < third.length; k++) {
				let tmp3 = tmp2;
				tmp3 += third[k];
				for (let l = 0; l < fourth.length; l++) {
					let tmp4 = tmp3;
					tmp4 += fourth[l];
					result.push(tmp4);
				}
			}
		}
	}

	return result;
};

let a = ['0002', '1123', '1234', '5987'];

for (let val of a) {
	console.log(telephoneWords(val));
}

/**
const createState = (len) => {
	return new Array(len).fill(true);
};

const telephoneWords = function (digitString) {
	// TODO: return every combination that can be spelled on a phone with these digits
	let tmpStr = [];
	let result = [];
	digitString = digitString.split('');

	for (let val of digitString) {
		for (let key in phoneDigitsToLetters) {
			if (key === val) {
				tmpStr.push(phoneDigitsToLetters[key]);
				break;
			}
		}
	}
	const state = new Array(tmpStr.length);
	for (let i = 0; i < state.length; i++) {
		state[i] = new Array(tmpStr[i].length).fill(false);
	}

	const dfs = (state, i, j, maxJ) => {
		if (i > 4 || j >= maxJ) return;
		if (i === 4 && j < maxJ) {
			let text = [];
			for (let x = 0; x < state.length; x++) {
				for (let y = 0; y < state[x].length; y++) {
					if (state[x][y]) {
						text.push(tmpStr[x][y]);
						break;
					}
				}
			}
			text = text.join('');
			if (text.length === 4 && !result.includes(text)) {
				result.push(text);
			}
			return;
		}
		if (i < 4) {
			state[i][j] = true;
			dfs(state, i + 1, j, maxJ);
			dfs(state, i, j + 1, maxJ);
			state[i][j] = false;
		}
		return;
	};
	const state = new Array(tmpStr.length);
	for (let i = 0; i < state.length; i++) {
		state[i] = new Array(tmpStr[i].length).fill(false);
	}

	const dfs = (state, i, j, maxJ) => {
		if (i > 4 || j >= maxJ) return;
		if (i === 4 && j < maxJ) {
			let text = [];
			for (let x = 0; x < state.length; x++) {
				for (let y = 0; y < state[x].length; y++) {
					if (state[x][y]) {
						text.push(tmpStr[x][y]);
						break;
					}
				}
			}
			text = text.join('');
			if (text.length === 4 && !result.includes(text)) {
				result.push(text);
			}
			return;
		}
		if (i < 4) {
			state[i][j] = true;
			dfs(state, i + 1, j, maxJ);
			dfs(state, i, j + 1, maxJ);
			state[i][j] = false;
		}
		return;
	};

	dfs(state, 0, 0, tmpStr[3].length);
	return result;
};
 */
