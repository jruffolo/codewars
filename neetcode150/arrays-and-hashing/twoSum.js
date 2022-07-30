/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let seen = [];
  
  for (const num of nums) {
    if (seen.includes(num)) continue;
    else {
      const complement = target - num;
      if (nums.includes(complement) && nums.indexOf(num) !== nums.lastIndexOf(complement)) {
        return [nums.indexOf(num), nums.lastIndexOf(complement)];
      } else {
        seen.push(num);
        seen.push(complement);
      }
    }
  }
};
