function user(email,pass){
  this._email = email;
  this._pass = pass;

  Object.defineProperty(this,'email',{
    get: function(){
      return this._email.toUpperCase()
    },
    set: function(value){
      this.email = value
    }
  })

}

const chai  = new user('chai@chai.com','125shus')

console.log(chai.email);
