const pipe = (...funcs) => val => reduce((v, fn) => fn(v), val)(funcs);
const reduce = (accumulator, start) => arr => arr.reduce(accumulator, start);
const map = iteratee => arr => arr.map(iteratee);

const prop = prop => obj => obj[prop];
const size = prop('length');

const add = (x, y) => x + y;
const divide = (x, y) => x / y;
const sum = items => reduce(add, 0)(items);
const average = items => divide(sum(items), size(items));

const mapRating = map(prop('rating'));

module.exports = pipe(mapRating, average);
