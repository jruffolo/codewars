/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  // using a set gives us faster lookup speeds with Set.has() compared to Array.includes()
  let set = new Set(nums);
  let res = 0;
  
  for (const n of nums) {
    // if our array contains a number less than nums[i],
    // nums[i] is not the start of the sequence it is included in
    // so we may continue onto the next number
    if (set.has(n - 1)) continue;
    
    // we have found the start of a sequence, so now we iterate until we find its full length
    let count = 1;
    while (set.has(n + count)) count += 1;
    
    // finally, we update our result to the max of itself or the sequence we just counted
    res = Math.max(res, count);
  }
  
  return res;
};
