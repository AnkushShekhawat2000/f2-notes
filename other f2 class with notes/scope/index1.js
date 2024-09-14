// block scope and function scope

// let and const are block scope
// var is function scope

// :-> agr kisi code me kisi block me let const variable define h to wo use block ke andr hi acessabe honge 
//     us block se bhar acessable nahi hoga agr hm acess krenge to error dega


{
    let firstName = "Ankush"; 
    console.log(firstName);
}
// console.log(firstName); // ReferenceError: firstName is not defined


{
    const secondName = "Shekhawat";
    console.log(secondName);
}

// console.log(secondName); // TypeError: secondName is not defined


const firstName = "garima";
console.log(firstName);



if(true){
    let fName =  "Ankush raj";
    console.log(fName);
}

// console.log(fName); // ReferenceError: fName is not defined


// var case 
//  :-> var function scope h pure file ko main function bolte h means file function scope 
//      var me pure file me kahi bhi acess kr sakhte h

console.log(myVar); 

function myFunction(){
    var myVar = "value45";
    console.log(myVar);
}

console.log(myVar);



