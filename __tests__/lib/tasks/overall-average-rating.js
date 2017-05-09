const Fixtures = require('../../../__mocks__/fixtures');
const averageTask = require('../../../lib/tasks/overall-average-rating');

describe('task/overall-average-rating', function() {
  function makeItemsWithRatings(ratings) {
    return ratings.map(rating => Fixtures.feedbackItem({ rating }));
  }

  it('calculates an average overall rating of all items', function() {
    expect(averageTask(makeItemsWithRatings([1, 2, 3, 4, 5]))).toBe(3);
    expect(averageTask(makeItemsWithRatings([1, 2]))).toBe(1.5);
    expect(averageTask(makeItemsWithRatings([1, 4]))).toBe(2.5);
  });
});
