const powerSet = function (str) {
	// TODO: Your code here!
	const setStr = [...new Set(str.split(''))].sort();
	let states = new Array(str.length).fill(false);

	const resultOfPowerSet = (arr, states, index) => {
		let result = [];
		if (index === setStr.length) {
			for (let i = 0; i < setStr.length; i++) {
				if (states[i]) {
					result.push(setStr[i]);
				}
			}
			return result.sort().join('');
		}

		states[index] = false;
		result = result.concat(resultOfPowerSet(setStr, states, index + 1));

		states[index] = true;
		result = result.concat(resultOfPowerSet(setStr, states, index + 1));

		return [...new Set(result)];
	};

	return resultOfPowerSet(setStr, states, 0);
};

module.exports = powerSet;

/**
// 다시풀기
  if ( str.length === 0 ) {
    return str;
  }
  const max = Math.pow(2, str.length);
  const setStr = [...new Set(str.split(''))].sort();
  let tmpStr = [...setStr];
  let result = ['', ...setStr, str];
  

  do {
    const [first, ...others] = tmpStr;

    for ( let i = 0; i < others.length; i++ ) {
      result.push(first + others[i]);
      result.push(first + others[i]+(others[i+1] === undefined ? '' : others[i+1]));
      result.push(first + (others[i] === undefined ? '' : others[i]) + (others[i+2] === undefined ? '' : others[i+2]));
    }
    tmpStr.shift();
    result = [...new Set(result)].map(x=>x.split('').sort().join('')).sort();

  } while ( tmpStr.length > 0 )
  
  return result;
 */
