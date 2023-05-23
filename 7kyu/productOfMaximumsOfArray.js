function maxProduct(numbers, size){
  return numbers.sort((a, z) => z - a)
                .slice(0, size)
                .reduce((p, n) => p * n, 1);
}
