const whosOnline = (friends) => {
  for (let friend of friends) {
    if (friend.status === 'online' && friend.lastActivity > 10) {
      friend.status = 'away';
    }
  } 

  return friends.reduce((res, friend) => {
    if (!res[friend.status]) {
      res[friend.status] = [];
    }
    res[friend.status].push(friend.username);
    return res;
  }, {});
}
