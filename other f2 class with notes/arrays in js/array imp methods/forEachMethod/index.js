//   important array methods

// forEach
// map
// filter
// reduce


const numbers = [4,2,5,8];

function myFunc(number, index){
    console.log(`index is ${index} number is ${number}   `);
    console.log(`${number} * 2 = ${number*2}`);
}

// multiplyBy2(numbers[0], 0);
// multiplyBy2(numbers[1], 1);

// more improve
// for(let i =0; i<numbers.length; i++){

//     myFunc(numbers[i], i);
// }


// more improve 

// forEach loop
numbers.forEach(myFunc);





numbers.forEach( function(number, index){
    console.log(`index is ${index} number is ${number}`);
});


// numbers.forEach( function(number){
//     console.log(number*3);
// })

numbers.forEach( (number) =>{
    console.log(number*3);
})


const users = [
    { firstName: "Ankush", age: 23},
    { firstName: "Priya", age: 25},
    { firstName: "Priyanka", age: 22},
    { firstName: "Ankit", age: 24},
    { firstName: "Priyanka", age: 22},
]

users.forEach( function(user){
   console.log(user.firstName);
})


// for(let user of users){
//     console.log(user.firstName);
// }