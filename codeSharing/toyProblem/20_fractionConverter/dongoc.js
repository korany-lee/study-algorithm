const toFraction = function (number) {
    let negFlag = false;
    let splited = number.toString().split('.');
    // 정수일 경우
    if (splited.length === 1 || splited[1] === '0') return `${number}/1`;
    // 음수일 경우
    if (splited[0].includes('-')) {
      negFlag = true;
      splited[0] = splited[0].slice(1);
    } 
    
    let [numerator, denominator] = splited;
    numerator = Number(numerator + denominator)
    denominator = Math.pow(10, denominator.length)
    
    let gcd = getGcd(numerator, denominator); 
    return negFlag ? `-${numerator / gcd}/${denominator / gcd}` : `${numerator / gcd}/${denominator / gcd}`
  };
  
  // 유클리드 호제법으로 최대공약수 구하기
  function getGcd (a, b) {
    if (a < b) {
      [a, b] = [b, a] // a가 더 작다면 자리 바꾸기
    }
    if (b === 0) return a;
    return getGcd(b, a % b);
  }
  
  
  
  /**
  0.5 -> 5/10 -> 1/2
  3.0 -> 30/10 -> 3/1
  2.5 -> 25/10 -> 5/2
  재귀를 써야하는 걸까? 혹은 와일문?
  
  
  .을 기준으로 스플릿해서 랭스가 1이면 그냥 정수라는 뜻 -> 2/1 형태로 리턴
  [1]의 개수만큼 10을 곱해줘
  자기자신부터 2까지 역순으로 내려가면서 공약수를 찾기 -> 나눠줘! 와일문의 조건은?
   */
  
  /*
  // 시간초과 최대공약수 구하기
  let end = Math.ceil(gcd / 2)
    while (gcd > end) {
      if (numerator % gcd === 0 && denominator % gcd === 0) {
        [numerator, denominator] = [numerator / gcd, denominator / gcd]
        gcd--;
      }
    }
   */
  
  /*
  유클리드 호제법 : 
  function gcdlcm(a, b) {
      var answer = [];
      var minNum = Math.min(a, b);
      var maxNum = Math.max(a, b);
      answer[0] = gcd(minNum, maxNum);
      answer[1] = lcm(minNum, maxNum);
      return answer;
  }
  // 최대공약수
  function gcd(minNum, maxNum){
    return (minNum % maxNum) === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
  }
   */