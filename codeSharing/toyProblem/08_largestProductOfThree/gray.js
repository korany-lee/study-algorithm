const largestProductOfThree = function (array) {
	// TODO: Your code here!
	let tmpArr = [...array];
	if (array.length === array.filter((x) => x >= 0).length) {
		tmpArr = tmpArr.sort((a, b) => b - a);
		tmpArr.length = 3;
		return tmpArr.reduce((m, c) => m * c, 1);
	}

	const result = [];
	let first, second, third;
	for (let i = 0; i < tmpArr.length - 2; i++) {
		first = tmpArr[i];
		for (let j = i + 1; j < tmpArr.length - 1; j++) {
			second = tmpArr[j];
			for (let k = j + 1; k < tmpArr.length; k++) {
				third = tmpArr[k];
				result.push(first * second * third);
			}
		}
	}

	return result.reduce((max, cur) => Math.max(max, cur));
};

/**
 * use object
const largestProductOfThree = function(array) {
  // TODO: Your code here!
  let tmpArr = [...array];
  if ( array.length === array.filter(x=>x>=0).length ) {
    tmpArr = tmpArr.sort((a,b)=>(b-a));
    tmpArr.length = 3;
    return tmpArr.reduce((m,c)=>(m*c), 1);
  }

  const tmpObj = {};
  let before, beBefore;
  for ( let i = 0; i < tmpArr.length - 2; i++ ) {
    beBefore = tmpArr[i];
    for ( let j = i+1; j < tmpArr.length - 1; j++ ) {
      before = tmpArr[j];
      for ( let k = j+1; k < tmpArr.length; k++ ) {
        if ( tmpObj[`${beBefore * before * tmpArr[k]}`] === undefined ) {
          tmpObj[`${beBefore * before * tmpArr[k]}`] = 0;
        }
        tmpObj[`${beBefore * before * tmpArr[k]}`]++;
      }
    }
  }
  
  return Object.keys(tmpObj).reduce((max, cur)=>(Math.max(max, cur)));
};

 */
