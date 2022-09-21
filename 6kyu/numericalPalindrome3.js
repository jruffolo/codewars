function palindrome(num) {
  if (typeof num !== 'number' || num < 0 || num % 1 !== 0) return 'Not valid';
  let numStr = String(num);
  let count = 0;
  
  for (let i = 2; i <= numStr.length; i++) {
    for (let j = 0; j <= numStr.length - i; j++) {
      if (isPalindrome(numStr.slice(j, j + i))) {
        count++;
      }
    }
  }
  
  return count;
}

function isPalindrome(str) {
  let l = 0;
  let r = str.length - 1;
  while (l <= r) {
    if (str[l] !== str[r]) {
      return false;
    }
    l++;
    r--;
  }
  
  return true;
}
