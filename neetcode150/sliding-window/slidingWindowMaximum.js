/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let res = [];
  let queue = [];
  let l = 0;
  let r = 0;
  
  // while r is in bounds
  while (r < nums.length) {
    // while the queue is not empty and the head is less than our current number
    // pop the head of the queue to make way for our larger number
    while (queue.length && nums[queue[queue.length - 1]] < nums[r]) {
      queue.pop();
    }
    
    // now that we've cleared any potential larger numbers (if there were any)
    // we can add our current value to the queue
    queue.push(r);
    
    // if our tail of the queue is out of scope of l, shift it from the queue
    // the next largest number will become the tail
    if (l > queue[0]) {
      queue.shift();
    }
    
    // we have iterated enough to add results and increment our left pointer
    if (r + 1 >= k) {
      res.push(nums[queue[0]]);
      l++;
    }
    
    r++;
  }
  
  return res;
};

// PREP
// Parameters:  An array of length 1 to 100,000, containing integers from value -10,000 to 10,000, and a positive int k from 1 to 
//              array length
//              k represents the fixed size of the sliding window that traverses our array
//
// Returns:   An array containing the max value for each sliding window
//
// Examples: [-1, 2, 3, 2, 1, 6], k = 2 --> [2, 3, 3, 2, 6], because max [-1, 2] is 2, max [2, 3] is 3, etc
//
// Pseudocode/Notes: 
//  
//  -- Brute Force --
//
//  Populate our sliding window from 0 to k - 1
//  at each point, res.push(Math.max(...window))
//  then window.shift(), i++, and window.push(nums[i]) to increment window
//
//
//  -- Smarter Method (dequeue, monotonically decreasing queue) --
//
//  For every new item encountered, compare to head of queue (if it exists)
//  if current <= head, push to queue
//  if current > head, pop head and reevaluate current against head
//  after eval is complete, push tail of queue to res (should be the largest number in scope)
