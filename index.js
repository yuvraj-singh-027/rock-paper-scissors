let userscore = 0;
let compscore = 0;


let choices = document.querySelectorAll(".choice");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const drawgame = (userchoice,compch) => {
   console.log("game is draw");
   msg.innerText =`game is draw`;
    msg.style.backgroundColor="blue";
}

const userwin = (userchoice,compch) => {
    userscore++;
    userscorepara.innerText = userscore;
    console.log("user win");
    msg.innerText =`Your ${userchoice} beats computer ${compch}`;
     msg.style.backgroundColor="green";
}

const compwin =(userchoice,compch) => {
    compscore++;
    compscorepara.innerText = compscore;
     console.log(`Computer Master's win`);
     msg.innerText = `Computer Master's ${compch} beats your ${userchoice}`;
     msg.style.backgroundColor="red";
}

let playgame =  (userchoice) => {
   console.log("user choice " + userchoice);


   const compch = compchoice();
   console.log("computer choice " + compch);

   // logic core
  if(userchoice == compch){
     drawgame(userchoice,compch);
  }
  else if(userchoice === "paper" && compch === "scissor"  || userchoice === "rock" && compch === "paper" || userchoice === "scissor" && compch === "rock" ){
     compwin(userchoice,compch);
  }
  else {
     userwin(userchoice,compch);
  }
}

//   computer choice
const compchoice = () => {
    const options = [ "rock" , "paper" , "scissor"];
    let comresult = Math.floor(Math.random()* 3);
    return options[comresult];
    
}

// user  choice
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click" , () => {
    const  userchoice=  choice.getAttribute("id");
      playgame(userchoice);
    })
});

