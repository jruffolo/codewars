function meeting(s) {
  let indiv = s.split(';');
  let firstLast = indiv.map(i => i.toUpperCase().split(':').reverse());
  let sorted = firstLast.sort(([lA, fA], [lZ, fZ]) => {
    if (lA < lZ) {
      return -1;
    } else if (lA > lZ) {
      return 1;
    } else if (fA < fZ) {
      return -1;
    } else return 1;
  });
  
  let result = sorted.map(person => `(${person.join(', ')})`).join('');
  return result;
}
