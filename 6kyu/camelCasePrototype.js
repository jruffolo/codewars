String.prototype.camelCase=function(){
  return this.valueOf()
             .split(' ')
             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
             .join('');
}
