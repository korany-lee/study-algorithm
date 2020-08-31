const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j >= 0; j--) {
            if (arr[j - 1] > arr[j]) {
                swap(arr, j, j - 1);
            } else {
                break;
            }
        }
    }
    return arr;
}