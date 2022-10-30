function peopleWithAgeDrink(old) {
  let res = 'toddy';
  
  if (old >= 14) res = 'coke';
  if (old >= 18) res = 'beer';
  if (old >= 21) res = 'whisky';
  
  return `drink ${res}`;
};
