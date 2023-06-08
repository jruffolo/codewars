function getCount(str) {
    let vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for (const char of str.split('')) {
      if (vowels.includes(char.toLowerCase())) vowelsCount++;
    }
    
    return vowelsCount;
  }