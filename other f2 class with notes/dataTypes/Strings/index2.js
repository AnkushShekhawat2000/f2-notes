// type of operator

// these are all primitive data types
// <===== data types ======>
// String "Ankush"
// number 2,  4, 4.6
// bolleans
// undefined
// null
// BigInt
// Symbol

// types = primitive datatype   || reference datatype
// primitive datatype -> 12, 12.4, Ankush, truw,a , null , undefined
// non-primitive datatype  or reference dataType ->  []  ()   {}

// example of referce or primitive datatype
// primitive example
var a = 12;   //12  
console.log(a);
var b = a;    // 12
console.log(b);
b = b+2    // 14 
console.log(b);


// non-primitive example
var arr = [1,2,3,4,5,6];
console.log(arr);
var b = arr;
console.log(b);
b.pop();
console.log(b);   //[1,2,3,4,5];
console.log(arr); //[1,2,3,4,5];


// note :-  primitive me copy hokr ate h value h
//          non - primitive me value reference se ate h 
// like - jaise hamne b me arr ko leya aur b se hmne ek value pop() kr de to wo arr se bhi remove ho gye kuki ye refernece lete h

// how to copy in non primitive types
// using spread operator 
// -> ye 
var ar = [12, 13, 14, 15];
var ba = [...ar];

console.log("ar -> ",ar);  //[12, 13, 14, 15]
console.log("ba -> ",ba);  //[12, 13, 14, 15]

ba.pop();

console.log("ar -> ",ar);  //[12, 13, 14, 15]
console.log("ba -> ",ba);  //[12, 13, 14]
// ab values reference nahi le rahe copy krke a rahe h tabhi changes referlect nahi kre dusre array me







let age = 22;
console.log(typeof age);

let myName = "Ankush";
console.log(myName);


// covert number to string  
// --> number me kahli string add krdo number se string me conversion ho jayega

 age = age +"";
 console.log("age -> ",age , typeof age);

// convert number to string
// --> string se phle + laga do bas wo string no me change ho jayege
 let myStr = "34"
 console.log("myStr -> ",myStr, typeof myStr);


let number = +"35";
console.log("number -> ",number, typeof number);


// one one way to coversion
// number to string
let newAge = 18;
console.log("newAge -> ",newAge, typeof newAge);
newAge = String(age);
console.log("newAge -> ",newAge, typeof newAge);

let newAge2 = "30";
console.log("newAge -> ",newAge2, typeof newAge2);
newAge2 = Number(newAge2);
console.log("newAge -> ",newAge2, typeof newAge2);