function disariumNumber(n){
  return n === String(n)
               .split('')
               .map((c, i) => Math.pow(+c, i + 1))
               .reduce((sum, n) => sum + n, 0) 
         ? 'Disarium !!' : 'Not !!';
}
