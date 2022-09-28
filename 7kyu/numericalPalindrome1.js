function palindrome(num) { 
  let str = String(num);
  if (typeof num !== 'number' || num < 0) {
    return 'Not valid';
  }
  
  let l = 0;
  let r = str.length - 1;
  
  while (l <= r) {
    if (str[l] !== str[r]) return false;
    l++;
    r--;
  }
  
  return true;
}
