# Immersive Toy Problem

## 001.rockPaperScissors, 002.nonrepeatCharacter

Date: 200902 (오후 7시 30분 ~)

Roles: let todaysRole = { 
  진행자: 시영님,
  타이머: 폴님, 
  서기: 고은님, 
  리액션1: 하정님,
  리액션2: 규하님
  }

Contents:

## 1. 토이리뷰 2번 코드 공유
### 1) 규하님 코드 공유
```js
const firstNonRepeatedCharacter = function (string) {
	// TODO: Your code here!
	let tmpArr = string.split('');
	let obj = {};
	let result = [];

	// 객체에 str의 모든 글자마다 카운팅
	for (let key of tmpArr) {
		if (key in obj === false) {
			obj[key] = 0;
		}
		obj[key]++;
	}

	// 카운트가 1인 것만 걸러줌
	for (let key in obj) {
		if (obj[key] === 1) {
			result.push(key);
		}
	}

	// 카운트가 1인 친구들의 인덱스를 찾음
	result = result.map((x) => tmpArr.indexOf(x));

	// 인덱스가 가장 빠른 친구를 리턴
	return tmpArr[Math.min(...result)];
};
```

규하님: reduce를 쓰고 싶었다. 근데 코플릿에서 should에 에러가 뜨길래 이렇게 했다.
       if ...in문을 처음 써봤다.

시영님: if (key in obj)가 굉장히 유용하다.

규하님: undefined를 사용하지 않으려고 하는 편이다. hasOwnProperty를 사용하면 es6에서 에러가 나는데 이렇게하면 에러가 안나지 않을까 싶다.

### 2) 하정님 코드 공유
```js
const firstNonRepeatedCharacter = function (string) {
	let arr = string.split('');
	let obj = arr.reduce((a, c) => {
		if (a[c] === undefined) a[c] = 0;
		else a[c] = 1;
		return a;
	}, {});
	for (let key in obj) {
		if (obj[key] === 0) {
			return key;
		}
	}
};
```
고은님: (하정님 코드보며 설명)스트링을 스플릿해서 어레이에 담고, 어레이를 리듀스해서 오브젝트에 담는다. 그 다음 객체를 순회하면서 키 값이 0인 게 있으면 리턴을 해라. 

저 궁금한 게 있어요. else에 1을 놔도 더해지나요? 

하정님: 아뇨 안돼여. 0값만 나오면 된다고 생각했어여

규하님: 객체는 순서가 없어서 for...in을 사용해서 순차접근 할 수 없다고 학습해왔기때문에, 명확하게 순서화 해주는 게 좋을 거 같다.

고은님: 들어온 스트링으로 바로 작업해주는 건 어떨까요? 

하정님: 폴님께서 원데이터를 건드리지 않는 게 좋다고 말씀해주신 적이 있습니다.

규하님: 함수 밖이 어떤 상황인지 모르기 때문에 원본 데이터는 건드리지 않는 게 좋다.

### 3) 시영님 코드 공유
```js
const firstNonRepeatedCharacter = function(string) {
  // TODO: Your code here!
  let before, after;
  for (let i = 1; i < string.length; i++) {
    before = string.slice(0, i);
    after = string.slice(i + 1);
    if (!before.includes(string[i]) && !after.includes(string[i])){
      return string[i];
    }
  }
  return null;
};
```

순차적으로 문자열의 i번째 요소에 접근하여, 해당 요소의 앞, 뒤의 문자열(각각 before, after)이 i번째 요소를 포함하고 있는지 검사하고, 포함하지 않는다면 바로 리턴

폴님: 뭘 하는지 코드를 설명을 듣기전까지 알수가 없다. 가독성이 떨어진다는 생각이 든다.

규하님: 같은 값이 계속 들어가는게 null이 나오는 부분은 왜되지? 에 해당하는 부분인거 같다

시영님: 자세히 보면 직관적이에요.

규하님: for문 바깥에서 선언을 해주고 안쪽에서 재할당을 해준다면 직관성이 올라갈것 같다는 생각을 합니다.

폴님: 동의합니다.

시영님: 고쳐보니 되네요.

### 4) 폴님 코드 공유
```js
const firstNonRepeatedCharacter = function(string) {
//올려주십쇼
}

```
규하님: (설명하기전) 가독성 보고싶다.

시영님: 나도

폴님: 코드가 하정님이랑 비슷해서 그냥 단순하게만 보고 넘어갈게요.

규하님: 코드를 어디서 봤냐. 아니면 같이 대화하면서 하셨냐.

폴님/하정님: 아니오

하정님: 저는 폴님 리듀스 잘 쓰시는거 보고 써보고 싶었다.

폴님: 저는 좀 질렸다. 7번 문제를 스오플에 올렸는데 비효율적이라는 지적을 받았다. 그래서 reduce/forEach 모두 break가 안먹는다.

시영님: 규하님 제가 생각해봤는데 (무슨말인지 모르겠음... 제곱얘기 하셨는데... 적지도 못하겠네)

폴님: 아 제가 아까 가독성이 없다고 이야기했다는게 오해가 있었다. 로직에 가독성이 떨어진다는게 아니라 포문안에 뭐가 있어서 조금 뭐지? 싶은 그런 느낌

시영님: (강력히 반발했다고 **적으라고 했다**.)


### 5) 고은님 코드 리뷰
```js
const firstNonRepeatedCharacter = function(string) {
  let [nonCount, nonCharacter, obj] = [1, '', {}];
  
  if(string === '') {
    return null;
  }
  for (let i = 0; i < string.length; i++) {
    if (!(string[i] in obj)) {
      obj[string[i]] = 1;
    } else {
      obj[string[i]]++;
    }
  }
  for(let key in obj) {
    if(obj[key] === 1) {
      return key;
    }
  }
};
```
고은님 : 구조 분해 사용, 별게 아니었음! 왜 쓰는지 잘 모르겠어요.

규하님 : 구조분해 사용 지금 이건 할당을 저렇게 해서 그런데 하나의 객체에서 벨류를 찾아올 때에는 유용함.

```js
// example
const obj = {name: 'koeun', role: 'developer', company:'code states'};
const { name, role } = obj;
```

시영님 : const 구조분해만 봐서 let을 쓰니 참신함

고은님 :  콘솔에서는 쓰기 불편해서 안 씀.

규하님 : 시크릿 모드에서 새로고침하면 됨.

폴님 : const가 붙으면 에러가 적게 나서 좋음

규하님 : 스트릭트 모드처럼 동작하기때문에 그럼.

고은님 : 왜 저의 코드에 대해선 설명하지 않나요?

시영님 : 진행자가 보기엔 고은님 코드는 바로 보자마자 이해가 간다. 안일한 태도를 취했는데, 구조분해로 변수를 할당하고 string.length === 0이라고 쓰면 좋을 것 같음. 하지만 좋은 것 같음.

시영님 : string length ===0 와 !string length인 경우에 대해서.

규하님 : 스트링 랭스 0은 빈 문자열도 0이 나오기 때문에 반대. 배열은 참조값을 비교하기 때문에 빈 배열과 비교할 때 false가 나오지만 스트링은 빈 문자열을 비교하면 true가 나옴. 빈 문자열은 빈 문자열로 비교하는 게 좋음.

고은님 : 객체 21번에서 가져온 것. 문제를 보자마자 내가 고생했던 객체 21번!이라는 생각이 들었고, 왜 개발자들이 자기 코드를 쓰는지 알 것 같다. 비슷한데?

폴님 : 저도 같습니다. 제 코드를 스니펫에 저장해놔요

규하님 : 저는 반대. 자기만의 라이브러리를 만드는 건 동의하는데 학습하는 과정에서 이전 코드를 가져오는 건 안 좋은 것 같음. 기회를 한 번 날릴 때마다 다음에 똑같은 문제를 만났을 때 오래걸릴 수 있다. 시간 단축의 기회를 잃어버린 게 아닐까.

고은님 : 동의함, 이전에 한 삽질덕분에 더 빨라진 걸 체감했다. 조금만 비슷한 문제만 나와도 생각나는 것은. 어차피 똑같은 문제가 아니면 검색을 해서 정답을 가져오느냐, 정답을 가져왔을 때 응용했을 때랑 비슷한 문제 같음. 내 코드를 가져온다고 해서 다시 짤 능력이 빨라질 수 있다면 좋긴 하겠지만, 사람인지라 생각하기 싫었음.

폴님 : 이전에 규하님이 힌트같지 않은 힌트를 주고 어찌어찌 풀었는데 코드를 지워버렸어요.

규하님 : 이부분은 학습하는 영역이니까 할 수 있는 범위 내라면 처음부터 빌드하는 것을 추천.

고은님 : 맞는 말씀. **'사람인지라'**. 그 부분을 상기시키고 해보려고 노력할게요.

## 2. 토이리뷰 1번 코드 공유
- 시도를 해본 사람이 먼저 풀이를 해보자
### 1) 규하님 코드 공유
```js
const rockPaperScissors = function (n) {
	// TODO: Your code here!
	const possible = ['rock', 'paper', 'scissors'];
	let tmp = [];
	const result = [];

	for (let i = 0; i < 3; i++) {
		tmp.push(`${i}` + possible[i]);
		for (let j = 0; j < n; j++) {
			tmp.push(`${j}` + possible[j]);
			for (let k = 0; k < n; k++) {
				tmp.push(`${k}` + possible[k]);
				result.push([...tmp]);
				tmp.length--;
			}
			tmp.length--;
		}
		tmp.length--;
	}

	return result;
};
```

규하님: (시도한 것을 열심히 설명중, ctrl+y로 보여줌)

       (아이디어 스케치 한 것을 설명중)

### 2) 폴님 코드 공유
```js
const rockPaperScissors = function (n) {
//기입해 주세요.
}
```
폴님: 숫자에 따라서 얘네를 집어넣어야한다.

num보다 작은 숫자를 넣어서 리커젼을 하면 되지 않을까 싶었다.

### 3) 고은님 코드 공유
```js
const rockPaperScissors = function (n) {
//넣을 코드가 존재하지 않습니다.
}
```
고은님: 생각이 멈춰서 따로 정리를 못했다. 

시영님: 그래도 의사코드 말해주셈. 

고은님: Math.pow(3, n) * n 까지는 했다. 근데 각각에 한 번씩 어떻게 넣어줘야하나. 

규하님: 다 똑같은데 멈췄네요. 

고은님: 어떻게 숫자를 배열에 넣을껀지 실사용을 못했다. 헬프데스크 까지 찾아봤다. 설명이 잘 이해가 갔다. 혹시나 싶어서 그림으로 그리는 알고리즘을 살짝 봤는데… 거기에 참고할만한 내용은 없었다. (그래도 몰랐다는 이야기 한참)

### 4) 하정님 코드 공유
```js
// codeSharing - toyProblem - 01_rockPaperScissors - dongoc.js 참고
```
하정님 : 숫자로 시작을 했다.
가위바위보를 012로 봤을때
각 앞자리는 9번 반복하고

(폴님이 서기인줄 알았다는 변이 있었다. 
이 부분 기억나시는 분이 계시다면 얘기 주세요.)

참으로 brilliant하고 clever했다는 후문이..


### 5) 시영님 코드 공유
```js
const rockPaperScissors = function (n) {
//이 코드는 폴님이 문제를 푸시기 전까지 봉인되어 있습니다.
}
```

시영님: 개념만 설명한다.
재귀를 생각했다.
이 문제를 풀 수 있는 가장 단순한 방법을 생각했다.

1차 = [['가위'],['바위'],['보']];

저걸 먼저 구현을 했다.
그래서 2차에는 1차 스택에 한번씩 1차 값을 concat하면 된다.

3차의 경우 2차에다가 한번씩 1차 값을 concat하면 된다.

(서로 칭찬하는 시간)

정리: 딱히 정리할 것이 없었음.

다음 모임 : 이번주 금요일(9/4) 오후 일곱시 반, 토이 3,4번 풀어서 모이기.

(이후 내일 페어가 기대된다.는 이야기가 진행됨)



지양합시다.

![왜되지](./../images/whyIsWork.png)