const LinkedList = function () {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function (value) {
  let node = this.makeNode(value);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

LinkedList.prototype.removeHead = function () {
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
  }
};

LinkedList.prototype.contains = function (value) {
  let cur = this.head;
  while (cur) {
    if (cur.value === value) {
      return true;
    }
    cur = cur.next;
  }
  return false;
};

LinkedList.prototype.makeNode = function (value) {
  const Node = function (value) {
    this.value = value;
    this.next = null;
  };
  let node = new Node(value);
  return node;
};
