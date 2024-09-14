/**
 * 1. TDZ => Temporal Dead Zone
 * 2. Scope of variable and Scope chaining
 * 3. closures
 */








 
/**
 * Ex-1:-> 
    let a ;
    console.log(a); // undefined
 */

/*
 * Ex-2:-> 
console.log(a);   //Cannot access 'a' before intialisation
let a; 


*/

/*
 * Ex-3:-> 
console.log(a);  //'a' is not defined .

*/








/**
 * Global line:->
 * -----------
 *              not inside a function,
 * LOcal line:->
 * -----------
 *             a statement/line inside a  function.
 */











// Ex -4
// console.log(b); // undefined
// console.log(a); // Error: Cannot access 'a' before intialisation.
// let a = 20;
// var b = 30;




















/**
 
 * let , const , var declared variable then during creation phase these variables be hoisted with undefined value.
 *
 * Named functions will be hoisted fully ( will get their actual value during the creation phase itself. )
 *
 * Note -> let, const declared variables during the creation phase will be kept inside TDZ( temporal dead zone).
 */




















// Ex->
// console.log(a);
// Error: 'a' is not defined.


//Ex->
// console.log(a); // #200
// function a() {
//     let x = 20;
//     return 100 + x; 
// }
// console.log(a); // #200

// Ex->
/*
    console.log(a); // undefined
    a = 20; //
    console.log(a); // 20
    var a = 90;
    console.log(a); // 90
    var a = 100;
    console.log(a); // 100
*/

// redeclare is allowed in var
// let and const are not allowed to redeclare
    // let a = 20;   //error
    // console.log(a); 
    // let a = 30;
    // console.log(a); 

    // var a = 20;   
    // console.log(a);  // 20
    // var a = 30;
    // console.log(a);   //30



// Ex->
// console.log(a); // Error: Cannot access 'a' before intialisation.

// a = 20; // Cannot access 'a' before intialisation.tdz wale var ko ham declaration nahi kr sakhte instakize se phle next code will not run
// console.log(a); 
// let a = 30;
// console.log(a); 

// Ex->

// let a = 20; // Cannot access 'a' before intialisation.tdz wale var ko ham declaration nahi kr sakhte instakize se phle next code will not run
// console.log(a);   //20
// let a = 30;
// console.log(a);   //30


// Ex->
// console.log(a); // Error: Cannot access 'a' before intialisation.

// a = 20; // update kr sakhte h kuki tdz me nahi h 
// console.log(a); // 20 
// var a = 30;    // a = 30
// console.log(a); // 30

//Ex-> 
// console.log(a); //  undefined
// var = [1,2, 3];    #200
// console.log(a); //#200  ->  [1,2, 3];

//Ex->
// console.log(a); // cannot access 'a' before instalization
// let a = function(){};
// console.log(a); 


//Ex->
// console.log(a);         // undefined
// var a = function(){};     //# 200
// console.log(a);            // #200  -> function(){}


//Ex-> 
// console.log(a); // #200 -> function a() { }
// function a() { }   //# 200
// console.log(a); //#200  -> function a() { }




/**
 function callme() {
    return a;
    var a = 10;
}

let x = callme();
console.log(x);  // undefined




function callme() {
    return a;
    function a() {
        console.log("inside a");
    }
}

let x = callme();
console.log(x);
console.log(typeof x);






// Closure:->
------------
          // The way function 'f' binds its scope to it's outer environment is called closure.
 
/**
 * If a  variable is not present inside the current context js engine accesses from it's lexical parent ( parent ).




let a = 20;
function callme() {
    let a = 90;
    console.log(a + b); // 390 
}
let b = 300;
callme();

 


let a = 100;
function one() {
    console.log(a); // 100
}

function callme() {
    let a = 200;
    one();
}

callme();
 





function callme() {
    let a = 200;
    let f = function () { // #330
    }
    return f;  // #330
}

console.log(a);

let a = 100;

let x = callme();
// x = #330
x();


 */






// IIFE => Immediately Invoked function expression 
// ---------

// let f = function () {
//     console.log("inside");
// }
// f();
/*

(function () {
    console.log("inside iife");
})();

(function () {
    console.log("some function");
})();
*/