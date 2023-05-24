function calc(x){
  const codes = x.split('').map(x => String(x.charCodeAt(0)));
  
  let sevenCount = 0;

  for (const code of codes) {
    if (code.match('7')) sevenCount++;
    if (code.match('77')) sevenCount++;
  }
  
  return sevenCount * 6;
}
