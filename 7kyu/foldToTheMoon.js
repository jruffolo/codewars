function foldTo(distance) {
  if (distance < 0) return null;
  
  let d = 0.0001;
  let folds = 0;
  
  while (d < distance) {
    d *= 2;
    folds++;
  }
  
  return folds;
}
