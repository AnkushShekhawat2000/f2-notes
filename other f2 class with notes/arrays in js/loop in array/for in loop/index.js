// for in loop

// ye loop index pr work krta h 
// ye hme array ke har index no  deta h 

const fruits = ["apple", "banana", "mango", "orange"];


// ye for loop fruits ke end index tak jata 
// index var hame arr ki har index value dega


//  like that
//       0        1         2         3
//    ["apple", "banana", "mango", "orange"];
//       ^
//       |
//      index
//      output ------------------------
//        0       1         2        3
      
for(let index in fruits){
    console.log(index); // 0 1 2 3
}


//  index ke accorfding ham value acces kr sakte h us array

for(let i in fruits){
    console.log(fruits[i]); // apple banana mango orange
}


// operation  using for in loop
const fruit2 = [];
for(let i in fruits){
     fruit2.push(fruits[i].toUpperCase());
}

console.log(fruit2); // ["APPLE", "BANANA", "MANGO", "ORANGE"]