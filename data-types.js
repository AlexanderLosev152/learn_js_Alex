// const vs let
// const nameUser = "Alex";
// let ageUser = 37;
// регистр имеет значение. WHILE и while - разные переменнные.

// ========================

// можно создавать переменную без начального значения.
// let a;
// a = 10;

// у переменной есть имя и значение.

// имя переменной должно начинаться с буквы, подчеркивания или знака $.
// потом могут следовать буквы, цифры,подчеркивания и знаки доллара в любом кол-ве.
// есть еще ключевые слова которыми переменные называть нельзя.
// имена переменных должны быть интуитивно понятны.

// ========================

// пробелы ставятся для красоты.

// ========================

// data types
const name = "Alex"; // string
const age = 37; // number
const isProgrammer = true; //boolean
const cars = ["bmw", "mersedes", 29]; // array
const person = {
  name: "Alex",
  age: 37,
  isProgrammer: true,
  cars: ["bmw", "mersedes", 29],
}; // object
const person2 = {
  name,
  age,
  isProgrammer,
  cars,
};
const random = undefined; // undefined
const nall = null; //
