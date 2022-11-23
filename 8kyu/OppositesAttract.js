function lovefunc(flower1, flower2){
    // moment of truth
    const isEven = num => num % 2 === 0 ? true : false;
    
    if ((isEven(flower1) && !isEven(flower2)) || (isEven(flower2) && !isEven(flower1))) {
      return true
    } else return false
  }