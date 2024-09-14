//  References  
//  object   -> Objects in js > Object intro > index.js 
//  iteration -> Objects in js > Object intro > index.js 1






/**
 * Objects and HOF on arrays.
 */

//array
// differ from object
// array = []
// let arr = [10, 20, 45]; // [10, 22]

// console.log(arr[0]);
// arr[1] = 22;
// console.log(arr);

// arr.splice(1, 1);
// console.log(arr);

// array has index. it has relation 0 1 2 3 4 
// very index relate previous  so we can eassily acess index after increase index value

// for (let i = 0; i < arr.length; i++) {
//     console.log(i, arr[i]);
// }


// objects 
// object = {}

// every eleemnt in objects should have key and value
// let obj = {
//     name: "aravind",
//     age: 23,
//     rollNumber: 184253
// };




//  [ "name" , "age", "rollNumber" ] 

//////////////////////////////////////////////////////////////////
// mutate the data in objects

// 1 way by reference
//  obj.age - 22;

// 2 way by index value
// obj["age"] = 33;




////////////////////////////////////////////////////
// acess object by dot notation and by index notation
// we need to pass always string in index notation
// console.log(obj["age"], obj.age);


//  0 is not acess able because 0 key is not present in object
// consolie.log(obj[0])  // undefined

// note ->
// undefined ke upper koi property read nhi kr sakhte
// console.log(obj[0].name); // error -> type error


//////////////////////////////////////////
// how can i delete in objects
// delete age property. -> second element
// note ->
    // splice mthod not work in objects because splice method works only array
    // splice work on index array has index 
    // but objects has not concept of index that why it is not woking in objects

/////////////////////////////////////    
// we can use delete property in object to delete key

// console.log(obj);    // {name: "aravind",age: 23,rollNumber: 184253};
// delete obj.age; 
// console.log(obj);    // {name: "aravind",rollNumber: 184253};



///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
// Iterating in Objects


//  First Way

// array has index. it has relation 0 1 2 3 4 
// very index relate previous  so we can eassily acess index after increase index value

// In objects we can acess threought key 
// but keys has no relation that why we cannot access by iteration


//  Objects.keys(obj)  -> ye hame objct ke keys ka array deta h
// ex -> yaha par ye hame obj (object) ki sbhi keys ka arary dega
// let keys = Object.keys(obj)   //["name", "age", "rollNumber"] 

// ab ham in array ke value par iterate kr sakhte h by loop
// kuki ye array h jo ki obj ki keys ka h
// ab hame keys mil jayenge so in keys se ham object pr iterate kr lenge



// let obj = {
//     name: "aravind",
//     age: 23,
//     rollNumber: 184253
// };

// let keys = Object.keys(obj)   //["name", "age", "rollNumber"] 


// keys = ["name", "age", "rollNumber"] 
//           i=0                i=2


// for (let i = 0; i < keys.length; i++) {
//     // i = 2 => keys[2] => "rollNumber"  // take one iteartion as example

//     console.log(obj[keys[i]]);  //"rollNumber" -> data type already string
 

//                   ("rollNumber",   obj[roll])

//     // console.log(keys[i],        obj[keys[i]]); // obj[ keys[i] ]  // so no nedd to convert in string because already in string

//                 // "name"     ,     "aravind"
//                 // "age"      ,      23
//                 // "rollNumber",     184253
// }


//  similarly values ke leya bhi hota h method
//  Objects.values(obj)  -> ye hame objct ke keys ka array deta h

// ex -> 
// yaha par ye hame obj (object) ki sbhi keys ka arary dega

// let keys = Object.values(obj)   //["arvind", "23", "184253"]


//  2 nd way
/**
 * for in loop  => keys directly
 * for of loop  => values
 *  ** for-of loop doesn't exist on objects.
 */



// for loop -> yeh index ko key or us index pr store element ko uske value leta h
//             ye internally increment apne (iteration part) ap manage krta h
//  In array
// let arr = [4, 1, true, "aravind"]; 
// //         0  1   2        3

    //  values ->  [4, 1, true, "aravind]
    //key      ->   0 , 1,  2,     3
         
         //key    // value
        // 0        4
         // 1        1
         // 2        true
         // 3        "aravind"


// for(let x in arr){
//     console.log(   x,     arr[x]);
            // key -> x,   value -> arr[x]
//                 // 0 , 4
//                 // 1 , 1
//                 // 2 , true
//                 // 3 , "aravind"
// }



// for loop -> yeh index ko key or us index pr store element ko uske value leta h
//             ye internally increment apne (iteration part) ap manage krta h
//  In Objects

// let obj = {
//     name: "aravind",
//     age: 23,
//     roll: 184253
// }
/*



for (let y in obj) {
    console.log( y    , obj[y]);
         // key : y   , value : obj[y]
            // "name" , obj["name"] = "aravind"
            // "age"  , obj["age"] = 23
            // "roll" , obj["roll"] = 184253
}








// For of  Loop

// Note -> 
    // for-of loop doesn't exist on objects.
    // for-of loop is used when we want to iterate over iterable objects like arrays, strings, etc.
    // It doesn't work with objects.
    // because objects only iterate using key but this loop directly on values that why it is not usable in objects 


//  In array
//   agr ham value se value nikalenge to error nahi dega 
//  agr key present higi to wahi value de dega
//  warna undefined dega

for (let x of arr) {
    // 4, 1, true, "aravind"

    console.log(x, arr[x]); //

            // 4 , undefined          // 4 key nahi array me
            // 1 , 1                  // 1 key (index) us pr 1 store h
            // true, undefined        //true key not present
            // "aravind", undefined   // arvind key not present
}
*/



///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Higher order functions and Callback functions




//////////////////////////////////////////////////////////////////////////////////////////////////
////                Refernce ->   fun in js                                                  ////
////                       function into index.js                                                    ////
///////////////////////////////////////////////////////////////////////////////////////////////
// Functions
/**
    function is a block of code , which can be executed where ever we need.

    1. increases readability.
    2. increases the re usability of the code.

    functions in js are just other data types ( string, boolean, etc..)
 */


// let x = 20;
    // // x is a variable ,It holds some data -> Number
    // console.log(typeof x); // number



// function callme() {
//     // 12abc => is a variable.
// }
    // // callme is a variable , function
    // function in js is also a data type
    // console.log(typeof callme); // function




// Function arae variable so we can decalare using let 
// another way create a function   
// let callme = function (a, b) {
//     console.log(a + b);
// };

// console.log(typeof callme);




/**
 * Higher order function :
 *  A function which takes / returns another function is called as higher order funciton ( hof ) .
 * 
 * 
 * let parent = function(a , b ){
 *                           ^
 *                           |
 *                         here b is function this is taking as paremeter in parent function
 *                         so this parent is higher oder function
 * }
 * 
 * 
 * 
 * parent(10, function(){})
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Callback functions:
 *  A function which is passed as an argument to some other function is called as callback function .
 * 
 * let parent = function(a , b ){
 *                           ^
 *                           |
 *                         here b is function passed as am argument into parent function so 'b' is a callback function.
 * }
 * 
 * 
 * 
 * parent(10, function(){})
 *               ^
 *               |
 *              this function passed as an argument in another function 
 *              so this function (second argument wala) is call back function
 */

/*



//////////////////////////////////////////////////////////////////////////////////////////////////
////                Refernce ->   fun in js                                                  ////
////                       function into index2.js                                                    ////
///////////////////////////////////////////////////////////////////////////////////////////////
// paremeter and argument and hof mix


let parent = function (a, b) { // a, b are parameters
    // since b is a function
    // parent function is taking another function as a parameter.
    // therefore parent is higher order function .

    // b is a function passed as an argument into parent function so `b` is called as callback function.
    console.log(typeof a, typeof b);   // 1call ex -> a = undefined , b = undefined  => undefined, undefined
                                       // 2call ex -> a = 10 , b = undefined => undefined => Number, undefined
                                       // 3call    -> a = 10 , b = function(){} => arguments.  => Number , function
}

                                          //  undefined type of also undefined

// parent()  // 1 calling of fun
//  parent(10)  // 2 call
// parent(10, function () { }) // 10, function(){} => arguments.   // 3 call
 
// another easy way
// let x = function(){}
// parent(10, x);
*/



//  Methods in array

//////////////////////////////////////////////////////////////////////////////////////////////////
////                Refernce ->   Array in js                                                  ////
////                                                                         ////
///////////////////////////////////////////////////////////////////////////////////////////////

// In the array 
// These functions is not Higher order function
// => push, pop, slice, splice, shift, unshift

// additional built in methods
// These functions is not Higher order function
//  => forEach, map, filter, reduce

/**
 * forEach =>  ( n => length of the array )
 *      Takes a cllaback function and invokes that callback for `n` number of times.
 *      returns nothing.
 * map    =>
 *      Takes a cllaback function and invokes that callback for `n` number of times.
 *      returns another array of same length.
 *
 * filter =>
 *      Takes a cllaback function and invokes that callback for `n` number of times.
 *     returns an array of any length
 */

// let arr = [4, 3, 7, 2, 6];
// 4 + 2 + 6 = 12



//////////// Foreach ////////////////
/*
 -> foreach will take one mandatory arguments => function type
    foreach ek function jarur leta h
    syntax: -> arr.foreEach(callback)

 forEach function ek call back leta h jo array ke length tak jayenga 
 or har element ke leya ek call back function chlyega or wo call back function
 harek element ke leya call back function me 3 argument lega 


 Parameters:
currentValue: Jo element abhi iterate ho raha hai.
index (optional): Us element ka index.
array (optional): Original array jisme se hum iterate kar rahe hain.

ex ->
-> array.forEach(function(currentValue, index, array) {
  code to be executed
});

**/


// Important Points:
// Mutating the original array: forEach original array ko modify nahi karta, unless aap explicitly array ke elements ko change karte ho.
// No Return Value: forEach kuch return nahi karta. Agar tumhe array ke updated values ya new array chahiye, to tumhe map() function ka use karna chahiye.
// Break nahi kar sakte: forEach me break ya continue ka use nahi hota jaise normal for loop me hota hai. Agar loop ko stop karna ho, to some() ya every() ka use kar sakte ho.

//  ex-> 
let arr = [4, 2, 6, 9];

let y  = arr.forEach(function (element, index, list) { // operation
    // first time:  element = 4, index = 0, list =  [4, 2, 6, 9]
    // second time: element = 2, index = 1, list =  [4, 2, 6, 9]
    // third time:  element = 6, index = 2, list =  [4, 2, 6, 9]
    // fourth time: element = 9, index = 3, list =  [4, 2, 6, 9]

    console.log(element, index, list);
});


let x = arr.forEach(y)
// forEach => higher order function
//  y => call back function


//  ForRach internal implementation

// let arr = [4,2,6,9];

/**
function myForEach(x){
    // x has to be a function
    x = 10

    x();  // 10() // error -> x is not a function
}

myForEach(10);

 */


/**
function myForEach(x){
    // x has to be a function

    
    //   x = function(){
    //      console.log("inside the function");
    //   }
     

    x();  //  inside the function
}

myForEach( function (){
   console.log("inside callback");
});

 */



/**
function myForEach(x){
    // x has to be a function

    
    //   x = function(){
    //      console.log("inside the function");
    //   }
     

    x(10, 20);  //  inside the function
}

myForEach(function (a,b){
      console.log("inside callback", a, b);
} );

 */



/**
 * 
 *
// let arr = [4,2,6,9];

function myForeEach(x){
    for(let i=0; i<arr.length; i++){
        x(arr[i], i, arr);
        //i = 0 : x(4, 0, [4, 2 , 6, 9]);  // invoking function
        //i = 1 : x(2, 1, [4, 2 , 6, 9]);
        //i = 2 : x(6, 2, [4, 2 , 6, 9]);
        //i = 3 : x(9, 3, [4, 2 , 6, 9]);
    }
}

myForeEach(function (element, index, list){
      // first time : a = 4 , b = 0, c= [4, 2, 6, 9]
      // second time : a = 2 , b = 1, c= [4, 2, 6, 9]
      // third time : a = 6 , b = 2, c= [4, 2, 6, 9]
      // fourth time : a = 9 , b = 3, c= [4, 2, 6, 9]
      
      console.log("inside callback", element, index, list);
    });
    
    // Note: forEach() me break ya continue ka use nahi hota jaise normal for loop me hota hai. Agar loop ko stop karna ho, to some() ya every()


 */



    /////////////////////////////////
    // same implementation in builtin foreach function

    // let arr = [4, 2, 6, 9];

    // arr.forEach(function (element, index, list) { // operation
    //     // first time:  element = 4, index = 0, list =  [4, 2, 6, 9]
    //     // second time: element = 2, index = 1, list =  [4, 2, 6, 9]
    //     // third time:  element = 6, index = 2, list =  [4, 2, 6, 9]
    //     // fourth time: element = 9, index = 3, list =  [4, 2, 6, 9]
    
    //     console.log(element, index, list);      //      4, 0 , list
                                                   //      2, 1, list
                                                   //      ......
    
    // });

    
   

    ///////// Example 
    //  Question -> find the evennumber sum 
    /**
     * 
        let sum = 0;

        arr.forRach(function (element, index, list){
            if(element % 2 == 0){
                sum += element;
            }
        })

        console.log(sum); 
     * 
     */



        //  foreach does not return anything

  




// Summary:
// forEach ek easy tarika hai array ke har element par action perform karne ke liye.
// Ye non-blocking loop hai, iska use tab karo jab tumhe sirf action perform karna ho, na ki array ko modify ya transform karna.


/** 
// Problem point
// why


Ques -> ye function me argument kase le leta currvalue index or array jabki ham iske call back me argument kahi pass hi nahi krte h  -----????????

ChatGPT said:
ChatGPT
Bahut accha sawal hai Krishna! Ye confusion commonly hota hai, lekin forEach method ki jo functioning hai wo thodi advanced hai.

Jab tum forEach ka use karte ho, to tumhe ek callback function dena hota hai. Ab, yaha pe jo forEach ka internal mechanism hai wo ye karta hai ki har iteration ke liye wo callback function ko specific arguments pass karta hai, jaise currentValue, index, aur array.

Ye parameters tum explicitly nahi pass karte, balki JavaScript engine khud inhe under the hood pass karta hai.

Breakdown:
Jab tum array.forEach() call karte ho, ye internally array ke har element ko iterate karta hai.
For each element, ye forEach method automatically tumhare callback function ko kuch specific arguments pass karta hai:
currentValue: Us waqt ka element jo iterate ho raha hai.
index: Us element ka index.
array: Poori array jisme se ye element aa raha hai.
JavaScript me ye automatically ho jata hai jab tum forEach ko call karte ho, isliye tumhe manually arguments pass nahi karne padte.

Ek Example ko phir se dekhte hain:
javascript
Copy code
let numbers = [1, 2, 3, 4];

numbers.forEach(function(number, index, array) {
  console.log(`Element: ${number}, Index: ${index}, Original Array: ${array}`);
});
Is example me, forEach khud hi har element ke liye teen parameters pass karega:

number: jo abhi iterate ho raha element hai.
index: us element ka index.
array: original numbers array.
Output kuch aisa hoga:

Element: 1, Index: 0, Original Array: 1,2,3,4
Element: 2, Index: 1, Original Array: 1,2,3,4
Element: 3, Index: 2, Original Array: 1,2,3,4
Element: 4, Index: 3, Original Array: 1,2,3,4
How it works internally (simplified):
For example, kuch aise samjho ki forEach method ka internal code kuch aise ho sakta hai (simplified form):

javascript
Copy code
Array.prototype.forEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this); // Har element ke liye function ko parameters pass ho rahe hain
  }
};
Yaha callback function ko this[i] (current value), i (index), aur this (original array) pass kiya ja raha hai har iteration me. Ye JavaScript ka built-in behavior hai.

Summary:
Jab tum forEach me callback function dete ho, JavaScript us function ko har element ke liye automatically currentValue, index, aur array pass karta hai.
Tumhe manually kuch pass karne ki zarurat nahi hoti, ye JavaScript ke internal mechanism ka part hota hai.

*/



                  //////////////////////////
                 /////////   Map       ////
                //////////////////////////

// map    =>
//        Takes a cllaback function and invokes that callback for `n` number of times.
//           returns another array of same length.


/**
     
    let arr =  [4, 3, 7, 2, 6];

    let result = arr.map(function (element, index, list){
        console.log(element, index, list);
    })


    console.log(result);   //[undefined, undefined, undefined, undefined, undefined]



    let arr =  [4, 3, 7, 2, 6];

    let result = arr.map(function (element, index, list){
        // console.log(element, index, list);
        return 10;
    })


    console.log(result);   //[10, 10, 10, 10, 10]
 */



 /**
     
    // let arr = [4, 3, 7, 2, 6];


    // let result = arr.map(function (element, index, list) {
    //     // console.log(element, index, list);
    //     return element + index;                            // [4 + 0 , 3 + 1, 7 + 2, 2+3, 6+4 ]
    //                                                        // [   4,       4,      9,   5,   10]
    // })


    // console.log(result);   // [4, 4, 9, 5, 10]
 */





/*
 Given an array , create another array which will have double values of even numbers and triple values of odd numbers.

let arr = [4, 2, 3, 6, 9];
       // [8, 4, 9, 12, 27]

// []
let result = arr.map(function (e) {
    return e % 2 == 0 ? 2 * e : 3 * e;
})
console.log(result);
*/




                 //////////////////////////
                ///////   filter      ////
               //////////////////////////

            // -> filter krta h jo chaye wo lwga warna skip kr dega
            // jaha true hoga waha element collect krega warna skip


// let result = arr.filter(function (e, i, list) {
//     console.log(e, i, list); 
// })
// console.log(result);     // [ ]




// let arr = [4, 2, 3, 6, 9];
// let result = arr.filter(function (e, i, list) {
//     console.log(e % 2 === 0);    // 4 2  6
// })
// console.log(result);     // []

// returned values : [ true , true, false, true, false ]
                  // [                                 ]


 


// let arr = [4, 2, 3, 6, 9];
// let result = arr.filter(function (e, i, list) {
//     return e%2 === 0;
// })
// console.log(result);     // [ 4, 2 , 6 ]

// returned values : [ true , true, false, true, false ]
                  // [   4,      2,           6        ]




// function callme(){
//     console.log(10+20);   // 30
// }

// let result = callme();
// console.log(result);     // undefined'



// function callme(){
//     console.log(10+20);   // 30
//       return 11;
// }

// let result = callme();
// console.log(result);     // 11










// truethy or falsy value
// // 3 => true
// // 2 => true

// // 2.3 => true
// let result = arr.filter(function (e, i, list) {
//    return 2.3;
// })
// console.log(result);     // [4, 2, 3, 6, 9]

// // -10 => true
// // 10.1 => true
// // 10  => true

// let result = arr.filter(function (e, i, list) {
//    return 10;
// })
// console.log(result);     // [4, 2, 3, 6, 9]


// // 0 => false
// let result = arr.filter(function (e, i, list) {
//    return 0;
// })
// console.log(result);     // [ ]


// // "aravind" => true
// // "a" => true
// // "" => false

// let result = arr.filter(function (e, i, list) {
//    return "";
// })
// console.log(result);     // [ ]


// // " " => true


// // undefined => false

// let result = arr.filter(function (e, i, list) {
//    return undefined;
// })
// console.log(result);     // [ ]


// // null => false

// let result = arr.filter(function (e, i, list) {
//    return null;
// })
// console.log(result);     // [ ]




                 //////////////////////////
                /////  reduce method  ////
               //////////////////////////


//  Reduce method 
//        It takes two argument callback function and agrument 
//        aor pass agument ke according calculation krke single value returned krta h
//      
// reduce method ek array mein ek value return karta hai. Yeh value har element ko reduce karega and
// reduce method single value return karta hai.
// Agr ham reduce initial value nahi dete h toh w by default first value ko prev or second value ko curr man leta h
// means wo second index se start krta h or first value prev ko de deta h

// agr ham intial value pass krte h to wo prev me initail vaue leta h or current value array ki first value hoti h


//  When we pass prev argument 
 /**
  * 
  * 
  * let arr = [4,3];

let cb = function(prev, current, index){

    // first iteration :
    //prev = 11, current = 4,  index = 0 
    // returned : 15

    // second iteration :
    // prev = 15, current = 3,  index = 1 
    // returned : 18

    return prev + current;    
          // 15+3 = 18  // last returned value
}



let result = arr.reduce(cb, 11);
console.log(result);
// last iteration returned value 10
  * 
  * 
  */       
 


// When second argument is not present cb will execute only n-1 times 
// where 'n' is the length of the array
// ab yeh iteration second element se start krega
//kuki first element ko wo prev ,e lega kuki hamne prev argument pas nahi kiya


 /**
  *   
  * 
  * let arr = [4, 3, 5, 1];

let cb = function(prev, current, index){

    // first iteration :
    //prev = 4, current = 3,  index = 1 
    // returned : 7

    // second iteration :
    // prev = 7, current = 5,  index = 2 
    // returned : 12

    // third iteration :
    // prev = 12, current = 1,  index = 3 
    // returned : 13

    return prev + current;    
           // 12+1 = 13  // last returned value

  
}



let result = arr.reduce(cb, 11);
console.log(result);    // 13
// last iteration returned value 13
  * 
  * 
  */  











// given an array multiply even numbers with 2 and odd numbers with 3. then filter out numbers which are between [5 - 25] , finally find the sum of all those elements.
/**
 * 
 *  let arr = [2, 4, 7, 12, 9];
            // [ 4, 8, 21, 24, 27 ]    // numbers multiply even * 2 and odd * 3
            // [    8, 21, 24 ]       // number between 5-15
            // 8 + 21 + 24 = 53       // sum of all filter element 

        let arr1 = arr.map(function (e) {
            return e % 2 === 0 ? 2 * e : 3 * e;   // even *2 else *3
        })         

        console.log(arr1) //  [ 4, 8, 21, 24, 27 ]
            
        let arr2 = arr1.filter(function (e) {
            return e >= 5 && e <= 25;      
        })    
         
        console.log(arr2) //   // filter element -> [ 8, 21, 24 ]
            
        
        let ans = arr2.reduce(function (prev, current) {             // sum of filtered elements  
            // prev = 0, current = 8 => 8+0 => 8
            // prev = 8, current = 21 => 21+8 = 29
            // prev = 29, current = 24 => 29+24 = 53
         

            return prev + current            //8 + 21 + 24 = 53  
        },0)


        console.log(ans); // 53





        // more easy and efficient

        let arr = [2, 4, 7, 12, 9];

        let ans = arr.map(function (e) {
            return e % 2 === 0 ? 2 * e : 3 * e;   
        }).filter(function (e) {
            return e >= 5 && e <= 25;      
        }).reduce(function (prev, current) {              
            return prev + current           
        },0)   
           // second argument pass bhi nahi krenge to same ans ayega kuki tabhi iteration 2 se start hoga thats why


        console.log(ans); // 53
 * 
 */




