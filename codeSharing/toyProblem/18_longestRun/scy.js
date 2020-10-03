const longestRun = function (string) {
  if (!string.length) return [0, 0];
  const result = { before: string[0], count: 1, start: 0 };
  const cur = { before: string[0], count: 1, start: 0 };

  for (let i = 1; i < string.length; i++) {
    if (string[i] !== cur.before) {
      if (result.count < cur.count) {
        [result.before, result.count, result.start] = [
          cur.before,
          cur.count,
          cur.start,
        ];
      }
      [cur.before, cur.count, cur.start] = [string[i], 1, i];
    } else {
      cur.count++;
    }
  }
  return [result.start, result.start + result.count - 1];
};

// 여러분들을 위해 무작위 문자열 생성기를 제공해 드리겠습니다!
// (해답을 작성하는 데 꼭 필요하진 않지만, 테스트할 때 유용할 것입니다)
var randomString = function (len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
