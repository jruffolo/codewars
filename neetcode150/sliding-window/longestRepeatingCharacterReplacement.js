/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let count = {};
  let res = 0;
  let l = 0;
  let maxF = 0;

  // sliding window
  // while window length - most frequent character count <= k, continue expanding window via incrementing r
  // when window length - freqChar exceeds k, decrement s[l] from count and increment l (left side of window)
  // update our result to max(result, window size)
  for (let r = 0; r < s.length; r++) {
    if (!count[s[r]]) count[s[r]] = 1;
    else count[s[r]] += 1;
  
    maxF = Math.max(maxF, count[s[r]]);
    
    while ((r - l + 1) - maxF > k) {
      count[s[l]] -= 1;
      l += 1;
    }
    
    res = Math.max(res, (r - l + 1));
  }
  
  return res;
};
