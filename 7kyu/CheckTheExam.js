function checkExam(array1, array2) {
    let score = 0;
    
    for (let i = 0; i < array1.length; i++) {
      if (array2[i] === '') continue;
      else if (array2[i] === array1[i]) score += 4;
      else score--;
    }
    
    return score < 0 ? 0 : score;
  }