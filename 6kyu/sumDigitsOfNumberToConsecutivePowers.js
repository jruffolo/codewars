function sumDigPow(a, b) {
    let validArr = [];
    
    // generate an array containing integers from a to b
    for (a; a <= b; a++) {
      validArr.push(a);
    }
    
    // return filtered array where rule is met (calcuated by splitting --> reducing each number)
    return validArr.filter((num, i) => String(num).split('').reduce((sum, num, i) => sum + num**(i+1), 0) === num);
  }