const reference = require("./reference");

const test = (i) => {
  if (i === 1) {
    const func = require("../01_rockPaperScissors/dongoc");

    describe("01_rockPaperScissors", () => {
      let answer = func;
      let ref01 = reference.rockPaperScissors;

      it("1) rockPaperScissors should be a function", () => {
        expect(typeof answer).toBe("function");
      });
      it("2) rockPaperScissors should return an array", () => {
        expect(Array.isArray(answer())).toBe(Array.isArray(ref01()));
      });
      it("3) rockPaperScissors should return an array of arrays", () => {
        expect(Array.isArray(answer()[0])).toBe(Array.isArray(ref01()[0]));
      });
      it("4) rockPaperScissors should contain every throw", () => {
        let expected = [
          ["rock", "rock", "rock"],
          ["rock", "rock", "paper"],
          ["rock", "rock", "scissors"],
          ["rock", "paper", "rock"],
          ["rock", "paper", "paper"],
          ["rock", "paper", "scissors"],
          ["rock", "scissors", "rock"],
          ["rock", "scissors", "paper"],
          ["rock", "scissors", "scissors"],
          ["paper", "rock", "rock"],
          ["paper", "rock", "paper"],
          ["paper", "rock", "scissors"],
          ["paper", "paper", "rock"],
          ["paper", "paper", "paper"],
          ["paper", "paper", "scissors"],
          ["paper", "scissors", "rock"],
          ["paper", "scissors", "paper"],
          ["paper", "scissors", "scissors"],
          ["scissors", "rock", "rock"],
          ["scissors", "rock", "paper"],
          ["scissors", "rock", "scissors"],
          ["scissors", "paper", "rock"],
          ["scissors", "paper", "paper"],
          ["scissors", "paper", "scissors"],
          ["scissors", "scissors", "rock"],
          ["scissors", "scissors", "paper"],
          ["scissors", "scissors", "scissors"],
        ];
        let result = answer();
        expect(result.length).toBe(expected.length);
        let expected_hash = {},
          result_hash = {};
        for (let i = 0; i < expected.length; i++) {
          expected_hash[expected[i].join(":")] = true;
        }
        for (i = 0; i < result.length; i++) {
          result_hash[result[i].join(":")] = true;
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
    const func = require("../02_nonrepeatCharacter/scy");

    describe("02_nonrepeatCharacter", () => {
      let answer = func;
      let ref02 = reference.firstNonRepeatedCharacter;
      let nullValue = null;

      it("1) nonrepeatCharacter should be a function", () => {
        expect(typeof answer).toBe("function");
      });
      it("2) nonrepeatedCharacter should return `null` for empty string", () => {
        expect(answer("")).toBe(nullValue);
      });
      it("3) nonrepeatedCharacter should return `null` for strings that have every character repeated", () => {
        expect(answer("XXXXXXX")).toBe(nullValue);
      });
      it("4) nonrepeatedCharacter should return the first nonrepeated character in the string `AABCAC`", () => {
        expect(answer("AABCAC")).toBe("B");
      });
      it("5) nonrepeatedCharacter should return the first nonrepeating character in the string `ABCA`", () => {
        expect(answer("ABCA")).toBe("B");
      });
      it("6) nonrepeatedCharacter should return the first nonrepeating character in the string `AAAACX`", () => {
        expect(answer("AAAACX")).toBe("C");
      });
      it("7) nonrepeatedCharacter should return the first nonrepeating character in the string `AAAAXC`", () => {
        expect(answer("AAAAXC")).toBe("X");
      });
      it("8) nonrepeatedCharacter should return the first nonrepeating character in the string `AABCABD`", () => {
        expect(answer("AABCABD")).toBe("C");
      });
      it("Compare result with reference", () => {
        expect(answer("AABCABD")).toBe(ref02("AABCABD"));
      });
    });
  }
  if (i === 3) {
    const func = require("../03_isSubsetOf/scy");

    describe("03_isSuubsetOf", () => {
      func();
      let result;

      it("1) isSuubsetOf should be a function", () => {
        expect(typeof Array.prototype.isSubsetOf).toBe("function");
      });
      it("2) isSubsetOf should return a value", () => {
        result = [].isSubsetOf([1, 2, 2]);
        expect(result).toBe(true);
      });
      it("3) isSubsetOf should return true if all of the elements in the first array are in the second", () => {
        result = ["cat", "dog", "cow"].isSubsetOf(["dog", "cow", "fox", "cat"]);
        expect(result).toBe(true);
      });
      it("4) isSubsetOf should return false if not all of the elements in the first array are in the second", () => {
        result = ["cat", "dog", "cow"].isSubsetOf(["dog", "cow", "fox"]);
        expect(result).toBe(false);
      });
      it("5) isSubsetOf should disregard duplicates", () => {
        result = ["cat", "cat", "dog"].isSubsetOf(["cat", "dog"]);
        expect(result).toBe(true);
        result = ["cat", "cat", "dog"].isSubsetOf(["cat"]);
        expect(result).toBe(false);
      });
      it("6) isSubsetOf should disregard order", () => {
        result = ["cat", "dog"].isSubsetOf(["dog", "cat"]);
        expect(result).toBe(true);
      });
    });
  }
  if (i === 4) {
    const func = require("../04_nthFibonacci/scy");

    describe("04_nthFibonacci", () => {
      let answer = func;
      let ref04 = reference.nthFibonacci;

      it("1) nthFibonacci should be a function", () => {
        expect(typeof answer).toBe("function");
      });
      it("2) nthFibonacci should return integers", () => {
        expect(typeof answer(0)).toBe("number");
      });
      it("3) nthFibonacci should handle the base cases with ease", () => {
        expect(answer(0)).toBe(0);
        expect(answer(1)).toBe(1);
      });
      it("4) nthFibonacci should return the nth Fibonacci number for a given n", () => {
        expect(answer(5)).toBe(5);
        expect(answer(10)).toBe(55);
        expect(answer(20)).toBe(6765);
      });
      it("5) nthFibonacci should produce values in linear time", () => {
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
    const func = require("../05_bubbleSort/scy");

    describe("05_bubbleSort", () => {
      let answer = func;
      let ref05 = reference.bubbleSort;

      it("1) bubbleSort should be a function", () => {
        expect(typeof answer).toBe("function");
      });
      it("2) bubbleSort should sort an array numerically", () => {
        let input = [1, 2, 43, 100, 100, 21, 21];
        let expected = [1, 2, 21, 21, 43, 100, 100];
        expect(answer(input)).toStrictEqual(expected);
        expect(answer(input)).toStrictEqual(ref05(input));
      });
      it("3) bubbleSort should sort arrays with decimal numbers", () => {
        let input = [24.7, 24.3, 23, 9, 3, 3, 100, 25, 100];
        let expected = [3, 3, 9, 23, 24.3, 24.7, 25, 100, 100];

        expect(answer(input)).toStrictEqual(expected);
        expect(answer(input)).toStrictEqual(ref05(input));
      });
      it("4) bubbleSort should sort reverse sorted arrays", () => {
        expect(answer([5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5]);
      });
      it("5) bubbleSort should handle presorted arrays", () => {
        expect(answer([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
      });
      it("6) bubbleSort should sort arrays with negative numbers", () => {
        let input = [20, -10, -10.1, 2, 4, 299];
        let expected = [-10.1, -10, 2, 4, 20, 299];

        expect(answer(input)).toStrictEqual(expected);
        expect(answer(input)).toStrictEqual(ref05(input));
      });
      it("7) bubbleSort should not use Array.prototype.sort", () => {
        let input = [20, -10, -10.1, 2, 4, 299];

        expect(answer(input)).toStrictEqual(input.sort((a, b) => a - b));
        expect(answer(input)).toStrictEqual(ref05(input));
      });
    });
  }
  if (i === 6) {
    const func = require("../06_commonCharacters/scy");

    describe("06_commonCharacters", () => {
      let answer = func;
      let ref06 = reference.commonCharacters;

      it("1) commonCharacters should be a function", () => {
        expect(typeof answer).toBe("function");
      });
      it("2) commonCharacters should return something", () => {
        let result = answer("i am a string", "i am also a string");
        expect(result !== null && result !== undefined).toBe(true);
      });
      it("3) commonCharacters should not return an Array", () => {
        let result = answer("vicapow", "wopaciv");
        expect(Array.isArray(result)).toBe(false);
      });
      it("4) commonCharacters should return a string", () => {
        let string1 = "i have made a huge mistake";
        let string2 = "have any of you ever even seen a chicken";
        let result = answer(string1, string2);

        expect(typeof result).toBe("string");
      });
      it("5) commonCharacters should return common characters for simple strings", () => {
        expect(answer("abc", "abc")).toBe("abc");
        expect(answer("ab", "bc")).toBe("b");
      });
      it("6) commonCharacters should return the common characters in the order they appear", () => {
        expect(answer("zyx", "xzy")).toBe("zyx");
      });
      it("7) commonCharacters should return the original string for repeated versions of a characters", () => {
        let result = answer("aeiou", "aaeeiioouu");
        expect(result).toBe("aeiou");
      });
      it('8) commonCharacters should return "" if the first string is ""', () => {
        let result = answer("", "eiauo");
        expect(result).toBe("");
      });
      it("9) commonCharacters should return the common characters for this anagram", () => {
        let string1 = "all boys love fudge";
        let string2 = "boys all love fudge";
        let result = answer(string1, string2);
        expect(result).toBe("alboysvefudg");
      });
      it("9) commonCharacters should return an empty string when comparing two empty strings", () => {
        expect(answer("", "")).toBe("");
      });
      it("10) commonCharacters Extra Credit: should return common characters between more than two strings", () => {
        var result = answer(
          "qwerty",
          "wertyu",
          "ertyui",
          "rtyui",
          "tyuiop",
          "yuiopa"
        );
        expect(result).toBe("y");
      });
    });
  }
  if (i === 7) {
    const Tree = require("../07_treeDFSelect/scy");

    describe("07_treeDFSelect", () => {
      it("1) Tree should exist", () => {
        expect(Tree).toBeTruthy();
      });
      it("2) DFSelect should exist on the Tree prototype", () => {
        expect(Tree.prototype.DFSelect).toBeTruthy();
      });
      it("3) DFSelect should be a function", () => {
        expect(typeof Tree.prototype.DFSelect).toEqual("function");
      });
      it("4) DFSelect should return an array", () => {
        let root = new Tree("root");
        let all = function () {
          return true;
        };
        expect(Array.isArray(root.DFSelect(all))).toEqual(true);
      });
      it("5) DFSelect should return all nodes in the tree if filter always returns true", () => {
        // this filter function should always return all of the nodes
        let all = function () {
          return true;
        };
        // keep a list of all nodes to compare
        // depth: 0
        let root = new Tree(1);
        // depth: 1
        root.addChild(2);
        root.addChild(3);
        // depth: 2
        root.children[0].addChild(4);
        root.children[0].addChild(5);
        root.children[1].addChild(6);
        root.children[1].addChild(7);
        // depth: 3 (sparse)
        root.children[0].children[0].addChild(8);
        root.children[1].children[1].addChild(9);
        let expected = [1, 2, 4, 8, 5, 3, 6, 7, 9];

        // we should expect back all the nodes we added
        let result = root.DFSelect(all);
        expect(result.length).toBeTruthy();
        expect(result).toEqual(expected);
      });
      it("6) DFSelect should return all nodes passing the filter", () => {
        // this filter function should return all true nodes
        let trueFilter = function (value, depth) {
          return value === true;
        };
        // this filter function should return all false nodes
        let falseFilter = function (value, depth) {
          return value === false;
        };
        // keep a list of true and false nodes to compare
        let trueNodes = [],
          falseNodes = [],
          result = null;
        // depth: 0
        let root = new Tree(false);
        falseNodes.push(false);
        // depth: 1
        trueNodes.push(true), root.addChild(true);
        falseNodes.push(false), root.addChild(false);
        // depth: 2
        trueNodes.push(true), root.children[0].addChild(true);
        trueNodes.push(true), root.children[1].addChild(true);
        falseNodes.push(false), root.children[0].addChild(false);
        falseNodes.push(false), root.children[1].addChild(false);
        // depth: 3 (sparse)
        trueNodes.push(true), root.children[0].children[0].addChild(true);
        trueNodes.push(true), root.children[1].children[0].addChild(true);
        falseNodes.push(false), root.children[0].children[1].addChild(false);
        falseNodes.push(false), root.children[1].children[1].addChild(false);

        result = root.DFSelect(trueFilter);
        // we expect back all the `trueNodes` using the `trueFilter`
        expect(result).toStrictEqual(trueNodes);

        result = root.DFSelect(falseFilter);
        // we expect back all the `falseNodes` using the `falseFilter`
        expect(result).toStrictEqual(falseNodes);
      });
      it("7) DFSelect should allow filtering by depth", () => {
        // this filter constructor produces a filter for the specified depth
        let depthFilter = function (filterDepth) {
          return function (node, nodeDepth) {
            return filterDepth == nodeDepth;
          };
        };
        // keep a list of nodes by depth to compare
        let nodeDepths = [],
          deepNodes = [];
        let root = new Tree(0);
        // depth: 0
        nodeDepths.push([0]);
        // depth: 1
        root.addChild(1);
        root.addChild(2);
        nodeDepths.push([1, 2]);
        // depth: 2
        root.children[0].addChild(3);
        root.children[0].addChild(4);
        root.children[1].addChild(5);
        root.children[1].addChild(6);
        nodeDepths.push([3, 4, 5, 6]);
        // depth: 3 (sparse)
        root.children[0].children[0].addChild(7);
        root.children[0].children[0].addChild(8);
        root.children[1].children[0].addChild(9);
        root.children[1].children[0].addChild(10);
        nodeDepths.push([7, 8, 9, 10]);

        expect(root.DFSelect(depthFilter(0))).toStrictEqual(nodeDepths[0]);
        expect(root.DFSelect(depthFilter(1))).toStrictEqual(nodeDepths[1]);
        expect(root.DFSelect(depthFilter(2))).toStrictEqual(nodeDepths[2]);
        expect(root.DFSelect(depthFilter(3))).toStrictEqual(nodeDepths[3]);
      });
    });
  }
  if (i === 8) {
    const func = require("../08_largestProductOfThree/scy");

    describe("08_largestProductOfThree", () => {
      let answer = func;
      let ref08 = reference.largestProductOfThree;

      it("1) largestProductOfThree should exist", () => {
        expect(answer).toBeTruthy();
      });
      it("2) largestProductOfThree should be a function", () => {
        expect(typeof answer).toBe("function");
      });
      it("3) largestProductOfThree should return an integer", () => {
        let result = answer([1, 2, 3]);
        expect(typeof result).toBe("number");
      });
      it("4) largestProductOfThree should handle three positive numbers", () => {
        let result = answer([0, 2, 3]);
        expect(result).toBe(0);
        result = answer([2, 3, 5]);
        expect(result).toBe(30);
        result = answer([7, 5, 3]);
        expect(result).toBe(105);
        result = answer([7, 5, 7]);
        expect(result).toBe(245);
      });
      it("5) largestProductOfThree should handle more than three positive numbers", () => {
        let arrays = [
          [2, 5, 3, 7],
          [11, 7, 5, 3, 2],
          [2, 13, 7, 3, 5, 11],
          [2, 11, 13, 7, 13, 3, 11, 5],
        ];
        let resultOfFunction = [105, 385, 1001, 1859];
        let result;
        for (let i = 0; i < arrays.length; i++) {
          result = answer(arrays[i]);
          expect(result).toBe(resultOfFunction[i]);
        }
      });
      it("6) largestProductOfThree should handle negative numbers", () => {
        let arrays = [
          [2, 3, -11, 7, 5, -13],
          [-31, 41, 34, -37, -17, 29],
          [-50, 20, 30, 5, 40],
        ];
        let resultOfFunction = [1001, 47027, 24000];
        let result;
        for (let i = 0; i < arrays.length; i++) {
          result = answer(arrays[i]);
          expect(result).toBe(resultOfFunction[i]);
        }
      });
      it("7) largestProductOfThree should handle all negative numbers", () => {
        let arrays = [[-5, -4, -3, -2, -1]];
        let resultOfFunction = [-6];
        let result;
        for (let i = 0; i < arrays.length; i++) {
          result = answer(arrays[i]);
          expect(result).toBe(resultOfFunction[i]);
        }
      });
    });
  }
  if (i === 9) {
    const func = require("../09_deepEquality/scy");

    describe("09_deepEquals", () => {
      let answer = func;
      let ref09 = reference.deepEquals;

      it("1) deepEquals() should exist", () => {
        expect(answer).toBeTruthy();
      });
      it("2) deepEquals() should be a function", () => {
        expect(typeof answer).toBe("function");
      });
      it("3) deepEquals() should return a result", () => {
        let result = answer({}, {});
        expect(result).toBeTruthy();
      });
      it("4) deepEquals() should return a boolean", () => {
        let result = answer({}, {});
        expect(typeof result).toBe("boolean");
      });
      it("5) deepEquals() should return true for two empty objects", () => {
        let result = answer({}, {});
        expect(result).toBe(true);
      });
      it("6) deepEquals() should use deep equality", () => {
        let a = { foo: 1 };
        let b = { foo: "1" };
        let result = answer(a, b);
        expect(result).toBe(false);
      });
      it("7) deepEquals() should return true for two objects with the same keys and values", () => {
        let a = { foo: "bar" };
        let b = { foo: "bar" };
        let result = answer(a, b);
        expect(result).toBe(true);
      });
      it("8) deepEquals() should return false for two objects with the same keys and but different values", () => {
        let a = { foo: "bar" };
        let b = { foo: "pow" };
        let result = answer(a, b);
        expect(result).toBe(false);
      });
      it("9) deepEquals() should return false for two objects with different number of keys", () => {
        let a = { foo: "bar" };
        let b = { foo: "bar", biz: "baz" };
        let result = answer(a, b);
        expect(result).toBe(false);
      });
      it("10) deepEquals() should return false for two objects with different number of keys", () => {
        let a = { foo: "bar", biz: "baz" };
        let b = { foo: "bar" };
        let result = answer(a, b);
        expect(result).toBe(false);
      });
      it("11) deepEquals() should return true for similar nested object properties", () => {
        let a = { foo: 1, b: { c: 3 } };
        let b = { foo: 1, b: { c: 3 } };
        let result = answer(a, b);
        expect(result).toBe(true);
      });
      it("12) deepEquals() should return false for dissimilar nested object properties", () => {
        let a = { foo: 1, b: { c: 3 } };
        let b = { foo: 1, b: { c: "potato" } };
        let result = answer(a, b);
        expect(result).toBe(false);
        result = answer(b, a);
        expect(result).toBe(false);
      });
      it("13) deepEquals() should return true for similar excessively nested object properties", () => {
        let a = { foo: 1, b: { c: { d: { e: "potato" } } } };
        let b = { foo: 1, b: { c: { d: { e: "potato" } } } };
        let result = answer(a, b);
        expect(result).toBe(true);

        a = { b: { c: { d: { e: "potato" } } }, foo: 1 };
        b = { foo: 1, b: { c: { d: { e: "potato" } } } };
        result = answer(a, b);
        expect(result).toBe(true);
      });
      it("14) deepEquals() should kill Lannister", () => {
        let a = {
          foo: 1,
          b: {
            c: { d: { e: "potato" }, f: "zzz" },
            k: "wow",
            g: { h: { i: "Lannister" } },
          },
          j: "dongoc killed Lannister!",
        };
        let b = {
          foo: 1,
          b: {
            c: { d: { e: "potato" }, f: "zzz" },
            k: "wow",
            g: { h: { i: "Lannister" } },
          },
          j: "dongoc killed Lannister!",
        };
        let result = answer(a, b);
        expect(result).toBe(true);

        a = {
          foo: 1,
          b: {
            c: { d: { e: "potato" }, f: "zzz" },
            k: "wow",
            g: { h: { i: "Lannister" } },
          },
          j: "dongoc killed Lannister!",
        };
        b = {
          b: {
            c: { d: { e: "potato" }, f: "zzz" },
            g: { h: { i: "Lannister" } },
            k: "wow",
          },
          foo: 1,
          j: "dongoc killed Lannister!",
        };
        result = answer(a, b);
        expect(result).toBe(true);
      });
    });
  }
  if (i === 10) {
    const func = require("../10_rotatedArraySearch/scy");

    describe("10_rotatedArraySearch", () => {
      let answer = func;
      let ref10 = reference.rotatedArraySearch;

      it("1) rotatedArraySearch should exist", () => {
        expect(answer).toBeTruthy();
      });
      it("2) rotatedArraySearch when called on a rotated array and a value that is in the array should return a number", () => {
        expect(typeof answer([3, 4, 5, 2], 4)).toBe("number");
      });
      it("3) rotatedArraySearch when called on a rotated array and a value that is in the array should return the index of that item", () => {
        let result = answer([4, 5, 6, 0, 1, 2, 3], 1);
        expect(result).toEqual(4);
      });
      it("4) rotatedArraySearch when called on a rotated array and a value that is not in the array should return null", () => {
        let result = answer([1, 2, 3], 5);
        expect(result).toBe(null);
      });
      it("5) rotatedArraySearch is same with reference", () => {
        let inputs = [
          [3, 4, 5, 2],
          [4, 5, 6, 0, 1, 2, 3],
          [1, 2, 3],
          [7, 9, 10, 15, 5, 6],
        ];
        let inputNum = [4, 3, 4, 6];
        for (let i = 0; i < inputs.length; i++) {
          expect(answer(inputs[i], inputNum[i])).toEqual(
            ref10(inputs[i], inputNum[i])
          );
        }
      });
    });
  }
  if (i === 11) {
    const func = require("../11_powerSet/scy");

    describe("11_powerSet", () => {
      let answer = func;
      let ref11 = reference.powerSet;

      it("1) powerSet should exist", () => {
        expect(answer).toBeTruthy();
      });
      it("2) powerSet should be a function", () => {
        expect(typeof answer).toBe("function");
      });
      it("3) powerSet should return something", () => {
        let result = answer("a");
        expect(result).toBeTruthy();
      });
      it("4) powerSet should return an array", () => {
        let result = answer("a");
        expect(Array.isArray(result)).toEqual(true);
      });
      it("5) powerSet should contain the original set", () => {
        let result = answer("a");
        expect(result.includes("a")).toEqual(true);
      });
      it("6) powerSet should produce a set with the original set plus sub sets", () => {
        let result = answer("ab");
        expect(result.includes("ab")).toEqual(true);
        expect(result.includes("a")).toEqual(true);
        expect(result.includes("b")).toEqual(true);
      });
      it("7) powerSet should work for sets of length 3", () => {
        // recall that with sets, order doesn't matter (if order did matter, it
        // wouldn't be called a `set`.) so the set 'abc' is equivalent to 'bca',
        // 'cba', etc. this allows us to do `sortSet('abc') === sortSet('bca')` to
        // easily test set equality. With that in mind, we'll just sort
        // ahead of time each set we get back from `powerSet()`
        let sortSet = function (set) {
          // takes a set like 'bca' or 'cba' and returns 'abc'
          return set.split("").sort().join("");
        };
        // `result` is the power set of `"fun"`
        let result = answer("fun");
        // sort each set in the power set
        for (let i = 0; i < result.length; i++) {
          result[i] = sortSet(result[i]);
        }
        // should include all the original characters
        expect(
          result.includes("f") && result.includes("u") && result.includes("n")
        ).toEqual(true);
        // should include all sub sets of length 2
        expect(
          result.includes("fu") &&
            result.includes("nu") &&
            result.includes("fn")
        ).toEqual(true);
        // should include the original set
        expect(result.includes(sortSet("fun"))).toEqual(true);
      });
      it("8) powerSet should contain the original set for larger sets", () => {
        // takes a set like 'bca' or 'cba' and returns 'abc'
        let sortSet = function (set) {
          return set.split("").sort().join("");
        };
        // `result` is the power set of `"jump"`
        let result = answer("jump");
        // sort each set in the power set
        for (let i = 0; i < result.length; i++) {
          result[i] = sortSet(result[i]);
        }
        // should include all sub sets of length 1 (aka, all the original characters)
        expect(result.includes("j")).toEqual(true);
        expect(result.includes("u")).toEqual(true);
        expect(result.includes("m")).toEqual(true);
        expect(result.includes("p")).toEqual(true);
        // should include all sub sets of length 2
        expect(result.includes(sortSet("ju"))).toEqual(true);
        expect(result.includes(sortSet("jm"))).toEqual(true);
        expect(result.includes(sortSet("jp"))).toEqual(true);
        expect(result.includes(sortSet("um"))).toEqual(true);
        expect(result.includes(sortSet("up"))).toEqual(true);
        expect(result.includes(sortSet("mp"))).toEqual(true);
        // should include all sub sets of length 3
        expect(result.includes(sortSet("jum"))).toEqual(true);
        expect(result.includes(sortSet("jup"))).toEqual(true);
        expect(result.includes(sortSet("jmp"))).toEqual(true);
        expect(result.includes(sortSet("ump"))).toEqual(true);
        // should include the original set
        expect(result.includes(sortSet("jump"))).toEqual(true);
      });
      it("9) powerSet should remove duplicates from the original set", () => {
        // you're doing awesome! This test is more of a caveat of the fact that we're
        // using strings to store our sets but by definition, each element in a
        // set must be unique. because of this, you should remove duplicate items
        // from the original set. said another way, the power set of 'bbbaaa'
        // should be the same as the power set of 'ab'.

        // takes a set like 'bca' or 'cba' and returns 'abc'
        let sortSet = function (set) {
          return set.split("").sort().join("");
        };
        // `result` is the power set of `"bbbaaa"`
        let result = answer("bbbaaa");
        // sort each set in the power set
        for (let i = 0; i < result.length; i++) {
          result[i] = sortSet(result[i]);
        }
        expect(result.includes("aa")).toEqual(false);
        expect(result.includes("aaa")).toEqual(false);
        expect(result.includes("bb")).toEqual(false);
        expect(result.includes("bbb")).toEqual(false);
        expect(result.includes("a")).toEqual(true);
        expect(result.includes("b")).toEqual(true);
        expect(result.includes("ab")).toEqual(true);
      });
      it("10) powerSet should include the empty set", () => {
        // holly cannoli batman! you're kicking so much ass!! you've gotten through
        // almost all the tests!! this is the last one, I promise. we saved this
        // one for last because it's sort of lame but... _technically_, the power
        // set, by definition, includes the empty set.
        // to quote Wikipedia:
        // > "In mathematics, the power set (or powerset) of any set S, [...] is
        // > the set of all subsets of S, including the empty set and S itself."
        // > -- http://en.wikipedia.org/wiki/Power_set
        expect(answer("lame").includes("")).toEqual(true);
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
