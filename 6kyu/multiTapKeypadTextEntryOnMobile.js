function presses(phrase) {
    const pressValues = [
      ['A', 'D', 'G', 'J', 'M', 'P', 'T', 'W', ' ', '1'],
      ['B', 'E', 'H', 'K', 'N', 'Q', 'U', 'X', '0'],
      ['C', 'F', 'I', 'L', 'O', 'R', 'V', 'Y'],
      ['S', 'Z', '2', '3', '4', '5', '6', '8'],
      ['7', '9']
    ];
    
    let pressCount = 0;
    
    // For each character of our string
    for (const char of phrase.toUpperCase()) {
      // We check to see which array it's in, and then add index + 1 to our count
      pressValues.forEach((arr, i) => {
        if (arr.includes(char)) {
          pressCount += i + 1;
        }
      })
    }
    
    return pressCount;
  }