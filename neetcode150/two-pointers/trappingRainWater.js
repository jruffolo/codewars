/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let totalVolume = 0;
  let maxHeight = [0];
  let max = 0;
  
  // determine the maxHeight we've seen to the left of index, going from left to right
  for (let l = 1; l < height.length; l++) {
    maxHeight[l] = Math.max(max, height[l - 1]);
    max = Math.max(max, maxHeight[l]);
  }

  // determine the maxHeight to the right of index, going from right to left
  // our bottleneck is whichever height is smaller to the left/right of a given index
  // so assign maxHeight to the smaller of the two Min(max we've seen on the left, max we've seen on the right)
  max = 0;
  for (let r = height.length - 1; r > 0; r--) {
    maxHeight[r] = Math.min(max, maxHeight[r]);
    max = Math.max(max, height[r]);
  }
  
  // to accumulate total volume, for every height in our array, subtract the max bounding height from the current height
  // add that difference to our total accumulated rain
  // if the difference is less than 0, just add 0 (we can't accumulate negative rain)
  for (let i = 0; i < height.length; i++) {
    totalVolume += Math.max(0, maxHeight[i] - height[i]);
  }
  
  return totalVolume;
};
