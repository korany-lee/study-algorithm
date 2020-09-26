const longestRun = function (string) {
	// TODO: 여기에 코드를 작성합니다.
	// 중복검사를 통해 count를 저장합니다.
	// 이전과 다르면, count = 1이 됩니다
	// 이전과 같으면 count++가 됩니다.
	// 이전과 다르면, 이전까지의 결과를 저장합니다.

	const strArr = string.split('');
	let prev = strArr.slice(0, 1);
	const storage = {};
	let tmpArr = [];

	for (let i = 0; i < strArr.length - 1; i++) {
		if (prev !== strArr[i]) {
			if (storage[prev] === undefined) {
				storage[prev] = [i];
			} else {
				storage[prev].push(i - 1);
			}
			if (storage[strArr[i]] === undefined) {
				storage[strArr[i]] = [i];
			}
		}
		prev = strArr[i];
	}

	for (let key in storage) {
		if (storage[key].length === 2) {
			tmpArr.push(storage[key]);
		}
	}
	let max = 0;
	let result = [0, 0];
	for (let i = 0; i < tmpArr.length; i++) {
		if (tmpArr[i][1] - tmpArr[i][0] > max) {
			[result[0], result[1]] = [tmpArr[i][0], tmpArr[i][1]];
			max = tmpArr[i][1] - tmpArr[i][0];
		}
	}

	return result;
};

// 여러분들을 위해 무작위 문자열 생성기를 제공해 드리겠습니다!
// (해답을 작성하는 데 꼭 필요하진 않지만, 테스트할 때 유용할 것입니다)
var randomString = function (len) {
	var text = '';
	var possible = 'abcdefghijklmnopqrstuvwxyz';

	for (var i = 0; i < len; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}

	return text;
};

module.exports = longestRun;

/**
const longestRun = function(string) {
  // TODO: 여기에 코드를 작성합니다.
  // str을 없애자!
  // 처음글자를 자른다음, 다음 글자가 같으면 계속 이전거에 붙여넣음. 이때, 인덱스는 계속 증가.
  // 다른 경우, 이전에 작업한 게 1보다 큰 경우, 객체에 저장.

  if ( string === '' ) {
    return [0, 0];
  }

  let strArr = string.split(''), index = 0;
  const storage = {};

  while ( index < string.length ) {
    [first, others] = strArr;
    if ( first === others[0] ) {
      first += others.slice(0,1);
    } else {
      if ( !storage.hasOwnProperty(first) ) {
        storage[first] = [index - first.length + 1, index];
      }
    }
    index++;
  }

  const tmpArr = Object.keys(storage);
  let keyOfKeys = tmpArr.reduce( (a,c) => {
    if ( c.length > a.length ) {
      return c;
    }
    return a;
  }, '');

  return storage[keyOfKeys];
};
 */
