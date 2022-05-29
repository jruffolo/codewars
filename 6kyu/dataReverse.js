function dataReverse(data) {
  // populate an array of empty arrays (each array is for a chunk of 8 bits)
  const numChunks = data.length / 8;
  let chunkArr = Array.from(Array(numChunks), () => []);
  
  // use a little math to push 8 bits into each chunk, in order
  data.forEach((bit, i) => {
    chunkArr[Math.floor(i / 8)].push(bit);
  });
  
  // reverse the chunks and return the flattened array (unchunk it)
  return chunkArr.reverse().flat();
}

// PREP
// Parameters: an array solely composed of 1s and 0s, length will always be a multiple of 8

// Returns: an array where the data has been chunked (8 bits per chunk) and the chunks are reversed and flattened

// Examples: [1111000000001111] --> [11110000 00001111] --> [00001111 11110000] --> [0000111111110000]

// Pseudocode: 
// Determine how many chunks are in the array (length / 8)
// Map bits --> chunks into an array of arrays 
// Reverse the chunk array
// Return flattened chunk array
