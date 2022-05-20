function accum(s) {
	let chars = s.split('');
  let mumble = [];
  
  for (let i = 0; i < chars.length; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
      if (j === 0) str += chars[i].toUpperCase();
      else str += chars[i].toLowerCase();
    }
    mumble.push(str);
  }
  
  return mumble.join('-');
}
