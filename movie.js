const fvrtMovie= "panchayat";
let guess=prompt("enter your fvrt movie");
while((guess !=fvrtMovie) && (guess!="quit")){
    guess=prompt("wrong guess, try again");
} 
if(guess==fvrtMovie){
    alert("you guessed it right");
    console.log("congrats! ");
}else{
    console.log("you quit the game");
}



// let i=1;
// while(i<=10){
//     if(i==5){
//         break;
//     }
//     console.log(i);
//     i++;
// }