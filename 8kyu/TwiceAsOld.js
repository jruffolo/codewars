function twiceAsOld(dadYearsOld, sonYearsOld) {
    // We want to start from age 1 and find when dad / son === 2
    const diff = dadYearsOld - sonYearsOld;
    let count = 1;
    while ((diff + count) / count !== 2) {
      count++;
    }
    
    return Math.abs(sonYearsOld - count);
  }