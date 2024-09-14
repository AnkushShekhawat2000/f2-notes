///////////////////////////////////////
//////////////           //////////////
/////////////   Dom      /////////////
/////////////            ////////////
////////////////////////////////////


// This is normal objects we can add properties and acess

// let x = {};
// x.name = "Ankush";
// console.log(x);

// let a = 20;
// function printName(){
//     console.log("Ankush");
//     console.log(a);
//     console.log(window);
// }

// Events -> 
    //  some thing occur 
    // onclick , hover

// How can be access object (dom tree) :-> 
//  Document -> this is globally variable is available in window. This has whole access of dom object
  // document ke ander sare objects or unki info hote webpage harek element ki aur koi bhi event ki
  // it is accessable -> window.document  


// To do any changes with in the webpage dynamically, we need to acces particular HTML element objects.

   // document API  object present inside the window (globally) is the one knows evrything about dom tree.

//    1. Access the nodes  (HTML element objects) => reading objects from DOM tree.   => Read
//    2. Manipulating dom tree.                                                       => Update
//    3. Adding / creating  a newNode(Html element) in the Dom Tree.                                => Create                
//    4. Deleting DOM tree.                                                           => Delete


// These are crud opertaions on dom tree
//  CRUD -> Creating Reading Updating Deleting




/////////////////////////////////////////////////////////
/**
// operations on DOM tree
 * 1. Read nodes (get the html element objects) from the dom tree
 * 2. update the properties on an existing DOM node
 * 3. Create a node/Html Element
 * 4. Delete a Node
 */


// how to get element (dcument Html element )
// (yeh method hmare html se elemet ko acess krate h js me)
// sabhi html elemet node object me hote h or wo sabhi dom se connect hote h dom ke help se un sabhi ko access kr sakhte h

/**
 * There are 5 methods available for reading a node from the dom tree
   1. getElementById  -> give only one html element by using id (id unique hone cahye) //(single html elment mileaga isley singular h elemet)
   2. getElementsByTagName ->  List of elements by tag name (beacuse one webpage has many tag with same name)  // ye plural isley h kuki elements ki list milege
   3. getElementsByClassName ->  List of elements by class name (beacuse ek se jyada html element ho sakhte h jinko same class de elsey 1 se jyad bhi ho skateh elsley phirse yaha elements use hua h kuki ye bhi hme list deta h elemets ki )  // ye plural isley h kuki elements ki list milega  
   4. querySelector ->  only single element (first matching element)
   5. querySelectorAll ->  list of elements (all matching elements)
   
*/









/**



//////////////////////////////////////////////////////////////////////////////////
  // ex -> 1. getElementById -> 
  // ----------------------------
                            //  give only one html element by using id
  // jaise hme html se input wala element chaye jiski id "ankush"
  // this will give us the html element object of the input element with id "ankush"
  let inputElement = document.getElementById('ankush');
  console.log(inputElement);                            // <input type="text" name="username" id="ankush" placeholder="User Name">

  // agr wo id se element access krna cahe rahe jo kisi element ko assign hi nahi h tabb hme kuch naghi milega means null milega
  let NotPresentWithThisId = document.getElementById('ank');
  console.log(NotPresentWithThisId);                    // null; 

    // ham is input ki properties bhi access kr sakhte h
    // us html elemet ko read kr sakhte h mtlab uski pure info dekh sakhte h
    // acees krne ke bad complete control hota h ham kuch bhi kr sakhte h phir
    console.log(inputElement.id, typeof inputElement.id)  // "ankush"
    console.log(inputElement.type)          // "text"
    console.log(inputElement.placeholder)  // "User Name"
    console.log(inputElement.tagName)     //  INPUT
    console.log(inputElement.className) //  ""  // there is no class name 

    // after give class name
    console.log(inputElement.className);     //abc xyz   // sbhi class de dega jitne bhi de hogi
    console.log(inputElement.classList);     //  ['abc', 'xyz']    // yeh list array deta h class name ka


    // Ex-> 
    // Read properties of anchor tag -> <a></a>
        let anchorElement = document.getElementById("link");
        console.log(anchorElement.tagName);                   //A
        console.log(anchorElement.getAttribute("href"));     // https://www.google.com/
        console.log(anchorElement.id)                        // link
        console.log(anchorElement.className);                // ""
        console.log(anchorElement.classList);                // []

  //  Note -->
        // <a href="https://google.com/home" id="link"><h1>Google</h1> Home Page</a>
        // Inner text method hame only text deta h element ke beech ki beech me tag hua toh uski text de dega lekin tag nahi dega
        console.log(anchorElement.innerText);                 // Google Home Page

        // jabki ye hme us tag ki beech me jo kuch bhi h sab de dega chahe with tag and text ye khah kr nexted tag ko deta h
        console.log(anchorElement.innerHTML);                 //<h1>Google</h1> Home Page
        
    
  











///////////////////////////////////////////////////////
//2. getElementsByTagName ->  
// -------------------------
                      // List of elements by tag name (beacuse one webpage has many tag with same name)  // ye plural isley h kuki elements ki list milege
                      // ye sabhi anchor elemets ki list dega jitne bhi present h html page me
    // access the ankar html elements with tagname

    let anchorElements = document.getElementsByTagName("a")
     console.log(anchorElements)                  // [a#link, a, link: a#link]
     console.log(anchorElements.length)           // 2

     console.log(anchorElements[0]);              // <a href="https://google.com/home" id="link"><h1>Google</h1> Home Page</a>   // (0 index wala mil jayega joki google wala tha)
     console.log(anchorElements[0].tagName);       // A
     console.log(anchorElements[0].innerText)      //Google Home page

     console.log(anchorElements[1])             //<a href="https://acciojob.com/">Acciojob</a>
     console.log(anchorElements[1].tagName)       // A
     console.log(anchorElements[1].innerText)      //Acciojob

    
    // how can print the length of the acciojob text
    const textAcciojob = anchorElements[1].innerText;
    console.log(textAcciojob); //
    console.log(textAcciojob.length);            // 8



     // agr ham length se jyda wla access krgnge to eror milege
     console.log(anchorElements[2])              // undefined
     console.log(anchorElements[2] === undefined) // true  (yeh undefined hai koi element nahi h)


     // agr ham wo tag access krnma cha rahe jo tag present hi nahi tab hme empty list milege
     let butonElements = document.getElementsByTagName("button")
     console.log(butonElements)                  // []
     console.log(butonElements.length)           // 0

      let inputElements = document.getElementsByTagName("input");
      console.log(inputElements);                  // [input#ankush.abc.xyz]
      console.log(inputElements.length)           // 1









  //  3. getElementsByClassName -> 
  // -----------------------------
  //              List of elements by class name (beacuse ek se jyada html element ho sakhte h jinko same class de elsey 1 se jyad bhi ho skateh elsley phirse yaha elements use hua h kuki ye bhi hme list deta h elemets ki )  
  //              ye plural isley h kuki elements ki list milega  

  
          // access the elements with class name "text"  -> hmare doumet me 2 tag h class name of test -> anchor , button

          let testElements = document.getElementsByClassName("test");
          console.log(testElements);                  // [a.test, button.test]
          console.log(testElements.length)           // 2

          console.log(testElements[0]);              // <a href="https://google.com/home" id="link" class="test"><h1>Google</h1> Home Page</a>
          console.log(testElements[0].tagName);       // A
          console.log(testElements[0].innerText)      //Google Home Page

          console.log(testElements[1]);             // <button class="test">Click Me</button>
          console.log(testElements[1].tagName);       // BUTTON   
          console.log(testElements[1].innerText)      // Click Me


  // 4. querySelector -> 
  // ----------------------
  //         only single element (first matching element)  
  //          agar ek se jyada element h to wo keval ek hi element dega top to botton e phla matching wala
  //         query selector se ham kisi particular elemnt ko access kr sakhte h querry se

       const element = document.querySelector("#container > .test");
       console.log(element);                       // <a href="https://google.com/home" id="link" class="test"><h1>Google</h1> Home Page</a>
       console.log(element.tagName);               // BUTTON
       console.log(element.innerText)              // Test Button  
       console.log(element.className);               // "test"

      

       const childElement = document.querySelector("#container > #child");
       console.log(childElement);                       // <span id="child">Child Text</span>
       console.log(childElement.tagName);               // BUTTON
       console.log(childElement.innerText)              // Child Button  
       console.log(childElement.id);                    // "child"


       // Access outer button
       const outerButton = document.querySelector(".testE");
       console.log(outerButton);                       // <button class="test">Outer Button</button>
      
      // Many test class element -> so it id is take first obe which matching text 
      // queryselector hmae only ek elemet deta h 
       const testButt = document.querySelector(".test");
       console.log(testButt); 



// 5. querrySelectorAll() -> 
// --------------------------
                // -> queryselector se hme ek hi mil raha tha agar hmko sabhi chye toh ham wah aqueryselectorAll ka use kr sakhte h
                // ye hme sabhi de dega list ki form me

     const elements = document.querySelectorAll(".test");
     console.log(elements);                  // NodeList(2) [a.test, button.test]
      console.log(elements[0].innerText)    // Accijob
      console.log(elements[1].innerText)    // Click me









 ////////////////////////////////////////////////////////////////////////////////////
//  2. update the properties on an existing DOM node
 /////////////////////////////////////////////////////////////////////////////////////     

  // Hame click button pr click krne pr input ka placeholder ke text ke value change krne h

  function changePlaceHolder(){

    // change the input placeholder value
    
    const inputElement = document.getElementById('ankush');

      //console.log(inputElement.placeholder);    // User Name

    /////// change (update ) placeholder ////////
    inputElement.placeholder = "Email";

    // click hone par hme input ki value bhi dene h
    inputElement.value = "Rajesh";



  }


  // For example updation 
  //  let obj = {
  //   placeholder : "Ankush"
  //  }

  //  console.log(obj);           //{placeholder: 'Ankush'}
  //  console.log(obj.placeholder);   //Ankush

  //  obj.placeholder = "Shekhawat"
  //  console.log(obj);           //{placeholder: 'Shekhawat'}
  // console.log(obj.placeholder);  //Shekhawat


  */



  // Ex-> 2
  // password hide show functionality
  function togglePassword(){
    const inputElement = document.querySelector("#ankush");
    const toggleButton = document.querySelector("button")

    if(inputElement.type === 'password'){
      inputElement.type = 'text';
      toggleButton.textContent = "Hide";
    }else{
      inputElement.type = 'password'; 
      toggleButton.textContent = "Show";
    
    }

  }







////////////////////////////////////////////////////////////////////
///    3. Adding / creating  a newNode(Html element) in the Dom Tree.  
///////////////////////////////////////////////////////////////////////

    //  createElememt() -> element create krta jo tagname ham denge

    // add element in the end :->
    // ------------------------
           // appendChild() ->  new element add krta h last me
 
          //  Ex -> create span pr click krne pr ek span bnega or add hoga




      //  ex -02

      const usersList =[
        "Ankush", 
        "Shukhanta",
        "Srikanth",
        "Prem",
        "Rahul",
        "Rajesh",
        "Suresh",
        "Ramesh"

      ]

      // users caontainer pkd kr usme append kr denge
      const usersContainer = document.querySelector(".users");

      function showUsers(){
        // <div>Ankush</div>

        // clear the entire things inside usercontainer
        usersContainer.innerText = "";


        usersList.forEach((user) => {
          const userElment = document.createElement("div");  // <div></div>
          userElment.innerText = user;                   // <div>user</div>  
          userElment.className = "user-item";                // <div class="user-item">Ankush</div>
        
           // users caontainer pkd kr usme append kr denge
         usersContainer.appendChild(userElment);          // users container me <div class="user-item">Ankush</div> add kr rha h
        })
       

      }





// Insert element in middle
// ---------------------------
      
        // agr hme kisi particular jgeh pr kisi se phle kisi ke bad
        // insertBefore()   -> two argument -> elemnt or jiske phle krne wo elemnt
        // x => the elementObject before which we want to add new element.
        // parent.insertBefore(newElement, x);
        
        
  //  add middle -> 
  // --------------
            // insertBefore() 
  // task is container me span se phle ->   <h1>Arvind</h1>  ye element add krna h-->  
    let isHeadingAdded = false;
    function insertBeforeSpan(){

      if(isHeadingAdded)  return ;   // agr phle se add ho chuka h wapish a jyenge add hi nahi krenge kuch bhi

      // create elment 
      const h1 = document.createElement("h1");
      h1.innerText = "Arvind";

      // get parent
      // and the insert 
    const parent = document.getElementById("container");  // conatiner nikal leya jisme add krna 
    const nextSibling = document.querySelector("#container > span");   // isse hm wo span nikal lenge jisse phle hme add krna h
    
    
    parent.insertBefore(h1, nextSibling);    // container me <h1>Arvind</h1> add kr rha h span(nextsibling) se phle
      isHeadingAdded = true;
    }





/////////////////////////////////////////////////////////////////////
              // 4. Delete an existing node    
////////////////////////////////////////////////////////////////////


// emse ham kisi bhi element object ko dom se remove kr dete h
// uske parent se uska link hta dete h
    
//   remove() -> ye connection ko cut kr dete h


function removeElement(){
  const boldElement = document.querySelector("#container > .users");

  boldElement.remove();

}
