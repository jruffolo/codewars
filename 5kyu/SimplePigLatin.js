function pigIt(str){
  const validChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let characters = str.split(' ').map(word => word.split(''));
  characters.filter(word => validChars.includes(...word)).forEach((word, index) => {
    word.push(word.shift());
    word.push('a', 'y')
  });

  return characters.map(word => word.join('')).join(' ');
}

// PREP
  // Parameters: One string containing alpha and non-alpha characters (assumed they dont mix like s3v3n etc)

  // Returns: A string where words have been converted to pig latin (i.e. igpay atinlay) and non-alpha characters are left untouched

  // Examples: "What is up dudes ?" --> "hatWay siay puay ymay udesday"

  // Pseudocode: 
  // split string into words array
  // filter out any "words" containing punctuation
  // iterate over each word and break into characters, put first character at end (shift, push) and add 'ay'
  // replace index in words array with pig latin word
  // return pig latin string
