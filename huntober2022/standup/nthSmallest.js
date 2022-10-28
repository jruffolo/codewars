function nthSmallest(arr, n) {
  return arr.sort((a, z) => a - z)[n-1];
}

console.log(nthSmallest([3, 1, 2], 2), 2);
console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3), 7);
console.log(nthSmallest([177, 225, 243, -169, -12, -5, 2, 92], 5), 92);