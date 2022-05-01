function powersOfTwo(n){
  if (n < 0) return
  
  let array = []
  
  for (let i = 0; i <= n; i++) {
    array[i] = 2 ** i
  }
  
  return array
}
