// intro to array
// Array is reference type

// JavaScript mein arrays kaafi useful data structures hain. Arrays ek ordered collection hota hai, jismein aap multiple values ko store kar sakte hain. 
// arrays is collection of ordered items

//  Arrays creation 

    // 1. using array literal []
    let fruits = ["apple", "mango", "grapes"];

    // 2. Using the Array constructor
    let vegetables = new Array("carrot", "broccoli", "spinach");


    // array ordered collection h  means index pr store h every element
    // ind->   0         1        2
    //      ["apple", "mango", "grapes"];



// Other example of array
    let numbers = [1, 2, 3, 4, 5];
    console.log(numbers);

    // we can store any type of element
    let mixedArray = [1, "apple", true, 2.3, null, { name: "John" }];
    console.log(mixedArray);
    // array ke andar ham array bhi store kr sakhte h


// Accessing elements in array
    console.log(fruits[2]);
    console.log(fruits[0]);

// Updating elements in array
    console.log(fruits);
    fruits[1] = "banana";
    console.log(fruits);


// check type of array
    console.log(typeof fruits);  // object

    //Note :- array object hota h js me
    
    // Array ka kaise pta kr sakhte h ki array h ki nahi
    // isArray() me agr ham array pass krenge toh true dega or kuch pass krnge to false dega
    console.log(Array.isArray(fruits)); // true    
  


let obj = {}; // object literal
  console.log(Array.isArray(obj)); // false  