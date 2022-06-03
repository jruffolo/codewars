function count (string) {  
  let charCount = {};
  for (const char of string.split('')) {
    if (charCount[char]) {
      charCount[char] += 1;
    } else {
      charCount[char] = 1;
    }
  }
  return charCount;
}
