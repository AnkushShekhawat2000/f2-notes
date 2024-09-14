
const root = document.querySelector('.root');
const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');


// Ex ->  Capturing 
// flow -> capture first -> target should be listen -> tehn bubbling


root.addEventListener("click", ()=>{
    console.log("root clicked");                // bubbling
}, true )

grandparent.addEventListener("click", (e)=>{     

    console.log("grand-parent cliked");
}, false)                                           //capturing

parent.addEventListener("click", (e)=>{   

    console.log("parent cliked");
}, true)                                           //bubbling

child.addEventListener("click", (e)=>{

    console.log("child cliked"); 
}, false)                                           //capturing


// output ->
//  root clicked
//  parent cliked
//  grand-parent cliked