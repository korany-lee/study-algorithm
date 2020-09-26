const gcd = (a, b) => {
	let tmp = b;
	b = a % b;
	a = tmp;
	return b === 0 ? a : gcd(a, b);
};

const toFraction = function (number) {
	// TODO: 코드를 여기에 작성합니다.
	const numArr = String(number).split('.');
	let [front, after] = [numArr[0], numArr[1] ? numArr[1] : '0'];
	const len = after.length;

	if (after === 0) {
		return front + '/1';
	} else {
		front += after;
		after = 10 ** len;
		front = Number(front);
	}

	const gcdForThis = gcd(front, after);

	return `${Math.floor(front / gcdForThis)}/${Math.floor(after / gcdForThis)}`;
};

module.exports = toFraction;

/** 다시짜기
const toFraction = function (number) {
  // TODO: 코드를 여기에 작성합니다.
  let flag = false;
  for ( let i = 1; i < 1000000; i++ ) {
    for ( let j = 1; j < 10; j++ ) {
      if (number*i % j === 0 ) {
        number = number * i;
        flag = true;
        break;
      }
    }
    if (flag) {
      return `${number}/${i}`;
    }
  }
  return `${Math.floor(number*1000000)}/1000000`
};
 */
