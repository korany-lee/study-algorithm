const compose = function (...funcs) { // 여기엔 인자로 function들이 들어가
    return function composition(arg) { 
      return funcs.reduceRight((acc, nextFunc) => {
        return nextFunc(acc)
      }, arg);
    }
  };
  // func1(func2(func3(func4(arg))))
  
  const pipe = function (...funcs) {
    return function pipe(arg) { // 여기엔 인자로 저 welcome시키의 인자가 들어가!
      return funcs.reverse().reduceRight((acc, nextFunc) => {
        return nextFunc(acc)
      }, arg);
    }
  };