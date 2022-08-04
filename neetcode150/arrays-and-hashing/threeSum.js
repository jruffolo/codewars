/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = [];
  let l = 0; let r = nums.length - 1;
  nums.sort((a, z) => a - z);
  
  for (let a = 0; a < nums.length - 1; a++) {
    if (nums[a] > 0) return res;
    if (nums[a] === nums[a - 1]) continue;
    
    l = a + 1; 
    r = nums.length - 1;
    let sum = 0;
    
    while (l < r) {
      sum = nums[a] + nums[l] + nums[r];
      
      if (sum === 0) {
        res.push([nums[a], nums[l], nums[r]]);
        l++;
        r--;
        
        while (nums[l] === nums[l - 1]) l++;
        while (nums[r] === nums[r + 1]) r--;
        
      } else if (sum < 0) l++;
        else if (sum > 0) r--;
    }
  }
  
  return res;
};
