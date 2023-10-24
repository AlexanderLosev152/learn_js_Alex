// Array
const studentsName = ["Max", "Vlad", "Elena"];
const students = [
  {
    name: "Max",
    age: 23,
  },
  {
    name: "Vlad",
    age: 22,
  },
  {
    name: "Elena",
    age: 20,
  },
];
// map
console.log(
  studentsName.map((name, index) => `${index + 1}. ${name}`).join("\n")
);
// filter
console.log(
  students
    .filter((student) => student.age > 20)
    .map((student) => student.name)
    .join("\n")
);
// push and unshift
students.push({ name: "Jorg", age: 24 });
students.unshift({ name: "Jorgia", age: 26 });
console.log(students);
// find
console.log(students.find((student) => student.name === "Max"));
