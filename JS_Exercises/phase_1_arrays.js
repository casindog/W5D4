Array.prototype.uniq = function() {
  let result = [];
  this.forEach(function(ele){
    if (result.includes(ele) === false) {
      result.push(ele);
    }
  });
  return result;
};

Array.prototype.twoSum = function() {
  let result = [];
  this.forEach(function(ele, index, array){
    let offset = index+1;
    array.slice(offset).forEach(function(ele2, index2){
      if(ele+ele2 === 0){
        result.push([index, index2+offset]);
      }
    });
  });
  return result;
};

Array.prototype.transpose = function() {
  let result = [];
  for (i = 0; i < this.length; i++) {
    let arr = [];
    for (j = 0; j < this.length; j++) {
      arr.push(this[j][i]);
    }
    result.push(arr);
    arr = [];
  }
  return result;
};
