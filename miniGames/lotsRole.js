const roles = ['진행자', '타이머', '서기', '리액션1', '리액션2'];
const names = ['HJ님', 'SY님', 'PB님', 'KE님', 'GH님'];
let values = [0, 1, 2, 3, 4];
const members = [
	{
		name: 'KE님',
		value: 0,
		role: undefined,
	},
	{
		name: 'SY님',
		value: 0,
		role: undefined,
	},
	{
		name: 'PB님',
		value: 0,
		role: undefined,
	},
	{
		name: 'GH님',
		value: 0,
		role: undefined,
	},
	{
		name: 'HJ님',
		value: 0,
		role: undefined,
	},
];

const generateRandomNumber = (num = 5) => {
	return Math.floor(Math.random() * num);
};

const checkValue = (arr) => {
	let flag = false;

	for (let i = 0; i < values.length - 1; i++) {
		for (let j = i + 1; j < values.length; j++) {
			if (values[i] === values[j]) {
				values[i] = generateRandomNumber(members.length);
				flag = true;
				break;
			}
		}
		if (flag) {
			return checkValue(values);
		}
	}

	console.log('Set values....');
};

//set values array randomly, doesn't matter what number is.
const setValue = () => {
	let pick;

	for (let i = 0; i < members.length; i++) {
		pick = generateRandomNumber(members.length);
		values[pick] = i;
		values[i] = pick;
	}

	checkValue(values);
};

const setRoles = () => {
	for (let i = 0; i < members.length; i++) {
		members[i].role = roles[values[i]];
	}

	console.log('Set roles.... ');
};

const beforeStart = () => {
	setTimeout(() => {
		console.log('아직 역할이 없습니다.');
	}, 500);

	for (let i = 0, j = 1500; i < members.length; i++, j += 500) {
		setTimeout(() => {
			console.log(
				`[ ${members[i].name}의 역할은 아직 ${members[i].role}입니다. ]`
			);
		}, j);
	}
};

const printRoles = () => {
	for (let i = 0, j = 1000; i < members.length; i++, j += 500) {
		setTimeout(() => {
			console.log(
				`[ ${members[values[i]].name} ]은 오늘 [ ${
					members[values[i]].role
				} ]을(를) 맡아주세요.`
			);
		}, j);
	}

	setTimeout(() => {
		console.log('오늘도 재밌는 알고리즘 스터디를 시작합니다!');
	}, 3500);
};

const init = () => {
	setTimeout(() => {
		beforeStart();
	}, 500);
	setTimeout(() => {
		setValue();
	}, 4500);
	setTimeout(() => {
		setRoles();
	}, 5000);
	setTimeout(() => {
		console.log('역할분배가 완료되었습니다. 각자의 역할을 알려드립니다.');
	}, 5500);
	setTimeout(() => {
		printRoles();
	}, 6000);
};

init();
