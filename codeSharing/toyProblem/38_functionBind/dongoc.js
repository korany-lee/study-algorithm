const bind = function (func, context) {
	let originArgs = [...arguments];

	if (originArgs.length === 2) {
		[func, value] = originArgs;
		return () => func.apply(value);
	} else {
		originArgs = originArgs.slice(2);
		return (...args) => {
			if (!args.length) args = args.slice(0, -1);
			return func.apply(context, [...originArgs, ...args]);
		};
	}
};

Function.prototype.bind = function (context) {
	let originArgs = [...arguments];
	let func = this;

	if (originArgs.length === 1) {
		return (...args) => func.apply(context, args);
	} else {
		originArgs = originArgs.slice(1);
		return (...args) => func.apply(context, [...originArgs, ...args]);
	}
};
