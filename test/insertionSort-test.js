/*jshint esversion: 6 */

const assert = require('chai').assert;
const insertionSort = require('../insertionSort');

describe('Insertion sort', function() {
  it('can sort the first two elements of an array', function() {
    assert.deepEqual(insertionSort([2, 1]), [1, 2]);
    assert.deepEqual(insertionSort(['b', 'a']), ['a', 'b']);
    assert.deepEqual(insertionSort(['a', 'b']), ['a', 'b']);
  });

  it('can sort an array of three elements', function() {
    assert.deepEqual(insertionSort([2, 3, 1]), [1, 2, 3]);
    assert.deepEqual(insertionSort(['b', 'c', 'a']), ['a', 'b', 'c']);
  });

  it('will sort longer array examples', function() {
    assert.deepEqual(insertionSort(['d', 'b', 'a', 'c']), ['a', 'b', 'c', 'd']);
    assert.deepEqual(insertionSort([2, 3, 1, 5, 7, 7, 9, 20, 55, 100, 34]), [1, 2, 3, 5, 7, 7, 9, 20, 34, 55, 100]);
    assert.deepEqual(insertionSort(['b', 'd', 'c', 'a', 'z', 't', 'n', 'm']), ['a', 'b', 'c', 'd', 'm', 'n', 't', 'z']);
    assert.deepEqual(insertionSort([1, 2, 3, 4, 5, 6, 7]), [1, 2, 3, 4, 5, 6, 7]);
  });
});
