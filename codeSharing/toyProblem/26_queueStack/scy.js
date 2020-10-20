const Stack = function () {
  this.storage = {};
  this.top = -1;

  this.push = function (value) {
    this.storage[++this.top] = value;
  };

  this.pop = function () {
    let value = this.storage[this.top];
    delete this.storage[this.top--];
    return value;
  };

  this.size = function () {
    return this.top + 1;
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
  this.enqueue = function (item) {
    inbox.push(item);
    outbox = new Stack();
    for (let i = inbox.top; i >= 0; i--) {
      outbox.push(inbox.storage[i]);
    }
  };

  // Queue로부터 item을 제거합니다
  this.dequeue = function () {
    let value = outbox.pop();
    inbox = new Stack();
    for (let i = outbox.top; i >= 0; i--) {
      inbox.push(outbox.storage[i]);
    }
    return value;
  };

  // Queue 안에 있는 item 개수를 반환합니다
  this.size = function () {
    return inbox.size();
  };
};
