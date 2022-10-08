function permuteAPalindrome (input) { 
  let freqObject = input.split('').reduce((obj, char) => {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
    
    return obj;
  }, {});
  
  return Object.values(freqObject).filter(n => n % 2 === 1).length <= 1;
}
