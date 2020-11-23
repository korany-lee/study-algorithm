function findAbbreviation(strA, strB) {
	// 여기에 코드를 작성합니다.
	const state = new Array(strA.length).fill(false);
	const tmpB = strB.split("");
	const tmpA = strA.split("");
	let result = "";

	// tmpB.map(x=>{tmpObjB[x] = 1});

	for (let i = 0; i < tmpA.length; i++) {
		if (tmpB[0] === undefined) break;

		if (tmpA[i] === tmpB[0]) {
			state[i] = true;
			tmpB.shift();
		} else if (tmpA[i].toUpperCase() === tmpB[0]) {
			tmpA[i] = tmpA[i].toUpperCase();
			state[i] = true;
			tmpB.shift();
		} else if (tmpA[i] === tmpA[i].toUpperCase()) {
			return false;
		}
	}

	for (let i = 0; i < tmpA.length; i++) {
		if (state[i]) {
			result += tmpA[i];
		}
	}

	return result === strB;
}
