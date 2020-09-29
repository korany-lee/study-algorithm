Tree.prototype.BFSelect = function (filter) {
  let newTree = [this];
  let result = [];
  this.depth = 0;

  while (newTree.length) {
    let node = newTree.shift();

    if (filter(node.value, node.depth)) {
      result.push(node.value);
    }

    node.children.forEach(child => {
      child.depth = node.depth + 1;
      newTree.push(child);
    });
  }
  return result;
};

//[1, 3, 5, 7]
//[2, 3]
