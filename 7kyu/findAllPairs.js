function duplicates(array){
  let seen = {};
  let pairs = 0;
 
  for (const n of array) {
    if (!seen[n]) {
      seen[n] = 1;
    } else {
      pairs++;
      delete seen[n];
    }
  }
  
  return pairs;
}
