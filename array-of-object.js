const products = [
    {id: 1, name: 'product1', price: 100},
    {id: 2, name: 'product2', price: 200},
    {id:2,name:'product3',price:300},
    {id:4,name:'product5',price:400},
]
// map  
const names = products.map(product => product.name)
// console.log(names);
const price = products.map(price => price.price)
// console.log(price);

// forEach
products.forEach(p => console.log(p.id))

// filter

const expensive = products.filter(p => p.price > 200);
// console.log(expensive)
// find
const affordable = products.find(p => p.price < 400)
console.log(affordable);

// accumulator
const total = products.reduce((acum,current) => acum + current.price , 0);
console.log(total);