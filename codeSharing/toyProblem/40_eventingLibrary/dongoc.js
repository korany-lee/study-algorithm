const mixEvents = function (obj) {
	obj.eventStorage = {};

	obj.on = function (eventName, eventFunc) {
		if (!obj.eventStorage[eventName]) {
			obj.eventStorage[eventName] = [];
		}
		obj.eventStorage[eventName].push(eventFunc);
	};

	obj.trigger = function (eventName) {
		let args = [...arguments].slice(1);
		if (obj.eventStorage[eventName]) {
			obj.eventStorage[eventName].forEach((func) => func(...args));
		}
	};

	return obj;
};
