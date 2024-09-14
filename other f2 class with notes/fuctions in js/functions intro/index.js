// function introduction

// Es5 and Es6 is vesrion

//  Es5 me 3 function aye the
   // 1. function statement
   // 2. function expression
   // 3. anonyms function

// es6 new version h esme arrow function (fat arrow function)  aya
   // 1. basic fat arrow
   // 2. fat arrow with on param
   // 3. fat arrow with implicit return
   


// functions :->  Js me function normal programing language ke jaise behave nahi krta
            //    js me function bnanane ke leya return type nahi dena hota
            //    function keyword dekr function ban jata h

   
// what is functions?

// function ->  function me ham apna wo code likh sakte h jisko hame bar bar chlna ho aur jab need ho tabhi chalana ho
            //  asa krna se hme same code bar bar nahi likhna pdega aur ham bs us function ko call kre wo code use kr sakte h
            //  function me code likh rakh deya jata h lekin wo code excute tabhi hoga jab use call (invoke ) kiya jaya warna wo function work hi nahi krega
            //  function invoke(call) kena ke leya hame () lganae pdte h -> function abc();

// ex          ->

// console.log("subha me chai ")

// console.log("bartan uthao");
// console.log("chwal daloo");
// console.log("panni dalo");
// console.log("gas par chadhao 20 min");
// console.log("gass off krdo");
// console.log("chawal tyar h");

// console.log("sam ko dinner me roti")

// next day

// console.log("subha me  nasta")

// console.log("bartan uthao");
// console.log("chwal daloo");
// console.log("panni dalo");
// console.log("gas par chadhao 20 min");
// console.log("gass off krdo");
// console.log("chawal tyar h");

// console.log("sam ko dinner coffe")


// yaha pr dopr ke code repeat h or sam h yeh hm fun me dalkr line of code kam kr sakhte h r repaetion bhi bacha sakhte h


function dophrmeChwal(){
    console.log("bartan uthao");
    console.log("chwal daloo");
    console.log("panni dalo");
    console.log("gas par chadhao 20 min");
    console.log("gass off krdo");
    console.log("chawal tyar h");
}


// function call

// day 1
console.log("subha me chai")
dophrmeChwal();
console.log("rat ko cofee")

// day 2
console.log("subha me nasta")
dophrmeChwal();
console.log("sam ko dinner chai")

// .....


//  ex ->

function happybirthday(){
    console.log("happy birthday");

}

var nishuBirtdayDate = 23;
let ankushBirtdayDate = 19;
let dateofbirthday = 23;
let todaysDate = 23;// 24 25 18 19 20


if( dateofbirthday== todaysDate){
    happybirthday(); 
    happybirthday();
    happybirthday(); 
    happybirthday(); 
    happybirthday(); 
    happybirthday();    
}

if(nishuBirtdayDate == todaysDate){

    happybirthday();
    happybirthday(); 
}

if(ankushBirtdayDate == todaysDate){
    happybirthday();
}




