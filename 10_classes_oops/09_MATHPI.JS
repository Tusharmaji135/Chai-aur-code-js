const dis = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(Math.PI);
// console.log(dis);

const chai = {
  name: "tushar",
  price: 250,
  isAvailable: true,
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
