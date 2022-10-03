function sequenceSum(begin, end, step){
  let res = 0;
  
  for (let i = begin; 
       step > 0 ? i <= end : i >= end; 
       i += step) {
    res += i;
  }
  
  return res;
}
