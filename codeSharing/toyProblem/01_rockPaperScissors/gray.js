const rockPaperScissors = function (n) {
	// TODO: Your code here!
	n = n || 3;

	const possible = [['rock'], ['paper'], ['scissors']],
		max = Math.pow(3, n);
	let result = [...possible],
		tmp = [];

	do {
		possible.forEach((possible) =>
			result.forEach((element) => tmp.push(possible.concat(element)))
		);
		result = [...tmp];
		tmp.length = 0;
	} while (result.length < max);

	return n === 1 ? possible : result;
};

/*
const rockPaperScissors = function (n) {
	// TODO: Your code here!
  n = n || 3;

	const possible = [['rock'], ['paper'], ['scissors']], max = Math.pow(3, n);
  let result = [...possible], tmp = [];

  do {
    possible.forEach( possible => {
      result.forEach( element => {
        tmp.push( possible.concat(element) );
      });
    })
    result = [...tmp];
    tmp.length = 0;

  } while ( result.length < max )


  return n === 1 ? possible : result;
};
*/

/**
const rockPaperScissors = function (n) {
	// TODO: Your code here!
  n = n || 3;

	const possible = [['rock'], ['paper'], ['scissors']], max = Math.pow(3, n);
  let result = [...possible], tmp = [];

  do {
    for ( let i = 0; i < possible.length; i++ ) {
      for ( let j = 0; j < result.length; j++ ) {
        tmp.push(possible[i].concat(result[j]));
      }
    }
    result = [...tmp];
    tmp.length = 0;

  } while ( result.length < max )


  return n === 1 ? possible : result;
};
 */

/**
const rockPaperScissors = function (n) {
	// TODO: Your code here!
	const possible = [['rock'], ['paper'], ['scissors']];
	if (n === 1) {
		return possible;
	}
	n = n || 3;
	const result = [];
	const before = rockPaperScissors(n - 1);

	for (let i = 0; i < possible.length; i++) {
		for (let j = 0; j < before.length; j++) {
			result.push(possible[i].concat(before[j]));
		}
	}

	return result;

};
 */

/**
	const possible = [['rock'], ['paper'], ['scissors']];
	if (n === 1) {
		return possible;
	}
	n = n || 3;
	const result = [];
	const before = rockPaperScissors(n - 1);

	for (let i = 0; i < possible.length; i++) {
		for (let j = 0; j < before.length; j++) {
			result.push(possible[i].concat(before[j]));
		}
	}

	return result;
 */

/**
  const possible = ['rock', 'paper', 'scissors'];
  let tmp = [];
  const result = [];

  for ( let i = 0; i < 3; i++ ) {
    tmp.push(`${i}`+possible[i]);
    for ( let j = 0; j < n; j++ ) {
      tmp.push(`${j}`+possible[j]);
      for ( let k = 0; k < n; k++ ) {
        tmp.push(`${k}`+possible[k]);
        result.push([...tmp]);
        tmp.length--;
      }
      tmp.length--;
    }
    tmp.length--;
  }

  return result;
 */
