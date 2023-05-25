function sumTriangularNumbers(n) {
  let tri = 0;
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    tri += i;
    sum += tri;
  }
  
  return n < 0 ? 0 : sum;
}
