function repeats(arr){
  return arr.filter((n, i) => i === arr.indexOf(n) && i === arr.lastIndexOf(n))
            .reduce((sum, n) => sum + n);
};
