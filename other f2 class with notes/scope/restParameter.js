// Rest Parameter

// baki jo parameter bachenge unka array bnkr c me chla jyega

function myFun(a,b,...c){
    console.log(`a is: ${a}`);
    console.log(`b is: ${b}`);
    console.log("c is:", c);
}

myFun(1,2,3,4,5);

function addAll(...numbers){
     let total = 0;

     for(let number of numbers){
        total += number;
     }

     return total;
    // console.log(numbers);
    // console.log(Array.isArray(numbers));
}


const ans = addAll(3,4,5,6,7,8,9);

console.log(ans);