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
console.log(text.split(",")); // split - преобразует строку в массив
