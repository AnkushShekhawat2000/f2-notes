// bolleans and comparison operators

// boolean
// true , false


let num1 = 5;
let num2 = 7;

console.log(num1 > num2);  // false

let num3 = 10;
let num4 = 10;

console.log(num3 >= num4);  // true

let num5 = 10;
let num6 = 8;

console.log(num5 > num6);  // true



console.log("== vs ===");
// == vs ===

let n1 = 7;
let n2 = 7;

console.log(n1 == n2);  // true

// == values check krta h data type check nahi krta h agr value same hue to true else false dega

let n3 = "7";
let n4 = 7;
console.log(n3 == n4);  // true


// agr hme values ke sath sath data type bhi check krna h 
// means data type same ho to true warna false
// agr ek chiz bhi diff hot h to false deta h value or data type me kuch bhi
let a = 2;
let b = "2";

console.log(a === b);  // false
// value same h pr data type diff h esley false dega


let c = 5;
let d = 5;

console.log(c === d);  // true

// value bhi same h or data type bhi same h



console.log(" <-----    != vs !==      --->");


// != vs !==

//  !=  agr dono chiz equal na hogi tab true dega agr barabar hui toh false dega
//   ye data type nahi check krta
let m1 = 5;
let m2 = 7;
console.log( "ex-1 -> ", m1 !=  m2); //false

let m3 = 5;
let m4 = 5;
console.log( "ex-2 -> ", m3 !=  m4); //false
// value barabar h esley false deya 


//  !==  agr dono chiz equal na hogi tab true dega agr barabar hui toh false dega
//   ye data type bhi check krta h agr data type value same ho gye to false dega diff case me true

let number1 = 10;
let number2 = 10;
// values diff nahi h elsey false dega
console.log(number1 !== number2); // false


console.log("ex==");
let number3 = 10;
let number4 = 8;
// values diff h elsey true dega
console.log(number3 !== number4); // true



let number5 = 10;
let number6 = "10";
console.log(number5 !== number6); // true
// values or dataType same nahi  h 
// data type diff h ek condition fail   esley true



let number7 = 10;
let number8 = "8";
console.log(number7 !== number8); // true
// values or dataType same nahi  h 
// value same nahi lekin data type bhi same nahi esley -> true dega
