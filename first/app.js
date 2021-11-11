const firstName = "William";
const lastName = "Johnson";
const age = 36;

let val;

val = firstName + lastName;

//Concatenation
val = firstName + " " + lastName;
val = "Hello, my name is " + firstName + " and I am " + age;
//Appending
val = "Brad ";
val += "Traversy";
//Escaping
val = "That's \"awesome\", I can't wait "; //escape with backSlash(\)
//Length
val = firstName.length; // length is property not method, so we dont use parenthesizes
//concat
val = firstName.concat(" ", lastName); // concatenation with method. add lastName to firstName between space that we defined as an argument
//Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0]; //first index of value, which is first character of our string (W)
val = firstName.indexOf("w".toUpperCase()); // first occurrence of "W" which is first character which index is 0
val = firstName.lastIndexOf("i"); //last occurrence of i which index of 4
val = firstName.charAt("1"); // i which index is 1 (w index is 0)
val = firstName.charAt(firstName.length - 1); //last character ( .legth starts with 1 but indexes start with 0)

//Substring
val = firstName.substring(0, 4); //not included index 4
//Slice
val = firstName.slice(0, 4);
val = firstName.slice(-3); // start to slice from end, keep last 3
//Split
val = firstName.split(" "); // whenever space seen push it to an array and return that array
//Replace
val = firstName.replace('William',"Jack") //find "William" and replace it with "Jack"
//Includes
val = firstName.includes("William") //if includes, return true
console.log(val);
