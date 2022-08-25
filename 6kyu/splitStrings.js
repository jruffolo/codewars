function solution(str){
  let strArr = [];
  for (let i = 0; i < str.length; i+= 2) {
    if (i !== str.length - 1) {
      strArr.push(str.slice(i, i+2));
    } else {
      strArr.push(str.slice(i) + '_');
    }
  }
  
  return strArr;
}
