let myVariable = null;
console.log(myVariable, typeof myVariable);  //null 'object'

myVariable = "Ankush";
console.log(myVariable, typeof myVariable);  // Ankush string


 //  Note: 
// type of object null dena chaye the lekin yeh object de raha h
// ye js me bug or error h
console.log(typeof null); // object


// Big int
let myNumber = 123;
console.log(myNumber, typeof myNumber); // 123

// MAX_SAFE_INTEGER -> ye bata h hm js me safely kitna bada no store kr sakte h
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// agr hmko isse bhi bada number store krna h tab ham bigInt me store kr skhte h
let largeNumber = BigInt(12345667384776656546774655534578678678687);

console.log(largeNumber, typeof largeNumber); // 12345667384776656546774655534578678678687n 'bigint'

let anotherNumber = BigInt(12);
console.log(anotherNumber, typeof anotherNumber); // 12n 'bigint'

// another way to create big int

let bigInt = 13n;
console.log(bigInt, typeof bigInt); // 12n 'bigint'

console.log(anotherNumber + bigInt, typeof anotherNumber + bigInt); 


// big int ko ham kise or ke sathb mix nhi kr sakhte
 // dondo nuber big int honge tabhi operation perforn hoga

 let normalNumber = 15;
 let otherNumber = 16n;
 console.log(normalNumber + otherNumber, typeof normalNumber + otherNumber); // error message
// TypeError: Cannot mix BigInt and other types, use explicit conversions 31n 'bigint'