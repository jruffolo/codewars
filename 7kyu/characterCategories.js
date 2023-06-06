function solve(s){
  let n = 0;
  let ul = 0;
  let ll = 0;
  let sc = 0;
  
  const characters = s.split('');
  
  for (const c of characters) {
    if (!Number.isNaN(Number(c))) n++;
    else if (c.toLowerCase() === c && c.toUpperCase() === c) sc++;
    else if (c.toLowerCase() === c) ll++;
    else ul++;
  }
  
  return [ul, ll, n, sc];
}
