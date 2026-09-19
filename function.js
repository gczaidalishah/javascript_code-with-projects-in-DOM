// let random= Math.floor(Math.random() * 100) + 1;
// console.log(random);

// function threeNum(num1, num2, num3) {
//     let average = (num1 + num2 + num3)/3;
//     console.log(average);

// }
// threeNum(10, 20, 30);

// function  multiply(n) {
//     for (let i = 1; i <= 10; i++) {
//         let result = n * i;
//         console.log(`${n} * ${i} = ${result}`);
//     }
// }
// multiply(5);

// function getSum(n) {
//     let sum=0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// const mul=(a,b)=>(    //arrow function's most implicit or simple form because it does not require any extra complex syntax like in normal functions
//    a*b 
// )
//     //or
// const sum=(a,b)=>a+b


// console.log("Hi their");
// // setTimeout(()=>{
// //     console.log("shah's empire");
// // },4000);
// let id=console.log("welcome to");
//  setInterval(()=>{
//     console.log("shah's empire");
//  },2000);
// clearInterval(id);

// const square=(n)=>(n*n);  

let id=setInterval(()=>{
   console.log("hello world")
},2000);
setTimeout(()=>{
   clearInterval(id)
   console.log("clear interval ran");
},10000);