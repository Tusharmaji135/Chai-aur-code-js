const marvel=["thor","ironman","spiderman"]
const anime=["luffy","naruto","eren"]

// marvel.push(anime);
// console.log(marvel[3][1]);

// let all = marvel.concat(anime)
// console.log(all)


const all2 = [...marvel,...anime]
// console.log(all2);

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_arr=another_arr.flat(Infinity)//depth

console.log(real_another_arr);


console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))//covert to array
console.log(Array.from({name:"hitesh"}))//interesting

let s1 =100
let s2 = 200
let s3 = 300

console.log(Array.of(s1,s2,s3));

