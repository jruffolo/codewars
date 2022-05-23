var maxSequence = function(arr){
    // guard clauses for completely negative/positive set of numbers
    if (Math.max(...arr) < 0) return 0;
    if (Math.min(...arr) >= 0) return arr.reduce((sum, num) => sum + num, 0);
    let sliceArr = [];
    
    // iterate over array and push every possible contiguous slice to a new array
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length + 1; j++) {
        sliceArr.push(arr.slice(i, j));
      }
    }
    
    // map each array slice to its sum (using reduce)
    const mapToSum = sliceArr.map(slice => slice.reduce((sum, num) => sum + num, 0));
  
    // return the maximum sum
    return Math.max(...mapToSum);
  }