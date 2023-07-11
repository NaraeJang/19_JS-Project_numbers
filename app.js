console.log("numbers project");
const items = [...document.querySelectorAll(".number")];
console.log(items);

const updateCount = (el) => {
  console.log(el);
};

items.forEach((item) => updateCount(item));
