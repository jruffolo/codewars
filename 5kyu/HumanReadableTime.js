function humanReadable (seconds) {
  let h = 0;
  let m = 0;
  let s = 0;
  
  while (seconds >= 3600) {
    h++;
    seconds -= 3600;
  }
  
  while (seconds >= 60) {
    m++;
    seconds -= 60;
  }
  
  h = h.toString().padStart(2, '0');
  m = m.toString().padStart(2, '0');
  s = seconds.toString().padStart(2, '0');
  
  return `${h}:${m}:${s}`;
}
