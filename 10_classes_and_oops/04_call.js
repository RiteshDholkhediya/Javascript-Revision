function SetUsername(username) {
  this.username = username;
}

function CreateUser(username, email, password) {
  SetUsername.call(this, username); // this call will send CreateUser context to SetUsername context and then SetUsername will use context of CreateUser otherwise it will come to the execution context and its context will be destroyed and no change will appear in new Object created by CreatUser;
  this.email = email;
  this.password = password;
}

const chai = new CreateUser("Ritesh", "ritesh@google.com", "123445");
console.log(chai); // new keyword create new object and set these properties which we have passed in this constructor function
