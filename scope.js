// let sum=54; //global scope: accessible throughout the entire program

// function calSum(a, b){
//     let sum = a + b; //function scope: only accessible within this function
//     console.log("The sum of " + a + " and " + b + " is: " + sum);
// }


// function calSum(){
//     let a=5;
//     let b=10;
//     let sum = a + b; 
//     function innerFunction(){

//         console.log(sum); 
//     }
//     innerFunction();
// }    

// let sum= function(a, b){          //function expression: accessible only after the function is defined
//     return a + b;

// }
// sum(5, 10);

function multipleGreet(func,count){    //function that takes another function as an argument and calls it multiple times, also
    for(let i=0; i<count; i++){         //called higher order function
        func();
    }
}                                 
let greet=function(){
    console.log("Hello"); 
}
multipleGreet(greet, 10);