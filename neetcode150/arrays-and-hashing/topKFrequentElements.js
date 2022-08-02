/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let res = {};

  for (const num of nums) {
    if (!res[num]) {
      res[num] = [num, 1];
    } else {
      res[num][1]++;
    }
  }
  
  return Object.values(res)
               .sort(([n1, freq1], [n2, freq2]) => freq2 - freq1)
               .map(([n, freq]) => n)
               .slice(0, k);
};
