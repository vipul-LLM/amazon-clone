let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
newgame.disabled = true;

let turn0 = true;
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
for(let i =0; i<9; i++){
boxes[i].addEventListener("click",() => {
    
   if(turn0 === true){
     boxes[i].innerText = "O";
     turn0 = false;
   }
   else{
     boxes[i].innerText = "X";
     turn0 = true;
   }
   boxes[i].disabled = true;
   checkWinner();
});

}
const showwinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgcontainer.classList.remove("hide");


}
const checkWinner = () => {

    for(pattern of winPatterns){
      let val1 = boxes[pattern[0]].innerText
     let val2 =boxes[pattern[1]].innerText;
      let val3 =  boxes[pattern[2]].innerText;
      if(val1 != "" && val2 != "" && val3 != ""){

        if(val1 === val2 && val2 === val3){
          console.log("winner", val1);
          showwinner (val1);
          newgame.disabled = false;

        }
      }        
}};
reset.addEventListener("click",() => {
for(let i =0; i<9;i++){
  if(boxes[i].disabled == true)
  boxes[i].disabled = false ;
boxes[i].innerText = "";

}



})
newgame.addEventListener("click", () => {
  for(let i =0; i<9;i++){
  if(boxes[i].disabled == true)
  boxes[i].disabled = false ;
boxes[i].innerText = "";

}
});
newgame.addEventListener("click", ()=> {
msgcontainer.classList.add("hide");

})
