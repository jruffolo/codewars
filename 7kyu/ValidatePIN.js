function validatePIN (pin) {
    let validChars = '1234567890';
    let pinArr = pin.split('');
    
    // chech for invalid characters
    for (const char of pinArr) {
      if (!validChars.includes(char)) return false;
    }
    
    // return false for any pin that isn't 4 or 6 digits long
    return pin.length === 4 || pin.length === 6;
  }