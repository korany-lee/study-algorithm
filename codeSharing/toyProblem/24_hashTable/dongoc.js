const makeHashTable = function () {
  let result = {};
  let storage = [];
  let storageLimit = 1000;

  result.insert = function (key, value) {
    let index = getIndexBelowMaxForKey(key, this.storageLimit);
    if (!storage[index]) {
      storage[index] = [[key, value]];
    } else {
      let flag = false; // 덮어씌울 key가 있는가?
      for (let tuple of storage[index]) {
        if (tuple[0] === key) {
          tuple[1] = value;
          flag = true;
        }
      }
      if (!flag) {
        storage[index].push([key, value]);
      }
    }
  };

  result.retrieve = function (key) {
    let index = getIndexBelowMaxForKey(key, this.storageLimit);
    if (!storage[index]) {
      return undefined;
    } else {
      for (let tuple of storage[index]) {
        if (tuple[0] === key) {
          return tuple[1];
        }
      }
      return undefined;
    }
  };
  result.remove = function (key) {
    let index = getIndexBelowMaxForKey(key, this.storageLimit);
    for (let tuple of storage[index]) {
      if (tuple[0] === key) {
        let tupleIndex = storage[index].indexOf(tuple);
        storage[index].splice(tupleIndex, 1);
        break;
      }
    }
  };

  return result;
};

// 이 함수는 "해시 함수" 입니다. 지금은 이 함수에 대해 걱정할 필요가 없습니다.
// 해시 함수는 문자열과 숫자 max를 인자로 받아, 문자열을 0에서 max-1 사이에 분포된 정수로 바꿔 리턴합니다.
const getIndexBelowMaxForKey = function (str, max) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
