const TASKS = [
  { name: 'avg', func: require('./tasks/overall-average-rating') }
];

function processor(data, tasks = TASKS) {
  return tasks.reduce((result, { name, func }) => {
    result[name] = func(data);
    return result;
  }, {});
}

processor.TASKS = TASKS;
module.exports = processor;
