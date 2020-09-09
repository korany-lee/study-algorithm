var i;

var swap = function (index1, index2, array) {
	var temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
	return array;
};

const reference = {
	rockPaperScissors: function (/* START SOLUTION */ rounds /* END SOLUTION */) {
		// TODO: your solution here
		/* START SOLUTION */
		rounds = rounds || 3;
		var outcomes = [];

		var plays = ['rock', 'paper', 'scissors'];

		var combos = function (roundsToGo, playedSoFar) {
			if (roundsToGo === 0) {
				outcomes.push(playedSoFar);
				return;
			}

			for (var i = 0; i < plays.length; i++) {
				var currentPlay = plays[i];
				combos(roundsToGo - 1, playedSoFar.concat(currentPlay));
			}
		};
		combos(rounds, []);

		return outcomes;
		/* END SOLUTION */
	},
	firstNonRepeatedCharacter: function (string) {
		// TODO: your solution here
		/* START SOLUTION */
		var mem = {},
			c;
		for (var i = 0; i < string.length; i++) {
			c = string[i];
			if (!mem[c]) mem[c] = 1;
			else mem[c]++;
		}
		for (i = 0; i < string.length; i++) {
			c = string[i];
			if (mem[c] === 1) return c;
		}
		return null;
		/* END SOLUTION */
	},
	nthFibonacci: function (n) {
		// TODO: implement me!
		/* START SOLUTION */
		// fast solution
		var fibs = [0, 1];
		for (; n > 1; n--) {
			fibs.push(fibs.shift() + fibs[0]);
		}
		return fibs[n];
		/* END SOLUTION */
	},
	bubbleSort: function (array) {
		// Your code here.
		/* START SOLUTION */
		if (!Array.isArray(array)) {
			throw new TypeError('bubbleSort accepts only arrays');
		}

		var len = array.length;

		for (var i = 0; i < len; i++) {
			var swaps = 0;

			// Do j < len - 1 - i iterations so we don't consider the final (sorted)
			// element in the array in future iterations
			for (var j = 0; j < len - 1 - i; j++) {
				if (array[j] > array[j + 1]) {
					swaps++;
					swap(j, j + 1, array);
				}
			}

			// If no swaps were done during this iteration, then the array is sorted
			// and we can bail out
			if (!swaps) {
				break;
			}
		}

		return array;
		/* END SOLUTION */
	},
	commonCharacters: function (string1, string2) {
		// TODO: Your code here!
		/* START SOLUTION */

		// HELPER FUNCTIONS!

		// Given two objects, intersection() uses reduce to create an object with only the common keys
		var intersection = function (set1, set2) {
			return Object.keys(set1).reduce(function (out, val) {
				if (val in set2) {
					out[val] = true;
				}
				return out;
			}, {});
		};

		// Takes a string and makes an object with each  alphabetical character in the string represented by a key with the value 'true'
		var objectify = function (string) {
			return string.split('').reduce(function (obj, char) {
				// this simple regex matches only alphabetical characters of either case
				if (char.match(/[a-z]/i)) {
					obj[char] = true;
				}
				return obj;
			}, {});
		};

		// Separate out multiple input strings
		var otherStrings = Array.prototype.slice.call(arguments, 1);

		// Use reduce to iterate over all collections of letters, narrowing down the pool of common characters.
		// Go look at the helper functions and figure out what they do!
		common = otherStrings.reduce(function (obj, string) {
			obj = intersection(obj, objectify(string));
			return obj;
		}, objectify(string1)); // An object representing all characters in string1 is passed in as a starting value

		// use reduce to create a string representing all common chars in the order seen in string1, and return it!
		return string1.split('').reduce(function (result, char) {
			if (common[char]) {
				result += char;
				common[char] = false;
			}
			return result;
		}, '');
		/* END SOLUTION */
	},
};

module.exports = reference;
