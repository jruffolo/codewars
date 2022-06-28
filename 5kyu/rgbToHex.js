function rgb(r, g, b){
  const round = val => { if (val < 0) return 0; else if (val > 255) return 255; else return val; };
  const toHex = val => val.toString(16).padStart(2, '0').toUpperCase();
  return toHex(round(r)) + toHex(round(g)) + toHex(round(b));
}

// PREP
// Parameters: Three integer value representing RGB

// Returns: A string of characters from 0-F reprsenting RGB as hex

// Examples: rgb(255, 255, 255) --> 'FFFFFF', rgb(148, 0, 211) --> '9400D3', rgb(-20, 0, 255) --> '0000FF'

// Pseudocode: take int --> round to within 0-255 --> toString(16) for hex --> padStart for 00 instead of 0
//             --> toUppercase --> return RR + GG + BB
