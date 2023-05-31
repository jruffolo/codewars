function tidyNumber(n){
  const digits = String(n).split('').map(s => +s);
  
  for (let i = 0; i < digits.length - 1; i++) {
    if (digits[i] - digits[i + 1] > 0) return false;
  }
  
  return true;
}
