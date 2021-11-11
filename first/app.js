const name = "John";
const age = 31;
const job = "Web Developer";
const city = "Miami";
let html;

//Without template strings
html =
  "<ul><li>Name: " +
  name +
  "  </li><li>Age:" +
  age +
  "</li><li>job: " +
  job +
  "</li> <li>city: " +
  city +
  "</li> </ul>";

html =
  "<ul>" +
  "<li>Name:  " +
  name +
  "</li>" +
  "<li>age:" +
  age +
  "</li>" +
  "</ul>";

//With template strings/literals (ES6)
html = `
<ul>
    <li>Name: ${name} </li>
    <li>Age: ${age} </li>
    <li>Job: ${job} </li>
    <li>City: ${city} </li>
    <li>Lucky Number: ${2 * 2}</li>
    <li>isYoung: ${age > 30 ? "no" : "yes"} </li>
</ul>
`;

document.body.innerHTML = html;
