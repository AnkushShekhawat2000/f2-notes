// hoisting


// function declaration ke case me function ko phle hi access kr sakte h
hello();  // Hello World

function hello() {
  console.log('Hello, World!');
}



// lekin function expression k case phle access nahi kr sakte h hme error ayege

// sayHello();  // //ReferenceError: Cannot access 'sayHello' before initialization
// const sayHello  = function(){
//     console.log('Hello');  
// }







// variable 
// var ke case hme undefined milta 
// agr variable phle access kre instalize se

console.log(msg);
var msg = "Hello world";
console.log(msg);


// lekin let const me error milte h

// console.log(hey);  //ReferenceError: Cannot access 'hey' before initialization
// let hey = "hey! how are you";
// console.log(hey);


// console.log(bye) //ReferenceError: Cannot access 'bye' before initialization
// const bye = "bye bye";
// console.log(bye);