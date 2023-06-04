var filterString = function(value) {
  let res = '';
  
  for (let i = 0; i < value.length; i++) {
    if (value[i] == Number(value[i])) {
      res += value[i];
    }
  }
  
  return Number(res);
}
