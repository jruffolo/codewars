function sumMixedArray(arr) {
  return arr.reduce((sum, n) => sum + +n, 0);
}

console.log(sumMixedArray([9, 3, '7', '3']), 22);
console.log(sumMixedArray(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
console.log(sumMixedArray(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);