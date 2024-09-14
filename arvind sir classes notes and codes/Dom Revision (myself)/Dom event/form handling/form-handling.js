// <!-- Form ke sath buy default onsubmit event attached hota h jo ki submit hone(submit button click krne pr) pr apne ap trigger hota h -->
// sumit krne pr by default data self pr jata h 
// addeventListener call hota h toh yeh internally event object bhejta h function same foreach ke trah 
// jo koi bhi event hota h sab kuch sab info  event object me hote h
// event is the object jo ki internally addevent listener se milta h iska us event k sabhi info hogi
// jaise kha event triger hua kis pr hua event ki position kya event hua

/** 
const formElement = document.getElementById('form');
const btn = document.querySelector("#btn");


formElement.addEventListener('submit', (event) => {
// collect the information
event.preventDefault();  // prevent default krna jaruri warna page reload ho jayega hme form ka dat hi nahi milega
console.log(event);

const data = {
    title: formElement.title.value,
    description: formElement.description.value,
    isPublic: formElement.isPublic.isChecked,
    isCommentsEnabled: formElement.isCommentsDisabled.isChecked
}

console.log(formElement.isPublic.isChecked);

console.log(data);
});


btn.addEventListener("click", (event) => {
    console.log(event);
})

// [1, 2].forEach(function(item, index, list){
// })


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// seaching functionality 

const searchInput = document.getElementById("search-input");

let students = [
    {
        name: "Ankush",
        age: 23,

    },

    {
        name: "Suraj",
        age: 20
    },

    {
        name: "Manik",
        age: 100

    },

    {
        name: "Prem",
        age: 25
    }, 

    {
        name: "Harshit",
        age: 28
    }

]


function filterStudents(searchQuery){
    // searchQuery = "ar" => ["Harshit", "Ankush"]

    const filteredStudents = students.filter((student) =>{
        // case insentitive search
        let matchedValue = student.name.toLowerCase().includes(searchQuery.toLowerCase());

        return matchedValue;  
    } )

    console.log(filteredStudents);
   


}



searchInput.addEventListener("input", () => {
   let searchQuery = searchInput.value;
   filterStudents(searchQuery);
});








////////////////////////////////////////////////////////////////////////////////////////////////


// includes() methods
 // ye input leta jis par ye apply hita check krta h ki yeh value isme exist krte h ya nahi

"ankush".includes("kus");  // true

"ankush".includes("ks");  // false  

[1,2,3,4,5,6,10].includes(8)  // false

[1,2,3,4,5,6,10].includes(10)  // true



*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Keyboard events :->
//               Events that make an keyboard
// there are two invents in keyboard -> 
// 1. keyup
// 2. keydown


const inputKeyboard = document.getElementById("keyboard");


inputKeyboard.addEventListener("keydown", (event) => {
    console.log(event);
})


inputKeyboard.addEventListener("keyup", (event) => {
  console.log(event);
})




// use case of keyboard event

/////// text zoom functionality (help ful in google sheet clone)
// ctrl + a krne pr incraese the font 
// ctrl - b krne pr decrease the font

// font size badane se textarea  bhi bad jayega kuki grid hoti h un grid ka size bad jata h ise wajah se textarea bhi bd jata h


const codeInput = document.getElementById("code");


let fontSize = 16;
codeInput.addEventListener("keydown", (event) => {
    console.log(event.key);

    if(fontSize >= 32 || fontSize <= 10){
        return;
    }

    if(event.key === 'a' && event.ctrlKey){
        // cntl + a => increase the font size
        fontSize += 2;
        codeInput.style.fontSize = `${fontSize}px`;

    }
    else if(event.key === 'b' && event.ctrlKey){
         // cntl + b => decrease the font size
         fontSize -= 2;
         codeInput.style.fontSize = `${fontSize}px`;
    }
})


