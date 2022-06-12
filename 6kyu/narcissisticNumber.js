function narcissistic(value) {
  const digits = String(value).split('').map(str => Number(str));
  return digits.map(num => Math.pow(num, digits.length)).reduce((sum, num) => sum + num, 0) === value;
}
