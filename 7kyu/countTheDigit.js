function nbDig(n, d) {
  return Array.from(Array(n+1).keys()).flatMap(n => String(Math.pow(n, 2)).split('')).filter(n => +n === d).length;
}
