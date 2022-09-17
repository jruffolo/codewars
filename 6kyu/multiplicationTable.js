multiplicationTable = function(size) {
  let res = [];
  
  // Push an array of size: size where each value is mapped to
  // its (index + 1) to offset 0 indexing, multiplied by the iteration count
  // This results in [1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12] etc
  for (let i = 1; i <= size; i++) {
    res.push(Array.from({length: size}, (_, n) => (n+1) * i));
  }
  
  return res;
}
