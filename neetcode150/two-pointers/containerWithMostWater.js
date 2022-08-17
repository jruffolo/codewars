/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let res = 0;
  let l = 0; let r = height.length - 1;
  
  while (l < r) {
    res = Math.max(res, (r - l) * Math.min(height[l], height[r]));
    
    if (height[l] >= height[r]) {
      r--;
    } else {
      l++;
    }
  }
  
  return res;
};

// Two Pointers
// Area is min(height[l], height[r]) * r - l
// Find two indices where area is greatest

// l and r start at 0 and height.length - 1 respectively
// increment/decrement whichever of the two pointers has a lower height in hopes of finding a higher bound
