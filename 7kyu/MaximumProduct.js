function adjacentElementsProduct(array) {
    let maxProduct = Number.NEGATIVE_INFINITY;
    
    for (let i = 0; i < array.length - 1; i++) {
      let [a,b] = array.slice(i, i+2);
      if (a*b > maxProduct) {
        maxProduct = a*b;
      }
    }
    
    return maxProduct;
  }