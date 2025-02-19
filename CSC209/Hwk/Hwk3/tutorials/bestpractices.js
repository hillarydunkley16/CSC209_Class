// initialize variables before using them 
let firstName = "";
let lastName = "";
let price = 0;
let discount = 0;
let fullPrice = 0;
// always const for objects & arrays 
const myArray = [];
const myObject = {};
document.getElementById("myElement").innerHTML = firstName + " " + lastName;
// use === instead of ==
if (price === 0){
    console.log("Price is zero");
}
// check if your variable is undefined at the beginning of your function
function myFunction(x, y) {
    if (y === undefined) {
      y = 0;
    }
  }

// use camelCase for variable names
let myVariable = 0;
// use PascalCase for class names
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const myself = new Person("Hillary", "Dunkley", 23, "brown")

document.getElementById("element2") = myFather.firstName + " " + myFather.lastName + " is " + myFather.age + " years old.";