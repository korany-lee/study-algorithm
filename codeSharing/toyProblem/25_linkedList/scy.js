const LinkedList = function () {
  let tail = null;
  let head = null;
};

// 메소드
LinkedList.prototype.addToTail = function (value) {
  const newNode = this.makeNode(value);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    let curretNode = this.tail;
    this.tail = newNode;
    curretNode.next = this.tail;
  }
};

LinkedList.prototype.removeHead = function () {
  if (this.head) {
    let removeHead = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    return removeHead;
  }
};

LinkedList.prototype.contains = function (num) {
  let checkNode = this.head;
  while (checkNode) {
    if (checkNode.value === num) return true;
    checkNode = checkNode.next;
  }
  return false;
};

LinkedList.prototype.makeNode = function (num) {
  const node = {};

  node.value = num;
  node.next = null;

  return node;
};
