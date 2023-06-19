function squareDigits(num){
    // cast the number as a string, split it into an array, map each number to its square, rejoin and cast as number
    return Number(String(num).split('').map(num => num**2).join(''));
  }