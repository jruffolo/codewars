function cleanString(s) {
  let i;
  
  while (s.includes('#')) {
    i = s.indexOf('#');
    s = i === 0 ? s.replace(/#/, '') : s.replace(`${s[i-1]}${s[i]}`, '');
  }
  
  return s;
}
