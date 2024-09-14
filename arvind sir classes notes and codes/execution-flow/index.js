 /**
 * 1. Execution flow of js program
 * 2. Primitive and non primitive data types.
 */

// function callme() {
//     let a = 20;
//     console.log(2 * a);
// }
// let x = 30; // intialisation
// callme();
// console.log(3 * x);

/**
 * callme, a, x
 *   callme => global variable
 *   a => local variable
 *   x => global variable
 */

/**
 * Every line of code can be divided into:
 * 1. Global line 
 *  -> ( other than local lines )
 * 2. Local line / functional line.
 *  -> is a statement present inside a function ( {} )
 */

/**
 * Every container that gets created in the callstack will go throgh 2 phases of execution .
 *
 * 1. Creation Phase ( the code gets scanned )
 * 2. Execution Phase ( the code gets executed line by line )
 */

/**
 * let , const declared variables will be assigned with nothing / undefined . (partial hoisting ). These variables will be kept inside the Temporal Dead Zone (TDZ).
 *
 * var declared variable will be assigned with undefined. ( partial hoisting )
 *
 * function declared variables will be assigned with the actual value. ( full hoisting )
 */

















// Primitive and Non Primitive data types.
/**
 * All the variables in any program will be stored inside RAM during the execution.
 * 
 *Ram has two section
 *  Stack Memory(500 MB), Heap Memory( 2 GB ) | 6GB RAM
 *
 * boolean, strings,            number, undefined, Arrays, Objects, function ....
 *  1bit      size(immutable)   8bytes              size      size     size
 *
 * 
 * 
 * Primitive size:
 *        Jis data ki size fixed hoti wo primitive hote h or yeh stack me store hote h
 *         is me stack me data directly store rehta h
 *        Ex - Boolean, string(immutiable due to), number
 * 
 * Non primitive :
 *        Jis data ka size fixed nahi hota or size bada hota wo non primimtiive dat hote hor yeh hea memory me store hote h.
 *        nin primitive data stack me indirectly store rehta h 
 *        Ex - array, Objects, function
 * 
 *
 * How the data store in ram
 * 
 * Stack memory :
 * stack memory is less memory aur Cpu is se data jalde read hoga compare to heap memory
 * Jis jiska data fixed jo kam memory le wo stack me store honge
 * 
 * Ex-
 *   boolean  - 1 Bit -> iska sized fixed h or kam memory bhi leha isley stack me jayega
 *   number - 8 bytes -> iska sized fixed h or kam memory bhi leha isley stack me jayega
 * 
 *   Note -> String
 *   
 *   String  -> unlimited (depend on size) 
 *           lekin string immutiable h ek bar decare krne par change nahi hogi isley yeh fixed size me h gye
 *           string not growable h esley ek primitive data h esley stack me store hogi   
 * 
 * Heap memory ->
 *       Jis ka data ka size bhut jyada mtalab jo growable hota h wo heap me store hote h kui heap hi larger h esley yeh hi bade size ka data store krege
 * Ex -> 
 *      array -> size (depend on array length)
 *      Object -> size (depend on object)
 *
 *
 */

// 10 => 000000000000001010   (64 bit)



// differ primitive and store
// diffenrent string and array 
// let str = "aravind"; // 7 bytes
// str = str + "abc"; // "aravindabc"  
// console.log(str); // "aravindabc"   (assign new string relace previous)


// let arr = [2, 3 ]; // #200 => [2, 3]
// arr = [2, 3, 8, 10] // #500 => [2, 3, 8, 10]  // arr pr new data daldeya 
// arr = #500     

// same memory pr add kr pa rahe h lekin string me as nahi kr sakte h
// let arr = [2, 3 ]; // #200 => [2, 3]
// arr.push( 2, 3, 8, 10) ; // #200 => [2,3, 2, 3, 8, 10]









// let a = [1, 2, 3], c = [1, 2, 3];  // non-primitive (reference data)
// let b = 23, d = 23;                // primitive (non refernece data)

// // a.push(100, 200, 10, 11); 
// // 2^31 - 1

//  hint -> 
    // /**
    //  * a and c are non primitive 
    //  * a = #200 , c = #302
    //  * b = 23 , d = 23
    //  */

// comparision :->
    // console.log(a == c); // #200 == #302 => false 
    // console.log(b == d); // 23 == 23 => true








//cal by value and call by reference

// #480 => [199, 2, 8]

// function manipulate(x, y) {
//     // x = 89, y = #480
//     x = 89;
//     y[0] = 199; // #480[0] = 199
// }

// let a = 20, b = [3, 2, 8]; 
// // a = 20, b = #480

// console.log(a, b);          // 20 , [ 3, 2, 8 ]

// manipulate(a, b);           // manipulate( 20, #480 )
// // a is passed as value (20)
// // b is passed as reference( #480 )

// console.log(a, b);          // 20, b = [199, 2, 8]
                     



// function f(a){

// }

// let x = [3, 2] ;
// console.log(x);
// f(x);
// console.log(x);


//Ex->

    // let x = [3, 4, 5];   // x = #300    // #300 => [192, 4, 5] 

    // let y = x;          //y = #300
    // let y[0] = 192;     // y[0] = 192; // #300[ 0 ] = 192   => // #300 => [192, 4, 5] 

    // console.log(x[0], y[0]);     //  #300[0], #300[0] => 192, 192

    // console.log(x == y);  // #300 == #300 => true




// Ex-> s

    // let f1 = function () {
    //     console.log("a");
    // }
    // // f1 = #200 

    // let f2 = f1;
    // // f2 = #200

    // console.log(f2 == f1); // true



//Ex->

    // let a = [3, 2]; // a =  #300
    // let b = [3, 2]; // b = #400
    // console.log(a == b); // false




// Ex ->  function as a reference pass hote h

    // function parent(cb) {   //#100    // cb = #200 as a reference in parameter
    //     cb();               //#200()
    // }

    // let x = function(){     // #200
    //     console.log("inside callback");
    // }

    // parent( x );   //  x = #200 pass x function reference as argument







// function parent() {
//     console.log(3);
//     let x = function () {
//         console.log(4);
//     }
//     x()
//     console.log(5);
// }
// console.log(1);
// parent();
// console.log(2);


// Hoisting in function
// In Function keyword : ->  (fully hoisting)
//  -> function keyword ke case me wo fully hoisting ho jate h 
    //    creation phase me hi isko actual value mil jate h isley ye execution phase declaration se phle hi actual value deta h
// console.log(f); // #300  function f() { }
// function f() { }   / #300
// console.log(f); // #300  function f() { }

// In var keyword case :->  (partail hositing)
    //    var keyword ke case me var creation phase me undefined se installize hota h or without tdz jske wajah se wo accessable hota h 
    //    var keyword ko actual value execution phase me milte h agr ham execution phase var key ke value declarartion se phle access krna chahege toh wo hame undefined dega aur bad me access krna chahege to wo actual value dega kuki usko uski actual value mil gye h uske bad hi ham access kr rahe h 

// console.log(a);   // undefined
// var a = 34;
// console.log(a);    // 34


// In let keyword case: -> 
          // let keyword ke case me creation phase me let ki value uninstalize/undefined (mtlab kuch value nahi milte)  aur tdz me rehte h 
          // tdz ke chiz me us zone ke rehne par access nahi execution phase me jab usko uski actual value milte h tabhi wo tdz se bhar ata h 
          // isley tabhi wo accessable hota h 
          // so agr ham let var ko instaliaze se phle acess krenge to error dega error: cannot access before instalize 
          // bad me access krenge to actual value dega result me.
      
// console.log(a); // cannot access a before its instalization
// let a = 34;    
// console.log(a);  // 34


// let arr = ["two", "three", "four"]
// //                 i=1
// arr.forEach( function(e, i) {
//     // e = "four' i = 2
//     console.log(e, i); 
//     /**
//      * "one"  0
//      * "two"  1
//      * "four" 2
//      */
//     if( e === "two"){
//         arr.shift();
//     }
// })

function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 3) {
        let f = function () {
            console.log(i);
        }
        shooters.push(f);
        i++;
    }
    // i = 3
    return shooters;
}

let army = makeArmy();

army[1](); // 3
army[2](); // 3
army[0](); // 3