function score( dice ) {
  let triplets = {'1': 1000, '2': 200, '3': 300, '4': 400, '5': 500, '6': 600};
  let singles = {'1': 100, '5': 50};
  let diceMap = {};
  let score = 0;
  
  // count up all of the dice
  for (const n of dice) {
    if (!diceMap[n]) {
      diceMap[n] = 1;
    } else {
      diceMap[n]++;
    }
  }
  
  for (const n in diceMap) {
    while (diceMap[n] >= 3) {
      diceMap[n] -= 3;
      score += triplets[n];
    }
    
    if (singles[n]) {
      while (diceMap[n] > 0) {
        diceMap[n]--;
        score += singles[n];
      }
    }
  }
  
  return score;
}
