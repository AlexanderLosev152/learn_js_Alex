// const обьект = {
//   свойства: значение,
// }

const chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  convertible: false,
  milage: 1021,
};

const cadi = {
  make: "Cadillac",
  model: "GM",
  year: 1955,
  color: "tan",
  passengers: 5,
  convertible: false,
  milage: 12892,
};

const fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertible: false,
  milage: 88000,
};

// обращение к с свойству обьекта делается через " . "  "обьект.свойство"

// свойства можно изменять
chevy.milage = 1000;

// можно добавлять новые свойства в любой момент
chevy.needsWashing = true;

// также свойства можно и удалять в любой момент
delete chevy.needsWashing;

// также обьект можно создавать и без свойств
const cars = {};

// также свойства обьектов можно хранить в переменных.
const obj = chevy.milage;
// в переменных хранятся не обьекты а ссылки на обьекты

console.log(chevy);

// проверка обьекта

function prequal(car) {
  if (car.milage > 1000) {
    return false;
  } else if (car.year > 1960) {
    return false;
  }
}
const wortALook = prequal(cadi);
if (wortALook) {
  console.log(`You gotta check out this ${cadi.make} ${cadi.model}`);
} else {
  console.log(`You should really pass on the ${cadi.make} ${cadi.model}`);
}

console.log();
