// Arrow function


// const singHappyBirthday = function (){
//     console.log("Happy Birthday to you......");
// }

// arrow function
const singHappyBirthday = () => {
    console.log("Happy Birthday to you......");
}
singHappyBirthday();

const sumThreeNumbers = (num1, num2, num3) => {
     return num1 + num2 + num3;
}
const ans = (2, 3,4);
console.log(ans);


// const isEven = (number) =>{
//     return number % 2 === 0;
// }

// jab ham ek hi paerimetr lete h toh bracker hta bhi sakhte h
// ek se jyada me or zero perimetr me nahi hta sakhte
// const isEven = number => {
//    return  number % 2 === 0;
// }    
// console.log(isEven(4));

const isEven = number => number % 2 === 0;


// return 
//  jab koi function kuch return nahi krta to wo undefined return krta h

// yaha pr yeh hme sayhello ke reference pr jo chiz h usko print kr raha  h
// const sayHello = () => console.log('Hello');
// console.log(sayHello);

const sayHello = () => console.log('Hello');
console.log(sayHello());

