//FOR LOOP

(function aga(loopTime) {
  for (let i = 1; i <= loopTime; i++) {
    if (i === 2) {
      console.log(i + " is my fav number");
      continue; //break loop just for this iteration
    }
    if (i === 5) {
      console.log("boom!");
      break;
    }
    console.log(i);
  }
})(10);

//WHILE LOOP

let i = 0; //outside!
while (i < 10) {
  console.log("while loop number: " + i);
  i++;
}

//start with 0
i = 0;
//not runned
let doDone = false;

do {
  console.log("do while number " + i);
  if (doDone === false) {
    //if first time
    i = 10; //i is 10
    doDone = true; //mark as not first time
    continue; //skip rest, which is increment i++ (bcs we give i new value already)
  }
  i++;
} while (i >= 10 && i <= 20); //while between 10 and 20

const car = ["Ford", "Chevy", "Honda", "Toyota"];

for (let i = 0; i < car.length; i++) {
  console.log("Car is: " + car[i]);

  if (i >= 1000) {
    break;
  }
}

i = 0;
do {
  console.log(car[i]);
  if (i >= 1000) break;
  i++;
} while (i < car.length);

car.forEach(function (c, i, arr) {
  console.log(c + "index: " + i);
  console.log(arr);
});

//MAP

const users = [
  { id: 1, fName: "John" },
  { id: 2, fName: "Sara" },
  { id: 3, fName: "Karen" },
];

const ids = users.map(function (user) {
  return user.id;
});
console.log(ids);

const user = {
  fName: "John",
  lName: "Doe",
  age: 40,
};

for (let propKey in user) {
  console.log(propKey + ": " + user[propKey]);
}
