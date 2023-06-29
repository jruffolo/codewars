String.prototype.toJadenCase = function () {
    // get value of string object
    let str = this.valueOf();
    
    // split string into an array of words
    let words = str.split(' ');
    
    let jadenCase = [];
    
    // for each word in our array, split it into letters, capitalize the first letter, and rejoin it into a string
    // then push the capitalized word onto the end of our jadenCase array
    for (let word of words) {
      let letters = word.split('')
      letters[0] = letters[0].toUpperCase()
      jadenCase.push(letters.join(''))
    }
    
    // return our jadenCased array rejoined as a string
    return jadenCase.join(' ')
  };