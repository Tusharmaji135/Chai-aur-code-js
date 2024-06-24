function sayMyName() {
  // console.log('hi');
}

// sayMyName()

function add(n1, n2) {
  return n1 + n2;
}
const sum = add(4, 5);

// console.log(`result: ${sum}`);

function loginm(uname = "sam") {
  if (uname === undefined) {
    console.log("enter kar bahi");
  } else {
    return `${uname} just logged in`;
  }
}

// console.log(loginm());

function calculateCartPrice(...n1) {
  return n1;
}

// console.log(calculateCartPrice(2,200,500,2000));

const user = {
  name: "hitesh",
  price: 500,
}

function handleobj(anyObj){
  console.log(`username is ${anyObj.name} and price is ${anyObj.price}`); 
}

// handleobj(user)
// handleobj({
//   name:"jmm"
// })

const arr =[1000,2000,3000,4000,5000]

function retsecval(garr){
  return garr[2]
}

// console.log(retsecval(arr));

