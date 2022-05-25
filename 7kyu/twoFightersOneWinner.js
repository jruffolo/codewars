function declareWinner(fighter1, fighter2, firstAttacker) {
  const attack = (attacker, target) => {
    target.health -= attacker.damagePerAttack;
  }
  
  let fightOrder;
  if (fighter1.toString() === firstAttacker) fightOrder = [fighter1, fighter2];
  else fightOrder = [fighter2, fighter1];
  
  let count = 0;
  while (fighter1.health > 0 && fighter2.health > 0) {
    if (count % 2 === 0) {
      attack(fightOrder[0], fightOrder[1]);
    } else {
      attack(fightOrder[1], fightOrder[0]);
    }
    count++;
  }

  return fighter1.health > 0 ? fighter1.toString() : fighter2.toString();
}
