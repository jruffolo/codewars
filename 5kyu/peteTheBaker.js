function cakes(recipe, available) {
  let cakesWorth = {};
  
  for (const ingredient in recipe) {
    // if we are missing any ingredients, return 0 immediately
    if (!available[ingredient]) return 0;
    
    // keep track of how many cakes we can make out of the amount of each ingredient
    cakesWorth[ingredient] = 0;
    
    while (available[ingredient] >= recipe[ingredient]) {
      available[ingredient] -= recipe[ingredient];
      cakesWorth[ingredient]++;
    }
  }
  
  return Math.min(...Object.values(cakesWorth));
}
