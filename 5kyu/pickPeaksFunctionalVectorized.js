function pickPeaks(arr){
  // Vectorize the indices based on whether or not they are
  // greater than their previous value. Math.sign(b - a) results in either 1, 0, or -1
  // This corresponds to the difference between the current and previous value
  // This will result in ascending numbers being mapped to a positive version of their indices
  // and descending numbers being mapped to negative versions of their indices
  // Numbers which are the same as the previous number will be mapped to 0
  // so for example: [1, 3, 3, 5, 4] --> [0, 1, 0, 3, -4]
  // Basically we are using sign (+/0/-) to encode change into our indices
  let posVectorized = arr.map((n, i) => i > 0 ? Math.sign(n - arr[i-1]) * i : 0);
  
  // Now we get rid of any plateaus by filtering out 0 points (no change)
  let posNoZeros = posVectorized.filter(n => n !== 0);
  
  // Now we filter all points where our current vector is positive and the next is negative
  // This will give us the indices of all of our peaks
  let posPeaks = posNoZeros.filter((n, i, a) => i < arr.length - 1 && n > 0 && a[i+1] < 0);
  
  // Finally, we just return the position of our peaks
  // As well as the actual values at those indices in our input array
  return {pos: posPeaks, peaks: posPeaks.map(n => arr[n])};
}
