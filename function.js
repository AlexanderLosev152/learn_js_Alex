// function
function getName() {
  return "Alex";
}
console.log(getName());

const getChannelName = () => "Alex-Web";
console.log(getChannelName());

const getPrice = (name) => {
  if (name === "Mersedes") return 10000000;
  if (name === "Lada") return 10000;
  return null;
};

console.log("$", getPrice("Lada"));

// =================

// const dogName = "rover";
// const dogWeight = 23;

// const dogName = "spot";
// const dogWeight = 13;

// const dogName = "spice";
// const dogWeight = 53;

// const dogName = "lady";
// const dogWeight = 17;

// const weight = (dogName, dogWeight) => {
//   if (dogWeight > 20) {
//     console.log(`${dogName} says WOOF WOOF`);
//   } else {
//     console.log(`${dogName} says woof woof`);
//   }
// };

// console.log(weight("rover", 23));
// console.log(weight("spot", 13));
// console.log(weight("spice", 53));
// console.log(weight("lady", 17));

// =================

// let counter = 0;
// const interval = setInterval(() => {
//   if (counter === 5) {
//     clearInterval(interval);
//   } else {
//     console.log(++counter);
//   }
// }, 1000);

// =================

// параметры по умолчанию
// const sum = (a, b) => a + b;
// console.log(sum(41));

// // замыкания
// function createMember(name) {
//   return function (lastName) {
//     console.log(name + lastName);
//   };
// }

// const logWitgLastName = createMember("Alexander");
// console.log(logWitgLastName(" Losev"));
// console.log(logWitgLastName(" Ivanov"));

// =================

// у ф-ии есть параметры,при вызове ф-ии ей передаются аргументы.

// =================

// вычисляем радиус
// function calculateArea(r) {
//   let area;
//   if (r <= 0) { // проверяем имеет ли radius значение 0
//     return 0; // если имеет то возвращаем 0 . код перестает выполняться
//   } else {
//     area = Math.PI * r * r;
//     return area;
//   }
// }

// let radius = 5.2; // обьявляем переменную radius
// let theArea = calculateArea(radius); // передаем radius как аргумент
// console.log(theArea);

// =================

// определение функции всегда начинается с ключевого слова function
// за ключевым словом function следует имя функции
// затем в круглых скобках перечисляются параметры, разделенные запятыми
// даже если функция не имеет параметров,пара круглых скобок () все равно необходима
// тело функции находиться между фигурными скобками {} и содержит набор команд (точно  таких же,которые используются в обычном коде)
// переменные используемые внутри функции , обьявляются внутри функции
// функция содержит команду return , но это не обязательно
// команда return содержит значение или выражение , которое возвращается как результат вызова функции
// закрывающая фигурная скобка

// если перепутать аргументы местами то произойдет возможно ошибка,будьте внимательны
// параметр это переменная,но перед ней надо ставить let ,функция это сделает сама
// имена функций подчиняются тем же правилам ,что и имена переменных
// функция без команды return вернет undefined
// переменная обьявленная внутри функции называется ГЛОБАЛЬНОЙ.если переменная обьявлена внутри функции то она называется ЛОКАЛЬНОЙ
// если вы забудете обьявить переменно перед использованием ,то такая переменная всегда будет глобальной(даже если она впервые используется внутри функции)
// НЕ ЗАБЫВАЙТЕ ОБЬЯВЛЯТЬ ЛОКАЛЬНЫЕ ПЕРЕМЕННЫЕ
// даже если у глобальной и локальной переменной будут одинаковые имена то они никак не будут мешать друг другу.это будут две разные переменные

// =================
