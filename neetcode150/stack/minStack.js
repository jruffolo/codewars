class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack[this.stack.length] = val;
  
  if (this.minStack.length === 0) {
    this.minStack[this.minStack.length] = val;
  } else {
    this.minStack[this.minStack.length] = this.minStack[this.minStack.length - 1] > val ? val : this.minStack[this.minStack.length - 1];
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.length = this.stack.length - 1;
  this.minStack.length = this.minStack.length - 1;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
