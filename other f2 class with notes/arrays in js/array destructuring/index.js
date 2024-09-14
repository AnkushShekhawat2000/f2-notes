// array destructuring
//    :->  // extracting desired values from an Object / Array 


const myArray = ["value1", "value2", "value3"];

// let myVar1 = myArray[0];
// let myVar2 = myArray[1];
// console.log("value of myvar1",myVar1); // Output: value1
// console.log("value of myvar2",myVar2); // Output: value2


// let [myVar1, myVar2] = myArray;
// console.log("value of myvar1",myVar1); // Output: value1
// console.log("value of myvar2",myVar2); // Output: value2

// myVar1 = "value changed";

// console.log("value of myvar1",myVar1); // Output: value1
// console.log("value of myvar2",myVar2); // Output: value2


let [myVar1, myVar2, myVar3] = myArray;
console.log("value of myvar1",myVar1); // Output: value1
console.log("value of myvar2",myVar2); // Output: value2
console.log("value of myvar3",myVar3); // Output: value


// another example
// array me utne value nhi h or variable jyada define ke deye to undefined ayega
let myArray2 = ["value1", "value2"];
let [var1, var2, var3] = myArray2;
console.log("value of var1",var1); // Output: value of var1 value1
console.log("value of var2",var2); // Output: value of var2 value2
console.log("value of var3",var3); // Output: value of var3 undefined

////////////////////////////////
//important examples
// another case
// hame bydefault nature se nhai apne according krna h
// hame seond var me array ke 3 index ki value chaye
let [first, ,third] = myArray;   // seond index wali value skip ho jayege
console.log("value of first", first); // Output: value1
console.log("value of second", third); // Output: value2

// another case 
    // hame 2 value var me or do vaue ka array banana h alag e
    // let [a, b] = myArray;
    // let myNewArray = myArray.slice(2);
    // console.log("value of a", a);
    // console.log("value of b", b);
    // console.log("value of myNewArray", myNewArray);

   // ye work ham array me kr sakte h
   let [a , b, ...myNewArray] = myArray;
   console.log("value of a", a);
   console.log("value of b", b);
   console.log("value of myNewArray", myNewArray);

   // ex 2
   let [...arr] = [4, 3, 10, 23]
   // [...[4, 3, 10, 23]] = [4, 3, 10, 23]  // this same like as
   console.log(arr);   //[4, 3, 10, 23]

   let [, a1, b1] = [10, [1, 3], 29]
    console.log(a1, b1);  // a1=> [1, 3] b1=29


// const [myVar1, myVar2] = myArray;
// console.log("value of myvar1",myVar1); // Output: value1
// console.log("value of myvar2",myVar2); // Output: value2

// myVar1 = "value changed";  // const ke case change nahi hogi

// console.log("value of myvar1",myVar1); // Output: value1
// console.log("value of myvar2",myVar2); // Output: value2
