// Array methods

//  push() pop() method 
   // ye dono method array ke last me operation perform krte h

    let fruits = ["apple", "mango", "grapes"];
    console.log(fruits);  //["apple", "mango", "grapes"]

// push() -> end me add krta element ko original array me hi
    // fruits.push("banana"); 
    // console.log(fruits); // //["apple", "mango", "grapes", "banana"]

// pop() -> last element ko remove krta hai original array me hi
    // or yeh method poped value bhi return krta h
    let poppedfruit = fruits.pop();
    console.log(fruits); //["apple", "mango"]
    console.log(poppedfruit , typeof(poppedfruit)); // grapes


// starting me operation perform krne ke leya original array me hi
// unshift or shift method

  // unshift -> start me element add krne ke leya
  fruits.unshift("banana");
  console.log(fruits); // ["banana", "apple", "mango"]
  fruits.unshift("myfruit");
  console.log(fruits); // ["myfruit", "banana", "apple", "mango"]

 // shift -> start me element remove krne ke leya original array me changes hote 
    // ye method hme removed value bhi return krta h
  
    let removedFruit =  fruits.shift();
    console.log(fruits); // ["banana", "apple", "mango"]
    console.log(removedFruit , typeof(removedFruit)); // myfruit

// Note -> push or pop method fast h compare to shift unshift
        // because shift unshift me array ke start me operation perform ho raha 
        // esley waha sabhi element shift ho rahe h esley time consume krega
        