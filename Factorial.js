function factorial(n)
{
  if (n > 12 || n < 0) {
    throw new RangeError("Argument must be between 0 and 12");
  }
  
  let factorial = 1;
  
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  
  return factorial;
}