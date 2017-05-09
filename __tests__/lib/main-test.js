const chance = require('chance')();

const Main = require('../../lib/main');

describe('Main', function() {
  beforeEach(function() {
    this.fileService = {
      getAllFileData: jest.fn().mockReturnValue(Promise.resolve()),
      writeJson: jest.fn().mockReturnValue(Promise.resolve())
    };
    this.processor = jest.fn();
    this.main = new Main({
      fileService: this.fileService,
      processor: this.processor
    });
  });

  describe('#process', function() {
    it('fetches the given file names', function(done) {
      const files = ['foo/bar.json', 'bar/foo.json'];
      this.main
        .process(files)
        .then(() => {
          expect(this.fileService.getAllFileData).toHaveBeenCalledWith(files);
          done();
        })
        .catch(done.fail);
    });

    it('processes fetched data', function(done) {
      const mockFileData = [{}, {}];
      this.fileService.getAllFileData.mockReturnValue(
        Promise.resolve(mockFileData)
      );
      this.main
        .process([])
        .then(() => {
          expect(this.processor).toHaveBeenCalledWith(mockFileData);
          done();
        })
        .catch(done.fail);
    });

    it('writes data to file', function(done) {
      const mockSummary = {};
      this.processor.mockReturnValue(mockSummary);
      this.main
        .process([])
        .then(() => {
          expect(this.fileService.writeJson).toHaveBeenCalledWith(
            Main.SUMMARY_FILEPATH,
            mockSummary
          );
          done();
        })
        .catch(done.fail);
    });
  });
});
