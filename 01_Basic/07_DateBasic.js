//

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toUTCString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof(myDate));

// let createmyDate = new Date(2023, 11 , 23, 4, 17)
let createmyDate = new Date("2023-01-14")
// console.log(createmyDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(createmyDate.getTime());
// console.log(Date.now()/1000 );

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay("Monday"));

`${newDate.getDate()} and the time is `

console.log(newDate.toLocaleString('default', {
  weekday: "long " 
}))

