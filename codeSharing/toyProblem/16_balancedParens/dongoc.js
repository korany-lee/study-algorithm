// stack의 개념
const balancedParens = function(input) {
    let barcket = {
      '(': ')',
      '{': '}',
      '[': ']'
    }
    let onlyBracket = input.split('').filter(letter => Object.entries(barcket).flat().includes(letter));
  
    const spliceBracket = (onlyBracket) => {
      let originalLength = onlyBracket.length
      for (let opened in barcket) {
        for (let i = 0; i < onlyBracket.length - 1; i++) {
          if (onlyBracket[i] === opened && onlyBracket[i + 1] === barcket[opened]) {
            onlyBracket.splice(i, 2);
          };
        }
      }
      if (onlyBracket.length === 0) return true; 
      if (originalLength === onlyBracket.length) return false; 
      return spliceBracket(onlyBracket);
    }
    return spliceBracket(onlyBracket)
  };
