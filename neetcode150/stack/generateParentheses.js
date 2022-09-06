/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let stack = [];
  let res = [];
  

  const backtrack = (openN, closedN) => {
    // if all of these conditions are satisfied, we have a valid solution
    // so we push it to our result array
    if (openN === closedN && openN === n && closedN === n) {
      res.push(stack.join(''));
    }
    
    // Use recursion to go down different branches and then backtrack
    if (openN < n) {
      stack.push('(');
      backtrack(openN + 1, closedN);
      stack.pop();
    }
    
    if (closedN < openN) {
      stack.push(')');
      backtrack(openN, closedN + 1);
      stack.pop();
    }
  }
  
  backtrack(0, 0);
  return res;
};

// PREP
// Parameters: Positive integer n with bounds [1, 8]
//
// Returns: An array containing strings representing all valid combinations of n sets of parentheses
//
// Examples: 3 --> ['((()))', '(()()), '(())()', '()(())', '()()()'] 5 combinations
//           2 --> ['(())', '()()'] 2 combinations
//
// Pseudocode: 
//
//  Two rules:
//    1. We can add an open parenthesis if we have less than n open
//    2. We can add a closed parenthesis if we have less closed than open
//
//  Once the number of open parens = n, and the number of closed parens = number of open parens
//  we should have a valid solution
//
//  We can use a stack to backtrack and explore all solutions using recursion
//  Once we reach a valid solution, we will go up a level of scope and undo our decision on the stack
//  Eventually, we will have found every "leaf node" and our function will be complete
//
//  For example: n = 2
// L1               (               openN = 1, closedN = 0
// L2           (       )           openN = 2, closedN = 0 | openN = 1, closedN = 1 (once we backtrack from left branch)
// L3              )       (        openN = 2, closedN = 1 | openN = 2, closedN = 1
// L4*                )        )    openN = 2, closedN = 2 | openN = 2, closedN = 2 (these our where we reach our leaf nodes)
// RES          (())        ()()    valid solution (())    | valid solution ()()
