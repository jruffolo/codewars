function zeros (n) {
  const kMax = Math.floor(Math.log(n) / Math.log(5));
  let trailingZeros = 0;
  
  for (let k = 1; k <= kMax; k++) {
    trailingZeros += Math.floor(n / Math.pow(5, k))
  }
  
  return trailingZeros;
}

// trailing 0s of factorial n! is:
// sum from k = 1 to kMax where kMax = floor( log5(n) ) of:
// floor( n / 5^k )
