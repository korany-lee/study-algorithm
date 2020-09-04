# Immersive Toy Problem

## 003.isSubsetOf, 004.nthFibonacci

Date: 200904

Roles: let todaysRole = { 진행자: 폴님, 타이머: 하정님, 서기: 규하님, 리액션1: 고은님, 리액션2: 시영님}

Contents:

## 1. 해시 테이블 설명 ( 규하님 )

// 시영님께서 입력예정

## 2. 토이리뷰 3번 코드 공유

### 1) 하정님 코드 공유

```js
Array.prototype.isSubsetOf = function (array) {
	// TODO: Your code here!
	return this.every((x) => tmpArr.includes(x));
};
```

- 규하님: 첨언이 필요없다.

### 2) 규하님 코드 공유

```js
Array.prototype.isSubsetOf = function (array) {
	// TODO: Your code here!
	const args = Array.prototype.slice.call(arguments, 0);
	const tmpArr = args[0];
	return this.every((x) => tmpArr.includes(x));
};
```

시영님: 지금 돌아보면 1번도 쉬웠다

### 3) 폴님 코드 공유

```js

```

시영님: 폴님은 every와 includes를 구현하신 거군요! 참신합니다! 근데 indent를 수정하셔야 겠네요.
폴님: ( 이 코드에는 없지만 ) 요즘 method를 지양하고자, while문에 빠졌습니다.
하정님: new Set 을 처음봤어요. ( 규하님: new Set이라는 키워드를 던져드렸는데, 안알아보셨다니...!!!!!! (대노) )

### 4) 시영님 코드 공유

```js

```

시영님: 저는 딱 중간단계로 푼 거 같아여. 하정님과 규하님의 중간단계인 느낌?
폴님: 제가 분해해드릴게여. 와.... 멋지다. 저는 딱 이거 보자마자, 가독성이 너무 좋다보니까 간단하게라도 언급하자면, for... of 가 가장 가독성이 좋은 거 같다.
시영님: 폴님의 가독성 이야기에 신경을 썼습니다 ㅎㅎ
하정님: 오타 정말 공감 ㅠㅠ 오타 체크 중요해요 ㅠㅠ

## 3. 토이리뷰 4번 코드 공유

### 1) 폴님 코드 공유

```js

```

( 모두 동시에 ) 와...
폴님: 사실 HA 베낀거에여

### 2) 시영님 코드 공유

```js

```

시영님: 저는 순수 하드코딩이에여. 문제를 풀기위한 방식으로 해봤다가 다시 수정했어여.
폴님: 기본적으로 저는 시영님과 똑같이 한 거 같아요.
시영님: 여러방식을 해보고 싶었어요.
폴님: 피보나치...ㅂㄷㅂㄷ... 그냥 빨리 해치우고 싶었어요.
시영님: 하정님의 beBefore 꼭 한 번 써보고 싶었어여. 하정님 그때....! 하면서 떠올라서 사용해봤습니다.
폴님: 하정님 정말 한국적인 영어네요. beBefore라니 ㅋㅋ 미국 개발자한테 보여주고 싶다.
하정님: 안돼ㅜㅜㅜ 영어로는 어떻게 말해요?
모두: beBefore 요 ㅋㅋㅋㅋㅋ
폴님: 보통 previuos previuos 라고 이야기하는데 변수로 만들긴 쉽지않잖아여. beBefore는 훌륭한 밈이 될 거 같아요

### 3) 규하님 코드 공유

```js
const nthFibonacci = function (n) {
	// TODO: Your code here!
	if (n === 0) {
		return 0;
	}
	if (n === 1 || n === 2) {
		return 1;
	}
	let tmp = [1, 1];
	for (let i = 2; i < n; i++) {
		tmp[i] = tmp[i - 1] + tmp[i - 2];
	}
	return tmp.pop();
};
```

하정님: 아... 그렇게 할 수도 있겠다
시영님: 4번은 솔직히 머리쓰기 싫었어요.
하정님: 실시간으로 이렇게 적히나요.
폴님: 우와 속기산데 속기사? 조심하세요. 오늘. 욕먹을지도 몰라요. 민망하니까 빨리넘어갑시다
시영님: 오늘 배터리가 너무 빨리 닳네요.

### 4) 하정님 코드 공유

```js

```

폴님: 피보나치의 거장 하정님 차례
하정님: 모두의 기대를 져버리고 beBefore에서 first, second로 넘어왔습니다.
폴님, 시영님: 뭐야 이게, 직관적이지 않잖아요. 대체 이게 뭐에요? 창의성일 잃어버리셨네요.
하정님: beBefore가 너무 부끄러워서 이번에 바꿨습니다 ㅠㅠ
규하님: 좋은 코드네요
