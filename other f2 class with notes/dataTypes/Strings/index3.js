//   string concatenation

let firstName = "Ankush";
let lastName = "Shekhawat";

let fullName = firstName + " " + lastName;

console.log(fullName);


// ex 2 

let string1 = "17";
let String2 = "10";


let newString = string1 + String2;

console.log(newString);  // output will be 1710

// lekin hme yeh number me add krna h concetenate nahi krna

let sumString = +string1 + +String2;
console.log(sumString, typeof sumString) ;



// template string

let age = 22;
let myName = 'Ankush';

// old way to concatenate string

// coding effort more and tds work
// hme bar bar + sign use krna pad raha h
let aboutMe = "my name is "+ firstName +"and my age is "+ age; 
console.log(aboutMe);   // my name is Ankush and my age is 22


// new and best way using template string

// we can do same work using tempalte string
// aur kam asan ho jata h template literal hame bar bar + se concetenate krne ki ki jarurat nahi
let tempalteString = `my name is ${myName} and my age is ${age}`;

console.log(tempalteString);