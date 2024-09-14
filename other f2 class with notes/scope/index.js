// lexical scope

// isme sbse phle khud ke andr dekhega ki var h ki nahi agr hoga to wahi access krega
// agr define nahi h to wo apne parent me dundhega
// nearest wala acess hota h 
// function ke ander jo define hota h wo us fun me acessable hota 
// global sabhi function me acessable hoga


const myVar = "value1";

function myApp(){
    
    function myFun(){
        const myVar = "value59";
        console.log("inside myFun", myVar);
    }


    console.log("inside myApp", myVar);
    myFun();
}

myApp();
console.log("outside myApp", myVar);