// filter method

// filter method true false (boolean) return krta h
// agr condition true hoti h 

// filter method har element pe ek provided function ko call karta hai, jo 
// boolean (true ya false) value return karta hai. Agar function true return
//  karta hai, to woh element naya 
// array mein include hota hai. Agar function false return karta hai,
//  to woh element naya array mein include nahi hota.
// Matlab, filter method khud true ya false return nahi karta, balki 
// ek naya array return karta hai jo un elements ko contain karta hai jo
//  filter condition ko pass karte hain. Callback function jo filter method
//   ko pass kiya jata hai, woh true ya false return karta hai.

// Array: numbers ek array hai jisme [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] elements hain.
// filter Method: filter method numbers array pe call hoti hai aur ek callback function provide kiya jata hai.
// Callback Function: Callback function har element ko number argument ke roop mein accept karta hai aur check karta hai agar woh even number hai (number % 2 === 0). Yeh function true return karta hai agar number even hai, aur false return karta hai agar odd hai.
// New Array: filter method ek naya array evenNumbers create karta hai jisme sirf even numbers hote hain.

// wo filter method ke responsebility h ki callback ka true or false ke return ke according fileter method
// value o new array me rakhta h 
// true ke case me hi rakhta h

// syntax :  -> let newArray = array.filter(callback(currentValue, index, array), thisArg)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEven = function(number){
    return number % 2 === 0;
}

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);




const oddNumbers = numbers.filter((number)=>{
    return number % 2 !== 0;  // return true or false for each element in the array. If true, that element is included in the new array. If false, it is excluded.  // here it will return all odd numbers.  // filter() method creates a new array with all elements that pass the test implemented by the provided function.  // filter() does not change the original array.  // It returns a new array.  // It does not mutate the original array.  // It does not have a return statement.  // It does not have a break statement.  // It does not have a continue statement.  // It does not have a for loop.  // It does not have a for-of loop.  // It does not have a for-in loop.  // It does not have a forEach method.  // It does not have a map method.  // It does not have a reduce method.  // It does
});

console.log(oddNumbers);



// Internal Working:
// Pehli Iteration:

// number: 1
// Condition: 1 % 2 === 0 (false)
// Do not include in evenNumbers
// Dusri Iteration:

// number: 2
// Condition: 2 % 2 === 0 (true)
// Include in evenNumbers
// Teesri Iteration:

// number: 3
// Condition: 3 % 2 === 0 (false)
// Do not include in evenNumbers
// Chauthi Iteration:

// number: 4
// Condition: 4 % 2 === 0 (true)
// Include in evenNumbers
// ...and so on for remaining elements.