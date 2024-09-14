// for of loop

// ye loop same simple for loop ki trah work krta h

const fruits = ["apple", "banana", "mango", "orange"];


// ye for loop fruits ke end index tak jata 
// fruit var hame har index ke value dega


//  like that :-
// ["apple", "banana", "mango", "orange"];
//     ^
//     |
//   fruit
//    out -     -         -        -
//   "apple"   "banana"  "mango"  "orange"
      
for(let fruit of fruits){
    console.log(fruit); // apple banana mango orange
}


// operation
const fruit2 = [];
for(let fr of fruits){
     fruit2.push(fr.toUpperCase());
}

console.log(fruit2); // ["APPLE", "BANANA", "MANGO", "ORANGE"]