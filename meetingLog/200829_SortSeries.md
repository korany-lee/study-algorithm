Date : 200827

Role : 
const todaysRole = {
  진행자 : '시영님',
  서기 : '하정님',
  타이머 : '규하님'
}

Contents :

## 1. insertion sort 코드 공유
### 1) 하정님 코드 공유
```js
function insertionSort4(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) { // 앞으로 쭉쭉 밀어버리자
      if (arr[j] > arr[j + 1]) { 
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp
      }
    }
  }
  return arr;
}
```
* 하정님 : 제가 이해하기로는 i를 1부터 arr.length까지 돌게 하고, 따로 j를 잡아서 j는 i - 1부터 0까지 역으로 돌면서 arr[j]와 arr[j + 1]를 비교합니다(왜 혼돈이 올까요..) arr[j]가 더 크다면 두 수를 자리를 바꾸고, 그렇게 바꾼 (원래의) arr[j + 1]을 왼쪽으로 쭉 밀어내서 자기 자리를 찾게 만듭니다..(설명하다가 이해했다!)

* 규하님 : 여기서 더 추가해서 비효율적인 면을 바꿀 수 있는 방법이 있습니다. 이미 arr[j] 이전은 이미 정렬된 상태니까 굳이 for문을 끝까지 돌려주지 않아도 됩니다.
* 시영님 : else일 때 break를 걸기.

### 2) 개선한 코드
```js
function insertionSort4(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) { 
      if (arr[j] > arr[j + 1]) { 
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp
      } 
      else { // 요기!
        break;
      }
    }
  }
  return arr;
}
```

## 2. merge sort 코드 공유 (시영님)
### 1) 시영님 코드 공유
```js
const merge = (leftArr, rightArr) => {
    let result = [];
    let leftIndex = 0, rightIndex = 0;
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] > rightArr[rightIndex]) {
            result.push(rightArr[rightIndex]);
            rightIndex++
        } else {
            result.push(leftArr[leftIndex]);
            leftIndex++;
        }
    }
    if (leftIndex !== leftArr.length) {
        result = result.concat(leftArr.slice(leftIndex));
    } else {
        result = result.concat(rightArr.slice(rightIndex));
    }
    return result;
}
const mergeSort = (arr) => {
    const pivot = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, pivot);
    const rightArr = arr.slice(pivot);
    if (arr.length <= 1) {
        return arr;
    }
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}
```
1. 반씩 쪼개서 하나가 될 때까지 recursion
[743,663,333,30,228,35,277,161,185,163,688,487,455,39,610,75,93,665,182,83]

2. 하나가 된 두 값을 크기대로 정렬
<br>
[743], [663]  => [663, 743]
<br>
[333], [30]   => [30, 333]
<br>
3. 두 개로 합쳐진 한 배열과 다른 배열을 하나의 배열로 merge
<br>
[663, 743], [30, 333] => [30, 333,663, 743]


* 시영님 : 어레이의 가운데 지점을 찾아서 그것을 기준으로 left와 right를 만들고, 바이너리 트리구조처럼 쪼개가면서 첫 두 배열을 비교하는 순간까지 만듭니다. 두 요소를 비교했을 때 더 작은 쪽을 새 배열에 넣어주고, 상대가 빈 배열일 경우 나머지는 어차피 정렬되었기 때문에 어레이 자체를 넣어줌.

* 시영님 : 가설을 세운 것 : 1. 리커전을 써서 left와 right로 잘게잘게 쪼개자. / 2.이 두개를 머징하는 친구가 필요하다. 
문제는 인덱스가 비었을 때 그냥 넣어버림. left index가 같지 않다면 나머지를 concat해서 넣어라. right index는 result에 concat을 해라. 마지막에 return result.

* 시영님 : while 조건문을 잘 써야겠더라구요. 많이 고생을 했습니다. 이 부분에서. 이 조건을 알아내는 것에도 시간이 좀 걸렸고. 일단은 여기까지인 것 같습니다.

### 2)  하정님 코드 공유
```js
function mergeSort1(arr) {
  if (arr.length === 1) return arr;

  let midIdx = Math.floor(arr.length / 2);
  let head = arr.slice(0, midIdx);
  let tail = arr.slice(midIdx);

  return merge1(mergeSort1(head), mergeSort1(tail));
}

function merge1(head, tail) {
  let result = [];

  while (head.length || tail.length) { // 시영님 : 비효율적이니까 ||를 써서 하면?
    if (!tail.length || head[0] < tail[0]) {
      result.push(head.shift());
    } 
    else if (!head.length || head[0] >= tail[0]) {
      result.push(tail.shift()); 
    } 
  }
  return result;
}
```

### 3) 규하님 코드 공유
```js
import { print } from './printSorting.js';

const merge = (leftArr, rightArr) => {
	let arr = [];

	while (leftArr.length > 0 && rightArr.length > 0) {
		if (leftArr[0] <= rightArr[0]) {
			arr.push(leftArr.shift());
		} else {
			arr.push(rightArr.shift());
		}
	}

	while (leftArr.length > 0) {
		arr.push(leftArr.shift());
	}

	while (rightArr.length > 0) {
		arr.push(rightArr.shift());
	}

	return arr;
};

export const mergeSort = (arr, printFlag = false) => {
	if (arr.length === 1) {
		return arr;
	}

	let middle =
		arr.length % 2 === 1 ? Math.floor(arr.length / 2) : arr.length / 2;
	let left = arr.slice(0, middle);
	let right = arr.slice(middle);

	left = mergeSort(left);
	right = mergeSort(right);

	return merge(left, right);
};
```
* 규하님 : 수도코드 그대로 짰어요. 
* 시영님 : 난 왜 쉬프트 생각을 못했지?

## 3. Quick Sort 코드 공유(규하님, 하정님)
### 1) 규하님 코드 공유
```js
import { print } from './printSorting.js';

export const quickSort = function (arr, printFlag = false) {
	if (arr.length < 2) {
		return arr;
	}
	let pivot = arr[0];
	let previousArr = [],
		afterArr = [];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] <= pivot) {
			previousArr.push(arr[i]);
		} else {
			afterArr.push(arr[i]);
		}
	}
	if (printFlag) {
		print(arr, 0, false);
	}
	return quickSort(previousArr, printFlag)
		.concat(pivot)
		.concat(quickSort(afterArr, printFlag));
};
```
* 규하님 : VSCode에서 디버그하는 방법. (구성 열기 > 실행버튼 > 실행 및 디버그 > 노드 js). 디버깅을 하려면 브레이크 포인트를 찍어서 돌려야 한다. 렉이 좀 있네요.(컴퓨터 뻗음, 알 수 없는 코드들...) 
* 시영님 : 저게 기초적인 자바스크립트 모듈같은데.
* 하정님 : 함부로 하면 안 될 것 같은데..? 
* 규하님 : 저장만 잘 되어 있으면 됩니다.

### 2) 하정님 코드 공유
```js
function quickSort1(arr) {
  if (!arr.length) {
    return arr;
  }
  let pivotIdx = Math.floor(Math.random() * (arr.length));
  let pivot = arr[pivotIdx];
  let head = [];
  let tail = [];
  let exceptPivot = arr.slice(0, pivotIdx).concat(arr.slice(pivotIdx + 1));

  for (let el of exceptPivot) {
    if (el <= pivot) {
      head.push(el)
    } else {
      tail.push(el)
    }
  }
  return quickSort1(head).concat([pivot].concat(quickSort1(tail)));
  // return [...quickSort1(head), pivot, ...quickSort1(tail)];
};
```
* 하정님 : 폴님과 같이 했음. 피봇을 랜덤으로 정했는데 폴님은 arr[arr.length - 1]로 마지막 요소를 피봇으로 정함. 어떤 사람은 arr[0]을 피봇으로 했는데 그 차이에 대해서 찾아봄
* 규하님 : 별로 상관은 없음. 예전에 교수님께 여쭤본 거였는데 상관없다 그러심.


## 4. 앞으로의 일정에 대해서
* 하정님 : 이번 서기는 망한 것 같아요

* **폴님 참여**

* 시영님 : 고은님이 스터디에 참여!(짝짝짝)
* 폴님 : 그런데 고은님이 안 계시네요?
* 규하님 : 고은님은 주말에 일정이 있으셔서.

* 규하님 : 노드 개념을 가지고 링크드 리스트를 만들어보고 싶었는데 IM 캘린더를 보니까 바로 4일에 하더라구요? 
* 시영님 : 요는 뭐냐면, 규하님의 추구 방향보다 코드스테이츠가 빠르게 가는 거에요. 같이 캘린더를 보다가 진짜 빠르다. 어차피 목표는 완주에 두자는 거였으니까 미리 예습을 하고 저희끼리 먼저 코드 리뷰를 하고 페어할 때 복습을 하는 방향으로.

* 폴님 : 예전에 했던 페어가 같이 될 수도 있나요? 
* 규하님 : 그러겠죠? 
* 하정님 : 희박하지 않을까요? 중복은 안시킬 것 같기는 해요.
* 폴님 : 규하님과 중복되었으면 좋겠다. 난 실은 규하님이 좋아. 알고리즘을 헤쳐나가기 위해서는 규하님이 필요하다구.

* 규하님 : n퀸즈 주간 전에 n퀸즈를 해야하긴 할 것 같아요. 수요일까지는 고생할지는 몰라도 쉬울 것. 알고리즘 공부는 목요일부터라고 보임. 그럼 저희는 미리 예습을 하는 거죠.
* 폴님 : 어느 정도 강도?
* 시영님 : 월요일부터 따로 해서 수요일까지 이번주 분량을 끝내고 코드 리뷰를 하는 거죠.
다음주부터 링크드 리스트 주말 사이에 예습을 해서 복습을 한다던가. 14일 n퀸즈. 미리 풀어봐야 저희가 혼란이 많이 없을 것 같아요. 2주가 지난 시점에서 HA 가 또 있습니다. IM 24기로 갈 수도 있어요.
* 폴님 : 하정님, 저희 한 기 꿇을까요?

* 규하님 : 토이프로블럼이 알고리즘 50문제일 것 같아요. 그런것까지 미리 끝내 보고 10월부터 리액트. 리액트 스터디로 들어가는 거죠. 리액트 하면 폴님이 날아 다니는 거죠.
* 폴님 : 그럴 시간이 있을까요 과연? 
* 규하님 : 충분합니다.

* 규하님 : 9월의 목표를 세워서 2주 3주차까지 끝나는 거니까 2주차 주말까지 모두 끝내서 그 시간에 다른 것을 한다던가. 이전 부족한 개념, 학습에 투자하는 시간을 줄이고 최대한 효율적으로. 이거는 여러번 써 볼수록 빠르게 습득이 될 거기 때문에 

* 시영님 : 일정을 어떤 방향으로 잡으면 좋을까요. 이틀에 한번씩? 하루에 한번? 특정 시점까지 뭘 해볼까?
* 규하님 : 내일은 쉬면서 자기 공부 하시고, 힙이랑 레딕스도 도전해 보시고. 월요일 저녁에 잠깐이라도 만나서 앞으로 어떻게 할지 구상을 각자 해보신 다음에 공유를 하고 투표를 하고 합의점을 찾고 그 방식대로 하면 될 것 같아요.
* 시영님 : 그 주 진도를 최대한 빨리 끝내자. 첫주차 수요일에 첫주차 끝내고 목금에는 그다음주걸 할 수 있잖아요? 그런 식으로 하면 점점 좋아지지 않을까? 그게 어렵더라도 다시 평상시 시간과 페어를 하면서 계속 복습을 할 수 있기 때문에 전체적인 취지에 있어서는 합의점을 찾을 수 있지 않을까요?
* 폴님 : 저는 아무 생각이 없습니다.
* 시영님 : 각자가 부담스러운 점이 있을 수 있음. 가능한지 아닌지도 몰겠지만 지금 스터디 방향에서 뭉치려 한다면 이게 낫지 않을까. 일단은 각자가 이러한 방식으로 생각을 해두되 각자 방식을 생각해보자. 좀더 아이디어를 구체화해 보실게요.
* 폴님 : 다들 떠나셔도 앞으로 싸우지 마시고. 다들 매너있게. 약간 상상을 했는데요, 하정님이나 어느 한 분이 터질 것 같다는 생각이 들었습니다. 서로 민감한 상황에서 조심합시다. 미리 사과할게요.
* 하정님 : 제가 서기할 때 이런 말 하지 마세요.

## 5. 갑분책추천

* 규하님 : 시간이 남으면 책 하나 살 거에요. 읽어봐야 하는 전공책. <네트워크의 하향식 접근>. 폴님은 원서로 사시면 되고. 이걸 구매하셔도 좋고, 그냥 시간 날 때 틈틈히 읽어라. 부담갖지 않아도 될만한.. 그런 책이지만 읽어두면 확실히 백엔드할 때 도움이 되는 책입니다.
http://www.yes24.com/Product/Goods/45543957?OzSrank=1
정독을 하지 말고 가볍게 읽어야 합니다. 제가 이걸 후배한테 팔았다가 다시 내놓으라고 하니까 안내놓아서 다시 사야 해요.
* 시영님 : <양자역학의 법칙> 샀음. 저정돈 내가 읽을 수 있지하고 샀다가 컴퓨터가 데이터를 읽듯이 읽고 있음. 아 이게 그렇구나.. 어린아이가 설명하는 방식으로 적혀있다던데 응?
* 규하님 : <컴퓨터 프로그램의 구조와 해석> MIT 커리큘럼에서 실제로 사용했었다는 책. 내용은 진짜 쉽게 설명했는데 어느 순간부터 읽고싶지 않은 책.

## 6. 다음 스터디 일정 
* 월요일 저녁 7시
