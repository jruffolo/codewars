function solve(arr) {
  return arr.map(a => new Set(a).size)
            .reduce((prod, n) => prod * n, 1);
};
