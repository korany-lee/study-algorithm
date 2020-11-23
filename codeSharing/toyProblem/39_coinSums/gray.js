const makeChange = function (total) {
	const coins = [1, 2, 5, 10, 20, 50, 100, 200];
	let sum = 0;

	const rec = (presentTotal, index) => {
		if (index === 0) {
			if (presentTotal % coins[index] === 0) {
				sum++;
			}
			return;
		}

		while (presentTotal >= 0) {
			rec(presentTotal, index - 1);
			presentTotal -= coins[index];
		}
	};

	rec(total, coins.length - 1);
	return sum;
};
