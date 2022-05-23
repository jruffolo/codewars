function bestMatch(ALAHLYGoals, zamalekGoals) {
  let lowestDiff = [ALAHLYGoals[0] - zamalekGoals[0], 0];
  
  for (let i = 1; i < ALAHLYGoals.length; i++) {
    let diff = ALAHLYGoals[i] - zamalekGoals[i];
    
    if (diff > lowestDiff[0]) {
      continue;
    } else if (diff < lowestDiff[0]) {
      lowestDiff = [diff, i];
    } else if (zamalekGoals[i] >= lowestDiff[1]) {
      lowestDiff = [diff, i];
    }
  }
  
  return lowestDiff[1];
}

// PREP
// Parameters: two arrays of equal length, containing only non-negative integers

// Returns: a single integer corresponding with the indexed game that was the "best match"

// Examples: [1, 4, 6], [0, 3, 2] --> 1 because index 1 the score was 4-3 = 1

// Pseudocode:
// declare an array that will hold [lowestDiff, index]
// For loop thru array1, store difference in lowestDiff if it is lower than current
// if it is equal to lowestDiff, replace index if the amt of array2 goals is higher at that index
// return lowestDiff[1]
