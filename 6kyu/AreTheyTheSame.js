function comp(array1, array2){
  if (array1 === null || array2 === null) return false;
  
  array1.sort((a, z) => a - z);
  array2.sort((a, z) => a - z);
  const arr1Sq = array1.map(num => num**2).sort((a, z) => a - z);
  const arr2Sq = array2.map(num => num**2).sort((a, z) => a - z);
  
  const same1 = array2.filter(num => !arr1Sq.includes(num)).length === 0;
  const same2 = array1.filter(num => !arr1Sq.includes(num)).length === 0;
  
  if (same1) {
    if (arr1Sq.length === array2.length && arr1Sq.every((val, i) => val === array2[i])) return true;
    return false;
  } else if (same2) {
    if (arr2Sq.length === array1.length && arr2Sq.every((val, i) => val === array1[i])) return true;
    return false;
  } else return false;
}
