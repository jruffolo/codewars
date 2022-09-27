function maxMultiple(divisor, bound){
  // Instead of starting at 0 and counting up,
  // we can start at the bound and count down
  // The first number we encounter that is divisible by our divisor
  // will be our maximum multiple of said divisor that is below our bound
  for (let i = bound; i > 1; i--) {
    if (i % divisor === 0) return i;
  }
}
