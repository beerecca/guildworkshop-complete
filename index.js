const Main = require('./lib/main');
const FileService = require('./lib/file-service');
const processor = require('./lib/processor');

const main = new Main({
  fileService: new FileService(),
  processor: processor
});

console.log('processing...');
main
  .process(['./data/data1.json', './data/data2.json', './data/data3.json'])
  .then(() => {
    console.log('done!');
  })
  .catch(err => {
    console.error(err);
  });
