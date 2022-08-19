/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  let hash1 = {};
  let hashWindow = {};
  let l = 0; let r = 0;
  
  // Create a hashmap of s1 representing character frequency
  for (const char of s1) {
    add(hash1, char);
  }
  
  // initialize hashmap of s2 (populating up to length of s1)
  for (r; r < s1.length; r++) {
    add(hashWindow, s2[r]);
  }

  // keeping our hashmap the same length as s1, increment it across s2
  for (r; r < s2.length; r++) {
    if (checkEqual(hash1, hashWindow)) {
      return true;
    }
    add(hashWindow, s2[r]);
    subtract(hashWindow, s2[l]);
    
    l++;
  }
  
  return checkEqual(hash1, hashWindow);
};

// Helper Functions
// Checks if h2 has all of the same keys and values as h1
// Returns boolean
var checkEqual = function(h1, h2) {
  for (const key in h1) {
    if (h2[key] && h1[key] === h2[key]) continue;
    else return false;
  }
  
  return true;
}

// Either initializes or increments a key in our hashmap
var add = function(h, key) {
  if (!h[key]) h[key] = 1;
  else h[key] += 1;
}

// Either deletes or decrements a key in our hashmap
var subtract = function(h, key) {
  if (h[key] === 1) delete h[key];
  else h[key] -= 1;
}
