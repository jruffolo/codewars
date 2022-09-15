function countPhotos(road){
  let res = 0;
  let countR = 0;
  let countC = 0;
  
  for (const object of road) {
    // for each camera we encounter, add the amount of cars moving right we have counted
    // for each car moving left we encounter, add the amount of cameras we have counted
    if (object === '.') {
      countC++;
      res += countR;
    } else if (object === '<') {
      res += countC;
    } else {
      countR++;
    }
  }
  
  return res;
}
