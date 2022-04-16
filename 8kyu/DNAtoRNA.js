function DNAtoRNA(dna) {
    let rna = ''
    dna.split('').forEach(char => {
      if (char === 'T') {
        rna += 'U'
      } else {
        rna += char
      }
    })
    return rna
  }