function order(words){
    if (words.length === 0) return ''
    
    const splitArr = words.split(' ')
    let sortedArr = []
    let count = 1
    
    // start with count at 1, stay in while loop until we've found each number (count reaches length of arr)
    while (count <= splitArr.length) {
      
      // find the word which includes 1, then 2, etc - push onto sorted array, increment count
      splitArr.forEach(word => {
        if (word.includes(count)) {
          sortedArr.push(word)
          count++
        }
      })
    }
    
    return sortedArr.join(' ')
  }