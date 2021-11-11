//Create some arrays
const numbers = [1, 2, 3, 4, 5];
const numbers2 = new Array(6, 8, 7, 9);
//MUTATING ARRAYS
//add to end
numbers.push(6);
//add to start
numbers.unshift(0);
//remove last
numbers.pop();
//remove first
numbers.shift();
//remove between
numbers.splice(1, 3);
//reverse
numbers.reverse();
//concatenate arrays  [numbers + numbers2]
let val = numbers.concat(numbers2);
//sorting numbers
val = numbers2.sort(); //sorting alphabetically !!
val = numbers2.sort(function (x, y) {
  return x - y;
});
//find first occurrence
function under4(num) {
  return num < 50;
}
val = numbers2.find(under4);

console.log(numbers);
console.log(val);
