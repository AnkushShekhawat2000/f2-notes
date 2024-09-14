// String indexing

let firstName = "ankush S";


//   a   n   k   u  s   h     S
//   0   1   2   3  4   5  6  7

// how to access index value in string

console.log(firstName[0]);  // a
console.log(firstName[5]);  // h
console.log(firstName[6], "space"); // (space) 
console.log(firstName[7]); //  S

// string length
// firstName.length  -> space also include in length
console.log(firstName.length);  // 8
 

console.log("<-------- method --------->")

// string methods

// trim()
// toUppperCase();
// toLowerCase();
// slice();


// trim()  method
// trim method spaces remove krta string ke starting me end me


let value = "  hello world  ";
console.log(value.length);  //15


// remove spaces
value.trim();  // "hello world"
// console.log("after use trim string length--> ","value ki --> ",value,  "value ki length -->",value.length);  // 15

// trim function hme new string deta h spaces remove krke 
// original string hme new string change nahi krega
// string are immutiable hote esley ye method orginal string me shanges nahi kr payega



// ham yaha jo new string mil rahe usko firse value me dal rahe h
value = value.trim();
console.log(value, "value ki length -->",value.length); // 11




// toUppercase method

console.log("<----- to uppercase method ------------------->");

value = value.toUpperCase();
console.log(value);




// toUppercase method

console.log("<----- to Lowercase method ------------------->");

value = value.toLowerCase();
console.log(value);


console.log("<----- slice method ------------------->");

// slice method
// jab hme apni string se paticular characters chaye tab waha ham slice method use kr sakhte h


    //   012345678910
value = "helloo world";
// hme only hello chaye is String se

// start index -> konse index se start krne h string means kha se cahye string
// end index   -> konse index tak ka character chaye

                                       
let sliceValue = value.slice(0, 5);  //  hello

//              0 1 2 3 4 5 6 7 8 9 10 11
//  orignal ->  h e l l o 0   w o r  l  d

                  //  start    end
// using slice method (0  ,   5)

// slice method last index value include nahi krta to isley ye 5 index h toh 4 tak ki hi value lega esley space nahi ayeag



console.log("sliceValue--->", sliceValue);
console.log("sliceValue length--->", sliceValue.length);