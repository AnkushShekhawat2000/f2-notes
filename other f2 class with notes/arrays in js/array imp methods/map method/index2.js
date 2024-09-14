// JavaScript mein map method ek array method hai
//  jo har element ke liye ek provided function ko call karta hai
//  aur ek naya array return karta hai 
// jisme har element result hota hai 
// us function ka. Yeh original array ko
//  modify nahi karta, balki ek naya array
//  create karta hai.

// let newArray = array.map(callback(currentValue, index, array), thisArg)



// JavaScript mein map method ek array method hai jo har element ke liye ek provided function ko call karta hai aur ek naya array return karta hai jisme har element result hota hai us function ka. Yeh original array ko modify nahi karta, balki ek naya array create karta hai.

// Syntax
// let newArray = array.map(callback(currentValue, index, array), thisArg)
// Parameters
// callback (required): Yeh wo function hai jo har element pe apply hota hai. Iske 3 arguments hote hain:

// currentValue: Current element jo process ho raha hai array mein.
// index (optional): Current element ka index.
// array (optional): Original array jo process ho rahi hai.
// thisArg (optional): Isko use karke this value specify kar sakte hain jo callback function ke liye use hogi.

// Example
// Hum ek simple example dekhte hain jisme hum ek array ke elements ko double karenge using map method.



const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function(number) {
    return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


// Explanation
// Array: numbers ek array hai jisme [1, 2, 3, 4, 5] elements hain.
// map Method: map method numbers array pe call hoti hai aur ek callback function provide kiya jata hai.
// Callback Function: Callback function har element ko number argument ke roop mein accept karta hai aur uska double return karta hai.
// New Array: map method ek naya array doubledNumbers create karta hai jisme doubled values hoti hain.