function findOdd(A) {
    let numCountObj = {};
    
    // generate an object that associates a number with its frequency in the array
    for (const num of A) {
      if (numCountObj[num]) { // if the property exists, add 1 to its value
        numCountObj[num]++;
      } else {                // otherwise, create an object property and set its value to 1
        numCountObj[num] = 1;
      }
    }
  
    // iterate through that object and return the odd value
    for (const numProp in numCountObj) {
      if (numCountObj[numProp] % 2 === 1){
        return Number(numProp);
      }
    }
    
  }