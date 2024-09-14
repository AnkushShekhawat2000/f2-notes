
//////////////////////////////////////////////////////
// Capturing


const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');




////////////////////////////////////////////////////////////////////////

// capuring => triggers the target element => bubblibg

// capturing 
// JavaScript mein Event Bubbling aur Event Capturing do alag phases hain jo event propagation ke process ko samjhate hain.
//  Yeh concepts tab samajhne zaroori hain jab aap nested elements ke saath kaam kar rahe ho aur events handle kar rahe ho.
//  Dono phases ke alag-alag roles hote hain, toh chalo inko detail mein samajhte hain.

// 2. Event Capturing (Trickling):
// Event capturing phase ko trickling phase bhi kehte hain. Isme event sabse pehle outermost (parent) element pe capture hota hai aur progressively inner (child) element tak propagate hota hai.

// example :-> 

// <div id="parent" style="padding: 50px; background-color: lightblue;">
// Parent Div
    // <div id="child" style="padding: 50px; background-color: lightgreen;">
    //     Child Div
    // </div>
// </div>

// <script>
// document.getElementById("parent").addEventListener("click", function() {
//     alert("Parent Div Clicked");
// }, true);  // 'true' indicates capturing phase

// document.getElementById("child").addEventListener("click", function() {
//     alert("Child Div Clicked");
// }, true);  // 'true' indicates capturing phase
// </script>



// Kya ho raha hai is example mein:
// Jab aap child div pe click kein sabse pehle parent div ka event liaroge, toh event capturing ke phase mstener trigger hoga, uske baad child div ka event listener trigger hoga.
// Output yeh hoga:
// Pehle Parent Div Clicked alert aayega.
// Phir Child Div Clicked alert aayega.




// Difference Between Event Bubbling and Event Capturing:=>
// Event Bubbling: Event sabse pehle inner (child) element pe trigger hota hai, phir outer elements tak propagate karta hai. Default behavior hota hai.
// Event Capturing: Event sabse pehle outer (parent) element pe trigger hota hai, phir inner elements tak propagate karta hai. Capturing mode tab hota hai jab hum addEventListener() method mein third parameter ko true pass karte hain.
// Phases of Event Propagation:
// JavaScript mein event propagation ke 3 phases hote hain:

// Capturing Phase: Event pehle parent element se shuru hota hai aur child element tak aata hai.
// Target Phase: Event us element pe trigger hota hai jahan user ne interaction kiya (child element ya target element).
// Bubbling Phase: Event target element se shuru hoke, wapas parent element tak propagate karta hai.


// 1. Event Bubbling:
// Event bubbling ek aisa process hai jisme event sabse pehle inner (child) element pe fire hota hai, aur phir progressively outer (parent) elements tak propagate hota hai.




/**
 * 
 * 
Example with Both Bubbling and Capturing:
html
Copy code
<div id="grandparent" style="padding: 50px; background-color: pink;">
    Grandparent Div
    <div id="parent" style="padding: 50px; background-color: lightblue;">
        Parent Div
        <div id="child" style="padding: 50px; background-color: lightgreen;">
            Child Div
        </div>
    </div>
</div>

<script>
    document.getElementById("grandparent").addEventListener("click", function() {
        alert("Grandparent Div Clicked");
    }, true);  // Capturing

    document.getElementById("parent").addEventListener("click", function() {
        alert("Parent Div Clicked");
    }, false);  // Bubbling

    document.getElementById("child").addEventListener("click", function() {
        alert("Child Div Clicked");
    });
</script>





Event.stopPropagation():
Agar aap chaaho ke event ek element pe trigger hone ke baad aur propagate na kare (bubbled ya capture na ho), toh aap event.stopPropagation() ka use kar sakte ho.

javascript
Copy code
document.getElementById("child").addEventListener("click", function(event) {
    alert("Child Div Clicked");
    event.stopPropagation();  // Event ko bubble hone se rok diya
});
Is example mein, agar aap child div pe click karoge, toh event wahi ruk jaayega aur parent ya grandparent elements tak nahi pahunch paayega.

Summary:
Event Bubbling: Event starts from the target (child) element and moves upward to parent elements.
Event Capturing: Event starts from the topmost parent element and moves down to the target element.
You can control this behavior using the third parameter in addEventListener (true for capturing, false or omit for bubbling).
event.stopPropagation() can be used to stop the event from further propagating in both phases.

 */










// sir Example:->

/**
 * Example -1 :->
 
    grandparent.addEventListener("click", (e)=>{     

        console.log("grand-parent cliked");
    }, false)                                           //bubbling

    parent.addEventListener("click", (e)=>{   

        console.log("parent cliked");
    }, true)                                           //capturing

    child.addEventListener("click", (e)=>{

        console.log("child cliked"); 
    }, false)                                           //bubbling


// output ->
// parent 
// child
//grandparent


 */


// Ex -> 2 Capturing 
// flow -> capture first -> target should be listen -> tehn bubbling


grandparent.addEventListener("click", (e)=>{     

    console.log("grand-parent cliked");
}, true)                                           //capturing

parent.addEventListener("click", (e)=>{   

    console.log("parent cliked");
}, false)                                           //bubbling

child.addEventListener("click", (e)=>{

    console.log("child cliked"); 
}, false)                                           //bubbling

// output ->

// grandparent clicked 
// child  clicked
// parent cicked


// if user click on parent then the output
// Grand parent
// parent









