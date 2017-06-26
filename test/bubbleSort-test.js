/*jshint esversion: 6 */

const assert = require('chai').assert;
const bubbleSort = require('../bubbleSort');

describe('Bubble sort', function() {
  it('can swap the first two elements of an array', function() {
    assert.deepEqual(bubbleSort([2, 1]), [1, 2]);
    assert.deepEqual(bubbleSort(['b', 'a']), ['a', 'b']);
  });

  it('will not swap the first two elements if they are sorted', function() {
    assert.deepEqual(bubbleSort([1, 2]), [1, 2]);
    assert.deepEqual(bubbleSort(['a', 'b']), ['a', 'b']);
  });

  it('will sort three elements of an array during one pass', function() {
    assert.deepEqual(bubbleSort([3, 1, 2]), [1, 2, 3]);
    assert.deepEqual(bubbleSort(['c', 'a', 'b']), ['a', 'b', 'c']);
  });

  it('will fully sort three elements of an array', function() {
    assert.deepEqual(bubbleSort([2, 3, 1]), [1, 2, 3]);
    assert.deepEqual(bubbleSort(['b', 'c', 'a']), ['a', 'b', 'c']);
  });

  it('will sort longer array examples', function() {
    assert.deepEqual(bubbleSort(['d', 'b', 'a', 'c']), ['a', 'b', 'c', 'd']);
    assert.deepEqual(bubbleSort([2, 3, 1, 5, 7, 7, 9, 20, 55, 100, 34]), [1, 2, 3, 5, 7, 7, 9, 20, 34, 55, 100]);
    assert.deepEqual(bubbleSort(['b', 'd', 'c', 'a', 'z', 't', 'n', 'm']), ['a', 'b', 'c', 'd', 'm', 'n', 't', 'z']);
    assert.deepEqual(bubbleSort([1, 2, 3, 4, 5, 6, 7]), [1, 2, 3, 4, 5, 6, 7]);
  });
});
