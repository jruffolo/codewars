function arrayDiff(a, b) {
  let setA = new Set(a);
  let setB = new Set(b);

  setA.forEach(entry => {
    if (setB.has(entry)) {
      setA.delete(entry);
    }
  });
  
  return a.filter(num => setA.has(num));
}

// PREP
  // Parameters: Two arrays containing integer numbers (a and b)

  // Returns: One array in which all instances of values present in array b are removed from array a

  // Examples: [1, 2, 3, 4], [2, 3] --> [1, 4] || [1, 2, 2, 3, 4], [2, 4] --> [1, 3]

  // Pseudocode:
  // Make setA and setB using the JavaScript Set object
  // setA.forEach entry setB.has, setA.delete entry
  // return a.filter by setA.has
