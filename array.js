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

// ===============

const cars = ["Mazda", "Ford", "Bmw", "Mercedes"];
const fib = [1, 1, 2, 3, 5, 8, 13];

cars.push("Reno"); // добавление элемента в конец массива
cars.unshift("Volvo"); // добавление элемента в начало массива
cars.pop(); // удаление элемента в конце массива
cars.shift(); // удаление элемента в начале массива
const firstCars = cars.shift(); // возвращает первый элемент массива
const lastCars = cars.pop(); // возвращает последний элемент массива
const reverse = cars.reverse(); // разворачивает массив
console.log(firstCars);
console.log(lastCars);
console.log(reverse);
console.log(cars);
console.log(cars.length);

const text = "Hello, world";
console.log(text.split(" ")); // split - преобразует строку в массив
console.log(text.split("").join("")); // join - преобразует массив в строку

// ===============

// let scores = [60, 50, 60, 58, 54, 58, 50, 52, 54];
// console.log(scores);

const flavors = [
  "vanilla",
  "butterscotch",
  "lavender",
  "chocolate",
  "cookie dough",
];

const flavorOfTheDay = flavors[3]; // к элементу массива обращаемся через квадратную скобку []
console.log(flavorOfTheDay);

// так же элементы массива можно изменять
flavors[0] = "vanilla chocolate chip";
console.log(flavors[0]);
console.log(flavors);
console.log(flavors.length);

// ===============

// генератор красивых фраз
function makePhrases() {
  const words1 = ["24/7", "multi-tier", "30,00 foot", "B-to-B", "win-win"];
  const words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
  const words3 = [
    "progress",
    "solution",
    "tipping-point",
    "strategy",
    "vision",
  ];

  const rand1 = Math.floor(Math.random() * words1.length);
  const rand2 = Math.floor(Math.random() * words2.length);
  const rand3 = Math.floor(Math.random() * words3.length);

  const phrase = `${words1[rand1]} ${words2[rand2]} ${words3[rand3]}`;
  console.log(phrase);
}

makePhrases();

// ===============

// что бы получить последний элемент массива нужно писать "arr.length-1"

// ===============

const scores = [
  60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 52,
  44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 44,
];
for (let i = 0; i < scores.length; i++) {
  console.log(`Bubble solution: #${i} score: ${scores[i]}`);
}
// const maxScore = Math.max(...scores); // получение  самого большого числа в массиве

function printMaxScore(scores) {
  let highScore = 0;
  for (let i = 0; i < scores.length; i++) {
    console.log(`Bubble solution: ${scores.length}`); // получение общего кол-во элементов в массиве
    if (scores[i] > highScore) {
      highScore = scores[i]; // получение самого большого числа в массиве
    }
  }
  return highScore;
}

function getBestResult(scores, highScore) {
  let bestSolutions = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === highScore) {
      // если число равно максимальному значению, то значение добавляется в массив
      bestSolutions.push(i);
    }
  }
  return bestSolutions;
}

let highScore = printMaxScore(scores);

console.log(`Highest bubble score: ${highScore}`);
let bestSolutions = getBestResult(scores, highScore);
console.log(`Solutions with highest score: ${bestSolutions}`);
// ===============

// Создание пустого массива и наполнение его

// const genres = ["80s", "90s", "Electronic", "Folk"];
// этот список называется "литералом массива" - мы перечисляем какие значения входят в массив

const genres = []; // пустой массив
genres[0] = "80s";
genres[1] = "90s";
genres[2] = "Electronic";
genres[3] = "Folk";
const size = genres.length;

console.log(genres);
genres.push("Abc"); // push - добавить элемент в конец массива
console.log(genres);
genres.pop("Abc"); // pop - удалить элемент в конце массива
console.log(genres);
genres.unshift("NTN"); // unshift - добавить элемент в начало массива
console.log(genres);
genres.shift("NTN"); // shift - убрать элемент из начала массива

console.log(genres);
console.log(size);
