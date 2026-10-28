console.log("Hello, World!");

let clubName = "Judge a Book By Its Cover Club";
console.log("Welcome to " + clubName + "! We are excited to have you join us!");

let meetingDay = "Friday";
console.log(
  "Our meetings are held every " + meetingDay + ". We hope to see you there!",
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
  nextMeeting.textContent = "Our next meeting is Friday, November at 7pm";
}

nextButton;
