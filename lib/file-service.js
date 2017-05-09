const fs = require('fs-extra');

class FileService {
  constructor(options = {}) {
    this.fs = options.fs || fs;
  }

  getAllFileData(files) {
    const promises = files.map(filePath => this.fs.readJson(filePath));
    return Promise.all(promises)
      .then(datas => mapProp(datas, 'items'))
      .then(flatten);
  }

  writeJson(filePath, data) {
    return this.fs.outputJson(filePath, data);
  }
}

function flatten(arrays) {
  return [].concat.apply([], arrays);
}

function mapProp(arr, prop) {
  return arr.map(data => data[prop]);
}

module.exports = FileService;
