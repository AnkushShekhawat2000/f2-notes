//  Object intro

// objects is a reference type
//  Arrays are good but not sufficient 
//  for real world dat
//  object store data in kay value pairs
//  objects don't have index


// how to create objects
//   obkject literal -> {}

// let person = {name: "Ankush", age : 22}

let person = {
    name: "Ankush",
    "age" : 22,
     hobbies: ["guitar", "sleeping", "listening music"]

 }

console.log(person);       // {name: 'Ankush', age: 22, hobbies: Array(3)}
console.log(typeof(person));  // Object


// how to acess data from objects
   // age ham obj ko index se access krege to undefined milega 
   // kuki obj only key ke threw hi access kr sakhte h 
   // aur aya ye 0 ko as a key treat krega aur hmare obj me 0 se koi key nahi h isley undefined deya
   // age hmare obj me 0 se koi key hoti to hame us 0 key ki value mil jate

//    ex ->  
    let obj1 = {
        name : "Nishu",
        "age": 23
    }
    console.log(obj1); 
    console.log(obj1[0]); //undefined

    let obj2 = {
        name : "Nishu",
        0: "Zero", 
        "age": 23
    }
    console.log(obj2); 
    console.log(obj2[0]); // Zero
   

  // :-> array does not have index
  // by reference se access kr sakhte h
console.log(person.name);  //Ankush
console.log(person.age);   // 22
console.log(person.hobbies);  // ["guitar", "sleeping", "listening music"]

   // by key acces kr sakhte h
   console.log(person["name"]);  // Ankush
   console.log(person["age"]);  // 22

   // js me by default key string me hi hoti chahe wo show na ho
  // age ham bina string ke data pass kregeg to hame kuch nahi milega
  console.log(person[name]);  // undefined


// how to add key value pair to objects
person.gender = "male";
console.log(person);

 // another way
 person["rollNo"] = 123648;
 console.log(person);   // {name: 'Ankush', age: 22, hobbies: Array(3), gender: 'male', rollNo: 123648}


