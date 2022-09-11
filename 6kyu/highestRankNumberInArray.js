function highestRank(arr){
  // create an array with as many indices as the largest number in arr
  // set all values to 0
  let frequencyArr = Array(Math.max(...arr) + 1).fill(0);
  
  // increment count at each index to track frequency of each number
  for (const n of arr) {
    frequencyArr[n]++;
  }

  // return the last index of the largest frequency
  // this will consequentially be the largest of the most frequent numbers
  return frequencyArr.lastIndexOf(Math.max(...frequencyArr));
}
