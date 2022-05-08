function reverseLetter(str) {
    let isValid = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    
    return str.split('').filter(char => isValid.includes(char)).reverse().join('');
  }