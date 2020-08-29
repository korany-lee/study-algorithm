function insertionSort4(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) { // 밀어버리자
      if (arr[j] > arr[j + 1]) { 
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp
      } 
      else {
        break;
      }
    }
  }
  return arr;
}