function titleCase(title, minorWords) {
  if (title === '') return '';
  let titleArr = title.split(' ').map(word => word.toLowerCase());
  
  if (minorWords) {
    let mWordArr = minorWords.split(' ').map(word => word.toLowerCase());
    return titleArr.map((word, i) => {
      if (i === 0) return capitalize(word);
      if (mWordArr.includes(word)) return word;
      return capitalize(word);
    }).join(' ');
  } else {
    return titleArr.map(word => capitalize(word)).join(' ');
  }
}

function capitalize(word) {
  let wordArr = word.toLowerCase().split('');
  wordArr[0] = wordArr[0].toUpperCase();
  return wordArr.join('');
}
