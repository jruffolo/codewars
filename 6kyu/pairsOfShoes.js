function pairOfShoes(shoes) {
  let seen = [];
  let pairs = 0;
  
  for (const [type, size] of shoes) {
    let shoe = `${type}${size}`;
    let otherShoe = `${1 - type}${size}`;
    
    if (!seen.includes(otherShoe)) {
      seen.push(shoe);
    } else {
      pairs++;
    }
  }
  
  return shoes.length / pairs === 2;
}
