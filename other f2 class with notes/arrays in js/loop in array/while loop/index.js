// while loop in arr

const fruits = ["apple", "orange", "grapes"];

let i = 0;
while (i < fruits.length){
    console.log(fruits[i]);
    i++; // increment i after each iteration
}

// perform opeartion

const fruits2 = [];
let j =0;
while (j < fruits.length){
   
    // perform task
    fruits2.push(fruits[j].toUpperCase());
    j++; // increment i after each iteration
}

console.log(fruits2); // ["APPLE", "ORANGE", "GRAPES"]