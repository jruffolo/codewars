/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let charTally = s.split('').reduce((obj, c) => {
    if (!obj[c]) {
      obj[c] = 1;
    } else {
      obj[c]++;
    }
    return obj;
  }, {});
  
  for (const char of t) {
    if (!charTally[char]) return false;
    else charTally[char]--;
  }
  
  for (const key in charTally) {
    if (charTally[key] !== 0) return false;
  }
  
  return true;
};
