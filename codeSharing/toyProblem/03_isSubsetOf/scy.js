const scy = () => {
	Array.prototype.isSubsetOf = function (array) {
		// TODO: Your code here!
		for (let str1 of this) {
			if (!array.includes(str1)) {
				return false;
			}
		}
		return true;
	};
};
module.exports = scy;
