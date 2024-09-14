//  Iterables

// Jis par ham loop lga sakte h
const firstName = "Ankush"

for(let char of firstName){
    console.log(char);
}


const items = ['item1', 'item2', 'item3'];
for(let item of items){
    console.log(item);
}


// objects are not iterable -> give the error
// const users = {'key1': 'value1', 'key2': 'value2'};
// for(let item of users){
//     console.log(item);
// }


// Array like Object
//  -> Jinke pass length property hoti h
// aur unko ham index se access kr sakhte h 
const fullName = "Ankush";
console.log(fullName.length);
console.log(fullName[2]);