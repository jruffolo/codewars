function domainName(url){
    const slash = url.includes('://') === true;
    const www = url.includes('www') === true;
    
    if (slash) {
      if (www) {
        return url.split('://').slice(1).join('').split('.')[1];
      }
      return url.split('://').slice(1).join('').split('.')[0];
    } else if (www) {
      return url.split('.')[1];
    } else {
      return url.split('.')[0];
    }
  }