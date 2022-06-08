function findNb(m) {
  // Sum of cubes is equal to the square of sum i.e. 1^3 + 2^3 + 3^3 + 4^3 = (1+2+3+4)^2 = 100
  // Therefore, we know that if our number m has an integer square root, there must be a valid solution
  // This makes our problem easier, as now we just have to find the simple summation that is equal to our square root
  // sum(1 + 2 + ... + n) = 1/2(n^2 + n) so we can solve our problem with the quadratic formula
  // n^2 + n - 2(sqrt of m) = 0 --> plug into quadratic formula and we get:
  // (-1 + sqrt(1 + 4*2*(sqrt of m))) / 2 = n (note: since we are working with volume it's assumed we won't be given a negative m)
  // So, to solve our problem, we simply check if m has an integer square root
  // If not, we return -1. If so, we plug that square root into our quadratic equation and return n (if it is also an integer)
  
  const isInt = n => n % 1 === 0;
  const sqrt = Math.sqrt(m);
  const quadratic = (-1 + Math.sqrt(1 + (8 * Math.sqrt(m)))) / 2;
  
  return isInt(sqrt) && isInt(quadratic) ? quadratic : -1;
}
