// primitive vs reference data type


// Primitive types -> string , int, 
// primitive types me value copy hote h mtlab sabhi alag alag sapce occupy krte h 
// sabhi alag alag hone ke wajah se cahnges reflect nahi krte kuki sabhi alag jgah pr 

let num1 = 6;
let num2 = num1;

console.log("value of num1 is : ", num1);    // 6
console.log("value of num2 is : ", num2);    //6
num1++;  // change value of num1             
console.log("after increment num1 :", num1); // num1 -> 7
console.log("value of num1 is : ", num1);    // 7
console.log("value of num2  is : ", num2);   // 6



// reference type -> array object

// refersnce me agr ek value kise dusre refersence type element ko store krte h toh 
// wo copy hoke nahi ata balki uska reference ata h 
// dono ek hi memory address pr store element ko point krege
// agr kisi ek me change krenge toh sabhi dono me changes reflect krenge kuki location tohb same h jaha wo point kr rahe h

// array
let array1 = ["item1", "item2"];
let array2 = array1;  // array2 me array1 ka reference ja raha h
// means array2 bhi array1 hi han
console.log("array1 :", array1);  ["item1", "item2"]
console.log("array2 :", array2);  ["item1", "item2"]
// add value of array1  
array1.push("item3");  // array1 -> ['item1', 'item2', 'item3']

console.log("after push item3 in array1 ");
console.log("array1 :", array1);  //['item1', 'item2', 'item3']
console.log("array2 :", array2);  //['item1', 'item2', 'item3']

// this will create a issue 
// to solve this problem we need to clone the array technic
