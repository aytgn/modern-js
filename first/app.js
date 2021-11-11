const person = {
  firstName: "Steve",
  lastName: "Smith",
  age: 30,
  email: "steve@aol.com",
  hobbies: ["music", "sports"],
  address: { city: "Miami", state: "FL" },
  getBirthYear: function () {
    return 2021 - this.age;
  },
};

let val = person;

//get specific value
val = person.firstName;
val = person["lastName"];
val = person.address.city;
val = person.address["city"];
val = person.getBirthYear();
console.log(val);

const people = [
  { name: "John", age: 30 },
  { name: "Mike", age: 23 },
  { name: "Nancy", age: 22 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
