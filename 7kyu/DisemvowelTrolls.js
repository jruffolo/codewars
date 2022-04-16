function disemvowel(str) {
    const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    let strArr = str.split('');
    
    return strArr.map(char => {
      if (vowels.includes(char)) return '';
      else return char;
    }).join('');
  }