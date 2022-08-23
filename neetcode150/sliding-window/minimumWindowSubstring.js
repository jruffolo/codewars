/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let res = "";
    // Create a hashmap of character frequency of t
    let tHash = {};
    for (const char of t) {
        add(tHash, char);
    }
    
    let l = 0;
    let r = 0;
    let sHash = {};
    let foundMatch = false;
    
    for (r; r < s.length; r++) {
        add(sHash, s[r]);
        
        // once we've found a match, shorten window from left as much as possible
        while (checkEqual(tHash, sHash)) {
            res = s.slice(l, r + 1);
            subtract(sHash, s[l]);
            l++;
            foundMatch = true;
        }
        
        // if we've just found a match, continue (we've already incremented enough)
        if (foundMatch) {
            foundMatch = false;
            continue;
        }
        
        // now that we have a result, we have defined a min size for our window
        // we can increment l along with r to keep our window the size of res.length - 1
        // so that way our next match is guaranteed to be smaller
        if (res) {
            subtract(sHash, s[l]);
            l++;
        }
    }
    
    return res;
};

// Helper Functions
// Checks if h2 has all of the same keys as h1, and all values of h2 >= to those of h1
// Returns boolean
var checkEqual = function(h1, h2) {
  for (const key in h1) {
    if (h2[key] && h2[key] >= h1[key]) continue;
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
