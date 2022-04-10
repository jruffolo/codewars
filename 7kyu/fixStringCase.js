function solve(s){
  let caseCount = 0;
  
  for (const char of s) {
    char === char.toUpperCase() ? caseCount++ : caseCount--;
  }
  
  return caseCount > 0 ? s.toUpperCase() : s.toLowerCase();
}
