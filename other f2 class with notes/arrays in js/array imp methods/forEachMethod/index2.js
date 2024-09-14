// forEach loop

// ForRach method ek array method h jo only array pr work krta h
// ye method ek call back fun as a argument or dusra oerimetr thisArgu bhi leta h
// ForEach mthod jis arry pr lgate h ye us array ke har element pr jayega
// aur us Element ke leya call back fun chlayega
// aur us call back fun 3 arument leta  -> currentValue, index, array
// ye call back fun in method array ki currValue , index parameter me array ka index or array me array deta h jis pr forEcah loop apply kiya ja raha h



// Ex ->

let fruits = ["apple", "orange", "banana", "mango"];


// y ek function h jo three perimeter le raha 
let y = function (element, index, list){
    console.log(`Element: ${element}`); 
    console.log(`Index: ${index}`); 
    console.log(`Array: ${list}`);
}

// y fun ko ham forEach me as a call back de denege jisme forEach usme har primeter me value dega
// yaha pr forEach fruit ke ghar valu pr ek ek krke jayega
// harek value ke call back fun chlyega or usme ke perimeter me value dega
// forEach phle var me 
// arr ki value  elelment -> apple
// dusre var me index ki value deta h
// index -> 0
// 3 var me array deta h jis pr forEach run kr raha h
// array =  ["apple", "orange", "banana", "mango"]
// ase li last tak jayega
// forEach original array me koi changes nahi krta h
fruits.forEach(y);


// ex for ecah me ke ander ye ham fun define kr sakhte h
let nums = [4, 2, 6, 9]

nums.forEach((number) => {
    console.log(number) ;
})



// agr arra me objects store h tab forEach kasie work krta h
const students = [
    { name: 'Aman', marks: 85 },
    { name: 'Bella', marks: 92 },
    { name: 'Chris', marks: 78 }
];


students.forEach(function(student, index, array) {
    console.log(`Student ${index + 1}`);
    console.log('Name:', student.name);
    console.log('Marks:', student.marks);
    console.log('Original Array:', array);
});




////////////////
// Explanation:
// students: Yeh ek array of objects hai jisme har object ek student ke details ko represent karta hai.

// forEach Method: Hum students array pe forEach method call karte hain aur ek callback function provide karte hain jo har student object ko process karega.

// Callback Function:

// student: Yeh current student object ko represent karta hai.
// index: Yeh current student ka index hai.
// array: Yeh original students array ko represent karta hai.


// output :
        // Student 1
        // Name: Aman
        // Marks: 85
        // Original Array: [{ name: 'Aman', marks: 85 }, { name: 'Bella', marks: 92 }, { name: 'Chris', marks: 78 }]

        // Student 2
        // Name: Bella
        // Marks: 92
        // Original Array: [{ name: 'Aman', marks: 85 }, { name: 'Bella', marks: 92 }, { name: 'Chris', marks: 78 }]

        // Student 3
        // Name: Chris
        // Marks: 78
        // Original Array: [{ name: 'Aman', marks: 85 }, { name: 'Bella', marks: 92 }, { name: 'Chris', marks: 78 }]



//  forEach(callback, this)
// this argument

// forEach fun ek optional perimeter bh i leta h thisArgu
// jo ham pass na bhi kre toh forEach work krta h lekin phla arg pass na kre toh forEach error deg
// this me kuch pass na kre toh wo window ko refer krega
// kuki by default this window ko refer krta h


const newFruits = ['apple', 'banana', 'mango'];

newFruits.forEach(function(fruit) {
    console.log(this); // Output: undefined (in strict mode)
});




// Example with thisArg:
// Ab hum ek example dekhenge jisme thisArg use karenge:
// jo object ya array pass krenge this usko refer krega
// this me wo chiz chle jate h

// this -> [1,2,3,4]  => this[0]
//this -> {prefix: 'fruit, suffix: notfruit} -> this.suffix => notFruit

const fruits2 = ['apple', 'banana', 'mango'];

const context = {
    prefix: 'Fruit:'
};

arr1 =[1,23,45]

fruits2.forEach(function(fruit) {
    console.log(`${this.prefix} ${fruit}`);
}, context);




//  dif and use case 


// forEach hme kuch return nahi krta h yeh har ek value pr funtion execute krta h
// forEach: Original array ko modify nahi karta. Yeh sirf side-effects ke liye use hota hai jaise console logging, DOM manipulation, etc.
// forEach: Jab aapko array ke elements pe iterate karke side-effects perform karne ho, jaise logging, counting, etc.

// Explanation:
// Array: numbers ek array hai.
// forEach Method: numbers array pe forEach method call hoti hai jo har element pe iterate karti hai aur unko log karti hai.

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(number, index) {
//     console.log(`Index: ${index}, Value: ${number}`);
// });



// forEach kuch return nahi krta

function myFunc(number, index){
    console.log(`index is ${index} number is ${number}   `);
    console.log(`${number} * 2 = ${number*2}`);
    return number;
}

arr1 = numbers.forEach(myFunc);
console.log("line165",arr1);  //line144 undefined


// jabki map return krta h

function myFunc(number, index){
    console.log(`index is ${index} number is ${number}   `);
    console.log(`${number} * 2 = ${number*2}`);
    return number;
}

arr2 = numbers.map(myFunc);
console.log("line177",arr2);  //line177 (4) [4, 2, 5, 8]



// map


// map use case 

// agr ham kuch return nahi krte to undefined return hota h
// agr undined return hoga tonew array me bhi undefined store hoke ayega


// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(function(number) {
//     return number * 2;
// });

// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
// Explanation:
// Array: numbers ek array hai.
// map Method: numbers array pe map method call hoti hai jo ek naya array doubledNumbers create karti hai jisme har element doubled value hoti hai.
