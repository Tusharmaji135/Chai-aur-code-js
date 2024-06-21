const myarr = [0,1,2,3,4,5]
const hero =["naruto",'luffy']
const myarr2 = new Array(1,2,3,4)

// console.log(myarr[1]);

//methods

// myarr.push(6)
// myarr.push(7)
// myarr.pop()

// myarr.unshift(69)//start main insert
// myarr.shift()//start element remove

// --------------------------

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(2));
// const a =myarr.join()//conv to string 

// console.log(typeof a);
// -------------------
// slice,splice

console.log("A",myarr);

const m1 = myarr.slice(1,3)//1,2

console.log(m1);
console.log("B ",myarr);

const m2 = myarr.splice(1,3)//1,2 remove from original array 😢

console.log(m2);
console.log("C ",myarr);




