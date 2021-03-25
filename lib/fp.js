export { I, concat, curry, find, isTruthy, jsonParse, jsonStringify, pipe, tap, test, trace, validate, values };

/** core */
const I = (x) => x;

const curry = (f, arity = f.length, ...args) =>
  arity <= args.length ? f(...args) : curry.bind(null, f, arity, ...args);

const pipe = curry((fs, x) => fs.reduce((y, f) => f(y), x));

/** array */
const concat = curry((x1, x2) => x1.concat(x2));

const find = curry((p, xs) => xs.find(p));

/** object */
const values = Object.values;

/** string */
const test = curry((regexp, x) => regexp.test(x));

/** json */
const jsonParse = JSON.parse;

const jsonStringify = curry((n, x) => JSON.stringify(x, null, n));

/** alias */
const isTruthy = I;

/** impure */
const tap = curry((f, x) => {
  f(x);
  return x;
});

const trace = (s) =>
  pipe([jsonStringify(2), concat(`${s}:\n`), tap(log)]);

// attempts to return f(x) but returns null and logs the error if thrown
// loosely follows the Either monad
const validate = curry(([e, f], x) => {
  try {
    return f(x);
  } catch (error) {
    console.log(e || error.message);
    return null;
  }
});
