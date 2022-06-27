function isValidIP(str) {
  const octets = str.split('.');
  if (octets.length !== 4) return false;
  
  const valid = Array.from(Array(256).keys()).map(val => String(val));
  
  for (let octet of octets) {
    if (!valid.includes(octet)) return false;
  }
  
  return true;
}
