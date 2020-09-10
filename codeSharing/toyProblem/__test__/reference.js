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
	largestProductOfThree: function (array) {
		/* START SOLUTION */
		// Make a copy of the input array and sort it numerically
		array = array.slice().sort((a, b) => a - b);

		var secondFromLast = array[array.length - 2],
			thirdFromLast = array[array.length - 3];

		return Math.max(
			array[array.length - 1] * secondFromLast * thirdFromLast,
			array[array.length - 1] * array[0] * array[1]
		);

		/* ELSE
		// TODO: everything
		END SOLUTION */
	},
	deepEquals: function (apple, orange) {
		/* START SOLUTION */
		if (apple === orange) {
			return true;
		}
		if ((apple && !orange) || (!apple && orange)) {
			return false;
		}
		if (!(apple instanceof Object) || !(orange instanceof Object)) {
			return false;
		}
		var appleKeys = Object.keys(apple);
		var orangeKeys = Object.keys(orange);
		if (appleKeys.length !== orangeKeys.length) {
			return false;
		}
		if (appleKeys.length === 0) {
			return true;
		} // two empty objects are equal
		for (var i = 0; i < appleKeys.length; i++) {
			if (!deepEquals(apple[appleKeys[i]], orange[appleKeys[i]])) {
				return false;
			}
		}
		return true;
		/* END SOLUTION */
	},
	rotatedArraySearch: function (rotated, target) {
		// Your code here:
		/* START SOLUTION */
		var left = 0,
			right = rotated.length - 1;

		// Just a straight binary search.
		while (left <= right) {
			var middle = Math.floor((right + left) / 2);

			// We have found our target.
			if (rotated[middle] === target) {
				return middle;
			}

			// The clever part starts here:
			if (rotated[left] <= rotated[middle]) {
				// If the middle element is greater than the element to the left
				// of it, then that means that the bottom half is strictly increasing
				// from left to middle, i.e. it is sorted and we can just do a normal
				// binary search.

				// Is the target in this range?
				if (rotated[left] <= target && target < rotated[middle]) {
					// 'recurse' down this side
					right = middle - 1;
				} else {
					// 'recurse' down the other side
					left = middle + 1;
				}
			} else {
				// This means that the *top* half must be sorted, because
				// there can only be one place in the entire array where
				// the order is not sorted, and it's on the bottom half.

				if (rotated[middle] < target && target <= rotated[right]) {
					// 'recurse' down this side
					left = middle + 1;
				} else {
					// 'recurse' down the other side
					right = middle - 1;
				}
			}
		}

		// If we got here, that means that the target is not in the array, so:
		return null;
		/* END SOLUTION */
	},
	powerSet: function (str) {
		/* START SOLUTION */
		var set = [];
		var hash = {};
		if (!str) str = '';
		str = str.split('').sort();

		// remove duplicates
		for (var i = 1; i < str.length; i++) {
			if (str[i - 1] === str[i]) {
				str.splice(i, 1);
				i--;
			}
		}

		// recursive through the sub sets
		function recurse(strSet) {
			var joined = strSet.join('');

			// check if we have visited this combo
			if (hash[joined]) return;
			hash[joined] = true;
			set.push(joined);

			// don't recurse to empty set - add it once at the end
			if (strSet.length === 1) return;

			// recurse all subsets
			for (var i = 0; i < strSet.length; i++) {
				var subSet = strSet.slice(0, i).concat(strSet.slice(i + 1));
				recurse(subSet);
			}
		}
		recurse(str);
		set.push(''); // the power set, by definition, includes the empty set

		return set;
		/* END SOLUTION */
	},
};

module.exports = reference;
