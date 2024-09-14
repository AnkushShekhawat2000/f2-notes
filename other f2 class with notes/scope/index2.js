// 

// function myApp(){
//     if(true){   
//         let firstName = "Ankush"
//         console.log(firstName);
//     }

//     console.log(firstName);  // not acessable beacuse let is block scope 
// }


// myApp(); 


// var case
// : -> var jis fun me define hota wo usem kahi bhi acess hoga

// console.log(fName);

function myApp(){

    console.log(fName);
  
    if(true){   
        var fName = "Ankush";
        console.log(fName);
        console.log("LName: ", LName);
    }

    console.log(fName);
    console.log("LName: ", LName);
   
}

console.log(fName);





myApp(); 