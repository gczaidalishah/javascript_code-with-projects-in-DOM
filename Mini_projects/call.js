h1=document.querySelector('h1');
function changeColor(color,delay){       //nextcolorchange:a callback
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
    let num=Math.floor(Math.random()*5)+1;
    if(num>3){
        reject("promise rejected");
    }

    h1.style.color=color;
    resolve("color changed");
    },delay)
    })
}
async function demo(){
    try{
    await changeColor("red",1000);
    await changeColor("blue",1000);
    await changeColor("green",1000);

    }
   catch(err){
    console.log("error caught")
    console.log(err);
   
   }
   let a=5;
   console.log(a);
   console.log("new num",a+3);

}
// }
// changeColor("red",1000)
// .then(()=>{
//     console.log("red color was completed");
//     return changeColor("blue",1000);
// })
// .then(()=>{
//     console.log("blue color was completed");
//     return changeColor("green",1000);
// })
// .then(()=>{
//     console.log("green color was completed");
//     return changeColor("yellow",1000);
// })


// changeColor("red",1000, () => {                   //these nesting ->callback hell
//     changeColor("green", 1000,()=>{
//         changeColor("orange",1000)
//     })
// })


// function one(){
//     return 1;
// }

// function two(){
//     return one()+one();
// }

// function three(){
//     let ans=one()+two();
//     console.log(ans);
// }

// three();

// function saveToDb(data,success,failure) {
//     const internetSpeed = Math.floor(Math.random() * 10) + 1;

//     if (internetSpeed > 4) {
//         success();
//     } else {
//        failure();
        
//     }
// }

// saveToDb("JavaScript",()=>{
//     console.log("data stored in database");     //success callback
//     saveToDb("username is stored in database",()=>{
//         console.log("data 2 saved");
//         saveToDb("zaid ali shah",()=>{
//             console.log("data 3 saved");
//         },()=>{
//             console.log("failure 3: weak connection");
//         })
//     },()=>{
//         console.log("failure2:weak connection");
//     })
// },()=>{
//      console.log("weak connection");          //failure callback
// });

// function saveToDb(data) {                   //promise:its a object so we can apply methods on it like then()and catch()
//     return new Promise((resolve,reject)=>{
//     const internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//      resolve("success:data was saved");
//     } else {
//        reject("weak connection");
        
//     }
//     });
// }

// saveToDb("zaid ali shah")
// .then((result)=>{
//     console.log("Data 1 saved.promise was resolved");     //promise chaining
//     console.log(result);
//     return saveToDb("shahspeakes")
//    })
// .then((result)=>{
//         console.log("data 2 is also saved");
//         console.log("resultof promise2",result);
//         return saveToDb("shayan shah")
//     })
// .then((result)=>{
//     console.log("data 3 is also saved");
//     console.log("resultof promise3",result);
// })
// .catch((error)=>{
//     console.log("promise was rejected due to weak connection");
//     console.log("error in promise",error);
    
// })

// async function greet(){
//     throw "404 page not found"
//     return "hello";
// }
 
// greet()
// .then((result)=>{
//     console.log("promise was resolved");
//     console.log("result was",result);
// })
// .catch((err)=>{
//     console.log("promise was rejected");
//     console.log(err);
// })

// function getNum(){
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         let num=Math.floor(Math.random()*10)+1;
//         console.log(num);
//         resolve();
//      },1000)

//     })
// }
// async function demo(){
//     await getNum();
//     await getNum();
//     getNum();
// }