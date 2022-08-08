function alphabetPosition(text) {
    // split string to array
    const split = text.split('');
    
    // filter out characters that aren't A-Z
    const filtered = split.filter(char => char.toUpperCase().charCodeAt() >= 65 && char.toUpperCase().charCodeAt() <= 90);
    
    // map those filtered characters to values 1-26 (subtract 64 from their ASCII values)
    const mapped = filtered.map(char => char.toUpperCase().charCodeAt() - 64);
    
    // return the mapped array back as a joined string with spaces
    return mapped.join(' ');
  }