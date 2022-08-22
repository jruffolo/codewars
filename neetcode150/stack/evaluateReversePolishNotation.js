/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    // Converting all "nums" to nums via +num
    // For divisions resulting in negative numbers, use Math.ceil for integer division instead of Math.floor
    const operators = {
        "+": (a, b) => +a + +b,
        "-": (a, b) => +a - +b,
        "*": (a, b) => +a * +b,
        "/": (a, b) => a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b),
    };
    
    let waiting = [];
    let working = [];
    
    for (const token of tokens) {
        // if number
            // if working stack not full, working.push(number)
            // else, waiting.push(working.shift()) then working.push(number)
        // if operator
            // if working stack not full, working.unshift(waiting.pop())
            // then working[0] = operation(0, 1) and working.pop()
        
        if (!operators[token]) {
            if (working.length < 2) {
                working.push(token);
            } else {
                waiting.push(working.shift());
                working.push(token);
            }
        } else {
            if (working.length < 2) {
                working.unshift(waiting.pop());
            }
            
            working[0] = operators[token](working[0], working[1]);
            working.pop();
        }
    }
    
    return working[0];
};
