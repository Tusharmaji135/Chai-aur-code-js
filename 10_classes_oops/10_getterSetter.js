class user{
  constructor(email,password){
    this.email = email,
    this.password = password
  }



  get password(){
    return this._password.toUpperCase()
  }

  set password(value){
    this._password = value
  }
}

const hitesh = new user('hitesh@gmail.com','abc')
console.log(hitesh.password);
