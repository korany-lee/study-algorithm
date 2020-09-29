const longestRun = function (string) {
  let obj = {};
  if (string.length === 0) return [0, 0];

  for (let i = 0; i < string.length; i++) {
    //{a: 1, b: 3, c: 2}
    if (obj[string[i]] === undefined) {
      obj[string[i]] = 1;
    } else {
      obj[string[i]]++;
    }
  }
  let max = Math.max(...Object.values(obj)); //3
  let maxStr;
  for (let key in obj) {
    if (obj[key] === max) {
      maxStr = key;
      if (maxStr) {
        break;
      }
    }
  }
  let result = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === maxStr) {
      result.push(i);
    }
  }
  let final = [];
  final.push(result[0]);
  final.push(result[result.length - 1]);
  return final;
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
