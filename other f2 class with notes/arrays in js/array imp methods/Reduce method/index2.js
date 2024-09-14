
// Reduce method

// reduce method ek array mein ek value return karta hai. Yeh value har element ko reduce karega and
// reduce method single value return karta hai.
// Agr ham reduce initial value nahi dete h toh w by default first value ko prev or second value ko curr man leta h
// means wo second index se start krta h or first value prev ko de deta h

// agr ham intial value pass krte h to wo prev me initail vaue leta h or current value array ki first value hoti h

let arr = [4,3,5,1];

let cb = function(prev, current, index){

    console.log("prev->", prev,"currVal->", current,"index->", index);
    return prev + current;
}


let result = arr.reduce(cb);

// let result = arr.reduce(cb, 100);

console.log(result); // Output: 13