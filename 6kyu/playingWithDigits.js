function digPow(n, p){
  const digits = n.toString().split('');
  let powerSum = digits.reduce((sum, num, i) => sum + Math.pow(Number(num), (p + i)), 0);
  let evenlyDivisible = n % powerSum === 0 || powerSum % n === 0;
  
  if (evenlyDivisible) return n % powerSum === 0 ? n / powerSum : powerSum / n;
  else return -1;
}
