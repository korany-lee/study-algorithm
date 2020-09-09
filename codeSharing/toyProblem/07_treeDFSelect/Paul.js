/**
 * /*
 * value를 저장하는 기본적인 tree입니다.
 *
 * @format
 */

let Tree = function (value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.DFSelect = function (filter, depth, visited) {
  visited = visited || []; // 리커젼 할때 찾아내서 푸쉬하넥 없으면 empty array 로 시작
  depth = depth || 0; // depth 는 리커젼 돌때마다 하나하나씩 늘어난다.
  if (filter(this.value, depth)) {
    visited.push(this.value); //visited 에다가 발견값을 푸쉬
  }
  let count = 0;
  while (count < this.children.length) {
    this.children[count].DFSelect(filter, depth + 1, visited); //뎁쓰 +1 주고 다음 뎁쓰 탐험
    count += 1;
  }
  return visited;
};

/*
 * 이 아래로는 아무 것도 변경하지 않아도 됩니다. 자유롭게 참고하세요.
 */

/*
 * child를 추가합니다.
 * (Tree가 아닌 값이 들어올 경우, Tree 객체 형태로 변환 후 추가합니다.)
 */
Tree.prototype.addChild = function (child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  // 편의를 위해 추가된 child node를 return합니다.
  return child;
};

/*
 * 주어진 tree가 이미 해당 tree 혹은 sub tree의 child인지 확인합니다.
 */
Tree.prototype.isDescendant = function (child) {
  if (this.children.indexOf(child) !== -1) {
    // `child`는 해당 트리와 연결된 하위 노드를 의미합니다.
    return true;
  } else {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        return true;
      }
    }
    return false;
  }
};

/*
 * child를 삭제합니다.
 */
Tree.prototype.removeChild = function (child) {
  let index = this.children.indexOf(child);
  if (index !== -1) {
    // child를 삭제합니다.
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};

// value 랑 depth 를 넣어줘야 한다.
