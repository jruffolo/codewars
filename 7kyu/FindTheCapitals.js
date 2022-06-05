var capitals = function (word) {
    // Split word into an array i.e. 'word' becomes [w, o, r, d]
    let wordArr = word.split('');
    let capitalArr = [];
    
    // Destructure arr.entries() to get index/value pairs in for-of loop
    for (const [index, char] of wordArr.entries()) {
      // If original character value = uppercased value, then push to capitalArr
      if (char === char.toUpperCase()) {
        capitalArr.push(index);
      }
    }
    
    return capitalArr;
  };