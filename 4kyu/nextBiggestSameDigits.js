function nextBigger(n){
  if (n < 10) return -1;
  
  const digits = String(n).split('');
  
  // check number from lowest to highest place value
  // i.e. 621432: 32 --> 432 --> 1432 --> 21432 --> 621432
  // once swapper function comes across the right condition, concatenate the beginning of the number to the newly sorted part
  // for the example number 621432, you will concatenate [6,2] with [2,1,3,4], returning 622134
  for (let i = 0; i < digits.length; i++) {
    if (swapper(digits.slice(-2 - i))) {
      return Number(digits.slice(0, digits.length - 2 - i).concat(swapper(digits.slice(-2 - i))).join(''));
    }
  }
  
  return -1;
}

// when the first digit of the array is lower than the second, put the second highest digit in the array FIRST
// then concatenate the rest of the digits sorted from lowest to highest
// i.e. for number 621432:
//      32 --> 3 < 2 ? false
//      432 --> 4 < 3 ? false
//      1432 --> 1 < 4 ? true! put 2 (second highest number) + 134 (the rest of the numbers, sorted) --> return [2,1,3,4]
function swapper(arr) {
  const [first, second] = [+arr[0], +arr[1]];
  const sortedArr = arr.sort((a, z) => +a - +z);
  const secondLargest = sortedArr.splice(sortedArr.indexOf(sortedArr.filter(num => num > first)[0]), 1);
  
  if (first < second) {
    return secondLargest.concat(sortedArr);
  } else {
    return false;
  }
}
