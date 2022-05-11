function DNAStrand(dna){
    let compliment = '';
    
    const complimentList = {
      A: 'T',
      T: 'A',
      C: 'G',
      G: 'C',
    };
    
    for (let letter of dna) {
      compliment += complimentList[letter];
    }
    
    return compliment;
  }