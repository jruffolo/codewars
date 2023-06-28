function filter_list(l) {
    return l.filter(entry => typeof entry === 'number')
  }