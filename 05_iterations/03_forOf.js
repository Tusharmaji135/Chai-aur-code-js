// for of --------------------------------------------

const arr =[1,2,3,4,5]

// for (const iterator of object) {
  
// }

for (const i of arr) {
  // console.log(i);
  
}

const a = "hello world"

for(const i of a){
  // console.log(`each char is ${i}`);
  
}

//maps---------------------------------------------
const map = new Map()
map.set('IN','india')
map.set('US','america')
map.set('FR','france')
map.set('IN','india')

console.log(map);

for (const [key,val] of map) {
  // console.log(key,":-",val);
  
}

const myobj ={
  g1:"nfs",
  g2:"spidy"
}
for (const key of myobj) {
  console.log(key);              //not applied in for of
  
}