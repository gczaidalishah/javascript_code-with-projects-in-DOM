// function oddOrEvenFactory(request){
//     if(request=="odd"){
//         let odd=function(n){
//     console.log(!(n%2==0));
// }
//  return odd;
// }else if(request=="even"){
//     let even=function(n){
//     console.log(n%2==0);
// }
//  return even;
// } else{
//     console.log("wrong request");
// }
// }
// let request=prompt("Enter odd or even");

const calculator={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    },
    div(a,b){
        return a/b;
    }

};