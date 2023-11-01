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
