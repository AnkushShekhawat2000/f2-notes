            //////////////////////////////////////////
            //       Events                        //
            ////////////////////////////////////////


// Events:->  (user inputs / actions)
        //  Events are signals that something has occured.
        // events is  a action that happens in webpage.
        // 1. Mouse events
        // 2. Keyboard events
        // 3. html events

        // Add event listener in js

            // Button ko access krenge means button ka reference lenege or event linstener lga denge
            const button = document.getElementById("btn");
            const button2 = document.getElementById("btn1");



            // addEventListener(eventName, calback);
            // button.addEventListener("click", function(){
            //     // console.log("clicked the button");
            //     // console.log(1);
            //     console.log("single click");
            
            // });


            // how to multiple event listener directly in js
            // lekin html me ham multiple event listener nahi lga sakhte

            // button.addEventListener("click", function(){
            //     console.log( 2);
            // });
            

            // button.addEventListener("click", function(){
            //     console.log(3);
            // });
            


            // add another dbclick event listener
            // button.addEventListener("dblclick", function(){
            //     console.log("double clicked the button");
            // });
      

            // Do click ke bad hme apna event listener htana h
            // Jo bhi variable global hote h wo directly name se acess ho sakhte h dom me

            let count = 0;
            function listener(){  //#400
                count++;
                console.log("click : " + count);

                if(count === 2){
                    // alert("we should stop the event listener");
                    button.removeEventListener("click", listener);
                    
                }

            }


            button.addEventListener("click", listener);
           // click = [#400]

           // this also one advantage we can add and remove event listener dynamically based on condition

           // addEventListener me me ham multiple funtion de sakhte h
           // jabki onClick me ham ek function de sakhte h bas 

           button.className = "abc";
           button.id = "heghhejd";
           button.onclick = function(){   // kuki js me yeh onclick function expect krta h
            console.log("ankush");
           }


          




           // second button pr add event listener

           button2.addEventListener("click", function(){
                console.log("clicked on the second button");
           } )

           
          
           