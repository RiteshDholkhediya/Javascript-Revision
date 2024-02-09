(function chai() {
  console.log("DB Connected");
})(); // if you dont write this semicolon then it will give you an error

((name) => {
  console.log(`DB two connected ${name}`);
})("Ritesh");
