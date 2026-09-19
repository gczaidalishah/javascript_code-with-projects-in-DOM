const max=prompt("Enter the maximum number starting from 1");
const random=Math.floor(Math.random() * max) + 1;
 
let guess=prompt("Enter your guess ");
while(true){
    if(guess=="quit"){
        console.log("You quit the game");
        break;
    }
    if(guess==random){
        console.log("congrats!! You guessed it right");
        break;
    }else if(guess<random){
        guess=prompt("your guess is low, try again");
    }else{
        guess=prompt("your guess is high, try again");
    }
}
