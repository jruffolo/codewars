/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  // initialize an object/hashmap to keep track of sorted anagrams
  let anagrams = {};
  
  // for each str in strs, if anagrams does not contain a hash of said str, create a new key:val that is hash:[str]
  // else, push str onto existing key:[...] so that key:[..., str]
  for (const str of strs) {
    let hash = hashStr(str);
    if (!anagrams[hash]) {
      anagrams[hash] = [str];
    } else {
      anagrams[hash].push(str);
    }
  }
  
  // return an array of only the values contained within the anagrams object (omit the keys)
  return Object.values(anagrams);
};

var hashStr = str => {
  // initialize an array containing 26 entries whose values are all 0
  let hash = Array.from(Array(26), e => 0);
  // using ASCII codes, increment through each character and generate a hash representing that set of characters
  let floor = 'a'.charCodeAt();
  for (const c of str) {
    hash[c.charCodeAt() - floor]++;
  }
  
  return hash;
}
