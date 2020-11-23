const Tree = function () {
	this.children = [];
};

/**
 * 직계 자녀를 추가합니다
 */
Tree.prototype.addChild = function (child) {
	if (!this.isDescendant(child)) {
		this.children.push(child);
	} else {
		throw new Error("That child is already a child of this tree");
	}
	return this;
};

/**
 * 2개의 자녀 노드들의 가장 하위의 조상을 반환하세요
 * (아래 예시에서는 여성 만이 자식의 부모가 될 수 있다고 가정하고 있습니다)
 *
 * 추가 예시 :
 *   1.) 나와 형제 사이 -> 어머니
 *   2.) 나와 사촌 -> 할머니
 *   3.) 내 할머니와 내 할머니 (동일한 인물) -> 내 할머니
 *   4.) 나와 감자 -> null
 */
Tree.prototype.getClosestCommonAncestor = function (node1, node2 /*...*/) {
	// TODO: 여기에 함수를 작성하세요!
	if (this === node1 && this === node2) {
		return this;
	}
	if (!this.isDescendant(node1) || !this.isDescendant(node2)) {
		return null;
	}
	const arr1 = this.getAncestorPath(node1),
		arr2 = this.getAncestorPath(node2);
	for (let i = arr1.length - 1; i >= 0; i--) {
		for (let j = arr2.length - 1; j >= 0; j--) {
			if (arr1[i] === arr2[j]) {
				return arr1[i];
			}
		}
	}

	return null;
};

/**
 * 조상에서부터 현 노드까지의 경로를 반환하세요
 *
 * 추가 예시:
 *   1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
 *    - 증조할머니.getAncestorPath(나) -> [증조 할머니, 할머니, 어머니, 나]
 *
 *   2.) mom.getAncestorPath(me) -> [mom, me]
 *    - 어머니.getAncestorPath(나) -> [어머니, 나]
 *
 *   3.) me.getAncestorPath(me) -> [me]
 *    - 나.getAncestorPath(나) -> [나]
 *
 *   4.) grandma.getAncestorPath(H R Giger) -> null
 *    - 할머니.getAncestorPath(H R Giger) -> null
 */
Tree.prototype.getAncestorPath = function (node, arr = [] /*...*/) {
	// TODO: 여기에 함수를 작성하세요!
	if (!this.isDescendant(node)) {
		return null;
	}
	let index = this.children.indexOf(node);
	arr.push(this);
	if (index !== -1) {
		arr.push(this.children[index]);
		return arr;
	}
	this.children.forEach((child) => {
		child.getAncestorPath(node, arr);
	});

	return arr;
};

/**
 * 주어진 트리가 이미 this 의 자식인지 확인합니다
 * (트리 혹은 하위 트리 전부 확인합니다)
 */
Tree.prototype.isDescendant = function (child) {
	if (this.children.indexOf(child) !== -1) {
		// 'child'는 현재 트리의 직계 자녀입니다
		return true;
	} else {
		for (let i = 0; i < this.children.length; i++) {
			if (this.children[i].isDescendant(child)) {
				// 'child' 는 현재 트리의 자손입니다
				return true;
			}
		}
		return false;
	}
};

/**
 * 직계 자녀를 제거합니다
 */
Tree.prototype.removeChild = function (child) {
	let index = this.children.indexOf(child);
	if (index !== -1) {
		// 자녀를 제거합니다
		this.children.splice(index, 1);
	} else {
		throw new Error("That node is not an immediate child of this tree");
	}
};

/**
Tree.prototype.getClosestCommonAncestor = function (node1, node2, queue, flag)
{
  // TODO: 여기에 함수를 작성하세요!
  let checkNode1 = this.children.includes(node1), checkNode2 = this.children.includes(node2);
  queue = queue || [];
  flag = flag || [false, false];

  if ( flag[0] && flag[1] ) {
    return queue;
  }

  if ( !flag[0] && !flag[1] && checkNode1 && checkNode2 ) {
    return this;
  } else if ( !flag[0] && checkNode1 ) {
    const tmpArr = [...this.children];
    while (tmpArr.length) {
      let tmp = tmpArr.shift();
      queue.push(tmp);
    }
    flag[0] = true;
  } else if ( !flag[1] && checkNode2 ) {
    const tmpArr = [...this.children];
    while (tmpArr.length) {
      let tmp = tmpArr.shift();
      queue.push(tmp);
    }
    flag[2] = true
  }
  return 0;
};
 */
