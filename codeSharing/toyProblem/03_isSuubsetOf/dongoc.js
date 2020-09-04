Array.prototype.isSubsetOf = function (array) {
  return this.every(el => array.includes(el));
}