// const student ={
//     name: "zaid ali shah",
//     age: 20,
//     differential: 75,
//     circuit: 60,
//     microprocessor: 70,
//     getAvg(){
//         let avg=(this.differential +this.circuit +this.microprocessor)/3;
//         console.log(avg);
//     }

// };

// console.log("hello");

// console.log("zaid");
// try{
// console.log(a);
// }catch{
//     console.log("ali");
// }
// console.log("shah");

let btn=document.querySelector("button");
let p=document.querySelector("p");
let h1=document.querySelector("h1");
let h3=document.querySelector("h3");

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor="yellow";
}

btn.addEventListener("click",changeColor);

p.addEventListener("click",changeColor);

h1.addEventListener("click",changeColor);

h3.addEventListener("click",changeColor); 

let input=document.querySelector("input");

input.addEventListener("keyup",function(){
    console.log("keyup event is fired");
}); 

// let form=document.querySelector("form");
// form.addEventListener("submit",function(e){
//     e.preventDefault();
//     alert("form submitted");

//     // let user=this.elements[0];
//     // let pass=this.elements[1];

//     //  let user=document.querySelector("#user");
//     // let pass=document.querySelector("#pass");
    
//     console.log(user.value);
//     console.log(pass.value);
//     alert(`hi ${user.value} your password is ${pass.value}`);

// });
let form=document.querySelector("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
})

let user=document.querySelector("#user");
user.addEventListener("change",function(){
    console.log("change event is fired");
    console.log("finsal value=",this.value);
})
user.addEventListener("input",function(){
    console.log("input event is fired");
    console.log("finsal value=",this.value);
})

