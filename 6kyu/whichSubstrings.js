function inArray(array1,array2){
  array1 = array1.filter(str => str.length);
  array2 = array2.filter(str => str.length);
  
  if (array1.length === 0 || array2.length === 0) return [];
  let res = [];
  for (const substr of array1) {
    for (const str of array2) {
      for (let i = 0; i <= (str.length - substr.length); i++) {
        if (substr === str.slice(i, i + substr.length)) {
          res.push(substr);
          break;
        }
      }
    }
  }
  
  return Array.from(new Set(res.sort()));
}
