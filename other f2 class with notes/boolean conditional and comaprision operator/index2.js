// truthy and false values


// truthy value -> "abc" , 1, -1
//false values ->  0;

let firstName = 0;
if(firstName){
    console.log("firstName");
}else{
    console.log("firstName is kind a empty"); 
}



// ternary operator

// let age = 4;
// let drink;

// if(age >= 5){
//     drink = "coffee";
// }
// else{
//     drink = "milk";
// }


// console.log(drink);


// lekin ye same work ham ternary operator se kr sakte h jisse hme ye condtion nahi lgane pdege
// ek line me hi ho jayega same work

// ternary operator  or conditional operator
// ternary operator me agr condition true hote h to ? mark ke bad wali statement chlta h
// agr false hoteh : ke  bad wali statement chlta h

let age  = 18;

let drink = age >= 18 ? "darru" : "coffee";

console.log(drink);



