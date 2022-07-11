function toWeirdCase(string){
  return string.split(' ')
               .map(word => word
                            .split('')
                            .reduce((w, char, i) => w + (i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()), ''))
               .join(' ');
}
