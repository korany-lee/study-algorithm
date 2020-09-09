const sum = require('./sum');

test("It's test to run jest as adds 1 + 2 to equal 3", () => {
	expect(sum(1, 2)).toBe(3);
});
