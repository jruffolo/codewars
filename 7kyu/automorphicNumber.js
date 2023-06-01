function automorphic(n){
  return n === Number(String(n ** 2).split('').slice(-1 * String(n).length).join('')) 
         ? 'Automorphic' : 'Not!!';
}
