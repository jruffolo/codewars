function getAverage(arr) {
  return Math.floor(arr.reduce((sum, n) => sum + n, 0) / arr.length);
}

console.log(getAverage([2,2,2,2]),2)
console.log(getAverage([1,2,3,4,5,]),3);
console.log(getAverage([1,1,1,1,1,1,1,2]),1)