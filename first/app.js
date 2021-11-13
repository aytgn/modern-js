//FUNCTION DECELERATION

function greet(firstName = "Armağan", lastName = "Şahin") {
  return "hello" + " " + firstName + " " + lastName + "!";
}

const myGreetingMessage = greet("Aytugan", "Özgan");
const greetDefaultUser = greet();

console.log(myGreetingMessage);
console.log(greetDefaultUser);

//FUNCTION EXPRESSIONS

const square = function (x = 3) {
  return x * x;
};

console.log(square(8));
console.log(square());

//IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

(function (myName) {
  console.log("i called immediately!");
  console.log("and my name is " + myName + "!");
})("aga");

//PROPERTY METHODS

const todo = {
  add: function () {
    console.log("Add todo..");
  },
  edit: function (id) {
    console.log("Edit todo id: " + id);
  },
};
todo.delete = function () {
  console.log("Delete todo...");
};

todo.add();
todo.edit(1);
todo.delete();
