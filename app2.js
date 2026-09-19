// let cars=["Toyota", "Honda", "Ford", "Chevrolet" ];
// console.log(cars);
// cars.push("Nissan");
// console.log(cars);
// cars.shift();
// console.log(cars);
// cars.unshift("BMW");
// console.log(cars);

// let followers = ["John", "Jane", "Mike", "Emily"];
// let blocked = followers.shift();
// console.log("followers after blocking:", followers);
// console.log("blocked user:", blocked);

// let primaryColors = ["red", "blue", "yellow"];
// let secondaryColors = ["green", "orange", "purple"];
// let allColors = primaryColors.concat(secondaryColors);
// console.log("All colors:", allColors);
  
              //loops
//  for (let i = 15; i >=1 ; i=i - 2) {
//     console.log(i);
//  }

// for (let i = 10; i >= 2; i = i - 2) {
//     console.log(i); 
// }

// for (let i = 5; i <= 50; i = i + 5) {
//     console.log(i);
// }

// let n=prompt("Enter a number:");
// n=parseInt(n);
// for (let i = n; i <=n*10; i=i+n) {
//     console.log(i);
// }

// let i=0;
// while (i<=20) {
//     console.log(i);
//     i++;
// }

// let i=2;
// while (i<=20) {
//     console.log(i);
//     i=i+2;
// }


// let fruits=["apple", "banana", "orange", "grape"];
// fruits.push("kiwi", "mango");
// for (let i = 1; i < fruits.length; i=i+2) {
//     console.log(i,fruits[i]);
// }

        //   for of loop
let heroes=[["Superman", "Batman", "Wonder Woman"], ["Spider-Man", "Iron Man", "Hulk"]];
for (list of heroes) {
    for (hero of list) {
        console.log(hero);
    }
}