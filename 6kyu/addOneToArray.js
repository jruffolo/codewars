function upArray(arr){
  if (arr.length === 0 || arr.some(n => n < 0) || arr.some(n => n > 9)) return null;
  
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 9) {
      arr[i] = 0;
      if (i === 0) {
        return [1, ...arr];
      }
    } else {
      arr[i]++;
      return arr;
    }
  }
}
