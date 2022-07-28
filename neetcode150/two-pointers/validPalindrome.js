/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase().split('').filter(c => c.match(/[a-z]|\d/)).join('');
  
  if (s.length % 2 === 0) {
    // even
    let midpoint = s.length / 2;
    return s.slice(0, midpoint) === s.slice(midpoint).split('').reverse().join('');
  } else {
    // odd
    let midpoint = (s.length - 1) / 2;
    return s.slice(0, midpoint) === s.slice(midpoint + 1).split('').reverse().join('');
  }
};
