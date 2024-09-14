const setTimerButton = document.getElementById("set-timer-btn");
const activeTimersContainer = document.getElementById("current-active-timers");
const noTimerDisplayMessage = document.getElementById("no-timer-msg-txt");
let numberOfActiveTimers = 0;

//when user click on set button than new timer object will addd in conatiner using this function
function addNewTimer(){
    // extract the data which user input
    const hours = Number(document.getElementById("hour").value);
    const minutes = Number(document.getElementById("minute").value);
    const seconds = Number(document.getElementById("second").value)

    const totalTime = hours * 3600 + minutes * 60 + seconds;
    
    // if time value greater than 0 than i need to new timer Element
    if(totalTime > 0){
        // create a skeleton
        const newTimerCard = document.createElement("div");
        newTimerCard.classList.add("timer-card");
        newTimerCard.innerHTML = `
           <div>Time Left :</div> 
           <div id="newTimmer-container">
              <input id="hours" type="number" min="0" max="24" placeholder="${hours}">
              <input id="minutes" type="number" min="0" max="60" placeholder="${minutes}">
              <input id="seconds" type="number" min="0" max="60" placeholder="${seconds}">
           </div> 
           <button class="btn" onclick="deleteTimer(this)">Delete</button>  
        `;

        activeTimersContainer.appendChild(newTimerCard);
        numberOfActiveTimers++;
        noTimerDisplayMessage.style.display = "none";
        runtimer(totalTime, newTimerCard);
    }
}

function runtimer(totalTime, newTimerCard){
    // get the newTimeCard attribute
    let timerContainer = newTimerCard.querySelector("#newtimer-container");
    let hour = timerContainer.querySelector("#hours");
    let minute = timerContainer.querySelector("#minutes");
    let seconds = timerContainer.querySelector("#seconds");

    const myTimerUpdate = setTimerInterval(()=>{
        if(totalTime == 0){
            newTimerCard.toggle("time-up");
            // if the time is over create new element with changes text and play audio
            newTimerCard.innerHTML = `
                    <div></div>
                    <div>Time is Up</div>
                    <button class="btn delete-btn" onclick="deleteTimer(this)">Stop</button>
            `;
            // audio.play();  
            clearInterval(myTimerUpdate);

        }
        else{
            // set the values and decrease by one by one
           --totalTime;
           hour.value = Math.floor(totalTime/3600);
           minute.value = Math.floor((totalTime % 3600)/60);
           second.value = totalTime % 60;

        }
    }, 1000);
}

// delete timer
// if user click the delete button then event is occured
function deleteTimer(event){
    // audio.pause();
    let currentTimerCard = event.parentNode;
    currentTimerCard.remove();
    --numberOfActiveTimers;
    if(numberOfActiveTimers == 0){
        noTimerDisplayMessage.style.display = "block";
    }
}

setTimerButton.addEventListener("click", addNewTimer)
 




  
 
 







// document.addEventListener('DOMContentLoaded', function(){
//     function updateCurrentTime() {
//         const showTimeElement = document.getElementById('set-time');
//         const now = new Date();

//         // Get the current time in HH:mm:ss format
//         const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
//         const currentTimeString = now.toLocaleTimeString(undefined, options);

//         // Update the text content of the element
//         showTimeElement.textContent = currentTimeString;
//     }

//     // Update the time initially and set up an interval to update it every second
//     updateCurrentTime();
//     setInterval(updateCurrentTime, 1000);
// })