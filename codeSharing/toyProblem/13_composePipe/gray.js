const compose = function (...args) {
	// TODO: Your code here!
	// args = args.reverse();
	return (n) => args.reduceRight((a, c) => c(a), n);
};

const pipe = function (...args) {
	// TODO: Your code here!
	return (n) => args.reduce((a, c) => c(a), n);
};

module.exports = compose;
module.exports = pipe;

/**
const compose = function (...args) {
  TODO: Your code here!
  return n => {
    let f;
    let index = args.length - 1;

    while ( index >= 0 ) {
      f = args[index];
      n = f(n);
      index--;
    }
    return n;
  };
};
 */

/**
welcome = compose(greet, exclaim);
welcome('pih')
const statement = (a)=>(a.toUpperCase()+'!');
const greet = (name) => ('hi! ' + name );
const compose = (greet, statement) => {
  return (name)=>{return greet(statement(name))}
}
let welcome = compose(greet, statement);
welcome('name');
 */
