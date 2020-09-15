/** @format */

const compose = function (...fns) {
  return (x) => fns.reduceRight((a, c) => c(a), x);
};

const pipe = function (...fns) {
  return (x) => fns.reduce((a, c) => c(a), x);
};
