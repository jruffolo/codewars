function findX(n) {
  let j = n * (2*n - 1);

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i*(2*n) + j;
  }
  
  return sum;
}
