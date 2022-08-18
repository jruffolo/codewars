/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let openSet = new Set(['(', '[', '{']);
    let pairs = {')': '(', 
                 ']': '[', 
                 '}': '{'};
    let stack = [];
    
    for (const paren of s) {
        if (openSet.has(paren)) {
            stack.push(paren);
            continue;
        }
        
        if (stack.length === 0) return false;
        
        if (pairs[paren] === stack[stack.length - 1]) {
            stack.pop();
        } else return false;
    }
    
    return stack.length === 0;
};
