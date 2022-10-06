function removeNthChar(str, n) {
  let res = '';

  for (let i = 0; i < str.length; i++) {
    if ((i + 1) % n === 0) continue;
    res += str[i];
  }

  return res;
}

console.log(removeNthChar("Thies its H alltowe!en!? Th#is Tis GHalolomeen$!", 4));
console.log(removeNthChar("The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow.", 5));