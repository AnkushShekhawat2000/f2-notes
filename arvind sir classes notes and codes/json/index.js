/**
 * 1. JSON methods
 * 2. error handling
 * 3. destructuring , template strings
 * 4. Assignments
 */

// Json : ->
// ----
//           for converting any object whin  javascript in string format is called json
//           There are two method to conevert data in json format
//          
//          Client sever ko communicate krne ke leya ek common chiz chaye string ek ase way h jo client server dono samjh sakhta h
//          to ham javascript format data ko string me convert krke server se client or client se server pr send krte h or communication krte h
//          javascript data format ka string hi json khelat h or esko json format me bnane ke do method hote h

//  1. Stringify method
//  2. parse method

// from client to server :->
//----------------------

// let loginFormData = {
//     username: "aravind",              // this is proograming data this is not not transfer in interenet
//     password: "2892ndjkd299"          // firstly we need to conert this data to tansfer ready
// };

// client  to server
/**
 * userObject  =>  String => internet => server
 *
 * From server client receives the string as data:
 * String => Object
 */


// Stringify method =>
//    ---------------- 
                        // Yeh object data ko string format me convert krta h. Esme data me jo space rehta h sab hat dat ah or object 
                        // ('')  single code ke ander a jata h

// Ex -> 
    // let loginFormStringData = JSON.stringify(loginFormData);
    // console.log(loginFormStringData);                               // '{"username":"aravind","password":"2892ndjkd299"}'; 

    /**
     *      Java sript object                                                                         json format or String form data
     *      ------------------                                        after                           ------------------------------        
     *       {"username":"aravind","password":"2892ndjkd299"}         =======>                        '{"username":"aravind","password":"2892ndjkd299"}'
     *                                                                by using stringfy()         
     * 
     */


    // Now this string data (conevert data)  we can transfer in internet.



// Server to client 
// ------------------- 
//                    server send some data to the client
//            server response ->    '{"username":"aravind","password":"2892ndjkd299"}';
//                    client ko data string me milega jo ki client nahi samjah sakhta h to client is data ko kuch processing krte object me bnayega


// Ex->

    // let serverResponse = '{"username":"aravind","password":"2892ndjkd299"}';

// Parse method:->
    // ---------------    string data(jo data server side  se mila h) ko object me convert krta h 


    // let serverData = JSON.parse(serverResponse);                      // '{"username":"aravind","password":"2892ndjkd299"}' 
    // console.log(serverData.password, typeof serverData);                         2892ndjkd299                   Object
    


    /**
     *      String data (json)                                                                         object  format
     *      ------------------                                        after                           ------------------------------        
     *      '{"username":"aravind","password":"2892ndjkd299"}'         =======>                        {"username":"aravind","password":"2892ndjkd299"}
     *                                                                by using parse()         
     * 
     */


// Some time transfer other data 
    // boolean data to string
    // JSON.stringify(true)      // 'true'

    // string to boolean 
    // JSON.parse('true')    // false


    // number to string
    // JSON.stringify(100)   // '100'

    // string to number
    // JSON.parse('100')     // 100

    //null to string
    // JSON.stringify(null)   // 'null'

    // undefined to string   -> undefined ko ham string me convert nahi kr sakhte h kui 
    // JSON.stringify(undefined)  // undefined
    // JSON.parse("undefined") //   error -> undefined is not valid JSON at JSon.parse()

    // JSON.parse("[1,2,3]")     // [1,2,3]







// More example->
    /**
        array         JSON or (string) fomat
        [1,2,3]  =>  '[1,2,3]'


        {a:1,b:'arvind'} => {"a":1,"b":"arvind"}   // integer data doble code me nahi ata warna wo bhi string bn jayega ase a integer nahi rehega
    
    */




// Ex -> 

// when we open followrs list in instagram 
// {username: "", imageUrl: "", isFollowing: true} 

// let followers = [
    // {
    //     name: "Rajesh",
    //     imageUrl: "",
    //     isFollowing: true
    // },
    // {
    //     name: "Nayan",
    //     imageUrl: "",
    //     isFollowing: true
    // },
    // {
    //     name: "Akhil",
    //     imageUrl: "",
    //     isFollowing: false
    // }
// ]


// convert data in json
// let x = JSON.stringify(followers)
// console.log(x);                         // '[{name:"Rajesh",imageUrl:"",isFollowing:true},{ name:"Nayan",imageUrl:"",isFollowing:true},{ name:"Akhil",imageUrl:"",isFollowing:false}]'

    
// Convert back into arry
// console.log(JSON.parse(x));             // [{name: "Rajesh",imageUrl: "",isFollowing: true},{ name: "Nayan",imageUrl:"",isFollowing: true},{ name: "Akhil",imageUrl:"",isFollowing: false}]





//////////////////////////////////////////////////////////////////////////////////////////
//                    // Error handling//                                              //
////////////////////////////////////////////////////////////////////////////////////////


// Error handling:->
// __________________
                  


// Ex ->

// let user = {
//     name: "aravind"
// };

// console.log(user.address);   // undefined

// console.log(user.address.city); // error cannot read propertis of undefined 

//  console.log("big code ------------ after error");

// Explanation -> 
            //    wo code jisme hame error mil sakhte h us error ko handle krna jisse hmara code ka flow break na ho or hamar acode pura run ho jaye
            // is example me hamre code me error de sakhta h yaha ham undefined property pr ek or property access krna chah rahe jo ki hamre code me error create krege
            // jisssme hmara code block ho jayega mtlab niche ka code kuch bhi nahi chlega hamra big code run hi nhi hoga joke glat h ek error ki wjah se ham hmara itna bada code 
            // kisi kam ka nahi raha to ise problem ko solve krne ke ham error handle krte h 
            // jsme koi bhi error aye pprogram execution ke doran to wo hmare program ka flow break nahi kre or hamra program pura run ho 


 // Jis code me error ke chance ho wo ham try block me dal sakte h
 // agr usme koi error ayege to wo catch block catch kr lega or catch block ka code run krb dega
 // aur bakki ka code hamar run krega blocck nahi krega           


// Ex -> how error handle
// try ke sath catch block jurrur hota h
// let user = {
//     name: "aravind"
// };

// try {
//     console.log(user.address.city);
// }
// catch (errorObject) {
       // console.log("Error:", errorObject.message); // optional thsi code
// }

// console.log("after some unexpected error");


// Error: { name: "", message: "", stack: "position where the error object is created"}





// Stack trace -> pura description deta h kha error occur hua h

// let customErrorObject = new Error("Some custom error");
// customErrorObject.name = "My Own Error";
// customErrorObject.stack = "dkfkef";
// console.log(customErrorObject.name);
// console.log(customErrorObject.message);
// console.log(customErrorObject.stack);


///////////////////////////////////////////////////////
// create Error 


// Built error construcot -> Js ki windoe me ek Error proprty h jo directly acess h 
                            //  ek constructor fun h jo meaage leta h or error create krta h

                            // Error : {naem: "", stack: "position where the object is created"}


    // Ex -> 
    //  let customeErrorObject = new Error("Some custom error");
    //  console.log(customeErrorObject.name);      // Error   // bydefault error name Error hota h ham isko manipulate bhi kr sakte h
    //  console.log(customeErrorObject.message);   // Some custom error 
    //  console.log(customeErrorObject.stack);     // // at index.js:2445:25                    





    // let customeErrorObject = new Error("Some custom err");
    // console.log(customErrorObject);           // Error : some custome error 
                                                                    // at index.js:253:25
                                    



    // // bydefault error name Error hota h ham isko manipulate bhi kr sakte h

    // let customeErrorObject = new Error("Some custom err");
    //  customeErrorObject.name = "My Error";
    // console.log(customErrorObject);           // MyError : some custome error 
                                                                    // at index.js:262:25


// Note -> kabhi stack trace ko edit nahi krna chaye kuki esko edit krne se hame hmare actual error occur ki position pta nahi lgege
        //    esley koi motive hi nahi edit krne ka 


// Create custom error  -> function me error ka logic likh deya ab hm dibemically error create kr sakte h
// ------------------------
// function MyError(description) {
//     let customError = new Error(description);
//     // customError.name = "MyError";
//     console.log(customError.name); // Error
//     return customError;
// }        

////////////////////////////////////////////////////////////////
// we throw error mannually
// ----------------------------
    // console.log(1);    1
    // throw new Error("Dummy Error");  // Uncaughtn Error : Dummy Error        // the code will block and down code not will execute
    // console.log(2);                                         // at index.js:285:7


  
// How can we handle this code the excute whole code without block  
// ----------------------------------------------------------------------
    // // console.log(1);                                  //1
    // try {
    //     let myError = new Error("Some of my own error");
    //     myError.name = "MyError";
    //     throw myError;        // {name: "MyError", message: "Some of my own error", stack: "294"}   
    // }
    // catch (errorObject) {
    //     console.log(errorObject);    // name: "MyError", message: "Some of my own error
    // }
    // console.log(2);




    // create custom error function
// Create own custom error  -> function me error ka logic likh deya ab hm diynamically error create kr sakte h
// ------------------------
// function MyError(description) {
//     let customError = new Error(description);
//    customError.name = "MyError";
//    console.log(customError.name); // Error
//     return customError;
// }   

//   Using created error function
  // ====> 
     // // console.log(1);                                  //1
    // try {
    //        let e = MyError("Custom error");
    //        console.log(e);
    //     throw e;           // {name: "MyError", message: "Some of my own error", stack: "321"}
    // }
    // catch (errorObject) {
    //     console.log(errorObject);    // name: "MyError", message: "Some of my own error
    // }
    // console.log(2);



//Ex -> 
// function callme() {
//     let f = function () {
//         throw MyError("Some Error");
//     }
//     f();
//     console.log("after f"); // will not be executed
// }
// callme();
// console.log("after callme"); // will not be executed








////////////////////////////////////////////////////////////
            // template strings 
///////////////////////////////////////////////////////////
// esme ham dynamic data string me dikha sakhte

// backtick
// let myName = "Rahul";
// let description = `I am ${myName}`;
// console.log(description);



















////////////////////////////////////////////////////////////
//            // Destructuring //                        //
//////////////////////////////////////////////////////////

//JavaScript mein destructuring ek aisa feature hai jo humein arrays aur objects se values ko easily extract karne ka tareeqa deta hai. Yeh bohot useful hota hai jab humein complex data structures se specific values ko quickly access karna ho. Main do tareeqe ke destructuring hoti hai: array destructuring aur object destructuring.

// jab array or object chote ho or hme value extract krne ho tabhi use krte h large array me use nahi krte h
// extracting desired values from an Object / Array 
// objects ya array ke values ko acess krna ka new way
// jisme ham samme variable se right side se arary ya objects ki value left side ke variable me assign kr sakte h
// destructiring array or objects me hota h hame manually eke ek krke nikalne ki jarrurat nahi
//bas varible likh khud b khud value un variable me a jate 

//////////////////////////////////////
// destructuring in objects: ->
            //      but variable name same hone chaye yeh mendatory otherwise hme value nahi milege undefined mil jayega

    // let { name, age } = { name: "Aravind", age: 23 };

    // This is the older way
    // let age = user.age;
    // console.log(age);


    // In es6 new way come destructuring
    // same avraible create krna hota h jiske hme value chaye
    // let {age} = user;       
    // console.log(age)    // 23


    // agr ham wo varibale se value extract krenge jo usme h hi nahi toh hme undefined milega
    // let {x} = user;
    // console.log(x) // undefined


    // console.log(name , age) = user;
    // console.log(name, age);   // Rahul 23




  // Nested destructuring in objects
/**
 * // Ex-> 
 *  let {address} = {
        name : "Arvind",
        address : {
            city: "Warangal",
            pincode: 283928
        }
        
    }

    console.log(address);     //  {city: "Warangal",pincode: 283928}



    * // Ex->  agar hme nested objects se citry chahe tab 
    // wo key pakdege jisse hme value chahe or us object ke me key dal denge jonse hme cahe

    let {address: {city}} = {
        name : "Arvind",
        address : {
            city: "Warangal",
            pincode: 283928
        }
        
    }

    console.log(city);     //  warangal



    
    let {name} = {
        name : "Arvind",
        address : {
            city: "Warangal",
            pincode: 283928
        }
        
    }

    console.log(name);     //  arvind




 // agr hme koi or variable  rakhna 
    
    let {name: username} = {
        name : "Arvind",
        address : {
            city: "Warangal",
            pincode: 283928
        }
        
    }

    console.log(city);     //  arvind



    // Jab same name se varible phle se define ho tab hme error ayege

    let age = 2030;

    let {age} = {
        name : "Arvind",
        address : {
            city: "Warangal",
            pincode: 283928
        }
        
    }

    console.log(age);     // error



    // solution : alias name use kr sakhte h

     // let age = 2030;

    // let { age: myAge, } = {
    //     age: 23,
    //     address: {
    //         city: "Warangal",
    //         pincode: 283920
    //     }
    // }

    // console.log(age, myAge);  // 2030  23




     // let age = 2030;

    // let { age: myAge, address: { city: myAddress } } = {
    //     age: 23,
    //     address: {
    //         city: "Warangal",
    //         pincode: 283920
    //     }
    // }

    // console.log(age, myAge, myAddress);    // 2030  23  



    // explantion : -> is object me hme address ka object mileaga
    // destrucuring ke leya same brackets hona chaye
    =>    address:  {city : "warangal", "pincode": 283920} 
    =>   us object me se hm city le lenge
    =>    {city}  = {city : "warangal", "pincode": 283920}
    =>    address : {city}  


 */

      



   


/////////////////////////////
// 1. Array Destructuring:
//Jab aap kisi array se specific values ko nikalna chahte ho, to aap array destructuring ka use kar sakte ho.
    // yaha ham  right side ke array se value ko lena h variabel me store krne h
    // hmne do varible leya sequence wise starting se value variable me store ho jyege
    // jaise yaha hme a,b do varibale leya to right side se (0 index ki value)1st value a me or uske bad ki value (1 index pr store value) b me store ho jayege
    //  or bkki ki value nahi milege kuki hme do hi variable leya the esley do hi value milege agr or define krte or value bhi milte
    // Ex -> 
        // let [a , b] = [4, 3, 10, 23];
        // console.log.log(a, b);  // 4 3


    // Agar hme array se koi value skip krne h to hme us index wale no pr variable nhi likhenge or , lga dege isse wo value skip ho jyege
    // agr hme array ke beech se koi value skip krke koi value uthane h ya beech se koi value lene h
    // Ex -> 
        // let [, a , b] = [4, 3, 10, 23];
        // console.log.log(a, b);  // 3 10


    // Ex -> 
        // let [, a , , c] = [4, 3, 10, 23];
        // console.log.log(a, b);            // 3 23   

        
        // Agr array ke ander array h tab usme se value extract krne ho tab
        // let [a] = [10, [1, 3], 29]
        // console.log(a);                   // 10 

         // let [,a] = [10, [1, 3], 29]
        // console.log(a);                  // [1, 3]

        // let [, [,a]] = [10, [1, 3], 29]
        // console.log(a);                  // 3


        // let [,a,b] = [10, [1, 3], 29]
        // console.log(a, b);              // [1, 3]  29


        
        // ase destructuring krna use less h hmko same thing hi ferse mil rahe h
        // jo this is not useless   
        // isme hm arr me pura array a gya or use ek ke value nikl kr array me ja rahe h  
        // Ex->
            // let [...arr] = [4, 3, 10, 23]     //  [...[4, 3, 10, 23]] = [4, 3, 10, 23]
            // console.log(arr);                 // [4, 3, 10, 23]

             // same as it is 
             // let arr = [4, 3, 10, 23]     
            // console.log(arr);           //[4, 3, 10, 23]





     // 3. Default Values in Destructuring:
            // Agar destructuring ke waqt koi value missing hai, to aap default value assign kar sakte ho.
            // const { name, age, country = 'India' } = person;
            // console.log(country);  // India (agar object me 'country' nahi hai to default India assign hoga)
            
        //             Summary:
        // Array destructuring helps in extracting values from arrays.
        // Object destructuring helps in extracting values from objects.
        // You can skip or rename values, and set default values if they don't exist.
        // Destructuring kaafi useful hai jab aapko code readable aur concise banana h







        // Combination of Object and Array Destructuring:
        // Kabhi-kabhi data structures mix hote hain, jaise arrays ke andar objects, ya objects ke andar arrays. Aap unn cases mein bhi destructuring kar sakte ho.

        // Example:  

        // const student = {
        //     name: 'Krishna',
        //     marks: {
        //         math: 90,
        //         science: 95
        //     },
        //     hobbies: ['coding', 'reading']
        // };
        
        // const { name, marks: { math, science }, hobbies: [hobby1, hobby2] } = student;
        
        // console.log(name);    // Krishna
        // console.log(math);    // 90
        // console.log(science); // 95
        // console.log(hobby1);  // coding
        // console.log(hobby2);  // reading


        // Explanation:

        //     Yahaan hum ek object ke andar nested object (marks) aur array (hobbies) se values ko destructuring se nikaal rahe hain.
        







        
////////////////////////////////////////////////////////////////////


// Assignments :->



////////////////////////////////////////////////////////////////////


// Making changes :->

    // let num = 47;

    // let units = {
    //     q: 25,
    //     d: 10,
    //     n: 5,
    //     p: 1
    // }

    // let output = {};

    // for (let i in units) {
    //     // i = "q" , currentUnit = 25
    //     let currentUnit = units[i];
    //     // output = { "q" : 1}
    //     output[i] = parseInt(num / currentUnit);  // 47 / 25 = 1.88
    //     // num = 47 - 25 * 1 = 22 
    //     num = num % currentUnit; // 2 % 5 = 2
    // }
    // console.log(output);



// Generate a random number of string :-> 

    // function generateRandomNumber() {
    //     // creating a number from 47 - 100 
    //     let randomNumber = parseInt(Math.random() * 100);
    //     if (randomNumber < 47) {
    //         randomNumber += 47;
    //     }
    //     return randomNumber; // 0.682390202 * 100 => 68.2390202 => 68
    // }

    // function generateRandomString(n) {
    //     let str = "";
    //     for (let i = 0; i < n; i++) {
    //         str += String.fromCharCode(generateRandomNumber());
    //     }
    //     return str;
    // }
    // console.log(generateRandomString(10));