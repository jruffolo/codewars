function tops(msg) {
  if (msg === '') return '';
  
  let res = '';
  let index = 1;
  
  for (let n = 1; index < msg.length; n++) {
    res += msg[index];
    index += 4*n + 1;
  }
  
  return res.split('').reverse().join('');
}
