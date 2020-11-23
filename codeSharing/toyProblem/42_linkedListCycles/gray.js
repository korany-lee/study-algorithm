const Node = function (value) {
	return { value: value, next: null };
};

const hasCycle = function (linkedList) {
	// TODO: 여기에 코드를 작성합니다.
	let i = 0;
	do {
		if (linkedList.next === null) {
			return false;
		}
		linkedList = linkedList.next;
		i++;
		if (i === 100000) {
			return true;
		}
	} while (linkedList.next !== null);

	return false;
};
