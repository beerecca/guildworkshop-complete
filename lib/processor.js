function processor(data, tasks) {
  return tasks.reduce((result, [key, task]) => {
    result[key] = task(data);
    return result;
  }, {});
}

module.exports = processor;
