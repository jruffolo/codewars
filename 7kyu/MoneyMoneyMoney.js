function calculateYears(principal, interest, tax, desired) {
    if (principal === desired) return 0;
    
    let p = principal;
    let i = interest;
    let t = tax;
    let d = desired;
    
    let oneYear = (p, i, t) => p + (p*i) - (p*i*t);
    
    let y = 0;
    
    while (p < d) {
      p = oneYear(p, i, t);
      y++;
    }
    
    return y;
  }