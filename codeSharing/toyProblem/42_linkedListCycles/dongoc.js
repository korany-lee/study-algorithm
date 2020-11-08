const Node = function (value) {
	return { value: value, next: null };
};

const hasCycle = function (linkedList) {
	let checked = {};
	let cur = linkedList;
	while (cur.next) {
		if (checked[cur.value]) return true;
		checked[cur.value] = 1;
		cur = cur.next;
	}
	return false;
};

// first try
// const hasCycle = function (linkedList) {
//   let checked = [];
//   let cur = linkedList
//   while (cur.next) {
//     if (checked.includes(cur.value)) return true; // 여기서 어엄청 도나보다... 그럼 객체....
//     checked.push(cur.value);
//     cur = cur.next
//   }
//   return false;
// }
