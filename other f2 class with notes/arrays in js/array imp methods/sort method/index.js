//  sort method

// 5,9,1200,400,3000
// 5,9,400,1200,3000


// first value ki assci code leta h or uske according sort krta h
const numbers = [5,      9,      1200,     400,    3000];
//             ["5",    "9",    "1200",   "400",  "3000"];
//             [5->53   9->57     1->49   4->52    3->51 
 // Asci ->    [53,      57,       49,     52,        51]


numbers.sort();


//  kuki javascript arr ko string me behave kr raha h
// isley ye output sahi nahi de raha 
console.log(numbers); // [1200, 3000, 400, 5, 9]



//////////////////////////////
// Lekin ye string ke case me sahi behave krta h

const userNames = ['ankush', 'mohit', 'nitish', 'harshit'];

userNames.sort();
console.log(userNames);   //['ankush', 'harshit', 'mohit', 'nitish']


// Mixed case phle capital words ko sort krtah phir small ko
const mixedNames = ["ABC", "ANKUSH", "Shekhawat", "ankush", "Rajput", "rajput", "mohit"];
mixedNames.sort();
console.log(mixedNames); 


/////////////////////////////////
// solution of numbers array

const newNumbers = [5, 9, 1200, 410, 3000];

// newNumbers.sort((a,b)=>{
//     return a -b;
// })

newNumbers.sort((a,b)=>a-b);   

console.log(newNumbers); // [5, 9, 410, 1200, 3000]

// ex 
//    1200    410
//     ^        ^
//     |        |
//     a        b   -> a - b => 1200 - 410 => 790
//                         + positive value -> b , a
//    ye order cahge kr dega
//     410     1200


// a -b -> negative  -> a,b
//  5, 9  = -4



// sort in decending order
numbers.sort((a,b)=> b-a);
console.log(numbers);


// real use case 
// price lowToHigh
// price highToLow


const products = [
    {productId: '1', productName: "p1", price: 300},
    {productId: '2', productName: "p2", price: 3000},
    {productId: '3', productName: "p3", price: 500},
    {productId: '4', productName: "p4", price: 8000},
    {productId: '5', productName: "p5", price: 200},
   
]

// price low to high

// products.sort((a,b) => a.price - b.price);

// console.log(products);

// ab yeh ham new array return kr rahe h
// original me koi changes nahi ho rahe h kuki ham slice se array copy kr leya h
const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price - b.price;
})

console.log(lowToHigh);

// price high to low

const highToLow = products.slice(0).sort((a,b)=>{
    return b.price - a.price;
})

console.log(highToLow);


// products.sort((a,b) => b.price - a.price);

// console.log(products);

// it will change the original array 
// so we can use hear slice and cloning