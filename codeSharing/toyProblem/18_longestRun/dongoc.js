const longestRun = function(string) {
    if (!string.length) return [0, 0];
    let letterCount = string.split('').reduce((obj, key) => {
      !obj[key] ? obj[key] = 1 : obj[key]++;
      return obj;
    }, {})
    for (let i = 0; i < Object.keys(letterCount).length - 1; i++) {
      let cur = Object.keys(letterCount)[i]
      let next = Object.keys(letterCount)[i + 1]
      if (letterCount[cur] < letterCount[next]) { // if문 자체를 안 들어가는 거 같은데?
        delete letterCount[cur]; 
      }
    }
    let longest = Object.keys(letterCount)[0];
    return [string.indexOf(longest), string.lastIndexOf(longest)];
  };
  
  // 여러분들을 위해 무작위 문자열 생성기를 제공해 드리겠습니다!
  // (해답을 작성하는 데 꼭 필요하진 않지만, 테스트할 때 유용할 것입니다)
  var randomString = function(len) {
    var text = '';
    var possible = 'abcdefghijklmnopqrstuvwxyz';
  
    for (var i = 0; i < len; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  
    return text;
  };
  
  
  /* first try
  const longestRun = function(string) {
    let letters = string.split('').reduce((obj,key) => {
      !obj[key] ? obj[key] = 1 : obj[key]++;
      return obj;
    }, {})
    for (let i = 0; i < Object.keys(letters).length - 1; i++) {
      if (letters[Object.keys(letters)[i]] < letters[Object.keys(letters)[i + 1]]) {
        delete letters[Object.keys(letters)[i]];
      }
    }
    let largest = letters[Object.keys(letters)[0]]
    return [string.indexOf(largest), string.lastIndexOf(largest)];
  };
  */