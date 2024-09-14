function app(){

   const myFunc = () =>{
    console.log("helo from myfunc");
   }

   const addTwo = (num1, num2) => {
    return num1 + num2;
   }

   const mul = (num1, num2) => num1 * num2;

   
  console.log("inside app");
  myFunc();
  console.log(addTwo(5, 7));
  console.log(mul(5, 7));

}


app();