// param destructuring

// object
// react


const person = {
    firstName : "Ankush",
    gender : "Male",
    age: 500
}

// function printDetails(obj){
//     console.log(`Name: ${obj.firstName}, Gender: ${obj.gender}`);
//     console.log(obj.gender); // undefined
// }


function printDetails({firstName, gender,age}){

    console.log(`Name: ${firstName}, Gender: ${gender}, Age: ${age}`);
 

}



printDetails(person);