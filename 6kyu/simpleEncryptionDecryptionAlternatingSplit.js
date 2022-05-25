function encrypt(text, n) {
  if (n <= 0 || n === null || text === '' || text === null) return text;

  let odds = text.split('').filter((val, i) => i % 2 === 1)
  let evens = text.split('').filter((val, i) => i % 2 === 0)
  let result = '';
  
  while (n > 0) {
    result = odds.concat(evens).join('');
    odds = result.split('').filter((val, i) => i % 2 === 1);
    evens = result.split('').filter((val, i) => i % 2 === 0);
    n--;
  }
  
  return result;
}

function decrypt(encryptedText, n) {
  if (n <= 0 || n === null || encryptedText === '' || encryptedText === null) return encryptedText;
  
  let breakpoint = encryptedText.length % 2 === 0 ? encryptedText.length / 2 : (encryptedText.length - 1) / 2;
  let evens = encryptedText.split('').slice(breakpoint);
  let odds = encryptedText.split('').slice(0, breakpoint);
  let result = '';
  
  while (n > 0) {
    let arr = [];
    for (let i = 0; i <= breakpoint; i++) {
      arr.push(evens[i]);
      if (odds[i]) arr.push(odds[i]);
    }
    
    result = arr.join('');
    evens = result.split('').slice(breakpoint);
    odds = result.split('').slice(0, breakpoint);
    n--;
  }
  
  return result;
}
