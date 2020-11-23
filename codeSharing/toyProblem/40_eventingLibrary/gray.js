const mixEvents = function (obj) {
	// TODO: Your code here
	if (obj._storage === undefined) {
		obj._storage = {};
	}
	obj.on = function (event, callback) {
		if (obj._storage[event] === undefined) {
			obj._storage[event] = [callback];
		} else {
			obj._storage[event].push(callback);
		}
	};
	obj.trigger = function (...args) {
		let event = args.slice(0, 1);
		let params = args.slice(1);

		if (obj._storage[event] !== undefined) {
			if (params.length > 1) {
				for (let func of obj._storage[event]) {
					func(...params);
				}
			} else {
				for (let func of obj._storage[event]) {
					func();
				}
			}
		}
	};
	return obj;
};
