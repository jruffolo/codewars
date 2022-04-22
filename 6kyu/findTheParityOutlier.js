function findOutlier(integers){
  return integers.filter(n => Math.abs(n) % 2 === 0).length === 1 ? integers.filter(n => Math.abs(n) % 2 === 0)[0] : integers.filter(n => Math.abs(n) % 2 === 1)[0];
}
