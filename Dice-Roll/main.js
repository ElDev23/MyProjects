
   const dice = document.getElementById('dice-btn');

   function playGame(){

   setTimeout(() => {
    // Player1
    var randomDice1=Math.floor((Math.random()*6)+1);
    var diceGame1="img/"+"dice-"+randomDice1+".png";
    var img1=document.querySelectorAll("img")[0];
    img1.setAttribute("src",diceGame1);
    
    
    // Player2
    var randomDice2=Math.floor((Math.random()*6)+1);
    var diceGame2="img/"+"dice-"+randomDice2+".png";
    var img2=document.querySelectorAll("img")[1];
    img2.setAttribute("src",diceGame2);
    
    // Result
    if(randomDice1 > randomDice2){
      document.querySelector("h1").innerHTML="Player1 win"
    }
    else if(randomDice1 < randomDice2){
      document.querySelector("h1").innerHTML="Player2 win"
   }

   else if(randomDice1 = randomDice2){
      document.querySelector("h1").innerHTML="Play again"
   }
   
      
   }, 1000);
   }







