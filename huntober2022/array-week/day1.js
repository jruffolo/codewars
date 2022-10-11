function checkEquality(arr1, arr2, deep = false) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (!deep && !checkEquality(arr1[i], arr2[i], true)) {
      return false;
    } else if (deep && arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

// each of these arrays have 3 nested arrays of 3 strings each 
const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']]

const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']]
const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']]

// if we were to use our function to compare all the possible pairs
// ONLY arr1 vs arr2 would return true

console.log(checkEquality(arr1, arr2)) // true
console.log(checkEquality(arr1, arr3)) // false
console.log(checkEquality(arr1, arr4)) // false
// etc.