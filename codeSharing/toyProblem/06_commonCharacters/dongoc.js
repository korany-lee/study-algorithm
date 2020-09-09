const commonCharacters = function (string1, string2) {
	let args = [...arguments].map((string) =>
		string.split(' ').join('').split('')
	);
	let [first, ...rest] = args;
	first = [...new Set(first)];
	return first
		.filter((letter) => rest.every((string) => string.includes(letter)))
		.join('');
};
module.exports = commonCharacters;

// 재귀!로도 풀어보기

/*
const commonCharacters = function(string1, string2) {
  let args = [...arguments].map(string => string.split(' ').join('').split(''));
  let objs = args.map(arr => arr.reduce((a, c) => {
    if (a[c] === undefined) a[c] = 1;
    return a;
  }, {}))
  let commonCount = {};
  objs.forEach(el => {
    for (let key in el) {
      if (!commonCount[key]) commonCount[key] = 1;
      else commonCount[key]++;
    }
  })
  for (let key in commonCount) {
    if (commonCount[key] !== args.length) {
      delete commonCount[key];
    }
  }
  return Object.keys(commonCount).join('');
};
*/
