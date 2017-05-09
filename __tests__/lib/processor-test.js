const chance = require('chance')();

const processor = require('../../lib/processor');

describe('processor', function() {
  beforeEach(function() {
    this.mockData = [{}, {}];
    this.mockTasks = [['zoo', jest.fn()], ['boo', jest.fn()]];
  });

  it('runs each given task on a list of data', function() {
    processor(this.mockData, this.mockTasks);
    expect(this.mockTasks[0][1]).toHaveBeenCalledWith(this.mockData);
    expect(this.mockTasks[1][1]).toHaveBeenCalledWith(this.mockData);
  });

  it('returns an object made of given task keys and output', function() {
    const zooMockOutput = chance.sentence();
    const booMockOutput = chance.sentence();
    this.mockTasks[0][1].mockReturnValue(zooMockOutput);
    this.mockTasks[1][1].mockReturnValue(booMockOutput);
    const result = processor(this.mockData, this.mockTasks);
    expect(result.zoo).toBe(zooMockOutput);
    expect(result.boo).toBe(booMockOutput);
  });
});
