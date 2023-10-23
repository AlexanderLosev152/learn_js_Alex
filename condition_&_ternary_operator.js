// Condition & ternary operator

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
