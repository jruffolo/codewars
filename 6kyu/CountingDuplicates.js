function duplicateCount(text){
    let textUpper = text.toUpperCase();
    let uniqueArr = [];
    let dupeArr = [];
    
    for (const char of textUpper) {
      if (dupeArr.includes(char)) continue;
      else if (uniqueArr.includes(char)) {
        dupeArr.push(char);
      } else {
        uniqueArr.push(char);
      }
    }
    
    return dupeArr.length;
  }