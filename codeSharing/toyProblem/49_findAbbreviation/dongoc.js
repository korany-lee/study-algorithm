function findAbbreviation(strA, strB) {
	let temp = "";
	let copyB = strB;

	for (let i = 0; i < strA.length; i++) {
		if (!copyB.length) break;
		if (strA[i].toUpperCase() === copyB[0]) {
			copyB = copyB.slice(1);
			temp += strA[i].toUpperCase();
		} else if (strA.charCodeAt(i) >= 65 && strA.charCodeAt(i) <= 90) {
			return false;
		}
	}
	return temp === strB;
}
