const chance = require('chance')();

const processor = require('../../lib/processor');

describe('processor', function() {
  beforeEach(function() {
    this.mockData = [{}, {}];
    this.mockTasks = [
      { name: 'zoo', func: jest.fn() },
      { name: 'boo', func: jest.fn() }
    ];
  });

  it('runs each given task on a list of data', function() {
    processor(this.mockData, this.mockTasks);
    expect(this.mockTasks[0].func).toHaveBeenCalledWith(this.mockData);
    expect(this.mockTasks[1].func).toHaveBeenCalledWith(this.mockData);
  });

  it('returns an object made of given task keys and output', function() {
    const zooMockOutput = chance.sentence();
    const booMockOutput = chance.sentence();
    this.mockTasks[0].func.mockReturnValue(zooMockOutput);
    this.mockTasks[1].func.mockReturnValue(booMockOutput);
    const result = processor(this.mockData, this.mockTasks);
    expect(result.zoo).toBe(zooMockOutput);
    expect(result.boo).toBe(booMockOutput);
  });

  it('uses default task list', function() {
    const data = processor(this.mockData);
    expect(typeof data).toBe('object');
  });
});
