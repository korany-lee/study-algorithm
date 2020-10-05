const LinkedList = function (val) {
	// TODO: 여기에 코드를 작성합니다.
	this.value = val;
	this.next = null;
	this.head = null;
	this.tail = null;
};

// 메소드
LinkedList.prototype.addToTail = function (val) {
	if (this.head === null) {
		const node = new LinkedList(val);
		this.head = node;
		this.tail = node;
		return;
	}

	let flag = true;
	let ptr = this.head;
	while (flag) {
		if (this.next === null) {
			const node = new LinkedList(val);
			this.next = node;
			this.tail = node;
			flag = false;
		}
		ptr = this.next;
	}
};

LinkedList.prototype.removeHead = function () {
	if (this.next) {
		this.head = this.next;
	} else {
		this.value = null;
		this.head = null;
		this.next = null;
		this.tail = null;
	}
};

LinkedList.prototype.contains = function (val) {
	let ptr = this.head;

	while (ptr !== this.tail) {
		if (ptr.value === val) {
			return true;
		}
		ptr = this.next;
	}

	return this.tail.value === val;
};

LinkedList.prototype.makeNode = function () {};
