function descendingOrder(n){
    //   let string = n.toString();
    //   let arr = string.split('');
    //   let arrSort = arr.sort((a,b) => b-a);
    //   let arrJoin = arrSort.join('');
      
    //   return Number(arrJoin);
      
      return Number(n.toString().split('').sort((a,b) => b-a).join(''));
    }