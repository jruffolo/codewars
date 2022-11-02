function sortByLastChar(str) {
  return str.split(' ')
            .sort((a, z) => {
              let lastA = a[a.length - 1];
              let lastZ = z[z.length - 1];
              
              return lastA > lastZ ? 1 : lastA < lastZ ? -1 : 0;
            });
}


console.log(sortByLastChar('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
console.log(sortByLastChar('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']);
console.log(sortByLastChar('take me to semynak'), ['take', 'me', 'semynak', 'to']);