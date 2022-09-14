function compareVersions (version1, version2) {
  version1 = version1.split('.').map(n => +n);
  version2 = version2.split('.').map(n => +n);
  
  for (let i = 0; i < Math.min(version1.length, version2.length); i++) {
    if (version1[i] !== version2[i]) {
      return version1[i] > version2[i];
    }
  }
  
  return version1.length >= version2.length;
}
