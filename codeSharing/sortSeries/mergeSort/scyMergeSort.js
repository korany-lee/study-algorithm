const merge = (leftArr, rightArr) => {
    let result = [];
    let leftIndex = 0, rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] > rightArr[rightIndex]) {
            result.push(rightArr[rightIndex]);
            rightIndex++
        } else {
            result.push(leftArr[leftIndex]);
            leftIndex++;
        }
    }

    if (leftIndex !== leftArr.length) {
        result = result.concat(leftArr.slice(leftIndex));
    } else {
        result = result.concat(rightArr.slice(rightIndex));
    }

    return result;
}

const mergeSort = (arr) => {
    const pivot = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, pivot);
    const rightArr = arr.slice(pivot);

    if (arr.length <= 1) {
        return arr;
    }

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}
