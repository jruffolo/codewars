function palindrome(num) {
  if (typeof num !== 'number' || num < 0 || num % 1 !== 0) return 'Not valid';
  let numStr = String(num);
  let palindromes = [];
  
  for (let i = 2; i <= numStr.length; i++) {
    for (let j = 0; j <= numStr.length - i; j++) {
      let slice = numStr.slice(j, j + i);
      if (isPalindrome(slice) && !palindromes.includes(+slice)) {
        palindromes.push(+slice);
      }
    }
  }
  
  return palindromes.length ? palindromes.sort((a,z) => a - z) : 'No palindromes found';
}

function isPalindrome(str) {
  let l = 0;
  let r = str.length - 1;
  if (str[l] === '0' && str[r] === '0') return false;
  
  while (l <= r) {
    if (str[l] !== str[r]) {
      return false;
    }
    l++;
    r--;
  }
  
  return true;
}
