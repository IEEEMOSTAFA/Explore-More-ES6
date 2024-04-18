/*
* 1.Var Let Const
* 2.default parameter
* 3.template strings  vvI
* 4.Arrow Function
* 5.destructuring and Spread operator
* 6. Object.keys , Object.values , Object.entries
7.7. for of used in array and string
* 8.for in loop used in object

*/

const a = 56;
const numbers = [56,7,8]
const person = {
    name:'sakib khan'
}
const message = `Hi, &{person.name} has a: {a} access to ${numbers[2]}`


// Arrow Function:

const square = (x) => x * x;
console.log(square(7));

const  sum = (a,b) => a + b;
console.log(sum(7,3));

const { age, z, ...others } = {x: 2,y: 3,z: 4, name: 'sakib',age:23 }
const [first, second, ...remaining] = ['ram','sam','jodu','modhu']
