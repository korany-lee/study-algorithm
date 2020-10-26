const findParentIndex = (index) => {
	return Math.floor((index - 1) / 2);
};

const findChildrenIndices = (index) => {
	return [index * 2 + 1, index * 2 + 2];
};

const swap = (arr, i, j) => {
	let tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
};

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

BinaryHeap.prototype.insert = function (value) {
	// TODO: 여기에 코드를 작성합니다.
	this._heap.push(value);
	let nowIndex = this._heap.length - 1;
	let parentIndex = findParentIndex(nowIndex);
	let flag;

	do {
		flag = false;

		if (this._heap[parentIndex] !== undefined) {
			if (this._compare(this._heap[nowIndex], this._heap[parentIndex])) {
				swap(this._heap, parentIndex, nowIndex);
				nowIndex = parentIndex;
				parentIndex = findParentIndex(nowIndex);
				flag = true;
			}
		}
	} while (flag);
};

BinaryHeap.prototype.removeRoot = function () {
	// TODO: 여기에 코드를 작성합니다.
	let root = this.getRoot();
	if (root === undefined) {
		return;
	}

	let nowIndex = this._heap.length - 1;
	let result;

	if (this._heap[nowIndex] === root) {
		result = this._heap.pop();
	} else {
		let flag, children;
		swap(this._heap, 0, nowIndex);
		result = this._heap.pop();
		nowIndex = 0;

		do {
			flag = false;
			let [firstChild, secondChild] = findChildrenIndices(nowIndex);
			let minIndex =
				this._heap[firstChild] <= this._heap[secondChild]
					? firstChild
					: secondChild;
			let nowVal = this._heap[nowIndex];

			if (this._compare(this._heap[minIndex], this._heap[nowIndex])) {
				swap(this._heap, minIndex, nowIndex);
				nowIndex = minIndex;
				flag = true;
			}
		} while (flag);
	}

	return result;
};

module.exports = BinaryHeap;
