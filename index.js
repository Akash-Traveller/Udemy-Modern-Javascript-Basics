// Creating variables
// let fname = 'RYAN'
// let lname = 'D'
// let age = prompt("he is gettig older....")

// //oldway
// // let result = fname + "" + lname + "" + mname

// creating string literals
// let result = `${fname} ${lname} is ${age} years old`;
// alert(result)

// Template & function
// function user(username,pass) {
//     alert(`Hello ${username} ${pass}`)
// }

// user("MOrning","Ryan")

// Arrow Functions
// let createBlog = (title , body ) => {
//     if(!title){
//        throw new Error("title is required");
//     }
//     if(!body){
//         throw new Error("body is required");
//      }

//      return alert(`${title} - ${body}`);
// }

// createBlog('DEMO','DEAD');

// array functions & this keyword
// let nepal = {
//     mountains: ['a','b','c'],
//     printWithDash: function(){
//         // console.log('inside printwithdash function',this)
//         setTimeout(() => console.log(this.mountains.join(" - "))
//         , 3000 )
//     }
// }

// nepal.printWithDash();

// Destructing the objects
// let thingsToDo = {
//     morning: 'excercise',
//     afternoon: 'PT',
//     night: 'low'
// }
// let { morning , night } = thingsToDo

// console.log(morning , '-' , night)

//Destructing with Array
// let [,, firstMountain] = ['everest','mtr','rr']
// console.log(firstMountain)

//Restructing
// var name = 'Everest';
// var height = 2.1;
// var output = function() {
//     console.log(`MT ${name} is ${height} taller than other`)
// }

// var adventure = { 
//     name: 'Everest',
//     height: 2.1,
//     output: function() {
//     console.log(`MT ${this.name} is ${this.height} taller than other`)
//   }
// };

// adventure.output();

//Spread & rest operators
// var mountains = ['everest','demo','trip'];
// var mountainsFromIndia = ['fuji']

// var allMountains = [...mountains,...mountainsFromIndia];

// var adventure = { 
//     breakfast: 'dosa',
//     lunch: 'meals'
// }

// var night = { 
//     dinner: 'sambar' 
// }

// var allMountains = {...adventure , ...night};

// console.log(allMountains)

// //rest operator
// var set = ['japan','usa','canada'];
// var [first, ...rest] = set
// console.log(rest)

//Class constructor scope


