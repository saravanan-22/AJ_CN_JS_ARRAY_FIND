let userInput = +prompt("Enter the input");
let students = [
  { id: 1001, name: "John", age: 23, dept: "CSE" },
  { id: 1002, name: "Jack", age: 20, dept: "IT" },
  { id: 1003, name: "Mary", age: 18, dept: "ECE" },
  { id: 1004, name: "Robert", age: 21, dept: "EEE" },
  { id: 1005, name: "Prince", age: 20, dept: "MECH" },
  { id: 1003, name: "Ram", age: 18, dept: "CIVIL" },
];

let name = students.find((student) => {
  return student.age > userInput;
});

console.log(name);














































