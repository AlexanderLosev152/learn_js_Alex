// Condition & ternary operator

// ========================

// циклы: while,for,for in и forEach.

// разберем While:

// цикл while начинается с ключевого слова while
// цикл while содержит логическое выражение,которое называется условием
// если условие истинно то цикл продолжает выполняться.

// сначала переменной присваивается значение
let scoops = 5;
// программа проверяет истинно ли условие или ложно
while (scoops > 0) {
  // если условие истинно то начинается выполнение программного блока.
  console.log("true");
  // следующая команда уменьшает значение переменной на 1
  scoops -= 1;
  // далее цикл возвращается к началу и выполняется снова и снова пока значение не станет false
}

// -----------------------

// else

// команда if выполняет свой программный блок только когда условие истинно
if (scoops < 3) {
  console.log("Ice cream running low");
} // команда if позволяет выполнять несколько проверок
else if (scoops < 2) {
  console.log("Ice cream is running");
} else {
  // если ни одно из условий не выполняется пишется завершающая else
  console.log("Ice good");
}
// ========================

const word = "bottles";
let count = 99;
while (count > 0) {
  console.log(`${count} ${word} of the beer on the wall`);
  console.log(`${count} ${word} of beer`);
  console.log("Take one down , pass it around");
  count -= 1;
  if (count > 0) {
    console.log(`${count} ${word} of the beer on the wall`);
  } else {
    console.log(`No more ${word} of the beer on the wall`);
  }
}

// function getStatus(age) {
//   if (age < 14) return "Children";
//   if (age < 20) return "Teenager";
//   if (age < 50) return "Abult";
//   return "Old";
// }
// console.log(getStatus(80));

// function getStatus(age) {
//   if (age < 14) return "Children";
//   else if (age < 20) return "Teenager";
//   else if (age < 50) return "Abult";
//   else return "Old";
// }
// console.log(getStatus(80));

// const getStatus = (age) =>
//   age < 14 ? "Children" : age < 20 ? "Teenager" : age < 50 ? "Abult" : "Old";

// console.log(getStatus(190));

function getPrice(model) {
  switch (model) {
    case "Mersedes":
    case "Alfa Romeo":
      return "$ 100 000";
    case "BMW":
      return "$ 80 000";
    case "McLaren":
      return "$ 500 000";
    default:
      return null;
  }
}
// break писать не нужно т.к пишем return
// также и не нужен continue.
//  continue - пишется чтобы цикл не останавливался , а проходил дальше.
console.log(getPrice("BMW"));
