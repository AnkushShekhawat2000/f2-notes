// callback function

function myFunc(callback){
    console.log(" i am a function and i can");
    callback("Ankush");
}

// myFunc([1,2,3])
// myFunc("Ankush");


function myFunc2(name){
    console.log("your name is ", name);
}


myFunc(myFunc2);