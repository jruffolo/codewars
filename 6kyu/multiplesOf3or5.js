function solution(number){
  if (number < 0) return 0;
  return [...Array(number).keys()].filter(num => num % 3 === 0 || num % 5 === 0).reduce((sum, num) => sum + num, 0);
}
