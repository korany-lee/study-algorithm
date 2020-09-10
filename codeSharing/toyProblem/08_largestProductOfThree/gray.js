const largestProductOfThree = function (array) {
	// TODO: Your code here!
	// 경우의 수는 양수만 3개 혹은 음수 2개 + 양수 한개.
	// 거른 뒤 값비교해서 맥스만 리턴
	const tmpArr = [...array].sort((a, b) => b - a);
	const [smaller, smallest] = [
		tmpArr[tmpArr.length - 2],
		tmpArr[tmpArr.length - 1],
	];

	tmpArr.length = 3;
	const largest = [...tmpArr];

	return Math.max(
		largest.reduce((a, c) => a * c),
		tmpArr[0] * smaller * smallest
	);
};

module.exports = largestProductOfThree;

/*
const largestProductOfThree = function(array) {
  // TODO: Your code here!
  if ( array.length === 3 ) {
    return array.reduce((a,c)=>(a*c));
  }

  const isPositive = (x) => ( x >= 0 );
  const isNegative = (x) => ( x < 0 );
  const decreaseSort = (a, b) => ( b - a );
  const absDecreaseSort = (a, b) => ( Math.abs(b) - Math.abs(a) );
  const multipleAll = (a, c) => ( a * c );
  
  const tmpArr = array.sort(absDecreaseSort);
  if ( array.every(isPositive) ) {
    tmpArr.length = 3;
    return tmpArr.reduce(multipleAll);
  } else if ( array.every(isNegative) ) {
    let result = tmpArr.reverse();
    result.length = 3;
    return result.reduce(multipleAll);
  } else {
    let result, isMax, tmp, count = 3;

    do {
      isMax = false;
      result = [...tmpArr];
      result.length = count;
      tmp = result.filter(isNegative);
      if ( tmp.length === 2 && !tmp.includes(-1) ) {
        isMax = true;
      }
      count++;
    } while( !isMax && count < 6 )

    if ( isMax ) {
      [first, second, ...tmp] = tmp;
      third = result.filter(isPositive)[0];
      result = [first, second, third];
    } else {
      result = tmpArr.filter(isPositive);
      result.length = 3;
    }

    let num = array.filter(isPositive);
    num.length = 3;
    num = num.reduce(multipleAll);
    result = result.reduce(multipleAll)

    return Math.max(num, result);
  }
};
*/

/**
const largestProductOfThree = function(array) {
  // TODO: Your code here!
  if ( array.length === 3 ) {
    return array.reduce((a,c)=>(a*c));
  }
  
  const tmpArr = [...array].sort((a, b)=>(Math.abs(b)-Math.abs(a)));

  if ( array.every(x=> x >= 0) ) {
    return tmpArr[0] * tmpArr[1] * tmpArr[3];
  } else if ( array.every(x=> x < 0) ) {
    return tmpArr[tmpArr.length-1] * tmpArr[tmpArr.length-2] * tmpArr[tmpArr.length-3];
  } else {
    let result = [...tmpArr];

    if ( result.length > 5 ) {
      result.length = 5;
    } else if ( result.length > 4 ) {
      result.length = 4;
    } else if ( result.length > 3 ) {
      result.length = 3;
    }

    if ( result.every(x=>x>=0) ) {
      return result[0] * result[1] * result[2];
    } else {
      const [first, second, ...others] = tmpArr.filter(x=>x<0);
      const third = tmpArr.filter(x=>x>=0)[0];
      return first * second * third;
    }
};

 */

/**
const largestProductOfThree = function(array) {
  // TODO: Your code here!
  const tmpArr = [...array].sort((a, b)=>(Math.abs(b)-Math.abs(a)));
  let result;

  if ( array.every(x=> x>=0) ) {
    result = [...tmpArr];
  } else if ( array.every(x=> x< 0) ) {
    result = tmpArr.reverse();
  } else {
    let first, second, third, isMax, count = 3;

    do {
      isMax = false;
      result = [...tmpArr];
      result.length = count;
      if ( result.filter(x=> x<0).length === 2 ) {
        isMax = true;
      }
      count++;
    } while( !isMax && count < 6 )

    if ( isMax ) {
      [first, second] = result.filter(x=>x<0);
      third = result.filter(x=>x>=0)[0];
      result = [first, second, third];
    } else {
      result = tmpArr.filter(x=>x>0);
    }
  }

  result.length = 3;
  
  return result.reduce((max, cur)=>(max * cur));
}
 */

/**
const largestProductOfThree = function(array) {
  // TODO: Your code here!
  let tmpArr = [...array];
  if ( array.length === array.filter(x=>x>=0).length ) {
    tmpArr = tmpArr.sort((a,b)=>(b-a));
    tmpArr.length = 3;
    return tmpArr.reduce((m,c)=>(m*c), 1);
  }

  const result = [];
  let first, second, third;
  for ( let i = 0; i < tmpArr.length - 2; i++ ) {
    first = tmpArr[i];
    for ( let j = i+1; j < tmpArr.length - 1; j++ ) {
      second = tmpArr[j];
      for ( let k = j+1; k < tmpArr.length; k++ ) {
        third = tmpArr[k];
        result.push(first * second * third);
      }
    }
  }
  
  return result.reduce((max, cur)=>(Math.max(max, cur)));
}
 */

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
