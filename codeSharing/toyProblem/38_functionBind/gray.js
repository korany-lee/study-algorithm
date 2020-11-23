const bind = function (fn, context) {
	// TODO: Your code here
	const args1 = Array.prototype.slice.call(arguments, 2);

	return function () {
		const args2 = Array.prototype.slice.call(arguments) || [];
		return fn.apply(context, args1.concat(args2));
	};
};

Function.prototype.bind = function (context) {
	// TODO: Your code here
	const current = this;
	const args1 = Array.prototype.slice.call(arguments, 1);

	return function () {
		const args2 = Array.prototype.slice.call(arguments) || [];
		return current.apply(context, args1.concat(args2));
	};
};

/**
Function.prototype.bind = function (oThis) {
  // TODO: Your code here
    var aArgs   = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          return fToBind.apply(this instanceof fNOP
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    if (this.prototype) {
      fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();

    return fBound;
};
 */
