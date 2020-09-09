const deepEquals = function (apple, orange) {
  if (Object.keys(apple).length !== Object.keys(orange).length) {
    return false;
  }
  for (let key in apple) {
    if (typeof apple[key] === 'object') {
      return deepEquals(apple[key], orange[key])
    }
    else if (apple[key] !== orange[key]) {
      return false;
    }
  }
  return true;
}