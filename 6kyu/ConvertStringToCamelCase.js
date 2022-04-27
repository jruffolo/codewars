function toCamelCase(str){
  let strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === '-' || strArr[i] === '_') {
      strArr[i+1] = strArr[i+1].toUpperCase();
      strArr.splice(i, 1);
    }
  }
  
  return strArr.join('');
}
