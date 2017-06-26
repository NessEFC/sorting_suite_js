/*jshint esversion: 6 */
/*jshint loopfunc:true */

function bubbleSort(list) {
  for(var i = 0; i < list.length; i++) {
    list.map(function(previous, n) {
      var current = list[n + 1];
      if(previous > current) {
        [list[n], list[n + 1]] = [current, previous];
      }
    });
  }
  return list;
}

module.exports = bubbleSort;
