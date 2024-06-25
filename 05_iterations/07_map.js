const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let a = myNum.map((i)=>i+10)
// console.log(a);

const newnums = myNum
  .map((num) => num * 10)
  .map((num) => num - 5)
  .filter((i) => i > 50);

console.log(newnums);
