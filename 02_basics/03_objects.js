// singleton
// Object.create

//object literals

const MySym =Symbol("key1") //declaring Symbol


const JsUser ={
  name:"hitesh",
  "full name":"hitesh singh",
  [MySym]:"mykey1",              //to use symbol in object
  age:18,
  location:"jaipur",
  email:"135tudh@gmail.com",
  isLoggedin:false,
  lastlogindays:["MON","SAT"]
}
// console.log(typeof JsUser);//obj

// console.log(JsUser.email);                //1st method to access
// console.log(JsUser["email"]);             //2nd method to access
// console.log(JsUser["full name"]);         //cant access with .(dot) opertor this time

// console.log(JsUser.MySym);         //string 😒
// console.log(JsUser[MySym]);         //symbol 😊

JsUser.email="ids@chatgpt.com"

// Object.freeze(JsUser)                             // {
                                                        //freeze the obj
JsUser.email="ids@google.com"                     // }

// console.log(JsUser);



JsUser.greeting  = function(){
  console.log('Hello JSuser');
  
}

JsUser.greeting2  = function(){
  console.log(`Hello JSuser,${this.name}`); //this ,to know property of obj
  
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());    
