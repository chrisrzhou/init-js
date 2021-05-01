export {
  concat,
  curry,
  find,
  i,
  k,
  jsonStringify,
  pipe,
  prop,
  tap,
  test,
  trace,
  validate,
  values,
};

/** Core */
const curry = (f, arity = f.length, ...args) =>
  arity <= args.length ? f(...args) : curry.bind(null, f, arity, ...args);

const i = (x) => x;

const k = curry((x, _y) => x);

const pipe = curry((fs, x) => fs.reduce((y, f) => f(y), x));

/** Array */
const concat = curry((x1, x2) => x1.concat(x2)); // eslint-disable-line unicorn/prefer-spread

const find = curry((p, xs) => xs.find(p));

/** Object */
const prop = curry((s, x) => x[s]);

const {values} = Object;

/** String */
const test = curry((regexp, x) => regexp.test(x));

/** Json */
const jsonStringify = curry((n, x) => JSON.stringify(x, null, n));

/** Impure */
const tap = curry((f, x) => {
  f(x);
  return x;
});

const trace = (s) =>
  pipe([jsonStringify(2), concat(`${s}:\n`), tap(console.log)]);

// Attempts to return f(x) but returns null and logs left(error) if thrown.
// Based on the Either monad.
const validate = curry(([left, f], x) => {
  try {
    return f(x);
  } catch (error) {
    if (left) {
      console.log(left(error));
    }

    return null;
  }
});
