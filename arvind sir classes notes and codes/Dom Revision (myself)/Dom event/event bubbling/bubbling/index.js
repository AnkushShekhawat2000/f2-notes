// Event bubbling
    // Event Bubbling JavaScript ka ek important concept hai, especially jab hum DOM (Document Object Model) ke saath kaam karte hain. Is concept ko samajhne ke liye pehle humein thoda sa background samajhna hoga ki JavaScript mein events kaise kaam karte hain.
    //JavaScript mein event bubbling ek important concept hai jab hum DOM (Document Object Model) ke elements ke saath kaam karte hain. Yeh samajhna zaroori hota hai jab hum multiple elements pe event listeners lagate hain.


// What is bubbling?
// Event Bubbling kya hota hai?
      // Jab koi event (jaise ki click, mouseover, keydown, etc.) kisi nested element (child element) par fire hota hai, 
     //  toh woh event automatically uske parent element tak propagate hone lagta hai. Matlab, event child se parent aur uske parent ke parent tak bubble
     // karta hai, jab tak root element (usually document) tak nahi pahunch jaata.
     // jis par hamne click ke uske outermost sabhi parent clicked hote chle jate h outermost element tak clicked hote chle jate h
     

// flow
//  bubbling => triggers the target element => bubbling


// Example ke saath samjhte hain:


    /**
     * 
     * 
     * 
    <body>
    <div id="parent" style="padding: 20px; background-color: lightblue;">
        Parent Div
        <button id="child" style="padding: 10px;">Click Me</button>
    </div>

    <script>
        // Parent div pe event listener
        document.getElementById("parent").addEventListener("click", function() {
            console.log("Parent Div Clicked");
        });

        // Child button pe event listener
        document.getElementById("child").addEventListener("click", function() {
            console.log("Button Clicked");
        });
      </script>
     </body>
     * 

     * 
     * 
     * 
     * 
     */
    // Agar aapne ek button ko ek div ke andar rakha hai,
    //  aur button pe click hota hai, toh pehle button pe event fire hoga,
    //   phir event bubble hote hote div pe pahunchta hai,
    //    aur agar koi aur parent element hai toh un tak bhi.     

    // Explanation ->
    // Jab aap button pe click karoge, toh console mein do messages show honge:
    // Pehle: Button Clicked
    // Phir: Parent Div Clicked 

    //  Reason:->
    //  Jab button pe click hota hai, toh event pehle button par trigger hota hai,
    //  aur phir bubble hote hue parent div tak propagate ho jaata hai.
    //  Yeh hota hai Event Bubbling.

    // Event Bubbling ke steps:
    // Pehle event sabse inner element (child) pe fire hota hai.
    // Phir woh parent element pe bubble karta hai.
    // Uske baad agar aur bhi parent elements hain, toh woh bubble hote hote sabse outer element (usually document or body) tak jaata hai.

    // Event Bubbling ka Flow:
    // <button> (Child Element)
    //    |
    //    V
    // <div> (Parent Element)
    //    |
    //    V
    // <body> (Root Element)

  
    // Note -> 
    //  bubbling by default hoti h
    // The 3rd argument of addEventListener => defines the event state (bubbling | capturing)
    // if it is false => bubbling (by default)
    // if it is true => capturing 





const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');


// grandparent.addEventListener("click", (e)=>{   // bubbling

//     console.log("grand-parent cliked");
// })

// parent.addEventListener("click", (e)=>{   // bubbling 

//     console.log("parent cliked");
// })

// child.addEventListener("click", (e)=>{     // bubbling 

//     console.log("child cliked");
// })


// or 
// both are similar  
// ham bbbling me third argument false pass kre ya na kre optional h wo bubbling behaviour hi krega

/**
 
//Example -> bubbling
grandparent.addEventListener("click", (e)=>{     

    console.log("grand-parent cliked");
}, false)                                           //bubbling

parent.addEventListener("click", (e)=>{   

    console.log("parent cliked");
}, false)                                           //bubbling

child.addEventListener("click", (e)=>{

    console.log("child cliked"); 
}, false)                                           //bubbling


 */

// Note --> 
//   Bubbling ke case me 
   //   triger the target => bubbling
   // aur uske bad triggers the target element
   // aur uske bad bubbling hoga




//////////////////////////////////////////////////////////
    //   Bubbling ko rokna:
    //   Agar aap nahi chahte ki event bubble kare, toh aap event.stopPropagation() ka use kar sakte ho. Isse event bubble hona band ho jaata hai aur sirf us element tak hi limited rehta hai jahan pe event fire hua.
    //   agr ham jaha propagate use kiya agr uske ander kisi div pr click kiya to event waha se buble hoga or jaha pr propagate use kiya us div pr akr ruk jayega usse outer (parent) ko event pass nahi hoga
    //   jis div pr propagate use krke han wo apne se uspr parent pr event bubble nahi hone dega
    //   Example with stopPropagation():



    // const child = document.getElementById("child")
    // child.addEventListener("click", function(event) {
    //     event.stopPropagation(); // Bubbling ko stop kar diya
    //     console.log("Button Clicked");
    // });

    // Is case mein, jab aap button pe click karoge, toh sirf Button Clicked message aayega,
    //  Parent Div Clicked nahi, kyunki bubbling stop ho chuki hai.


    // Event Bubbling ka Use:->
    // Event Delegation: Agar aapko ek parent element pe multiple child elements ke liye event handle karna hai, toh aap bubbling ka use kar sakte ho. Isme aap ek hi event listener parent element pe attach karte ho, aur child elements ke events automatically bubble hokar parent tak pahunch jaate hain.

    // Example: Agar ek list hai aur aapko har list item pe event handle karna hai, toh har item pe alag event listener lagane ki jagah, aap parent list pe ek listener laga ke bubbling ka fayda utha sakte ho.

    // Simplified Code: Aapko har individual element pe listener lagane ki zarurat nahi padti, bubbling se aapka code simple aur efficient ho jaata hai.

    // Summary:
    // Event Bubbling: Event child element se parent element tak propagate karta hai.
    // Bubbling ka use kar ke aap parent elements pe event delegation efficiently handle kar sakte ho.
    // Agar bubbling nahi chahiye, toh stopPropagation() ka use karke is process ko roka ja sakta hai.
    // Is tarike se JavaScript mein event bubbling kaafi useful concept hai, especially jab humko complex DOM structures mein events handle karne hote hain.






