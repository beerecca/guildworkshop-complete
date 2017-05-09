const TASKS = [{ name: 'avg', func: averager }];

function processor(data, tasks = TASKS) {
  return tasks.reduce((result, { name, func }) => {
    result[name] = func(data);
    return result;
  }, {});
}

function averager(data) {
  return 'some average';
}

processor.TASKS = TASKS;
module.exports = processor;
