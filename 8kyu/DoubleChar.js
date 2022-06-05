function doubleChar(str) {
    let doubleStr = '';
    
    for (const char of str.split('')) {
      doubleStr += char + char;
    }
    
    return doubleStr;
  }