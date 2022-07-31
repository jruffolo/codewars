/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let charSet = new Set();
  let max = 0;
  let l = 0; let r = 0;
  
  for (r; r < s.length; r++) {
    while (charSet.has(s[r])) {
      charSet.delete(s[l]);
      l++;
    }
      charSet.add(s[r]);
      max = Math.max(max, r - l + 1);
  }
  
  return max;
};
