const findSmallest = (arr) => {
    let smallest = arr[0];
    let smallestIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        } 
    }
    return smallestIndex;
}

// Till here, one for loop => O(n);

const selectionSort = (arr) => {
    let newArr = [];
    const solidArr = [...arr]
    for (let i = 0; i < solidArr.length; i++) {
        let smallest = findSmallest(arr);
        newArr.push(arr[smallest]);
        arr.splice(smallest, 1);
    }
    return newArr; 
}

// Till here, two for loops => O(n*n) => O(n^2)