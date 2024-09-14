// undefined 

// let or var ke case me ye undefined ata  h 
// jab ham variable instalize krde ot usme value assign a kre
//  tab wo hme undefinde deta h 


// let var case 
let firstName ;
var lastName ;

console.log(firstName, typeof firstName);  // output will be undefined undefined
console.log(lastName, typeof lastName);  // output will be undefined undefined

// or in undefined variable me bad me value assgin bhi kr sakhte h
firstName = "Ankush";
lastName = "Shekhawat";
console.log(firstName, typeof firstName); // output will be Ankush String
console.log(lastName, typeof lastName); // output will be Shekhawat String

console.log(firstName +" "+ lastName );



// const case

// const ke case me yeh error dega ham const ko undefined instalize nahi kr sakhte
// cost me insatlize ke sath hi value assign krn epdte h

// const age;
// console.log(age, typeof age);  // SyntaxError: Missing initializer in const declaration

const secondAge = 16;
console.log(secondAge, typeof secondAge); // 16



 