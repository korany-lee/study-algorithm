/** @format */

const powerSet = function (str) {
  return [...new Set(str)]
    .reduceRight((a, c) => [...a, ...a.map((e) => [c, ...e].join(''))], [['']])
    .flat()
    .sort();
};
