const moveZeros = arr => arr.filter(e => e !== 0).concat(...Array.from(Array(arr.filter(e => e === 0).length), e => 0));
