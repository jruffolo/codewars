function XO(str) {
    const arr = str.toLowerCase().split('');
    let count = 0;
    for (const char of arr) {
      if (char === 'x') count++;
      else if (char === 'o') count--;
    }
    
    return count === 0 ? true : false;
  }