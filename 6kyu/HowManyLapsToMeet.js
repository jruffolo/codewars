var nbrOfLaps = function (x, y) {
  for (let i = Math.max(x, y); i <= x*y; i++) {
    if (i % x === 0 && i % y === 0) return [i/x, i/y];
  }
}

 // PREP
  // Parameters: two integer numbers greater than 0, x and y
  // each representing a track length
  
  // Returns: an array containing two integer numbers greater than 0
  // each representing the lowest muliple where the two lengths will match up
  // (note, the two runners are going at the same speed)
  
  // Examples:
  // Given 4 and 12, the result would be [3, 1] (when runner X has gone 3 laps, runner Y will have gone 1 lap)
  // Given 7 and 9, the result would be [9, 7]
  // Given 5 and 10, the result would be [4, 2]
  
  // Pseudocode:
  // for loop, count from bigger number (Math.max) to x*y (where they definitely will meet)
  // if count % x equal to 0 and count % y equal to 0, return [i/x, i/y]
