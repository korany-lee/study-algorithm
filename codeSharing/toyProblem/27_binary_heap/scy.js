function BinaryHeap() {
  this._heap = [];
  // this compare function will result in a minHeap, use it to make comparisons between nodes in your solution
  this._compare = function (i, j) {
    return i < j;
  };
}

// This function works just fine and shouldn't be modified
BinaryHeap.prototype.getRoot = function () {
  return this._heap[0];
};

BinaryHeap.prototype.swap = function (parentIn, currIn) {
  let temp = this._heap[parentIn];
  this._heap[parentIn] = this._heap[currIn];
  this._heap[currIn] = temp;
};
BinaryHeap.prototype.insert = function (value) {
  // TODO: 여기에 코드를 작성합니다.
  this._heap.push(value);

  let currIn = this._heap.length - 1;
  let parentIn = Math.ceil(currIn / 2) - 1;

  while (this._heap[parentIn] > this._heap[currIn]) {
    this.swap(parentIn, currIn);
    currIn = parentIn;
    parentIn = Math.ceil(currIn / 2) - 1;
  }
};

BinaryHeap.prototype.removeRoot = function () {
  // TODO: 여기에 코드를 작성합니다/
  this.swap(0, this._heap.length - 1);
  let removeVal = this._heap.pop();
  let index = 0;
  let temp = "";
  [leftChild, rightChild] = [index * 2 + 1, index * 2 + 2];

  while (
    this._heap[index] > this._heap[leftChild] &&
    this._heap[index] > this._heap[leftChild]
  ) {
    if (this._heap[index] > this._heap[leftChild]) {
      temp = leftChild;
      this.swap(index, leftChild);
      if (this._heap[index] > this._heap[rightChild]) {
        this.swap(index, rightChild);
      }
    }

    if (this._heap[index] > this._heap[rightChild]) {
      temp = rightChild;
      this.swap(index, rightChild);
      if (this._heap[index] > this._heap[leftChild]) {
        this.swap(index, leftChild);
      }
    }
    index = temp;
    [leftChild, rightChild] = [index * 2 + 1, index * 2 + 2];
  }
  return removeVal;
};
