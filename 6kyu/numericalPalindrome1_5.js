function palindrome(num,s) {
  if (typeof num !== 'number' || typeof s !== 'number' || num < 0) return 'Not valid';
  
  let res = [];
  let count = 0;
  
  while (count < s) {
    if (isPalindrome(num)) {
      res.push(num);
      count++;
    }
    num++;
  }
  
  return res;
}

function isPalindrome(n) {
  if (n < 10) return false;

  n = String(n);
  let l = 0; 
  let r = n.length - 1;

  while (l <= r) {
    if (n[l] !== n[r]) return false;
    l++;
    r--;
  }

  return true;
}
