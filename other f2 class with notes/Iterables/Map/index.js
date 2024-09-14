// Maps 
//  -> Map is an iterable
 // store data in ordered fashion

 // store key value pair (like object)
 // duplicate key are not allowed like objects


 // different between map and objects

 // objects can only have string or symbol
 // as key

 // in maps you can use anything as key
 // like array,  number , string

 // object literal
 // key -> string
 // key symbol

 let person = {
    firstName : "Ankush",
    age : 22,
    1:"one"
 }

 console.log(person.firstName);
 console.log(person["firstName"] );

 console.log(person["1"]);
 console.log(person[1]);  // atomatic change in string

 for(let key in person){
    console.log(typeof key);
 }



 // Map creartion

 // key value pair
 // set key are anything

 const men = new Map();
 men.set('firstName', 'Ankush');
 men.set('age', 23);
 men.set(1, 'one');  // here key value are no
men.set([1,2,3], 'onetwoThree')
men.set({1 : 'one'}, 'oneTwoThree')
 console.log(men);
 console.log(men.get(1));


 for(let key of men.keys()){
    console.log(key, typeof key)
 }


 for(let key of men){
    console.log(key);
    // console.log(typeof key);
    // console.log(Array.isArray(key))

 }

 for(let [key, value] of men){
    console.log(key, value);
 }



 const newMap = new Map([['firstName', 'Ankush'], ['age', 27]]);

 console.log(newMap);


 const extraInfo = new Map();

 const person1 = {
    id: 1,
    firstName : "Ankush"
 };

 const person2 = {
    id: 2,
    firstName : "Ravi"
 };
 extraInfo.set(person1, {age: 8, gender: "male"});
 extraInfo.set(person2, {age: 9, gender: "female"});
 console.log(extraInfo); 

 console.log(person1.id);
 console.log(extraInfo.get(person1).gender);
 console.log(extraInfo.get(person2).gender);