const FileService = require('../../lib/file-service');

describe('FileService', function() {
  beforeEach(function() {
    this.fs = {
      readJson: jest.fn().mockReturnValue(Promise.resolve()),
      outputJson: jest.fn().mockReturnValue(Promise.resolve())
    };
    this.fileService = new FileService({
      fs: this.fs
    });
  });

  describe('#getAllFileData', function() {
    beforeEach(function() {
      this.files = ['foo/bar.json', 'bar/foo.json'];
      this.firstReturnValue = { items: [{ foo: 'bar' }] };
      this.secondReturnValue = { items: [{ bar: 'baz' }] };
      this.fs.readJson
        .mockReturnValueOnce(this.firstReturnValue)
        .mockReturnValueOnce(this.secondReturnValue);
    });

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

  describe('#writeJson', function() {
    it('writes given object to given filepath', function(done) {
      const data = { foo: 'bar' };
      const filePath = './foo.json';
      this.fileService
        .writeJson(filePath, data)
        .then(() => {
          expect(this.fs.outputJson).toHaveBeenCalledWith(filePath, data);
          done();
        })
        .catch(done.fail);
    });
  });
});
