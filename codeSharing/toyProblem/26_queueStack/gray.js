/**
 * Stack
 */
const Stack = function () {
	this.storage = {};
	this.index = 1;
	// Stack 맨 위에 item을 추가합니다
	this.push = function (el) {
		this.storage[this.index] = el;
		this.index++;
	};

	// Stack 맨 위의 item을 제거합니다
	this.pop = function () {
		this.index--;
		let tmp = this.storage[this.index];
		delete this.storage[this.index];
		return tmp;
	};

	// Stack 안에 있는 item 개수를 반환합니다
	this.size = function () {
		return this.index - 1;
	};
};

/**
 * Queue
 */
const Queue = function () {
	// 두 개의 Stack 인스턴스를 이용해 Queue를 구현하세요.
	let inbox = new Stack();
	let outbox = new Stack();

	// Queue에 item을 추가합니다
	this.enqueue = function (el) {
		inbox.push(el);
	};

	// Queue로부터 item을 제거합니다
	this.dequeue = function () {
		let tmp;
		if (outbox.size() === 0) {
			while (inbox.size() > 0) {
				tmp = inbox.pop();
				outbox.push(tmp);
			}
		}
		// while ( inbox.size() > 0 ) {
		//   tmp = inbox.pop();
		//   outbox.push(tmp);
		// }

		// result = outbox.pop();

		// while ( outbox.size() > 0 ) {
		//   tmp = outbox.pop();
		//   inbox.push(tmp);
		// }

		return outbox.pop();
	};

	// Queue 안에 있는 item 개수를 반환합니다
	this.size = function () {
		return inbox.size();
	};
};
