const makeHashTable = function () {
  let result = {};
  let storage = [];
  let storageLimit = 1000;
  result.insert = function (key, value /*...*/) {
    let index = getIndexBelowMaxForKey(key, storageLimit);
    let bucket = storage[index];
    if (!bucket) {
      storage[index] = [[key, value]];
    } else if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket[i][1] = value;
          return;
        }
      }
      storage[index].push([key, value]);
    }
  };

  result.retrieve = function (value /*...*/) {
    let index = getIndexBelowMaxForKey(value, storageLimit);
    let bucket = storage[index];
    if (!bucket) return undefined;

    for (let tuple of bucket) {
      if (tuple[0] === value) {
        return tuple[1];
      }
    }
  };

  result.remove = function (value /*...*/) {
    let index = getIndexBelowMaxForKey(value, storageLimit);
    let bucket = storage[index];
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === value) {
        bucket.splice(i, 1);
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
