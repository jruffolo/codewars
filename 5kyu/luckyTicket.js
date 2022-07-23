function luckCheck(ticket){
  const valid = ['0','1','2','3','4','5','6','7','8','9'];
  let digits = String(ticket).split('');
  
  if (ticket === '') {
    throw new Error('Invalid ticket: ticket is empty');
  } else if (digits.filter(c => !valid.includes(c)).length > 0) {
    throw new Error('Invalid ticket: non-numeric characters');
  }
  
  digits = digits.map(n => +n);
  const middleL = digits.length % 2 ? ((digits.length - 1) / 2) : (digits.length) / 2;
  const middleR = digits.length % 2 ? middleL + 1 : middleL;
  const left = digits.slice(0, middleL).reduce((s, n) => s + n, 0);
  const right = digits.slice(middleR).reduce((s, n) => s + n, 0);
  return left === right;
}
