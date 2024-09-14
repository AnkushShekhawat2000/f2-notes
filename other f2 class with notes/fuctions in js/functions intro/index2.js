//   parmeters and arguments


///////////////////////////////////////////////////
// no argunment function
function sayHappyBirthday(){
  console.log("happy birthday to you ....");
}


sayHappyBirthday(); // calling the function

// agr ham is fun ko argumnents pass krke call krenege ti error dega
// sayHappyBirthday(Ankush);

// kuki hame argument se yeh fun define hi nahi kiya
// function agr without h toh bina argumnent pass krke hi call krna hoga
// agr function me argemnets declare kiye h toh to wo invoke krte samy bhi arguments pass krne pdenge warna error dega



///////////////////////////////////////////////
// say hello ko hame argement se call krna h

function sayHello(name){
  console.log("hello " + name);
}

sayHello("Ankush"); // calling the function with argument


///////////////////////////////////////////
// multiple arguments
function sumThreeNumbers(number1, number2, number3){
    return number1 + number2 + number3;
}

// const returnedValue = sumThreeNumbers();
// console.log(returnedValue);

// hamne argunment pass nahi kiya usne undefined le leya
// undefined + undefined + undefined + undefined + undefined + undefined + undefined = Nan dete h
console.log(undefined + undefined);


// const returnedValue = sumThreeNumbers(3, 4, undefined);
// console.log(returnedValue);  // NaN

const returnedValue = sumThreeNumbers(2, 3, 5);
console.log(returnedValue);




// ex ->
// short the conditon in function

function isEven(number){
    return number % 2 === 0;
}


console.log(isEven(5)); //false
console.log(isEven(4)); //true



function firstChar(anyString){
    return anyString[0];
}

console.log(firstChar("hello")); // "h"


// target function

function checkTargetValueIndex(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(checkTargetValueIndex([1,8,4,6,2], 8)); //1
const ans = checkTargetValueIndex([1,8,4,6,2], 10) // -1
console.log(ans); //-1