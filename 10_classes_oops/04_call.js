function setuname(uname){
  this.uname=uname
}

function cretuser(uname,email,pass){
  setuname.call(this,uname)
  

  this.email = email
  this.pass = pass

}

const chai = new cretuser('chai','hdsj@gmail.com','123')

console.log(chai);

