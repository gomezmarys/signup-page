console.log("Hello, World!");

let clubName = "Bills & Brunch";
console.log("Welcome to " + clubName + "! We are excited to have you join us!");

let meetingDay = "Saturday";
console.log(
  "Our meetings are held on " + meetingDay + ". We hope to see you there!",
);

// This is a function that prints "Hello, Thank you for visiting!" to the console
function sayHello() {
  console.log("Hello, Thank you for visiting!");
}
// Call the function to make it go
sayHello();

//This is a function to say goodbye
function sayGoodbye() {
  console.log("Goodbye, thank you for visiting!");
}
// Call the function to make it go
sayGoodbye();
sayGoodbye();

// HTML Elements(Day 2)
let nextButton = document.querySelector("#next-btn");
let nextMeeting = document.querySelector("#next-meeting");

//Declare a show message function (Day 2 )
function showNextMeeting() {
  nextMeeting.textContent =
    "Our next brunch is Saturday, November 7th at 11am. Bring questions, not talking points ";
}

nextButton.addEventListener("click", showNextMeeting);

let themeButton = document.querySelector("#theme-btn");

function toggleTheme() {
  document.body.classList.toggle("dark");
}

themeButton.addEventListener("click", toggleTheme);
