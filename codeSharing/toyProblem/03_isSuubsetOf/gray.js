Array.prototype.isSubsetOf = function (array) {
	// TODO: Your code here!
	const args = Array.prototype.slice.call(arguments, 0);
	const tmpArr = args[0];
	return this.every((x) => tmpArr.includes(x));
};
