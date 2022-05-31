function findEvenIndex(arr)
{
  for (let i = 0; i < arr.length; i++) {
    if (arr.slice(0, i).reduce((sum, num) => sum+num, 0) === 
        arr.slice(i+1).reduce((sum, num) => sum+num, 0)) {
      return i;
    }
  }
  
  return -1;
}