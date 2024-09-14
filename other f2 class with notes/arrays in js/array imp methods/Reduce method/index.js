const numbers = [1,2,3,4,5];

// aim : sum of all the numbers in array


const sum = numbers.reduce((accumulator, currentValue, index)=>{
    return accumulator + currentValue;
},100)


console.log(sum); // Output: 15

//         accumulator , currentValue , return 3
// first->  1          ,    2         ,   3
// second-> 3          ,    3         ,   6
// third->  6          ,    4         ,   10
// fourth-> 10         ,    5         ,   15
// fifth->  15         ,    10        ,   25



const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
]


const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{

    return totalPrice + currentProduct.price;

}, 0)

console.log(totalAmount); // Output: 49000

// totalPrice      currentValue          return 
// 0                {pID PName price}     12000
// 12000              22000                34000
// 34000              15000                49000