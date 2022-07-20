const findLongest = str => str.split(' ')
                              .map(word => word.length)
                              .sort((a, z) => z - a)[0];
