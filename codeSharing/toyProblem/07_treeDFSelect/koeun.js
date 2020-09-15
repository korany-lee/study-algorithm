/* 
6 of 7
//depth 때문에 안됨,,
Tree.prototype.DFSelect = function(filter) {
  let newTree = Object.create(this);
  let result = [];
  
  if(filter(newTree.value, newTree.depth)) {
    result.push(newTree.value)
  }

  if(newTree.children.length !== 0) {
    for(let child  of newTree.children) {
      result.push(...child.DFSelect(filter));
    }
  }

  return result;
}; */

//그래서 하는수 없이 depth를 넣어줌.. 파라메터 변형하기 싫었는데.. 방법이 없을까..
Tree.prototype.DFSelect = function(filter, depth = 0) {
  let newTree = Object.create(this);
  let result = [];
  
  if(filter(newTree.value, depth)) {
    result.push(newTree.value)
  }

  if(newTree.children.length !== 0) {
    depth++;
    for(let child  of newTree.children) {
      result.push(...child.DFSelect(filter, depth));
    }
  }

  return result;
};