function rot13(message){
    const asciiShift = char => {
      // if a-m, add 13 to ascii code, if n-z subtract 13 from ascii code
      if (char >= 'A' && char <= 'M' || char >= 'a' && char <= 'm') {
        return String.fromCharCode(char.charCodeAt() + 13);
      } else if (char >= 'N' && char <= 'Z' || char >= 'n' && char <= 'z') {
        return String.fromCharCode(char.charCodeAt() - 13);
      }
      // non-alphabetical, just return character
      return char;
    };
  
    // map each char to shifted char and rejoin as string
    return message.split('').map(char => asciiShift(char)).join('');
  }