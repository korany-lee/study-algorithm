const sum = require('./sum');

decribe("It's test to run jest", () => {
	test('adds 1 + 2 to equal 3', () => {
		expect(sum(1, 2)).toBe(3);
	});
});
