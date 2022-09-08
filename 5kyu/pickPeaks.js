function pickPeaks(arr){
  let res = {pos: [], peaks: []};
  let ascending = false;
  let currentMax = 0;
  
  for (let i = 1; i < arr.length; i++) {
    // we have encountered a larger number, which means we are ascending
    if (arr[i] > arr[i-1]) {
      ascending = true;
      currentMax = i;
      continue;
    }
    
    // We have ascended already and now we have encountered a lower point
    // This means we have found a peak, so we push it to our result
    if (ascending && arr[i] < arr[i-1]) {
      res.pos.push(currentMax);
      res.peaks.push(arr[currentMax]);
      ascending = false;
    }
  }
  
  return res;
}
