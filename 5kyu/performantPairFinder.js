function sumPairs(ints, s) {
  // make a Set of our integer array, so we don't have to iterate over duplicate numbers
  let intSet = new Set(ints);
  
  // iterate over our set, making a list of pairs that add up to our sum, and their respective indices
  // for example, if our sum is 10 we could have [3, 7, 1, 4] where 3 + 7 = 10 and 1, 4 are their indices in our array
  let validPairs = [];
  for (const num of intSet) {
    // if we already have the pair logged, don't log it again (prevents [3,7] and [7, 3] existing in our list, they are the same pair)
    if (validPairs.flat().includes(num)) continue;
    
    // check if we have the matching number in our set (if our sum is 10 and the current number is 3, check to see if our set has 7)
    // the else statement accounts for equal pairs like 4 + 4 = 8, so that we dont get indices of 3, 3 for example (can't have a pair of 1)
    if (intSet.has(s - num)) {
      if (num !== (s - num)) {
        validPairs.push([num, s - num, ints.indexOf(num), ints.indexOf(s - num)]);
      } else {
        validPairs.push([num, s - num, ints.indexOf(num), ints.indexOf(s - num, ints.indexOf(num) + 1)]);
      }
    }
  }
  
  // if we have no valid pairs, return undefined
  // otherwise, filter out bogus pairs where there was actually only 1 number (only happens for equal pairs like 4 + 4 = 8)
  // finally, sort the valid pairs by their indices (using destructuring), getting the pair that completes earliest in the array, and return that pair
  return validPairs.length === 0 ? undefined : validPairs.filter(pair => pair[3] !== -1).sort(([a, b, i, j], [c, d, k, l]) => i - k && j - l)[0].slice(0, 2);
}
