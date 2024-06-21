const name = "tushar"
const repoC = 50
// console.log(name + repoC+" Value");

console.log(`hello my name is ${name} and my repo count is ${repoC}`);
let a =new String('Tushar-hc-com')
console.log(a.__proto__);

console.log(a.toUpperCase());
console.log(a.charAt(2));
console.log(a.indexOf('T'));

const b = a.substring(0,4)
console.log(b);

const x = a.slice(0,-2)
console.log(x);

const nso = "    hitesh    "
console.log(nso.trim());//remove start and end spaces

const url = "https://hitesh.com/jjsjjs%20nnsjsh"
console.log(url);

console.log(url.replace("%20","-"));
console.log(url.includes("hitesh"));
 

console.log(a.split("-"));



