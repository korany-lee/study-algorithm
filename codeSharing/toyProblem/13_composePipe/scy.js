const compose = function (...args) {
  return (y) => args.reduceRight((acc, curr) => curr(acc), y);
};

const pipe = function (...args) {
  return (y) => args.reduce((acc, curr) => curr(acc), y);
};
