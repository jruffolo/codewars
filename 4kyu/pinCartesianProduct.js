function getPINs(observed) {
  const adjacents = {'1': ['1', '2', '4'],
                     '2': ['1', '2', '3', '5'],
                     '3': ['2', '3', '6'],
                     '4': ['1', '4', '5', '7'],
                     '5': ['2', '4',' 5', '6', '8'],
                     '6': ['3', '5', '6', '9'],
                     '7': ['4', '7', '8'],
                     '8': ['0', '5', '7', '8', '9'],
                     '9': ['6', '8', '9'],
                     '0': ['0', '8']};
  
  const digitMap = observed.split('').map(digit => adjacents[digit]);
  return cartesianProduct(digitMap);
}

function cartesianProduct(args) {
    var r = [], max = args.length-1;
    function helper(arr, i) {
        for (var j=0, l=args[i].length; j<l; j++) {
            var a = arr.slice(0); // clone arr
            a += args[i][j].trim();
            if (i==max)
                r.push(a);
            else
                helper(a, i+1);
        }
    }
    helper([], 0);
    return r;
}
