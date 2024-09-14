// more examples

// string ko object me convert
// is case me caharcter ki index key bn jayege or character value
const newObj = {..."abc"}
console.log(newObj)   //{0: 'a', 1: 'b', 2: 'c'}


// array ko object me convert
// is case me array ki index key bn jayege or us index ki value key ki value bn jayege
const newObj1 = {...["item", "item2"]};
console.log(newObj1) // {0: 'item', 1: 'item2'}

const newObj2 ={..."abcdefghijklmnopqrstuvwxyz"};

console.log(newObj2) 