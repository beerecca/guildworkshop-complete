class Main {
  constructor(options) {
    this.fileService = options.fileService;
    this.processor = options.processor;
  }

  process(files) {
    const data = this.fileService.getAllFileData(files);
    const processedData = this.processor(data);
    this.fileService.writeJson(processedData);
  }
}

module.exports = Main;
