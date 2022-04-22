function isPangram(string){
    // make alphabet because I don't know a smart way to do it and I don't want to read regex documentation
    let alphabet = [];
    for (let i = 65; i < 91; i++) {
      alphabet.push(String.fromCharCode(i));
    }
    
    // for each letter of the alphabet, if the string doesnt include that letter, return false
    for (const letter of alphabet) {
      if (!string.toUpperCase().includes(letter)) return false;
    }
    
    // if you've made it this far, congratulations you are a pangram
    return true;
  }