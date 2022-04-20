function isValidWalk(walk) {  
    // Solution B
      if (walk.length !== 10) return false;
      const directionVals = { 'n': 1, 's': -1, 'e': 0.01, 'w': -0.01};
      const onTime = walk.reduce((nav, dir) => nav += directionVals[dir], 0);
      
      return onTime === 0;
    
    // Solution A
    //   if (walk.length !== 10) return false;
    //   let ns = 0;
    //   let ew = 0;
      
    //   for (const dir of walk) {
    //     if (dir === 'n') ns++;
    //     else if (dir === 's') ns--;
    //     else if(dir === 'e') ew++;
    //     else ew--;
    //   }
      
    //   if (ns === 0 && ew === 0) return true;
    //   return false;
    }