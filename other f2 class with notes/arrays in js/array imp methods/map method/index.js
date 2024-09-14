// map method ->
// map method bhi call back leta h 
// aur call back me 3 argument hote h
// let newArray = array.map(callback(currentValue, index, array), thisArg)
// lekin map method hme new array deta h -> jis me har element me call back ka result store hota h
// map: Har element ko transform karke naya array banata hai bina original array ko modify kiye.
// map: Jab aapko array ke elements ko transform karke ek naya array banana ho, to map use hota hai.
// map: method forEach wala work to krta hi han lekin ye hme return me deta 
const numbers = [3,4,6,1,8];

// map(callback)

const square = function(number){
    console.log(number*number); 
    return number * number;
}

const squareNumbers = numbers.map(square);
// console.log(squareNumbers); //for 10 line case -> [undefined, undefined, undefined, undefined, undefined]
console.log(squareNumbers); //[9, 16, 36, 1, 64]


// function defined in inside fun

// const squareRes = numbers.map(function(number){
//     return number * number;
// })

// const squareRes = numbers.map((number)=>{
//     return number * number;
// })

// console.log(squareRes); //[9, 16, 36, 1, 64]


// same forEach ki trah map ka call back bhi 3 perimeter hote h
const squareRes = numbers.map((number, index, array)=>{
    // console.log(`number ->${number} ind-> ${index}, ${array}`)
    // return `index: ${index}, ${number * number}`;
    return number * number;
})

console.log(squareRes); //[9, 16, 36, 1, 64]


///// map use case
// ex -1
const users = [
    {firstName: 'Ankush', age: 23},
    {firstName: 'Priya', age: 25},
    {firstName: 'Priyanka', age: 22},
    {firstName: 'Ankit', age: 24},
   
]
// const userNames = users.map( (user) =>{
//     return  user.firstName
//    }
// );

// const userNames = users.map(user => user.firstName);
console.log(userNames);


// ex -2
const students = [
    { firstName: 'Aman', lastName: 'Kumar', marks: 85 },
    { firstName: 'Bella', lastName: 'Singh', marks: 92 },
    { firstName: 'Chris', lastName: 'Evans', marks: 78 }
];

// ex - 3

const transformedStudents = students.map(function(student) {
    return {
        fullName: `${student.firstName} ${student.lastName}`,
        marksPercentage: `${student.marks}%`
    };
});

console.log(transformedStudents);



///// map use case 

// agr ham kuch return nahi krte to undefined return hota h
// agr undined return hoga tonew array me bhi undefined store hoke ayega


// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(function(number) {
//     return number * 2;
// });

// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
// Explanation:
// Array: numbers ek array hai.
// map Method: numbers array pe map method call hoti hai jo ek naya array doubledNumbers create karti hai jisme har element doubled value hoti hai.
