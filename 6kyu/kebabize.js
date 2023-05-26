function kebabize(str) {
  str = str.split('').filter(c => Number.isNaN(Number(c))).join('');
  
  let words = [];
  let lastIndex = 0;
  
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      words.push(str.slice(lastIndex, i).toLowerCase());
      lastIndex = i;
    }
  }
  
  words.push(str.slice(lastIndex).toLowerCase());
  
  return lastIndex === 0 ? str.toLowerCase() : words.join('-');
}
