const compose = (...fns) =>
  (arg) => //arg는 나중에 받을 매개변수
  fns.reduceRight((acc, fn) => (fn ? fn(acc) : acc), arg); 

//이해한 곳까지 적어봅니다.
//일단 compose를 이해해야 pipe를 이해할 수 있으니까..(reverse 관계인듯)
/*
let greet = function(name) {return 'hi: ' + name;}
let exclaim = function(statement) { return statement.toUpperCase() + '!';}
1) 그냥 확인
  console.log(greet(exclaim('koeun'))) //"hi: KOEUN!"
2) 변수에 담아서 실행 
let welcome = function(x) {
  greet(exclaim(x));
} 
||
let welcome = x => greet(exclaim(x)); 나는 아직 화살표에 익숙하지 않으니 계속 연습해야해,,
welcome('korany') // "hi: KORANY!"

근데 이 경우는 합성된 함수가 두개일 경우만을 생각한 방법이고,
이 문제의 목적은 다수의 그러니까 몇개인지 모르는 합성함수들을 잘 조작해서
compose에서 리턴시키는 것이지,,
그러려면 compose에 매개변수로 들어온 것들을 하나씩 실행해서 넘겨줘야하는데,
위처럼 실행되려면 들어온 값이 처음에 exclaim에서 실행되고 그게 greet의 name이 되어줘야 하는것이다.
*/
const pipe = (...fns) =>
  (arg) => 
  fns.reduce((acc, fn) => (fn ? fn(acc) : acc), arg);