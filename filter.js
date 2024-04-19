const numbers = [1, 2, 3, 4, 5, 6];
const players = [75,65,67,72,55,59];
// const selected = players.filter(p=> p > 70)
// const selected = players.filter(p=> p > 80)
// for even number
const selected = players.filter(p => p % 2 == 0)
console.log('Selected: ',selected);
const friends = ['Tom','John','Micheal','Oliver','joshna'];
const oddFriends = friends.filter(friend => friend.length > 4)
console.log(oddFriends);