function sortArray(array) {
    // had to use math.abs() because filter wasn't grabbing negatives due to odd negative % 2 resulting in -1
    let odds = array.filter(num => Math.abs(num) % 2 === 1).sort((a,z) => a - z);
    let sortedOdds = [];
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        sortedOdds.push(array[i]);
      } else {
        sortedOdds.push(odds.shift());
      }
    }
    
    return sortedOdds;
  }