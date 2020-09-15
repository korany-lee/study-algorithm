const powerSet = function (str) {
  // TODO: Your code here!
  let obj = {}
  let arr;
  let result = [[]];

  for(let i = 0; i < str.length; i++) {
    obj[str[i]] = 1;
  }
  
  arr = Object.keys(obj); 
  for(let i = 0; i < arr.length; i++) {
    let length = result.length; {
      for(let j = 0; j < length; j++) {
        result.push(result[j].concat(arr[i]));
      }
    }
  }
  return result.map(x => String(x.join('')));
};
