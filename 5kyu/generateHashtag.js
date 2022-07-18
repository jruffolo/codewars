function generateHashtag(str) {
  if (str.trim().length === 0) return false;
  let hashtag = '#' + str.trim().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  return hashtag.length <= 140 ? hashtag : false;
}
