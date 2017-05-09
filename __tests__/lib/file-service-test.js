const FileService = require('../../lib/file-service');

describe('FileService', function() {
  beforeEach(function() {
    this.files = ['foo/bar.json', 'bar/foo.json'];
    this.firstReturnValue = { items: [{ foo: 'bar' }] };
    this.secondReturnValue = { items: [{ bar: 'baz' }] };
    const readJsonMock = jest
      .fn()
      .mockReturnValueOnce(this.firstReturnValue)
      .mockReturnValueOnce(this.secondReturnValue);
    this.fs = { readJson: readJsonMock };
    this.fileService = new FileService({
      fs: this.fs
    });
  });

  describe('#getAllFileData', function() {
    it('fetches given files', function(done) {
      this.fileService
        .getAllFileData(this.files)
        .then(() => {
          expect(this.fs.readJson).toHaveBeenCalledWith(this.files[0]);
          expect(this.fs.readJson).toHaveBeenCalledWith(this.files[1]);
          done();
        })
        .catch(done.fail);
    });

    it('combines and returns items as single array', function(done) {
      this.fileService
        .getAllFileData(this.files)
        .then(result => {
          expect(result[0]).toBe(this.firstReturnValue.items[0]);
          expect(result[1]).toBe(this.secondReturnValue.items[0]);
          done();
        })
        .catch(done.fail);
    });
  });
});
