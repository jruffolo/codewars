function firstNonRepeatingLetter(s) {
  if (s === '') return '';
  
  let charCount = s.split('').map(char => char.toLowerCase()).reduce((counts, char) => {
    if (!counts[char]) {
      counts[char] = 1;
    } else {
      counts[char]++;
    }
    return counts;
  }, {});

  for (const char in charCount) {
    if (charCount[char] === 1) {
      return s[s.indexOf(char)] ? s[s.indexOf(char)] : s[s.indexOf(char.toUpperCase())];
      }
  }
  
  return '';
}
