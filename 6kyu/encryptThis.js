var encryptThis = function(text) {
  const encryptWord = w => {
    let encrypted = w.split('');
    encrypted[0] = encrypted[0].charCodeAt();
    let [two, end] = [encrypted[1], encrypted[encrypted.length - 1]];
    encrypted[1]  = end;
    encrypted[encrypted.length - 1] = two;
    return encrypted.join('');
  }
  
  return text.split(' ').map(word => encryptWord(word)).join(' ');
}
