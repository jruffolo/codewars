function deleteNth(arr,n){
    let numCount = {};
    let newArr = [];
    
    // keep tally of entry occurances in an object, push to new array only if count < n
    for (const num of arr) {
      if (numCount[num] === undefined) {
        numCount[num] = 1;
        newArr.push(num);
      } else if (numCount[num] < n) {
        numCount[num] += 1;
        newArr.push(num);
      }
    }
    
    return newArr;
  }