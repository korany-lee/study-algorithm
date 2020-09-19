const powerSet = function (str) {
    let result = [''];
    let letter = '';
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < str.length; j++) {
        if (!result[i].includes(str[j])) { // letter에 같은 단어가 들어가는 것을 방지 ex. 'aa'
          letter = result[i] + str[j];  
          letter = letter.split('').sort().join(''); // 알파벳 순서로 정렬
          if (!result.includes(letter)) { // result에 같은 단어가 들어가는 것을 방지 ex. 'abc', 'bac'
            result.push(letter);
          }
        }
      }
    }
    return result; 
  }