var countBits = function(n) {
  return Number(n).toString(2).split('').filter(num => +num === 1).length;
};
