//  filter selects element based on a condition and returns an array with the elements that fulfilled the conditon
const numbers = [1, 2, 3, 4, 5, 6];
const players = [75,65,67,72,55,59];
const selected = players.filter(p=> p > 70)
console.log('Selected: ',selected);
// const result = numbers.forEach(n => console.log(n));