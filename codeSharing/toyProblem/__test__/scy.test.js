const reference = require('./reference');

const test = (i) => {
	if (i === 1) {
		const rockPaperScissors = require('../01_rockPaperScissors/scy');

		describe('01_rockPaperScissors', () => {
			let answer = rockPaperScissors;
			let ref01 = reference.rockPaperScissors;

			it('1) rockPaperScissors should be a function', () => {
				expect(typeof answer).toBe('function');
			});
			it('2) rockPaperScissors should return an array', () => {
				expect(Array.isArray(answer())).toBe(Array.isArray(ref01()));
			});
			it('3) rockPaperScissors should return an array of arrays', () => {
				expect(Array.isArray(answer()[0])).toBe(Array.isArray(ref01()[0]));
			});
			it('4) rockPaperScissors should contain every throw', () => {
				let expected = [
					['rock', 'rock', 'rock'],
					['rock', 'rock', 'paper'],
					['rock', 'rock', 'scissors'],
					['rock', 'paper', 'rock'],
					['rock', 'paper', 'paper'],
					['rock', 'paper', 'scissors'],
					['rock', 'scissors', 'rock'],
					['rock', 'scissors', 'paper'],
					['rock', 'scissors', 'scissors'],
					['paper', 'rock', 'rock'],
					['paper', 'rock', 'paper'],
					['paper', 'rock', 'scissors'],
					['paper', 'paper', 'rock'],
					['paper', 'paper', 'paper'],
					['paper', 'paper', 'scissors'],
					['paper', 'scissors', 'rock'],
					['paper', 'scissors', 'paper'],
					['paper', 'scissors', 'scissors'],
					['scissors', 'rock', 'rock'],
					['scissors', 'rock', 'paper'],
					['scissors', 'rock', 'scissors'],
					['scissors', 'paper', 'rock'],
					['scissors', 'paper', 'paper'],
					['scissors', 'paper', 'scissors'],
					['scissors', 'scissors', 'rock'],
					['scissors', 'scissors', 'paper'],
					['scissors', 'scissors', 'scissors'],
				];
				let result = rockPaperScissors();
				expect(result.length).toBe(expected.length);
				let expected_hash = {},
					result_hash = {};
				for (let i = 0; i < expected.length; i++) {
					expected_hash[expected[i].join(':')] = true;
				}
				for (i = 0; i < result.length; i++) {
					result_hash[result[i].join(':')] = true;
				}
				var expected_keys = Object.keys(expected_hash);
				for (i = 0; i < expected_keys.length; i++) {
					expect(result_hash[expected_keys[i]]).toBe(true);
				}
				var result_keys = Object.keys(result_hash);
				for (i = 0; i < result_keys.length; i++) {
					expect(expected_hash[result_keys[i]]).toBe(true);
				}
			});
			for (let i = 1; i <= 5; i++) {
				it(`EXTRA CREDIT) should return results for rockPaperScissors(${i})`, () => {
					expect(answer(i)).toStrictEqual(ref01(i));
				});
			}
		});
	}
	if (i === 2) {
		const firstNonRepeatedCharacter = require('../02_nonrepeatCharacter/scy');

		describe('02_nonrepeatCharacter', () => {
			let answer = firstNonRepeatedCharacter;
			let ref02 = reference.firstNonRepeatedCharacter;

			it('1) nonrepeatCharacter should be a function', () => {
				expect(typeof answer).toBe('function');
			});
			it('2) nonrepeatedCharacter should return `null` for empty string', () => {
				expect(answer('')).toBe(null || undefined);
			});
			it('3) nonrepeatedCharacter should return `null` for strings that have every character repeated', () => {
				expect(answer('XXXXXXX')).toBe(null || undefined);
			});
			it('4) nonrepeatedCharacter should return the first nonrepeated character in the string `AABCAC`', () => {
				expect(answer('AABCAC')).toBe('B');
			});
			it('5) nonrepeatedCharacter should return the first nonrepeating character in the string `ABCA`', () => {
				expect(answer('ABCA')).toBe('B');
			});
			it('6) nonrepeatedCharacter should return the first nonrepeating character in the string `AAAACX`', () => {
				expect(answer('AAAACX')).toBe('C');
			});
			it('7) nonrepeatedCharacter should return the first nonrepeating character in the string `AAAAXC`', () => {
				expect(answer('AAAAXC')).toBe('X');
			});
			it('8) nonrepeatedCharacter should return the first nonrepeating character in the string `AABCABD`', () => {
				expect(answer('AABCABD')).toBe('C');
			});
			it('Compare result with reference', () => {
				expect(answer('AABCABD')).toBe(ref02('AABCABD'));
			});
		});
	}
	if (i === 3) {
		const scy = require('../03_isSubsetOf/scy');

		describe('03_isSubsetOf', () => {
			scy();
			let result;

			it('1) isSuubsetOf should be a function', () => {
				expect(typeof Array.prototype.isSubsetOf).toBe('function');
			});
			it('2) isSubsetOf should return a value', () => {
				result = [].isSubsetOf([1, 2, 2]);
				expect(result).toBe(true);
			});
			it('3) isSubsetOf should return true if all of the elements in the first array are in the second', () => {
				result = ['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox', 'cat']);
				expect(result).toBe(true);
			});
			it('4) isSubsetOf should return false if not all of the elements in the first array are in the second', () => {
				result = ['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox']);
				expect(result).toBe(false);
			});
			it('5) isSubsetOf should disregard duplicates', () => {
				result = ['cat', 'cat', 'dog'].isSubsetOf(['cat', 'dog']);
				expect(result).toBe(true);
				result = ['cat', 'cat', 'dog'].isSubsetOf(['cat']);
				expect(result).toBe(false);
			});
			it('6) isSubsetOf should disregard order', () => {
				result = ['cat', 'dog'].isSubsetOf(['dog', 'cat']);
				expect(result).toBe(true);
			});
		});
	}
	if (i === 4) {
		const nthFibonacci = require('../04_nthFibonacci/scy');

		describe('04_nthFibonacci', () => {
			let answer = nthFibonacci;
			let ref04 = reference.nthFibonacci;

			it('1) nthFibonacci should be a function', () => {
				expect(typeof answer).toBe('function');
			});
			it('2) nthFibonacci should return integers', () => {
				expect(typeof answer(0)).toBe('number');
			});
			it('3) nthFibonacci should handle the base cases with ease', () => {
				expect(answer(0)).toBe(0);
				expect(answer(1)).toBe(1);
			});
			it('4) nthFibonacci should return the nth Fibonacci number for a given n', () => {
				expect(answer(5)).toBe(5);
				expect(answer(10)).toBe(55);
				expect(answer(20)).toBe(6765);
			});
			it('5) nthFibonacci should produce values in linear time', () => {
				// all this crazyness does it check if your solution is better than
				// the naive, exponential solution.
				let diffs = [],
					start = 0,
					end = 0,
					i = 0,
					max_diff = 100,
					max_dur = 1000,
					init = new Date();

				while (end - start < max_diff && end - init < max_dur) {
					start = new Date();
					answer(i++);
					end = new Date();
					diffs.push(end - start);
				}

				let actual_dur_ratio = diffs[diffs.length - 1] / (end - init);
				// if the computational duration is increasing linearly, the last computation
				// should make up less than 10% of the total computation.

				expect(actual_dur_ratio < 0.1).toBe(true);
			});
			for (let i = 1; i <= 10; i++) {
				it(`EXTRA CREDIT) should return results for nthFibonacci(${i})`, () => {
					expect(answer(i)).toStrictEqual(ref04(i));
				});
			}
		});
	}
	if (i === 5) {
		const bubbleSort = require('../05_bubbleSort/scy');

		describe('05_bubbleSort', () => {
			let answer = bubbleSort;
			let ref05 = reference.bubbleSort;

			it('1) bubbleSort should be a function', () => {
				expect(typeof answer).toBe('function');
			});
			it('2) bubbleSort should sort an array numerically', () => {
				let input = [1, 2, 43, 100, 100, 21, 21];
				let expected = [1, 2, 21, 21, 43, 100, 100];
				expect(answer(input)).toStrictEqual(expected);
				expect(answer(input)).toStrictEqual(ref05(input));
			});
			it('3) bubbleSort should sort arrays with decimal numbers', () => {
				let input = [24.7, 24.3, 23, 9, 3, 3, 100, 25, 100];
				let expected = [3, 3, 9, 23, 24.3, 24.7, 25, 100, 100];

				expect(answer(input)).toStrictEqual(expected);
				expect(answer(input)).toStrictEqual(ref05(input));
			});
			it('4) bubbleSort should sort reverse sorted arrays', () => {
				expect(answer([5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5]);
			});
			it('5) bubbleSort should handle presorted arrays', () => {
				expect(answer([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
			});
			it('6) bubbleSort should sort arrays with negative numbers', () => {
				let input = [20, -10, -10.1, 2, 4, 299];
				let expected = [-10.1, -10, 2, 4, 20, 299];

				expect(answer(input)).toStrictEqual(expected);
				expect(answer(input)).toStrictEqual(ref05(input));
			});
			it('7) bubbleSort should not use Array.prototype.sort', () => {
				let input = [20, -10, -10.1, 2, 4, 299];

				expect(answer(input)).toStrictEqual(input.sort((a, b) => a - b));
				expect(answer(input)).toStrictEqual(ref05(input));
			});
		});
	}
	if (i === 6) {
		const commonCharacters = require('../06_commonCharacters/scy');

		describe('06_commonCharacters', () => {
			let answer = commonCharacters;
			let ref06 = reference.commonCharacters;

			it('1) commonCharacters should be a function', () => {
				expect(typeof answer).toBe('function');
			});
			it('2) commonCharacters should return something', () => {
				let result = answer('i am a string', 'i am also a string');
				expect(result !== null && result !== undefined).toBe(true);
			});
			it('3) commonCharacters should not return an Array', () => {
				let result = answer('vicapow', 'wopaciv');
				expect(Array.isArray(result)).toBe(false);
			});
			it('4) commonCharacters should return a string', () => {
				let string1 = 'i have made a huge mistake';
				let string2 = 'have any of you ever even seen a chicken';
				let result = answer(string1, string2);

				expect(typeof result).toBe('string');
			});
			it('5) commonCharacters should return common characters for simple strings', () => {
				expect(answer('abc', 'abc')).toBe('abc');
				expect(answer('ab', 'bc')).toBe('b');
			});
			it('6) commonCharacters should return the common characters in the order they appear', () => {
				expect(answer('zyx', 'xzy')).toBe('zyx');
			});
			it('7) commonCharacters should return the original string for repeated versions of a characters', () => {
				let result = answer('aeiou', 'aaeeiioouu');
				expect(result).toBe('aeiou');
			});
			it('8) commonCharacters should return "" if the first string is ""', () => {
				let result = answer('', 'eiauo');
				expect(result).toBe('');
			});
			it('9) commonCharacters should return the common characters for this anagram', () => {
				let string1 = 'all boys love fudge';
				let string2 = 'boys all love fudge';
				let result = answer(string1, string2);
				expect(result).toBe('alboysvefudg');
			});
			it('9) commonCharacters should return an empty string when comparing two empty strings', () => {
				expect(answer('', '')).toBe('');
			});
			it('10) commonCharacters Extra Credit: should return common characters between more than two strings', () => {
				var result = answer(
					'qwerty',
					'wertyu',
					'ertyui',
					'rtyui',
					'tyuiop',
					'yuiopa'
				);
				expect(result).toBe('y');
			});
		});
	}
};

const runTest = (from = 1, to = 11) => {
	for (let i = from; i <= to; i++) {
		test(i);
	}
};

const init = () => {
	// You can run all test with 0 or empty as parameter in function runTest
	runTest();

	// Or you can run tests you want using 'from' and 'to'
	// runTest(1, 10); // 1 ~ 10
	// runTest(10, 11); // 10 ~ 11
};

init();
