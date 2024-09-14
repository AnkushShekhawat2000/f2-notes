// computed properties


const key1 = "objKey1";
const key2 = "objKey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// our task is create a object using this variable

// like that :->

// const obj = {
//     objKey1: "myvalue1",
//     objKey2: "myvalue2",
// }


// const obj = {
//     key1: value1,
//     key2: value2,
// }

// console.log(obj);  //key1: "myvalue1"
                      //key2: "myvalue2"

// value var ki value hme milte h lekin key var wali value nahi mil pate uske leya ham properties use krenge                      
// i will not get the right object so to solve this issue
// we can use 

//  computed properties

// const obj = {
//     [key1]: value1,
//     [key2]: value2,
// }


// console.log(obj);  //objKey1: "myvalue1"
                   //objKey2: "myvalue2"


// Another way

const obj = {};
obj[key1] = value1;
obj[key2] = value2;


console.log(obj);  //objKey1: "myvalue1"
                   //objKey2: "myvalue2"
