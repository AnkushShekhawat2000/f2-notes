// Sets (It is a iterable)
// store data
// sets also have own methods
// no index-based access
// order is not guaranteed
// unique items only (no duplicates allowed)
// use of set -> when we use uniqueness

// syntax of set
const numbers = new Set([1, 2, 3, 4, 3,2]);
const string = new Set("123");
console.log(numbers);
console.log(string);

// no index based access
console.log(numbers[2]);  // undefined

// order are not mentioned
console.log(numbers);


// create set null and add values later

const items = ['item1', 'item2', 'item3'];
const digits = new Set();
digits.add(1);
digits.add(2);
digits.add(3);
digits.add(4);
digits.add(2);
digits.add(5);
digits.add(items);
digits.add(items);  // not store same memmoy address item
digits.add(['item1', 'item2']);
digits.add(['item1', 'item2']);  // store because both are point different address

console.log(digits);


// set is iterable

for(let number of numbers){
   console.log(number);
}


//  Example -> 
const myArray = [1,2,3,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
console.log(uniqueElements);  //{1, 2, 3, 4, 5, 6}



console.log(myArray);  //[1, 2, 3, 4, 4, 5, 6, 5, 6]

// length property cannot be use in set

// how to callculate length of set

let length  = 0;

for(let value of uniqueElements){
    length++;
}

console.log(length);  // 6

// has method
//  -> check the value is present in set or not

console.log(uniqueElements.has(2));  // true

console.log(uniqueElements.has(7));  // false

