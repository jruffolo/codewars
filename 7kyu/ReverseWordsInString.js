function reverseWords(str) {
    let words = str.split(' ');
    let sentence = [];
    for (let word of words) {
      sentence.push(word.split('').reverse().join(''));
    }
    
    return sentence.join(' ');
  }