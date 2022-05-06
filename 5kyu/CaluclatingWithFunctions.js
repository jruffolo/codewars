function zero(arg) {
    if (typeof arg === 'undefined') return 0;
    
    if (arg[0] === '+') return 0 + arg[1];
    else if (arg[0] === '-') return 0 - arg[1];
    else if (arg[0] === '*') return 0 * arg[1];
    else if (arg[0] === '/') return Math.floor(0 / arg[1]);
  }
  function one(arg) {
    if (typeof arg === 'undefined') return 1;
    
    if (arg[0] === '+') return 1 + arg[1];
    else if (arg[0] === '-') return 1 - arg[1];
    else if (arg[0] === '*') return 1 * arg[1];
    else if (arg[0] === '/') return Math.floor(2 / arg[1]);
  }
  function two(arg) {
    if (typeof arg === 'undefined') return 2;
    
    if (arg[0] === '+') return 2 + arg[1];
    else if (arg[0] === '-') return 2 - arg[1];
    else if (arg[0] === '*') return 2 * arg[1];
    else if (arg[0] === '/') return Math.floor(2 / arg[1]);
  }
  function three(arg) {
    if (typeof arg === 'undefined') return 3;
    
    if (arg[0] === '+') return 3 + arg[1];
    else if (arg[0] === '-') return 3 - arg[1];
    else if (arg[0] === '*') return 3 * arg[1];
    else if (arg[0] === '/') return Math.floor(3 / arg[1]);
  }
  function four(arg) {
    if (typeof arg === 'undefined') return 4;
    
    if (arg[0] === '+') return 4 + arg[1];
    else if (arg[0] === '-') return 4 - arg[1];
    else if (arg[0] === '*') return 4 * arg[1];
    else if (arg[0] === '/') return Math.floor(4 / arg[1]);
  }
  function five(arg) {
    if (typeof arg === 'undefined') return 5;
    
    if (arg[0] === '+') return 5 + arg[1];
    else if (arg[0] === '-') return 5 - arg[1];
    else if (arg[0] === '*') return 5 * arg[1];
    else if (arg[0] === '/') return Math.floor(5 / arg[1]);
  }
  function six(arg) {
    if (typeof arg === 'undefined') return 6;
    
    if (arg[0] === '+') return 6 + arg[1];
    else if (arg[0] === '-') return 6 - arg[1];
    else if (arg[0] === '*') return 6 * arg[1];
    else if (arg[0] === '/') return Math.floor(6 / arg[1]);
  }
  function seven(arg) {
    if (typeof arg === 'undefined') return 7;
    
    if (arg[0] === '+') return 7 + arg[1];
    else if (arg[0] === '-') return 7 - arg[1];
    else if (arg[0] === '*') return 7 * arg[1];
    else if (arg[0] === '/') return Math.floor(7 / arg[1]);
  }
  function eight(arg) {
    if (typeof arg === 'undefined') return 8;
    
    if (arg[0] === '+') return 8 + arg[1];
    else if (arg[0] === '-') return 8 - arg[1];
    else if (arg[0] === '*') return 8 * arg[1];
    else if (arg[0] === '/') return Math.floor(8  / arg[1]);
  }
  function nine(arg) {
    if (typeof arg === 'undefined') return 9;
    
    if (arg[0] === '+') return 9 + arg[1];
    else if (arg[0] === '-') return 9 - arg[1];
    else if (arg[0] === '*') return 9 * arg[1];
    else if (arg[0] === '/') return Math.floor(9 / arg[1]);
  }
  
  function plus(num) {
    return ['+', num];
  }
  function minus(num) {
    return ['-', num];
  }
  function times(num) {
    return ['*', num];
  }
  function dividedBy(num) {
    return ['/', num];
  }