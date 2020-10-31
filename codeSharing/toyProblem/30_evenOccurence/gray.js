const evenOccurrence = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  const storage = {};
  let tmp;

  for ( let el of arr ) {
    if ( storage[el] === undefined ) {
      storage[el] = [el, 1];
    } else {
      storage[el][1]++;
    }
  }

  for ( let key in storage ) {
    if ( storage[key][1] % 2 === 0 ) {
      return storage[key][0];
    }
  }

  return null;
};
