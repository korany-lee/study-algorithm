const asyncMap = function (tasks, callback) {
	// TODO: 여기에 코드를 작성합니다.
	const asyncArr = tasks.map((task) => new Promise(task));
	return Promise.all(asyncArr).then((n) => callback(n));
};

module.exports = asyncMap;
