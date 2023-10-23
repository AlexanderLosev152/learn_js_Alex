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
