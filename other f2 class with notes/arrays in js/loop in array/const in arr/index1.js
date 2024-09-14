// create array with const
     //  -> const ka behaviour h ek bar hi define hota phir uska address change nahi kr sakhta

//heap memory -> ["apple", "mango"]  add->0x11

// ye possible ku ho raha h jabki arry const h 
// kuki same addr pr hi value add kr rahe yeh changes nahi mana jayega 
// changes tab mana jata h jb address change ho

    const fruits = ["apple", "mango"];  // add-> 0x1111
    fruits.push("banana");   // same addr pr hi value add kr rahe h
    console.log(fruits);

// ye hame error dega kuki ham fruits array me jo ki const h 
// use new address pr store array ka reference de rahe 
    fruits = ["grapes", "pineapple"]; // add -> 0X1222


// reference change hota h toh changes mana jata h 


