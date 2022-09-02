function solve(s) {
  let consonants = {'b': 2, 'c': 3, 'd': 4, 'f': 6,
                    'g': 7, 'h': 8, 'j': 10, 'k': 11,
                    'l': 12, 'm': 13, 'n': 14, 'p': 16,
                    'q': 17, 'r': 18, 's': 19, 't': 20,
                    'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26};
  let maxVal = 0;
  let runningTotal = 0;
  for (const char of s) {
    if (consonants[char]) {
      runningTotal += consonants[char];
    } else {
      runningTotal = 0;
    }
    maxVal = Math.max(maxVal, runningTotal);
  }
  
  return maxVal;
};
