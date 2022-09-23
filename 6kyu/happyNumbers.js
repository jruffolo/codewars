function isHappy(n) {
  let seen = [];
  
  while (n !== 1) {
    n = happyize(n);
    
    if (seen.includes(n)) return false;
    
    seen.push(n);
  }
  
  return true;
}

function happyize(n) {
  const digits = String(n).split('');
  return digits.map(d => Math.pow(+d, 2))
               .reduce((sum, n) => sum + n, 0);
}
