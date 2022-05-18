function digital_root(n) {
  const digits = String(n).split('');
  const sum = digits.reduce((sum, num) => sum + +num, 0);

  if (String(sum).split('').length === 1) {
    return sum;
  }
  else return digital_root(sum);
}

// Non-recursive
// function digital_root(n) {
//   let digits = String(n).split('');
//   let sum = digits.reduce((sum, num) => sum + Number(num), 0);
  
//   while (digits.length !== 1) {
//     digits = String(sum).split('');
//     sum = digits.reduce((sum, num) => sum + Number(num), 0);
//   }
  
//   return sum;
// }
