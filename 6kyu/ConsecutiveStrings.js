function longestConsec(strarr, k) {
    // guard clause for invalid arguments
    if (k <= 0 || strarr.length === 0 || k > strarr.length) return '';
    
    // find the longest concatenated length of k index width and get the starting index
    let longest = [0];
    for (let i = 0; i <= strarr.length - k; i++) {
      let sum = strarr.slice(i, i + k).reduce((sum, num) => sum += num.length, 0);
      if (sum > longest[0]) {
        longest = [sum, i];
      }
    }
  
    // concatenate k words starting at the correct index
    let longestCat = ''
    for (i = 0; i < k; i++) {
      longestCat += strarr[longest[1] + i];
    }
  
    return longestCat;
  }