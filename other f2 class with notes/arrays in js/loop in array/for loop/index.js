// for loop in array

// why need loop in array -> to traverse and acess the value of array 
// hme array ke every value ko access krna h wha kuch operation perform krna h
                // 0          1       2         3
let fruits = ["apple", "orange", "grapes", "banana"];

console.log(fruits.length);   //4
  
// for loop 
// i 0 se chlega or last index tak le jayega
let fruits2 = [];
for(let i =0; i<fruits.length; i++){
    console.log(fruits[i]);  // apple orange grapes banana
    // perform operation
    fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2); // ["APPLE", "ORANGE", "GRAPES", "BANANA"]



