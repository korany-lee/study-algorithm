/**
 * Stack
 */
const Stack = function () {
  this.storage = [];
  // Stack 맨 위에 item을 추가합니다
  this.push = function (value) {
    this.storage = [value].concat(this.storage);
  };

  // Stack 맨 위의 item을 제거합니다
  this.pop = function () {
    let first = this.storage[0];
    this.storage = this.storage.slice(1);
    return first;
  };

  // Stack 안에 있는 item 개수를 반환합니다
  this.size = function () {
    let temp = this.storage.slice();
    let count = 0;
    while (temp[0]) {
      count++;
      temp = temp.slice(1);
    }
    return count;
  };
};

/**
 * Queue
 */
const Queue = function () {
  // 두 개의 Stack 인스턴스를 이용해 Queue를 구현하세요.
  // 세상에 마상에 이런 비효율적인 일을...
  let inbox = new Stack();
  let outbox = new Stack();

  // Queue에 item을 추가합니다
  this.enqueue = function (value) {
    // inbox.push(value)
    // outbox.push(inbox.pop())
    inbox.push(value);
  };

  // Queue로부터 item을 제거합니다
  this.dequeue = function () {
    // let first = outbox.storage[0]
    // outbox.storage = outbox.storage.slice(1);
    // return first

    // outbox에 요소가 없을 때 -> indox에서 조달한다!

    // outbox에 요소가 있을 때 -> 그냥 outbox에서 pop한다
    if (!outbox.size()) {
      while (inbox.size()) {
        outbox.push(inbox.pop());
      }
    }
    return outbox.pop();
  };

  // Queue 안에 있는 item 개수를 반환합니다
  this.size = function () {
    return inbox.size() + outbox.size();
  };
};
