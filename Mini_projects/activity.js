let inp=document.querySelector("#text");
let p=document.querySelector("p");
inp.addEventListener("change",function(){
    console.log(inp.value);
    p.innerText=inp.value;
})

let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

div.addEventListener("click",function(){
    
    console.log("div clicked");
})
ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul clicked");
})
for(li of lis){
li.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("li clicked");
});
}

