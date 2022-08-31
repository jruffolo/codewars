function anagrams(word, words) {
  let anagrams = [];
  let refMap = freqMap(word);
  words.forEach(w => {
    if (w.length === word.length && compareFreqMap(refMap, freqMap(w))) {
      anagrams.push(w);
    }
  });
  
  return anagrams;
}

// Helper functions for hash mapping and comparisons
function freqMap(word) {
  let map = {};
  for (const char of word) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char]++;
    }
  }
  
  return map;
}

function compareFreqMap(h1, h2) {
  for (const char in h2) {
    if (!h1[char] || h1[char] !== h2[char]) {
      return false;
    }
  }
  
  return true;
}

// PREP
// Parameters: A string and an array of strings which may or may not be an anagram of
//             the reference string
//
// Returns: an array of strings from words array that are an anagram of the first string
//
// Examples: 'pool', ['loop', 'polo', 'plot'] --> ['loop', 'polo']
//
// Pseudocode: 
//  For each string, generate a character frequency hashmap
//  For any hashmap in words that matches our reference string (same size, characters, values)
//  push it onto our result array
//  We can optimize by immediately skipping any words of different length
