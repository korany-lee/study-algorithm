const firstNonRepeatedCharacter = function(string) {
  let before, after;
  for (let i = 1; i < string.length; i++) {
    before = string.slice(0, i);
    after = string.slice(i + 1);

    if (!before.includes(string[i]) && !after.includes(string[i])) {
      return string[i];
    }
  }
  return null;
};
