String.prototype.toAlternatingCase = function () {
    const swapCase = char => {
      if (char === char.toUpperCase()) return char.toLowerCase();
      else return char.toUpperCase();
    };
    
    const str = this.valueOf();
    let swappedStr = '';
    
    for (const char of str) {
      swappedStr += swapCase(char);
    }
    
    return swappedStr;
  }