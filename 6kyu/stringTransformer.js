function stringTransformer(str) {
  let caseFlipped = str.split('')
                       .map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())
                       .join('');
  
  return caseFlipped.split(' ')
                    .reverse()
                    .join(' ');
}
