// const tinder = new Object()   //singleton
const tinderUser = {                 //non singleton

}

tinderUser.id ="123"
tinderUser.name ="sam"
tinderUser.isLoggedIn =false

// console.log(tinder);

const regularuser = {
  email:"hhh@gmail.com",
  fullname:{
    userfullname:{
      firstname:"hitesh",
      lastname:"choudhary"
    }
  }
}


// console.log(regularuser.fullname.userfullname.firstname);

const o1 ={
  1:"a",
  2:"b",
}
const o2 ={
  3:"a",
  4:"b",
}
const o4 ={
  5:"a",
  6:"b",
}

// const o3 ={o1,o2}
// console.log(o3);      //same problem like array under array 🥱

//1st method to combine-->
// const o3 = Object.assign({},o1,o2,o4)   //always use {} as first bcause
// console.log(o3);                        // Object.assign(target, source);  ,otherwise o1 get all objects
// console.log(o1);

//2nd method to combine (spread)-->
const o3 = {...o1,...o2,...o4}
// console.log(o3);

const users = [
  {
      id: 1,
      email: "h@gmail.com"
  },
  {
      id: 1,
      email: "4h@gmail.com"
  },
  {
      id: 1,
      email: "h@gmail.com"
  },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor:ci}= course
console.log(ci);


// {
//   name:"hit",
//   cname:"js",
//   p:"free"
// }