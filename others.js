// function sum(a,b=4){
//     return a+b;
// }
// sum(12);

// let arr=[1,2,3,4,5,6];
// let newArr=[...arr];    //spread method 

// let even=[2,4,6,8];
// let odd=[1,3,5,7,9];
// let nums=[...even, ...odd];


  // let  arr=[1,2,3,4,5];
  // obj={...arr};
  // obj2={..."hello"};
  let names=["zaid ali","jawad shah","shayan ali shah","saad ali", "shadab shah","azad khan","mansoor khan"];
  let [winner,runnerup,...others]=names;    //destructuring: storing values of array into multiple variables


  const student={
    name: "zaid ali",
    regNo:6289,
    username: "shah_speakes",
    password: 12345

  };
  // let {username,password}=student;    //destructuring on objects

  let {username:user,password:secret,city="charsadda"}=student;   //if we want to use the username or anyother key but want to store in another varibale then follow this syntax
  