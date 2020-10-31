const primeTester = function (n) {
      if (typeof n !== 'number' || n < 1 || n % 1 !== 0 || n === 1) {
              // 이 if문은 n이 숫자가 아니거나, 2보다 작거나, 정수가 아닌 경우를 처리합니다.
              return false;
                }
        // TODO: 코드를 여기에 작성합니다.
        if ( n === 2 ) {
                return true;
                  }
          
          for ( let i = 3; i * i <= n; i += 2 ) {
                  if ( n % i === 0 ) {
                            return false;
                                }
                    }
            return true;
              // return n % 2 ? primeSieve(Math.floor(Math.sqrt(n)) + 1).includes(n) : false;
};

// Sieve of Atkin [Error]: Overflow of Array.length
const primeSieve = function (start, limit) {
      const wheel = [7,11,13,17,19,23,29,31,37,41,43,47,49,53,59];
        let result = [2, 3, 5];
          let tmp = [];

            if ( limit < 60 ) {
                    result = result.concat(wheel.filter(x=>x<=limit));
                        for ( let i = result.length; i >= 0; i-- ) {
                                  if ( result[i] < start ) {
                                              break;
                                                    } else {
                                                                if ( result[i] !== undefined && result[i] <= limit ) {
                                                                              tmp.unshift(result[i]);
                                                                                      }
                                                                      }
                                      }
                            return tmp;
                              }

              const firstWheel = [1, 13, 17, 29, 37, 41, 49, 53];
                const secondWheel = [7, 19, 31, 43];
                  const thirdWheel = [11, 23, 47, 59];

                    const states = new Array(limit+1).fill(false);
                      let n;

                        for ( let x = 1; x ** 2 < limit; x++ ) {
                                for ( let y = 1; y ** 2 < limit; y++ ) {
                                          n = ( 4 * ( x ** 2 )) + ( y ** 2 );
                                                if ( n <= limit && firstWheel.includes(n%60) ) {
                                                            states[n] = true;
                                                                  }
                                                      n = ( 3 * ( x ** 2 )) + ( y ** 2 );
                                                            if ( n <= limit && secondWheel.includes(n%60) ) {
                                                                        states[n] = true;
                                                                              }
                                                                  n = ( 3 * ( x ** 2 )) - ( y ** 2 );
                                                                        if ( n <= limit && thirdWheel.includes(n%60) ) {
                                                                                    states[n] = true;
                                                                                          }
                                                                            }
                                  }

                          result = result.concat(states.map((value, index)=> (value && index)).filter(x=>x));

                            for ( let i = result.length; i >= 0; i-- ) {
                                    if ( result[i] < start ) {
                                              break;
                                                  } else {
                                                            if ( result[i] !== undefined && result[i] <= limit && primeTester(result[i]) ) {
                                                                        tmp.unshift(result[i]);
                                                                              }
                                                                }
                                      }

                              return tmp;
};
