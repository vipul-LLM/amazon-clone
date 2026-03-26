let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorespara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const genCompchoice = () => {
const options = ["rock", "paper" , "scissor"];
const randIdx = Math.floor(Math.random() *3);
return options[randIdx];


}
const showwinner = (usewin,userchoice,compChoice) => {
    if(usewin) {
        userScore++;
        userscorespara.innerText = userScore;
      
        msg.innerText = `You Win! your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";


    }else {
        compScore++;
        compscorepara.innerText = compScore;
       
        msg.innerText = `You Lose! ${compChoice} beats ${userchoice}`;
     msg.style.backgroundColor = "red";

    }
}

const playGame = (userchoice) => {
 ;
    //genrate computer choice
    const compChoice = genCompchoice();
    
     if (userchoice === compChoice){
        // Draw game 
        msg.innerText = "Game was Draw. Play Again";
         msg.style.backgroundColor = "#081b31";

     }
     else {
         let usewin = true;
         if(userchoice === "rock"){
            usewin = compChoice === "paper" ? false : true;

         }
         else if (userchoice === "paper"){
            usewin = compChoice === "scissor" ? false : true;
         }
         else {
            usewin = compChoice === "rock" ? false : true;
          }
          showwinner(usewin,userchoice,compChoice);



     }

};
choices.forEach((choice) => {
choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
   
    playGame (userchoice);



});

})