                 //////////////////////////
                ///////   Strings     ////
               //////////////////////////


// let name = "aravind";
// console.log(name.length);  //7
 
// console.log(name[1]);     // r
// console.log(name.charAt(1));     //r

// Note -> 
        // charAt() will not go the beyond og string length that it is not given undefined

// console.log(name[10]);         // undefined
// console.log(name.charAt(10)); // gives empty string

// sluce() eding index not included
// console.log(name.slice(2, 5)); // "avi"  

// Note -> String are immeutable in js  => cannot be changed

// Ex -> 
    // Mutabily in string
    // name[1] = 'W';     // strings are immutable => can not be changed
    // console.log(name);  // aravind


// Note -> array are meutable in js  => that can be changed

    // Ex -> 
    // let arr = [4, 2, 3];
    // arr[1] = 100; // mutability
    // console.log(arr);  //[4, 100, 3];





// strings can be compared

// Strict comaprision -> 
              // It also checl the value and the data type
// console.log("a" === "a");  // true

// It only check value not data type
// console.log("a" == "a");  // true

// console.log("a" > "b");   // false

// console.log("a" < "b");   // true

//dictionary order => lexographical order
  // compare first charcter first and then so on
// console.log("abb" < "abc");  // false    // third character b < c  b is not greater c


// dictionary order => lexicographical order
// let str = "AbZ$%m0";
                   // // "AbZ$%m" =>   find asci code char 6 -> 0 so we pass 6 index

  // charcter to ascode                
// console.log(str.charCodeAt(6));  // 48

// 100 => d        '1' -> 49
// 97 => 'a'       'A'-> 65 , "z" -> 90

// asci code to character 
// console.log(String.fromCharCode(48));   // '0'
// console.log(String.fromCharCode(97));   // 'a'


//  conactenation string
    // 1. Using + operator
    // let firstName = "aravind";
    // let lastName = "samudrala"
    // console.log(firstName + " " + lastName);

    // 2. Using concat method
    // console.log(firstName.concat("A", "B", "C", "D")); // arvindABCD
    // "aravind" + "A" + "B" + "C" + "D"

// split
    // let str = "abc$mno$ukg";

    // ["abc" , "mno" , "ukg"]
    // split , splits the string at the given delimeter
    // console.log(str.split("$"));   // ["abc" , "mno" , "ukg"]

// join method   ->  (reverse of spliting method)
    // let arr = ["abc", "mno", "ukg"]
    // let str1 = arr.join("#")
    // // "abc" + "#" + "mno" + "#" + "ukg"
    // console.log(str1); // abc#mno#ukg

    // let str1 = arr.join(" ")
    // // "abc" + " " + "mno" + " " + "ukg"
    // console.log(str1); // abc mno ukg


// sort method
/**
 * By default the sort method will sort the elements in the increasing order.
 */

// let arr = ["a", "c", "b"];

//  increasing order
// arr.sort();
// console.log(arr); //[ "a", "b", "c"]

// let arr = ["abbc", "ab", "aba"];
// arr.sort();
// console.log(arr); //[ "ab", "aba", "abbc"]

// let arr = [3, 1, 9]
// arr.sort();
// console.log(arr); //[1 3 9]

// Numbers ke case me sahi se sorting nahi krta h glat input deta h
// ye array le element ko string treat krta h 
// aur phir harek string ke harek charcter ko compare krke soring krta h

// let arr = [13,   110,   9,   111];
//           ["13", "110", "9", "111"]
// arr.sort();
// console.log(arr); //[110, 111, 13, 9]


// ise problem ko solve krne ke compare function ka use krt h
// Syntax: 
    // arr.sort(function(a, b){
    //     // reurm +ve | -ve | 0;
    // })


// let arr = [13, 110, 9, 111]
// [ "13", "110", "9", "111" ]
// 
// sorting in increasing order
// arr.sort(function (a, b) {
//     return a - b;
// });
// console.log(arr);

// sorting in decreasing order
// arr.sort(function (a, b) {
//     return b - a;
// });
// console.log(arr);



/**
 * 
    let names = ["ara", "arb", "arz", "arx"]
    // decreasing order     // [ "arz", "arx", "arb" , "ara" ]

    names.sort(function (a, b) {
        if (a > b) {
                                            // a = "xy" , b = "xm"
                                            // "xy" > "xm" 
                                            // `a` before `b` so return -ve value.
            return -10;
        }

        if (a < b) {
                                            // a = "mn", b = "mz" 
                                            //  "mn" < "mz"
                                            // `b` before `a` so return +ve value
            return 10;
        }

        if (a === b) {
            return 0;
        }
    });

    console.log(names);
 * 
 */


// given a list of products find the list of product names which in the increasing order of their prices.
let products = [
    {
        name: "Comb",
        price: 100
    },
    {
        name: "Mirror",
        price: 120
    },
    {
        name: "egg",
        price: 6
    },
    {
        name: "Mic",
        price: 1000
    },
    {
        name: "Pen",
        price: 10
    }
]
// based on price
// increasing order: ["egg", "pen" , "comb", "mirror", "mic"]
// decreasing order: ["mic", "mirror", "comb", "pen", "egg"]


// find  increasing order based on price ->  ["egg", "pen" , "comb", "mirror", "mic"]
products.sort(function (a, b) {
    // a = {name, price} , b = { name, price } 
    if (a.price > b.price) {
                        // a = { name: "dnnd", price: 100 } , b = { name: "djfjefe", price: 10 }
                        // product `b` has to be before `a` in the final result so return +ve value.
        return 3; // 3 is a positive number
    }
    if (a.price < b.price) {
                        // a = { name: "djfjefe", price: 10 }, b = { name: "dnnd", price: 100 } 
                        // product `a` has to be before `b` in the final result, so return -ve 
        return -10;
    }
    if (a.price === b.price) {
        return 0;
    }
});

console.log(products);

let user = {
    name: "aravind"
} // Object  => hash map
