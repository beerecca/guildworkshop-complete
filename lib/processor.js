const TASKS = [['avg', processor.averager]];

function processor(data, tasks = TASKS) {
  return tasks.reduce((result, [key, task]) => {
    result[key] = task(data);
    return result;
  }, {});
}

processor.averager = function averager(data) {
  return 'some average';
};

module.exports = processor;
