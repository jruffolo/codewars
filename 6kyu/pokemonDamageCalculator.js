function calculateDamage(yourType, opponentType, attack, defense) {
  const superEffective = ['firegrass', 'waterfire', 'grasswater', 'electricwater'];
  const neutral = ['fireelectric', 'electricfire', 'grasselectric', 'electricgrass'];
  const relationship = yourType + opponentType;
  let effectiveness;
  
  if (superEffective.includes(relationship)) {
    effectiveness = 2;
  } else if (neutral.includes(relationship)) {
    effectiveness = 1;
  } else {
    effectiveness = 0.5;
  }
  
  return 50 * (attack / defense) * effectiveness;
}
