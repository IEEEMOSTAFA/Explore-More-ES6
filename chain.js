//  data access 
const data = [{ id: 1, name: 'abul',address:'istanbul' }];
// console.log(data.address);
// console.log(data);
// console.log(data[0].address);


const products = {
    count: 5000,
    data: [
        {id:1,name:'product 1',price:100},
        {id:2,name:'product 2',price:200},
    ]
}
// second product price
// console.log(products)
// console.log(products.data)             // we find a array
// console.log(products.data[1])             
// console.log(products.data[1].price)    

const user = {
    id: 2,
    name: 'mostafa',
    address: {
        street: {
            first: '54/1 East side',
            second: 'New Kashmir',
            third: 'no exit'
        },
        city: 'Dhaka'
    }
}
// console.log(user);
// console.log(user.address);
// console.log(user.address.street);
// console.log(user.address.street.second);


const user2 = {
    id:2,
    name: 'mostafa',
     address:{
         city: 'chittagong',
        country: 'Bangladesh'
    }
}
// console.log(user2.address.country)
console.log(user2.address.street?.second); 