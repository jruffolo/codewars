function past(h, m, s){
    let ms = 0
    if (h < 0 || h > 23) {
      return
    } else if (m < 0 || m > 59) {
      return
    } else if (s < 0 || s > 59) {
      return
    } else {
      ms += h * (3.6 * (10 ** 6))
      ms += m * 60000
      ms += s * 1000
    }
    
    return ms
  }