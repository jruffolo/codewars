function thirt(n) {
  const pattern = [1, 10, 9, 12, 3, 4];
  const meshSum = num => {
    return String(num).split('').reverse().reduce((sum, digit, i) => sum + (+digit * pattern[i % pattern.length]), 0);
  }
  
  let [current, last] = [meshSum(n), null];
  while (current != last) {
    [current, last] = [meshSum(current), current];
  }
  
  return current;
}
