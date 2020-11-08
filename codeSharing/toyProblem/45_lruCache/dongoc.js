let LRUCache = function (limit) {
	this._storage = {};
	this._limit = limit;
	this._queue = [];
	this._size = 0;
};

let LRUCacheItem = function (val, key) {
	// 얘는 무엇인가....
};

LRUCache.prototype.size = function () {
	return this._size;
};

LRUCache.prototype.get = function (key) {
	if (this._storage[key] !== undefined) {
		this._queue = this._queue.filter((otherkey) => otherkey !== key);
		this._queue.push(key);
		return this._storage[key];
	}
	return null;
};

LRUCache.prototype.set = function (key, val) {
	this._storage[key] = val;
	this._queue.push(key);
	this._size++;

	while (this._size > this._limit) {
		let delelted = this._queue.shift();
		delete this._storage[delelted];
		this._size--;
	}
};

let List = function () {
	this.head = null;
	this.tail = null;
};

let ListNode = function (prev, val, next) {
	this.prev = prev || null;
	this.val = val;
	this.next = next || null;
};

// 리스트의 헤드에 추가합니다
List.prototype.unshift = function (val) {
	// 빈 리스트
	if (this.head === null && this.tail === null) {
		this.head = this.tail = new ListNode(null, val, null);
		// 비어있지 않은 리스트
	} else {
		this.head = new ListNode(null, val, this.head);
		this.head.next.prev = this.head;
	}

	return this.head;
};

// 리스트의 헤드를 제거합니다
List.prototype.shift = function () {
	// 빈 리스트
	if (this.head === null && this.tail === null) {
		return null;
		// 비어있지 않은 리스트
	} else {
		let head = this.head;
		this.head = this.head.next;
		head.delete();
		return head.val;
	}
};

// 리스트 가장 뒤에 추가합니다
List.prototype.push = function (val) {
	// 빈 리스트
	if (this.head === null && this.tail === null) {
		this.head = this.tail = new ListNode(null, val, null);
		// 비어있지 않은 리스트
	} else {
		this.tail = new ListNode(this.tail, val, null);
		this.tail.prev.next = this.tail;
	}

	return this.tail;
};

// 리스트 가장 뒤 요소를 제거합니다
List.prototype.pop = function () {
	// 빈 리스트
	if (this.head === null && this.tail === null) {
		return null;
		// 비어있지 않은 리스트
	} else {
		let tail = this.tail;
		this.tail = this.tail.prev;
		tail.delete();
		return tail.val;
	}
};

// 노드를 리스트 가장 앞으로 이동합니다
List.prototype.moveToFront = function (node) {
	if (node === this.tail) {
		this.pop();
	} else if (node === this.head) {
		return;
	} else {
		node.delete();
	}

	node.prev = node.next = null;

	// shift 로 해결하려고 하지 마세요
	// 동일한 객체를 사용해야 합니다

	// 빈 리스트
	if (this.head === null && this.tail === null) {
		this.head = this.tail = node;
		// 최소 하나의 노드 포함
	} else {
		this.head.prev = node;
		node.next = this.head;
		this.head = node;
	}
};

// 노드를 리스트 맨 뒤로 이동합니다
List.prototype.moveToEnd = function (node) {
	if (node === this.head) {
		this.shift();
	} else if (node === this.tail) {
		return;
	} else {
		node.delete();
	}

	// push 로 해결하려고 하지 마세요
	// 동일한 객체를 사용해야 합니다

	node.prev = node.next = null;

	// 빈 리스트
	if (this.head === null && this.tail === null) {
		this.head = this.tail = node;
		// 최소 하나의 노드 포함
	} else {
		this.tail.next = node;
		node.prev = this.tail;
		this.tail = node;
	}
};

ListNode.prototype.delete = function () {
	if (this.prev) {
		this.prev.next = this.next;
	}
	if (this.next) {
		this.next.prev = this.prev;
	}
};
