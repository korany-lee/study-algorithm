const rockPaperScissors = function() {
  let [r,s,p] = [["rock"],["paper"],["scissors"]];
  let result = [];
  let args = arguments[0]; //들어온 인자값

  for(let i = 0; i < args; i++) {
    result.push(r);
  }
  for(let i = 0; i < args; i++) {
    result.push(s);
  }
  for(let i = 0; i < args; i++) {
    result.push(p);
  }
  return result;
};

module.exports = rockPaperScissors;
