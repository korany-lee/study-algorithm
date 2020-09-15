/*
 * value를 저장하는 기본적인 tree입니다.
 */

let Tree = function (value) {
  this.value = value;
  this.children = [];
};

/*
    1. 첫 번째 노드를 filter
    2. 첫 번째 노드의 children들을 eQ
    3. depth++ depth 2의 children들을 각각 테스트
    4. depth 2의 children들을 가각 eQ하면서 children을 dQ
    */

Tree.prototype.BFSelect = function (filter) {
  const result = [];
  const Q = [];
  const dQ = () => Q.shift();

  const nQ = (n) => Q.push(n);

  let depth = 0;

  nQ({ tree: this, depth: 0 });

  while (Q.length > 0) {
    let storage;
    let depth;
    for (let node of Q) {
      storage = node.tree;
      if (storage.depth !== depth) {
        break;
      }
      depth = node.depth;
      if (filter(storage.value, depth)) {
        result.push(storage.value);
      }
      if (storage.children) {
        storage.children.forEach((el) => {
          nQ({ tree: el, depth: depth + 1 });
        });
      }
      dQ();
    }
  }
  return result;
};

Tree.prototype.addChild = function (child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
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
    for (var i = 0; i < this.children.length; i++) {
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
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // child를 삭제합니다.
    this.children.splice(index, 1);
  } else {
    throw new Error("That node is not an immediate child of this tree");
  }
};

let root1 = new Tree(1);
let branch2 = root1.addChild(2);
let branch3 = root1.addChild(3);
let leaf4 = branch2.addChild(4);
let leaf5 = branch2.addChild(5);
let leaf6 = branch3.addChild(6);
let leaf7 = branch3.addChild(7);

root1.BFSelect(function (value, depth) {
  return value % 2;
});
