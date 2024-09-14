// how to clone the array

let array1 = ["item1", "item2", "item3"];
let arry2 = array1;


console.log(array1 === arry2);
// dono array same h 

// hmko separate array chaye ki arry1 me change krne pr kisi dusre me changes na ho
// to waha ham value de sakhte h
let array3 = ["item1", "item2", "item3"];
// ab yeh separate array h kuki array1 ki value hmne khud se de 
// ab changes reflect nahi krenge
console.log(array1 === array3);

array1.push("item3");

console.log(array1);
console.log(array3);


// agr hamare array lakh element h to ham ye method use nahi krenge
//  1. Method -> slice se 
    // fast method
    let arr1 = ["item1", "item2"];
    let arr2 = arr1.slice(0);
    arr1.push("item3");

console.log(arr1, arr2);
console.log(arr1 === arr2);    

// 2. method -> using concat method
    let arr3 = [].concat(arr1);
    arr3.push("item 4");
    console.log(arr1);
    console.log(arr3);
    

/////////////////////////////////////////////////////////////////////////////////
// New way and optimal way and industry standard
// Most prefer way
let arr = ["Item 1", "Item 2", "Item 3"];
let cloneArr = [...arr];

console.log(arr);       // ["Item 1", "Item 2", "Item 3"]
console.log(cloneArr);  // ["Item 1", "Item 2", "Item 3"]
console.log(arr === cloneArr);  // false

arr.push("Item 4");

console.log(arr);       // ['Item 1', 'Item 2', 'Item 3', 'Item 4']
console.log(cloneArr);  //['Item 1', 'Item 2', 'Item 3']
console.log(arr === cloneArr); //false

// other exampes of spread operator
// Ex -------
let arrC = [...arr, "item 5", "item 6"];
console.log(arrC);  // ['Item 1', 'Item 2', 'Item 3', 'item 5', 'item 6']

// Ex ----
let oneMorArray = ["item3", "item4"];
let sigleArray = [...arr, ...oneMorArray];
console.log(sigleArray);



/////////////////////////////////////////////////////////////////////////
// how to concate the array

let ar = ["item1", "item2"];

let concatArr = ar.slice(0).concat(["item3", "item4"]);
console.log(concatArr);  //  ['item1', 'item2', 'item3', 'item4']

let concatArr2 =  [].concat(ar, ["item 11", "item 12"]);
console.log(concatArr2);  //  ['item1', 'item2', 'item 11', 'item 12']