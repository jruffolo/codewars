/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  // we want to multiply everything before nums[i] by everything after nums[i]
  // i.e. for [1, 2, 3, 4] --> 
  // prefix: [1, 1, 1*2, 2*3] = [1, 1, 2, 6] postfix: [4*3*2, 4*3, 4, 1] = [24, 12,  4, 1],
  // pre*post [1*24, 1*12, 2*4, 6*1] --> 
  // result: [24, 12, 8, 6]
  // note: you could create separate prefix and postfix arrays and map their product, but instead you can do two passes on the output array
  
  // prefix and postfix both start at 1, because nums[0] has no prefix, and nums[last] has no postfix
  const res = [];
  let pfix = 1;
  
  // prefix (storing the product of all values before the index in output array, then updating the prefix product)
  for (let i = 0; i < nums.length; i++) {
    res[i] = pfix;
    pfix *= nums[i];
  }
  
  // postfix, second pass
  // multiplying the prefix values in the output array by the postfix value, then updating the postfix value the same way)
  pfix = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] *= pfix;
    pfix *= nums[j];
  }
  
  return res;
};
