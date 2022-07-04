function findUniq(arr) {
    // function to compare the size and contents of two Sets and determine their equivalence
    const compareSets = (set1, set2) => set1.size === set2.size && [...set1].every(val => set2.has(val));
    
    // function that establishes a True Set to check our array against
    const findTrueSet = (set1, set2, set3) => {
      if (compareSets(set1, set2) && compareSets(set2, set3)) {
        return set1;
      } else if (compareSets(set1, set2)) return 2; // edge cases for if the odd one out ruins our True Set assignment
      else if (compareSets(set2, set3)) return 0;
      else return 1;
    };
    
    // pass the first 3 elements of our array as Sets to get our true Set
    const trueSet = findTrueSet(new Set(arr[0].toUpperCase()), new Set(arr[1].toUpperCase()), new Set(arr[2].toUpperCase()));
    
    // if we hit an edge case setting our true set, return that edge case
    if (trueSet === 0 || trueSet === 1 || trueSet === 2) return arr[trueSet];
    
    // check each array element as a set against the true set, return the one that fails the check
    for (const str of arr) {
      if (compareSets(new Set(str.toUpperCase()), trueSet) === false) {
        return str;
      }
    }
  }