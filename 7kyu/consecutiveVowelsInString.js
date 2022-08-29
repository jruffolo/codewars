function getTheVowels(word) {
  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  
  for (const c of word) {
    if (c === vowels[count % 5]) count++;
  }
  
  return count;
}

// PREP
// Parameters: Random string of unknown length, only lowercase [a-z]

// Returns: An integer representing the number of consecutive ordered vowels in the string

// Examples: 'aeiou' --> 5 || 'acdoileti' --> 3 ('a', 'e', 'i')

// Pseudocode:
// This problem requires a bit of circular logic, so I will use a modulo of our count
// along with an array to make a circular linked list
//
// set count to 0, make an array [a, e, i, o, u]
// for each character in string
// if character matches array[count % 5], count += 1
//
// this will loop through our array in order, making sure that the count is 
// only incremented when we have reached the next vowel in our sequence
