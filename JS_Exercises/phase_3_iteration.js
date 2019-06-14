function bubble_sort(arr) {
  let sorted = true

  while (sorted) {
    sorted = false;
    arr.forEach(function(ele,idx) {
      // does javascript not error out when keyed ele is outside the range of an array?
      if (arr[idx+1] < arr[idx]) { 
        let swap1 = arr[idx];
        let swap2 = arr[idx+1];
        arr[idx] = swap2;
        arr[idx+1] = swap1;
        sorted = true;
      };
    });
  };
  return arr;
    
  }

  function substrings(str) {
    let output = [];
    for (i=0; i<str.length; i++) {
      for (j=0; j<str.length; j++) {
        if (i <= j) {
          // javascript version
          output.push(str.substring(i,j+1));
        }
      }
    }
    // output = output.uniq();
    return output;
  }