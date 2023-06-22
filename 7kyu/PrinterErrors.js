function printerError(s) {
    let errorCount = 0;
    let validLetters = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m']
    for (let letter of s) {
      if (validLetters.includes(letter)) continue;
      errorCount++;
    }
    return `${errorCount}/${s.length}`;
  }