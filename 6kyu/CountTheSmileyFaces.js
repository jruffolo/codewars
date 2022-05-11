//return the total number of smiling faces in the array
function countSmileys(arr) {
    // guard case for empty array
    if (arr.length === 0) return 0;
    
    // regexp that checks for 1 or more [: or ;] then 0? or 1? [- or ~] then 1 or more [) or D]
    const regexp = /[:|;][-|~]?[\)|D]/;
    
    // make an array of valid smileys
    const validSmileys = arr.filter(smiley => regexp.test(smiley))
  
    // return the length of the valid smiley array
    return validSmileys.length
  }