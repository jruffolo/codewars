function solution(str){
    let strRev = [str.length]
    for (let i = 0; i <= str.length; i++) {
      strRev[i] = str[str.length - i]
    }
    
    return strRev.join('')
  }