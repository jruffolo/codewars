function grow(x){
    return x.reduce((product, num) => product *= num, 1)
  }