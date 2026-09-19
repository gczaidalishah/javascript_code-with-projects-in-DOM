let url="https://catfact.ninja/fact";
// fetch(url)
// .then((response)=>{
//    return response.json()
// })
// .then((data)=>{
//         console.log(data.fact);
//         return fetch(url);
// })
// .then((response)=>{
//     return response.json()
// })
// .then((data2)=>{
//     console.log("data2",data2.fact);
// })

// .catch((err)=>{
//     console.log("error",err);
// })

// async function getFact(){
//     try{
//         let res= await fetch(url);
//         let data= await res.json();
//         console.log(data.fact);

//         let res2= await fetch(url);
//         let data2= await res2.json();
//         console.log(data2.fact);
//     }catch(e){
//         console.log("error",e);
//     }
//     console.log("bye"); 
// }
async function getFact(){
    try{
        // Axios automatically parses the response data for us, so we don't need to call response.json().
        // It converts JSON responses into JavaScript objects and exposes them as res.data.
        let res= await axios.get(url);     
        console.log(res.data.fact);
    }catch(e){
        console.log("error",e);
    }
     
}