// default parameter


// function addTwo(a,b) {

//     if(typeof b == undefined){
//         b = 0;
//     }

//     return a + b;
// }


// agr b pass krenge to b ki passed value ayege
// agr pass nahi kiya toh hame default value 0 milege

function addTwo(a,b = 0) {

    return a + b;
}

const ans = addTwo(4,5);
console.log(ans);