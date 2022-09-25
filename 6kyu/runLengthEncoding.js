function runLengthEncoding(str) {
  if (str === '') return [];
  
  let res = [];
  let [count, char] = [1, str[0]];
  
  for (let i = 1; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    } else {
      res.push([count, char]);
      count = 1;
      char = str[i];
    }
  }
  
  res.push([count, char]);
  return res;
}
