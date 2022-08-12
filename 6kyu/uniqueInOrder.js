var uniqueInOrder=function(iterable){
    let uniqueArr = [];
    for (const entry of iterable) {
      if (uniqueArr[uniqueArr.length - 1] === entry) continue;
      uniqueArr.push(entry);
    }
    
    return uniqueArr;
  }