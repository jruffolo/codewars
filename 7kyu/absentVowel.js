function absentVowel(x) {
  const vowels = 'aeiou';
  
  let i = 0;

  while (x.indexOf(vowels[i]) > -1) {
    i++;
  }
  
  return i;
}
