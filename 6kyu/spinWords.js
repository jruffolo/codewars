function spinWords(string){
  let words = string.split(' ');
  
  words.forEach((word, i) => {
    if (word.length > 4) {
      words[i] = word.split('').reverse().join('');
    }
  })
  
  return words.join(' ');
}
