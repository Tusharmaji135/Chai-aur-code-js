const user = {
  uname: "hitesh",
  logincount: 8,
  signedIn: true,

  getuserdetails: function () {
    // console.log('Got user details from DB');
    // console.log(`username:= ${this.uname}`);
    console.log(this);
  },
};

// console.log(user.uname);
// // console.log(user.getuserdetails());
// console.log(this);

//cunstruction function

// const p1 = new Promise()
// const date = new Date()

function usertwo(uname, logcount, islogin) {
  this.uname = uname;
  this.logcount = logcount;
  this.islogin = islogin;

  return this;
}

const uone = new usertwo("hi", 12, true);
const utwo = new usertwo("chai", 54, false);
console.log(uone);
console.log(utwo);
