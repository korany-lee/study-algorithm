# Immersive Toy Problem

## 006.commonCharacters

Date: 200906

Roles: let todaysRole = { 진행자: 폴님, 타이머: 하정님, 서기: 규하님, 리액션1: 고은님, 리액션2: 시영님}

Contents:


# 연초피다 걸려서 삭발한 폴님
![연초피다 걸려서 삭발한 폴님](../images/bowlPaul.png)



## A. Code Sharing

### 1. 고은님

- `return arguments.callee.length`로 파라미터의 갯수를 출력가능
- 고은님: 호출을 다시 해야하나? 싶어서 함수를 새로 선언하고 사용하였다. Advanced 인 여러개의 문자열에 대해 해결을 못했다.
- 규하님: 함수재호출과 base case, recursive case만 잘 구현하면 여러 파라미터에 대한 것도 해결할 수 있을 거다.
- 고은님: 저는 재귀로 풀려고 했습니다.
- 시영님: Rest parameter 개념이 추가가 돼야할 거 같은데... 어떤가요 규하님? ( 규하님: 씨익, Watch and learn )


### 2. 폴님

- 폴님: regular expression 써가지고, 빈 문자열을 없애줬다. 나머지는 이중 for문으로 해결하였다.
- 시영님: new Set이 없어도 되는 거 아닌가요?
- 규하님: new Set 없이 spread syntax만 쓰면, 중복되는 문자를 제거하지 못할 거 같아요.

- 폴님: 규하님은 박수 안쳐줍니까?
- 규하님: 와아아아앙 ㅏ짝짝ㅉ가짝
### 3. 송하정

- 하정님: new Set 사용법에 대해 블로그를 보았다.
- 모두: 와 마스터송... 대단... 그저 감탄...

### 4. 시영님

- 시영님: regExp 사용하였다. arr[0]과 비교하고 arr[0]을 shift로 없애주고 계속 반복하였다. 폴님이나 하정님이 method를 사용한 걸 풀어서 썼다
- 폴님: 시영님 본인이 근간이다?
- 시영님: 당근

### 5. 박규하

- 규하님: 그냥 시영님 코드를 recursion으로 풀었다.



## B. 일정정리

### 다음주 스터디에 관하여

- 2020년 9월 9일(수)
- 2020년 9월 11일(금)
