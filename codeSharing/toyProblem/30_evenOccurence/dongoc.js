const evenOccurrence = function (arr) {
  if (arr.length <= 1) return null
  
  let [head, ...tail] = arr; 
  let others = [];
  for(el of tail) {
    if (el !== head) {
      others.push(el)
    }
  }
  if ((tail.length - others.length) % 2 === 1) {
    return head
  } else {
    let result = evenOccurrence(others)
    if (result)
    return result
  }
  return null
}
