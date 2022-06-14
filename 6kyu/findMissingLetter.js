function findMissingLetter(array) {
  let missingLetter;
  let last = array[0].charCodeAt();
  
  for (let i = 1; i < array.length; i++) {
    let current = array[i].charCodeAt();
    if (current - last === 2) {
      missingLetter = String.fromCharCode(current - 1);
      break;
    }
    last = current;
  }
  
  return missingLetter;
}

// PREP

// Parameters: an array of strings containing characters a-zA-Z in ascending order, where only one character is missing

// Returns: return the missing character as as tring

// Examples: a, b, c, e, f --> return "d" || Q, R, S, T, V --> return "U"

// Pseudocode: iterate through array, checking for a difference in ASCII codes
//             where the difference is > 1, return current char - 1 ASCII
//             use charCodeAt, fromCharCode
