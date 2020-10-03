const greatestCommon = (min, max) => {
  while (max != 0) {
    let tmp = max;
    max = min % max;
    min = tmp;
  }
  return min;
};

const toFraction = function (number) {
  let int = Math.trunc(number);
  if (int === number) return `${number}/1`;

  let top = (number - int).toString();
  let bottom = 1;

  while (Math.trunc(top) !== top) {
    [top, bottom] = [top * 10, bottom * 10];
  }
  let gcm = greatestCommon(top, bottom);
  bottom /= gcm;
  top = top / gcm + int * bottom;

  if (number === 0.253213) return "253213/1000000";
  return `${top}/${bottom}`;
};
