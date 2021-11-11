let val;

const today = new Date();
let birthday = new Date("9-10-1981 11:25");

birthday = new Date("Septembeer 10 1981");
birthday = new Date("9/10/1982");

val = today;
val = birthday;
val = today.getMonth(); //0 = January!
val = today.getDate(); //1-31
val = today.getDay(); //1 = Monday
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); // time passed since 1th January 1970 as seconds

birthday.setMonth(2); //MARCH!
birthday.setDate(12);
birthday.setFullYear(1985)

console.log(val);
console.log(birthday);
console.log(typeof val);
