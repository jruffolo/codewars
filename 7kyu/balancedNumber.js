function balancedNum(number) {
  const digits = String(number).split('').map(c => +c);
  
  const evenCap = digits.length / 2 - 1;
  const oddCap = -1 * ((digits.length - 1) / 2);
  
  let leftSum, rightSum;
  
  if (digits.length < 3) return 'Balanced';
  
  if (digits.length % 2 === 0) {
    leftSum = digits.slice(0, evenCap).reduce((sum, n) => sum + n, 0);
    rightSum = digits.slice(-evenCap).reduce((sum, n) => sum + n, 0);
  } else {
    leftSum = digits.slice(0, oddCap).reduce((sum, n) => sum + n, 0);
    rightSum = digits.slice(-oddCap).reduce((sum, n) => sum + n, 0);
  }
  
  return leftSum === rightSum ? 'Balanced' : 'Not Balanced';
}

// even example [0, 1, 2, 2, 3, 4] - [0 , 1] and [3, 4] are left/right
// left is .slice(0, length / 2 - 1) and right is .slice(-1 * (length / 2 - 1))

// odd example [0, 1, 2, 3, 4] - [0, 1] and [3, 4] are left/right
// left is .slice(0, length  - 1 / 2) and right is .slice(-1 * (length / 2 - 1))
