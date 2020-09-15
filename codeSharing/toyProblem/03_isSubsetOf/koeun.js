Array.prototype.isSubsetOf = function(array) {
  return this.every(x => array.includes(x));
};