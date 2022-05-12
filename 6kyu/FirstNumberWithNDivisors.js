function findMinNum(num) {
  const getNumDivisors = n => {
    let divisors = [1];
    for (let i = 2; i <= n; i++) {
      if (n % i === 0) divisors.push(i);
    }
    return divisors.length;
  };
  
  let count = 1;
  while (true) {
    if (getNumDivisors(count) === num) return count;
    count++;
  }
}
