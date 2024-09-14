//  difference between dot and bracket notation

//  key me ham spacce mah de sakte uske leya hame string me likhna hoga

const person = {
    name : "Ankush",
    age : 22,
    "person hobbies": ["guitar", 'sleeping', 'listening']
}


// space wali property ko ham dot se acces nahi kr sakhte wo hame error dega
// console.log(person.person age);

// use ke leya bracket ka use krte h
console.log(person["person hobbies"]);


//  key ki value  ke name se key add krna

const key = "email";

// person.key = "ankush@gmail.com";  // {name: 'Ankush', age: 22, person hobbies: Array(3), key: 'ankush@gamil.com'}
// person["key"] = "ankush@gamil.com"  //{name: 'Ankush', age: 22, person hobbies: Array(3), key: 'ankush@gamil.com'}
person[key] = "ankush@gamil.com"  // {name: 'Ankush', age: 22, person hobbies: Array(3), email: 'ankush@gamil.com'}
console.log(person);

