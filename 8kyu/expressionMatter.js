function expressionMatter(a, b, c) {
  const abp = a + b;
  const abm = a * b;
  const bcp = b + c;
  const bcm = b * c;
  const abcp = a + b + c;
  const abcm = a * b * c;
  
  return Math.max(abp + c, abp * c, abm + c, abm * c, a + bcp, a * bcp, a + bcm, a * bcm, abcp, abcm);
}
