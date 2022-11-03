function shortcut (string) {
  return string.split('')
               .filter(c => !'aAeEiIoOuU'.includes(c))
               .join('');
}
