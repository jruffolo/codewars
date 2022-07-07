function sqInRect(lng, wdth){
  if (lng === wdth) return null;
  
  let squares = [];
  while (lng > 0 && wdth > 0) {
    if (lng > wdth) {
      squares.push(wdth);
      lng -= wdth;
    } else if (wdth > lng) {
      squares.push(lng);
      wdth -= lng;
    } else {
      squares.push(lng);
      break;
    }
  }
  
  return squares;
}
