function stockList(listOfArt, listOfCat){
  // guard clause for invalid arguments
  if (!listOfArt.length || !listOfCat.length) return '';
  
  // filter array to only include books which fit the categories
  let filteredArr = listOfArt.filter(book => listOfCat.includes(book.substring(0, 1)));
  
  // generate object to store sums for each category letter
  let sumObj = {};
  for (const val of listOfCat) {
    sumObj[val] = 0;
  }
  
  // sum up the values and add them to array
  for (const book of filteredArr) {
    sumObj[book.substring(0, 1)] += Number(book.split(' ')[1]);
  }

  // generate formatted strings from the completed object, store tham in an array
  let results = [];
  for (const [key, val] of Object.entries(sumObj)) {
    results.push(`(${key} : ${val})`);
  }
  
  // join the array and add correct formatting
  return results.join(' - ');
}
