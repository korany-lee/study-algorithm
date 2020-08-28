// create randome arr
function createdRandomArr(range, length) {
  let random = [];
  for (let i = 0; i < length; i++) {
    random.push(Math.floor(Math.random() * (range + 1)))
  }
  return random;
}

const randomArr = createdRandomArr()
// [95, 87, 82, 63, 64, 58, 6, 15, 16, 58, 28, 45, 31, 21, 38, 7, 95, 21, 58, 16, 72]

// slice 버전
function bubbleSort3(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  if (!arr.length) return arr;
  return bubbleSort3(arr.slice(0, arr.length - 1)).concat(arr.slice(-1))
}

const bubbleSort3Output = bubbleSort3(randomArr);

// push pop 버전
function bubbleSort1(arr) {
  let result = [];
  let temp = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  result.unshift(arr.pop());
  if (arr.length === 1) {
    result.unshift(arr.pop());
    return result
  } else {
    return bubbleSort1(arr).concat(result);
  }
}


// for문 버전
function bubbleSort4(arr) {
  for (let i = 0; i < arr.length - 1; i++) { // i로 마지막을 하나씩 포함하지 않게 함
    for (let j = 0; j < arr.length - 1 - i; j++) { // j로 돌기
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
