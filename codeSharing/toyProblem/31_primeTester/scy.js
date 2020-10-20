const primeTester = function (n) {
  if (typeof n !== "number" || n < 1 || n % 1 !== 0) {
    // 이 if문은 n이 숫자가 아니거나, 1보다 작거나, 정수가 아닌 경우를 처리합니다.
    return false;
  }
  // TODO: 코드를 여기에 작성합니다.
  if (n === 2) return true;
  if (n % 2 === 0 || n === 1) return false;

  let divideNum = 3;
  let limit = Math.sqrt(n);

  while (limit >= divideNum) {
    if (n % divideNum === 0) return false;
    divideNum += 2;
  }
  return true;
};

const primeSieve = function (start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    if (primeTester(i)) arr.push(i);
  }
  return arr;
};

/*
function sieveOfAtkin(limit){
   var limitSqrt = Math.sqrt(limit);
   var sieve = [];
   var n;

   //prime start from 2, and 3
   sieve[2] = true;
   sieve[3] = true;

   for (var x = 1; x <= limitSqrt; x++) {
       var xx = x*x;
       for (var y = 1; y <= limitSqrt; y++) {
           var yy = y*y;
           if (xx + yy >= limit) {
             break;
           }
           // first quadratic using m = 12 and r in R1 = {r : 1, 5}
           n = (4 * xx) + (yy);
           if (n <= limit && (n % 12 == 1 || n % 12 == 5)) {
               sieve[n] = !sieve[n];
           }
           // second quadratic using m = 12 and r in R2 = {r : 7}
           n = (3 * xx) + (yy);
           if (n <= limit && (n % 12 == 7)) {
               sieve[n] = !sieve[n];
           }
           // third quadratic using m = 12 and r in R3 = {r : 11}
           n = (3 * xx) - (yy);
           if (x > y && n <= limit && (n % 12 == 11)) {
               sieve[n] = !sieve[n];
           }
       }
   }

   // false each primes multiples
   for (n = 5; n <= limitSqrt; n++) {
       if (sieve[n]) {
           x = n * n;
           for (i = x; i <= limit; i += x) {
               sieve[i] = false;
           }
       }
   }

   //primes values are the one which sieve[x] = true
   return sieve;
}

// This converter make sit possible to get an array of actual prime numbers numbers instead ofa list of falsy and true values whose indexes are the prime numbers itself.
function convertSieve(sieve) {
  var ret = [];
  sieve.forEach(function(num, index) {
    if (num) {
      ret.push(index);
    }
  });
  return ret;
}

*/
