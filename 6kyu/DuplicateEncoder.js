function duplicateEncode(word){
  
    const wordArr = word.toUpperCase().split('');
    const dupes = {};
    for (const char of wordArr) {
      if (!dupes[char]) {
        dupes[char] = '(';
      } else {
        dupes[char] = ')';
      }
      console.log(dupes)
    }
    
    return wordArr.map(char => dupes[char]).join('');
  }