const SUMMARY_FILEPATH = './summary.json';

class Main {
  constructor(options) {
    this.fileService = options.fileService;
    this.processor = options.processor;
  }

  process(files) {
    return this.fileService
      .getAllFileData(files)
      .then(this.processor)
      .then(result => this.fileService.writeJson(SUMMARY_FILEPATH, result));
  }
}

Main.SUMMARY_FILEPATH = SUMMARY_FILEPATH;
module.exports = Main;
