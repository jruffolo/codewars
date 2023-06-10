function longest(s1, s2) {
    let strings = s1 + s2;
    let sortedArr = strings.split('').sort();
    
    for (let i = 0; i < sortedArr.length - 1; i++) {
      if (sortedArr[i + 1] === sortedArr[i]) {
        sortedArr.splice(i + 1, 1);
        i--; // fixes the problem of skipping past letters due to array length changing after deletion but index staying same
             // probably a more eloquent solution but brain is too dumb right now
             // just looked at other solutions, learn how to use Set() it's way easier lol
      }
    }
    
     return sortedArr.join('');
  }