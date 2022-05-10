const sequenceSum = (begin, end, step) => {
    // guard clause for invalid input
    if (begin > end) return 0;
    
    // determine number of steps
    const numOfSteps = Math.floor((end - begin) / step);
    let sequence = [];
    
    // generate sequence based on parameters
    for (let i = 0; i <= numOfSteps; i++) {
      sequence.push(begin + (step*i));
    }
    
    // return sum of sequence
    return sequence.reduce((sum, num) => sum + num, 0);
  };