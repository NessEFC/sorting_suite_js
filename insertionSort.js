/*jshint esversion: 6 */
/*jshint loopfunc:true */

function insertionSort(list) {
  for(var i = 1; i < list.length; i++) {
    while(list[i] < list[i - 1]) {
      if(list[i] < list[i - 1]) {
        [list[i - 1], list[i]] = [list[i], list[i - 1]];
      }
      i--;
    }
  }
  return list;
}

module.exports = insertionSort;
