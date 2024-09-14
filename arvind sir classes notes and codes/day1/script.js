/**
 * Loops
 */

// summation of first 20 even numbers
// 2 => 40

// let i = 30;
// console.log(i); // 30
// for (i = 2; i < 5; i = i + 2) {
//     console.log(i);
// }

// console.log(i); // 6

// 1st even number = 2  = 2 * 1
// 2nd even number = 4  = 2 * 2
// 3rd even number = 6  = 2 * 3

// 20th even number = 2 * 20 = 40 

// let i = 2, n = 20; // first even number 
// // figure out sum of first n even number ( first 20 even numbers )
// let sum = 0; // intially when none of the numbers are added sum is 0.
// // i = [ 2*1 , 2 * 20 ] => [2, 40]
// for (; i <= 2 * n; i += 2) {
//     // i = 2 , 4, 6, 8, 10 .... 40
//     sum = sum + i;
//     /**
//      * sum = 0
//      * i = 2 => sum = 0 + 2 = 2
//      * i = 4 => sum = 2 + 4 = 6
//      * i = 6 => sum = 6 + 6 = 12 ...
//      */
// }
// console.log(sum);

// let i = 2, sum = 0;

// while (i <= 40) { //  42 <= 40
//     sum += i; // 2 , 4, 6, 8, ... 38,40
//     i += 2; // i = 42
// }
// console.log(sum);


// do - while 
// let i = 2;
// do {
//     console.log(i); // 2, 3
//     i++; // i = 4
// }
// while (i <= 3) // 4 <= 3 => false
// console.log(i); // 4






/**
 * Arrays And Objects
 */

// let a;
// // console.log(a);

// let arr = [10, 20, true, , "aravind"]
// //          0   1   2   3      4
// console.log(arr.length - 1);

// // js arrays are by default dynamic and heterogenious.
// // js arrays are 0 based indexed.

//  Note -->  jab ham wo index value access krte h jo h hi nahi to waha hame undefined milta h
// jabki aur language me array out of index

// console.log(arr[-20]);  // no one at index 5




// let arr = [3, 9, 8];
// console.log(arr.length);  // 3
/**
 * We can add new element into the array
 *      1. add element at the back . ( push()    ex -  push(3, 4, 5)
 *      2. add element at the front.  (unshift()  )
 * We can remove an element from the array.
 *      1. can be removed from backside   
 *      2. can also be removed from the front.
 * Elements of the array are changable / mutable.
 */

// console.log(arr[1]); // 9
// arr[1] = 67;
// console.log(arr[1]); // 67 





///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// Note -->  push() and unhift()  methods return the updated length of the array

///////////////////////////////////////////////////////
// add element at the end
// Push method --> push()
// [3, 9, 8] ====> [3, 9, 8, 98]

// let arr = [3, 9, 8];
// console.log(arr);             //[3, 9, 8]
// console.log(arr.length);      // 3

//let updatedLength =  arr.push(98)                 // add 98 at the end
// console.log(updatedLength);   // 4
// console.log(arr.length);      // length -> 4
// console.log(arr);            //[3, 9, 8, 98]

// // add element at the front 
// //  Unshift method -> unshift()
// arr.length                   // length -> 4
// console.log(arr);            //[3, 9, 8, 98]
// arr.unshift(102);            // add 102 in front

// console.log(arr);            //[102, 3, 9, 98]

///////////////////////
// Add multiple element  in array in one time

// arr.push(98, 78, true, "aravind"); 
// adds 98 at the last 
//[3, 9, 8] => [3, 9, 8, 98] => [3, 9, 8, 98, 78]
// [3, 9, 8, 98, 78, true] => [3, 9, 8, 98, 78, true, "aravnd"]
// console.log(arr); // 4

// arr.unshift(102) // adds the element at the front side.
// console.log(arr);
// [3, 9, 8] => [19, 20, 21,3, 9, 8]
// arr.unshift(19, 20, 21)
// console.log(arr);







////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

// Note -> pop()  and shift() method return the remoevd value which are removed from the array

/////////////////////////////////////////////////////////////////////////////////
// remove element from the end of the array
// pop()

// let arr = [4, 2, true, "aravind"];
// // [4, 2, true, "aravind" ]  => [4, 2, true] 
// console.log(arr);
// let deletedElement = arr.pop();
// console.log(deletedElement, arr); // "aravind" , [4, 2, true]








/////////////////////////////////////////////////////////////////////////////////
// remove element from the front of the array
// shift()

// let deletedElement = arr.shift();
// console.log(deletedElement, arr); // 4 , [2, true, "aravind"]





/////////////////////////////////  Note //////////////////////////
// Remove multiple elements from the end of the array

// Array se multiple elements ko ek hi baar me pop() 
// se remove nahi kar sakte ho, kyunki pop() 
// sirf last element ko hi remove karta hai. 
// Agar tumhe multiple elements remove karne hain, 
// to ya to loop ka use karke multiple times pop() 
// call kar sakte ho, ya fir array slicing ya other methods 
// (like splice() in JavaScript) ka use kar sakte ho, 
// depending on which language you're using.


// first way to remove multiple 
// one by one
// let arr = [4, 5] // [4, 5] => [4] => []
// arr.pop(); arr.pop();
// console.log(arr);


// using loop
// let arr = [1, 2, 3, 4, 5];

// // Remove last 2 elements using loop and pop
// for (let i = 0; i < 2; i++) {
//     arr.pop();
// }

// console.log(arr); // Output: [1, 2, 3]






////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Remove element from anywhere in the array (middle) 
// let arr = [4, 2, 8, 12, 7, 13, 19];

// Manually
// index = 2 => 8  

                                                                                // arr[0] = "aravind" ; // ["aravind", 2, 8, 12, 7, 13, 19]
                                                                                // console.log(arr);
// splice can add and delete elements anywhere in the array
// let deletedElements = arr.splice(2, 3); // (startIndex, deleteCount)
                    // // splice returns another array of deleted elements.
                    // // deletedElements = [ 8, 12, 7 ]
// console.log(arr);              // [4,2,13,19]
// console.log(deletedElements);  //[ 8, 12, 7 ]


////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// splice Mthod  -> splice()
// slice method  -> first index -> startInedex value jha se delete krna h
                // second index -> count (mtlab kitne element delete krne h uska count)
                // third index me -> value ate h jo us index pr hame add krne h 
// slice ignore last index
// slice method will  affect original array
// it is a segement of array 

// if we do not pass delete count it delete all the element till end


// splice ( startIndex, deleteCount, a, b, c, d ...)

    // only pass start index
    // let arr = [4, 2, 8, 12, 7, 13, 19];
    // arr.splice(3)       // [8, 12, 7, 13, 19]
    // console.log(arr) -> //[4, 2]  -> original array

    // when we pass start index and count of how many element should be delete
    // arr.splice(3, 0) // [4, 2, 8, 12, 7, 13, 19]  // no effect still same

    // when we pass start index and count of how many element should be delete and which element shold be added at start idex

    // arr.splice(3, 0, 0.1, 0.2)   
    //   [4, 2, 8, 12, 7, 13, 19] ==>  [4, 2, 8, 12, 7, 13, 19]  // no deletion because count is 0
    //                                  [4, 2, 8, 0.1, 0.2, 12, 7, 13, 19]  / and push the element at index 3 and tweleve shift right



    // arr.splice(3, 1, true); //  
    // // [4, 2, 8, 12, 7, 13, 19] => [4, 2, 8, 7, 13, 19] // first deletion
    // console.log(arr);       //      [4, 2, 8, true, 7, 13, 19]  



   // if we need to delete nothing we can pass 0 
    //    let arr = [4, 5, 10, 20];

    //    let b = [6, 8, 9];

    //    arr.splice(2,  0,  6,8,9);

    //    console.log(arr); // [4, 5, 6, 8, 9, 10, 20]
   


////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// slice Mthod  -> slice()

// slice method  -> peace (continous segment) 
// slice ignore last index
// slice method will not affect original array
// it is a segement of array 

// let arr = [4, 2, 8, 12, 7, 13, 19];

// let segment = arr.slice(2,5)
// console.log(segment);    // [8, 12, 7]
// console.log(arr);        // [4, 2, 8, 12, 7, 13, 19]


// if we do not pass ending index 
// it will take the first index and  till the end

// let segment = arr.slice(2)
// console.log(segment);   //[  8, 12, 7, 13, 19]
// console.log(arr);       // [4, 2, 8, 12, 7, 13, 19]
