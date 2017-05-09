const chance = require('chance')();

const Main = require('../../lib/main');

describe('Main', function() {
  beforeEach(function() {
    this.fileService = {
      getAllFileData: jest.fn(),
      writeJson: jest.fn()
    };
    this.processor = jest.fn();
    this.main = new Main({
      fileService: this.fileService,
      processor: this.processor
    });
  });

  describe('#process', function() {
    it('fetches the given file names', function() {
      const files = ['foo/bar.json', 'bar/foo.json'];
      this.main.process(files);
      expect(this.fileService.getAllFileData).toHaveBeenCalledWith(files);
    });

    it('processes fetched data', function() {
      const mockFileData = [{}, {}];
      this.fileService.getAllFileData.mockReturnValue(mockFileData);
      this.main.process([]);
      expect(this.processor).toHaveBeenCalledWith(mockFileData);
    });

    it('writes data to file', function() {
      const mockSummary = {};
      this.processor.mockReturnValue(mockSummary);
      this.main.process([]);
      expect(this.fileService.writeJson).toHaveBeenCalledWith(mockSummary);
    });
  });
});
