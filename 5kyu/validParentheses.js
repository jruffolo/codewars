function validParentheses(parens) {
  let count = 0;
  for (const char of parens) {
    if (count < 0) return false;
    if (char === "(") count++;
    else count--;
  }
  
  return count === 0;
}

// PREP
// Parameters: A string of parentheses between 0 and 100 characters long

// Returns: a boolean result indicating whether or not the parentheses are in a valid order

// Examples: (()()()) --> true || )(())( --> false || (()()) --> true

// Pseudocode: for each paren of parens, add 1 to count for (, subtract for )
//             if count < 0 any time during loop, return false
//             if complete, return count === 0
