const { map, prop, pipe, average } = require('../util');

const mapRating = map(prop('rating'));

module.exports = pipe(mapRating, average);
