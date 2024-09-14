// for loop

for(let i = 0; i <= 5; i++) {
    console.log(i);
}

// lekin ham i ko bhar access krna chahege to error dega
// kuki let variavle bhar accessable nahi hota only block me access hota jha wo define kiya jata h
console.log("outside loop instalize let inside loop" + `current value of : ${i}`);


// usko bhar acees krne ke leya hme i bhi bhar instalize krna hoga
let j =0;
for(j = 0; j <= 5; j++) {
    console.log(j);
}
console.log("outside loop intalize outside " + `current value of : ${j}`);



// lekin ham var se isko bhar access kr sakhte h
// var bhar bhi exist krta h
for(var i = 0; i <= 5; i++) {
    console.log(i);
}
console.log("outside loop instalize with var" + `current value of : ${i}`);