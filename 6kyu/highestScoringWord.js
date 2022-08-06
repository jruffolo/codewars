function high(x){
    // generate an object with key/values a: 1 ... z: 26
    let scores = {};
    for (let i = 1; i <= 26; i++) {
      scores[String.fromCharCode(i+96)] = i;
    }
    
    // split our string into an array of words
    let words = x.split(' ');
    let highScore = [0, '']; // [score, word]
    
    // for each word, tally up the points of each character
    for (let word of words) {
      let score = 0;
      for (let char of word) {
        score += scores[char];
      }
      
      // if the word score is higher than the current highScore, save the new [highScore, word]
      if (score > highScore[0]) {
        highScore = [score, word];
      }
    }
    
    return highScore[1];
  }
  