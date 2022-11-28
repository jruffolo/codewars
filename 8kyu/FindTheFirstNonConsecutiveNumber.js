function firstNonConsecutive (arr) {
  
    //Function to check whether or not two numbers are exactly 1 apart
    const isConsec = (num, prevNum) => {
      if (num - 1 === prevNum) return true;
      else return false;
    }
    
    //Iterate over array and check to return first non-consecutive number
    for (let i = 1; i < arr.length; i++) {
      if (isConsec(arr[i], arr[i-1]) === false) return arr[i];
    }
    
    //If all numbers are consecutive, return null
    return null;
  }