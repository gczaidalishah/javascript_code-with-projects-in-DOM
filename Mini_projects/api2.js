let btn=document.querySelector("button");
let url2="https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click",async ()=>{
    let link= await getImage();
    // console.log(link);
    let img=document.querySelector("#result");
    img.setAttribute("src",link);
    
});

async function getImage(){
    try{
        let res= await axios.get(url2);     
        // return res.data.fact;
        return res.data.message;
    }catch(e){
        console.log("error",e);
        return "no image found";
    }
     
}

// btn.addEventListener("click",async ()=>{
//     let fact= await getFact();
//     let p=document.querySelector("#result");
//     p.innerText=fact;
    
// });

// let url="https://catfact.ninja/fact";

// async function getFact(){
//     try{
//         let res= await axios.get(url);     
//         return res.data.fact;
//     }catch(e){
//         console.log("error",e);
//         return "no fact found";
//     }
     
// }