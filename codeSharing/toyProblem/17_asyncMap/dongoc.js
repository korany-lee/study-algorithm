const asyncMap = function (tasks, callback) {

  let returnValue = tasks.map(func => new Promise(func))  // pending 상태로 만들어준 것 
  return Promise.all(returnValue).then(arr => callback(arr)) // promise.all은 pending을 fulfilled로 바꿔줌
  
  };