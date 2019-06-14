Array.prototype.myEach = function(callback) {
  for (i=0; i<this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  let result = [];
  this.myEach( function(ele) {
    result.push(callback(ele));
  });
  return result;
};

Array.prototype.myReduce = function(callback, acc) {
  if (acc === null) {
    acc = this[0];
    this.slice(1).myEach(function (ele) {
      acc = callback(acc, ele);
      // acc = acc + el
    });
  } else {
    this.myEach(function (ele) {
      acc = callback(acc, ele);
    // acc = acc + el
    });
  }
  return acc;  
};

// Array.prototype.myReduce = function(callback) {
//   let total = this[0];
//   this.slice(1).myEach(function (acc, ele) {
//     total += callback(ele);
//     });
//   return total;
// };

