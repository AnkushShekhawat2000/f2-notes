//  prep for intrview

// function declaration
function singHappyBirthday(){
    // function statement
    console.log('Happy Birthday to you......');
}


// function expression
// function expression me function ko variable me assign kr dete h
// esme ham function me name nahi dete var hi function name hota 
// var ko h invoke krke ham fun call kr sakhte h
// anoynomous function hi assign hote
const sayHappyBirthday = function (){
   console.log("Happy Birthday to you......");
}

sayHappyBirthday();



// function isEven(number){
//     return number % 2 === 0;
// }

// convert into function expression
const isEven = function(number){
    return number % 2 === 0;
}

console.log(isEven(10)); //true


// anynomous function
function(){
    console.log(" this is anoynomous fun ");
}


// arrow function  or fat function

() => {}


// there are three type of arrow function


