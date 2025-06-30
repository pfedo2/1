const age = prompt("What is your age?");
console.log("Your age:", age);

const name = prompt("What is your name?");
console.log("Your name:", name);

const isStudent = confirm("Are you a student?");
console.log("Are you a student?", isStudent);

const myString = prompt("What is your favourite quotation?");
console.log("Favourite quotation:", myString);

const myNumberInput = prompt("What's your favourite number?");
const myNumber = Number(myNumberInput);
const updatedNumber = myNumber + 10;
console.log("Favourite number:", myNumber);
console.log("Favourite number + 10:", updatedNumber);

const myNull = null;
console.log("Null value:", myNull);

const userName = prompt("Введіть своє ім'я");
alert("Your username is unavailable. Please try again.");
console.log("My name:", userName);

const userAnswer = confirm("Ви дійсно хочете покинути сторінку?");
alert("Увага! Дія може бути небезпечною.");
console.log("Do you want to leave?", userAnswer);
