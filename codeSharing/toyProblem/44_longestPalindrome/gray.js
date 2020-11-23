const isPalindrome = (string) => {
	const len =
		string.length % 2 ? Math.floor(string.length / 2) + 1 : string.length / 2;

	for (let i = 0; i < len; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return false;
		}
	}

	return true;
};

let longestPalindrome = function (string) {
	// TODO: 여기에 코드를 작성합니다.
	if (string === "") {
		return "";
	}
	for (let len = string.length - 1; len >= 0; len--) {
		for (let i = 0; i <= string.length - 1 - len; i++) {
			if (string[i] === string[i + len]) {
				if (isPalindrome(string.slice(i, i + len + 1))) {
					return string.slice(i, i + len + 1);
				}
			}
		}
	}
};
