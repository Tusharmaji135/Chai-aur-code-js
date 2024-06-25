const code = ["js",'java','py','c','cpp']
//for each
// array.forEach(element => {
  
// });

// 1>---------------------------------------------------
// code.forEach( function (item){
  //   console.log(item);
  // } )
  
// 2>---------------------------------------------------
  // code.forEach((item)=>{
    //   console.log(item);
    // })
    
// 3>---------------------------------------------------
// function printme(item){
//   console.log(item);
  
// }
// code.forEach(printme)

// code.forEach((item,index,arr)=>{
//   console.log(item,index,arr);
  
// })

const myCoding = [
  {
      languageName: "javascript",
      languageFileName: "js"
  },
  {
      languageName: "java",
      languageFileName: "java"
  },
  {
      languageName: "python",
      languageFileName: "py"
  },
]

myCoding.forEach((item)=>{
  console.log(item);
  
})