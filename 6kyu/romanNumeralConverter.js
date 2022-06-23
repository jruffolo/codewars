function solution (roman) {
  let values = {'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1};
  let holding = 0;
  let final = 0;
  
  for (let i = 0; i < roman.length; i++) {
    let [current, next] = roman.slice(i, i+2).split('').map(val => values[val]);
    
//     console.log(`c: ${current} n: ${next}`)
    if (next === undefined) {
      final += current;
      break;
    }
    
    if (current > next) {
      final += current + holding;
      holding = 0;
    } else if (current === next) {
      holding += current;
    } else {
      final -= current;
    }
  }
  
  if (holding) final += holding;
	return final;
}

// PREP
// Parameters: A string containing only the characters MDCLXVI representing a positive integer value

// Returns: A positive integer value that is equal to the roman numeral string

// Examples: MMCDLVII --> 2407 || MMVIII --> 2008 || CDLXXV --> 475

// Pseudocode: For each value, check if the following value is lesser, equal, or greater to current value
//             If lesser: add current value to final count immediately
//                equal: add value to holding count
//                greater: add value - holding count to final count
//             return final count

//             okay the logic ended up being slightly more complex but general idea stil applies
