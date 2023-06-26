function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1;
    
    // function that returns an array containing the minimum and maximum lengths of array elements
    const findMinMax = (arr) => {
      let min = arr[0];
      let max = arr[0];
      
      for (let string of arr) {
        if (string.length < min.length) {
          min = string;
        } else if (string.length > max.length) {
          max = string;
        }
      }
      return [min.length, max.length];
    }
    
    let a1MinMax = findMinMax(a1);
    let a2MinMax = findMinMax(a2);
    
    let diff1 = Math.abs(a1MinMax[0] - a2MinMax[1]);
    let diff2 = Math.abs(a1MinMax[1] - a2MinMax[0]);
    
    return diff1 > diff2 ? diff1 : diff2;
  }