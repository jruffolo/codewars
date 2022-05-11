function listSquared(m, n) {
  
  const getDivisorsSquaredSum = num => {
    let divisors = [1];
    for (let i = 2; i <= num; i++) {
      if (num % i === 0) divisors.push(i);
    }
    return divisors.map(num => num**2).reduce((sum, n) => sum + n, 0);
  };
  
  
  let results = [];
  for (let i = m; i <= n; i++) {
    let sum = getDivisorsSquaredSum(i);
    if (Math.sqrt(sum) % 1 === 0) results.push([i, sum]);
  }
  
  return results;
}
