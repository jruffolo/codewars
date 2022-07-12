function incrementString (string) {
  const index = string.split('').findIndex(char => [0,1,2,3,4,5,6,7,8,9].includes(Number(char)));
  const number = string.slice(index);
  return index === -1 ? string + 1 : string.slice(0, index) + String(Number(number) + 1).padStart(number.length, '0');
}
