const myNums = [1,2,3,4,5]

const total = myNums.reduce((acc,cuval)=>{
  // console.log(`acc:${acc} and curval: ${cuval}`)
  return acc+cuval
},0)

// console.log(total);

const shopcart =[
  {
  iname:"js",
  price:2999
  },
  {
  iname:"9y",
  price:9999
  },
  {
  iname:"mdev",
  price:10000
  }
]

const total2 = shopcart.reduce((acc,item)=>acc+item.price,0)

console.log(total2);


