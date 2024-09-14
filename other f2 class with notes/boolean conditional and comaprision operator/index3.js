// and(&&) or (||) operator

// and && operator
console.log("<--------- && operator ------>");

// let firstName = "Ankush";
// // let firstName = "ankush";

// let age = 19;
// // let age = 16;

// if(firstName[0] === "A"){
//     console.log("Yes First name starts with 'A'");
// }
// else{
//     console.log("No First name does not start with 'A'");
// }


// if(age > 18){
//     console.log("You are above 18");
// }


// let firstName = "Ankush";
let firstName = "ankush";

// let age = 19;
let age = 16;

// and && 
// dono condotion true hoti h toh tbhi true return krta h
// agr ek bhi condition false hoti h toh false return krta h

if(firstName[0] === 'A' && age > 18){
    console.log("Yes, First name starts with 'A' and you are above 18");
}
else{
    console.log("inside else");
}


// || or operator
// ek bhi conditon true hoti h toh true return krta h 
// dono condition false ho tabhi false return krega

if(firstName[0] === 'A' || age > 18){
    console.log("Yes, First name starts with 'A' and you are above 18");
}
else{
    console.log("inside else");
}