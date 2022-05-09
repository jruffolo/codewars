function revrot(str, sz) {
    // guard clause for invalid cases
    if (sz <= 0 || str.length < sz) return '';
    
    // populate an array of chunks of the proper size (ignore ending digits that dont fit in a chunk)
    let chunks = [];
    let numOfChunks = Math.floor(str.length / sz);
    
    for (let i = 0; i < numOfChunks; i++) {
      chunks.push(str.slice(i*sz, i*sz + sz));
    }
    
    // for each chunk, check if sum of digits**3 is an even number
    // (REV)  if yes, reverse the chunk and push it to result array
    // (ROT)  if no, move the first digit to the end of the chunk and push it to result array
    let result = [];
    for (const chunk of chunks) {
      let sum = chunk.split('').reduce((sum, dig) => sum + Number(dig)**3, 0);
  
      if (sum % 2 === 0) {
        result.push(chunk.split('').reverse().join(''));
      } 
      else {
        let rot = chunk.split('');
        rot.push(rot.shift());
        result.push(rot.join(''));
      }
    }
  
    // return the joined array of rev/rot'd chunks
    return result.join('');
  }