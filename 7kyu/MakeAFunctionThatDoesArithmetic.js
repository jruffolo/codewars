function arithmetic(a, b, operator){
    let math = {
      add: (a,b) => a + b,
      subtract: (a,b) => a - b,
      multiply: (a,b) => a * b,
      divide: (a,b) => a / b
    }
    
    return math[operator](a, b);
  }