module.exports = function averageTask(items) {
  const total = items.reduce((acc, item) => acc + item.rating, 0);
  return total / items.length;
};
