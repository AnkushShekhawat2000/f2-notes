// iterate in obj

const person = {
    name : "ankush",
    age : 22,
    hobbies : ["reading", "painting", "cooking"]
}

// there two ways to iterating in obj

// 1. using for in loop

for(let key in person) {
    // console.log(key); 
    console.log(`${key} : ${person[key]}`);
}

// 2. using object.keys -> ye hme keys ka array deta h
console.log(Object.keys(person));
console.log(typeof(Object.keys(person)));

const Keys = Object.keys(person);

console.log(Array.isArray(Object.keys(person)));


// now be can simply iterate in this keys array

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }


for(let i=0; i<Keys.length; i++){
    console.log(Keys[i],  person[Keys[i]]);
}
