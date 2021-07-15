// Write a program to determine if a person is eligible for voting or note

// Note: voting age is 18 years

// User enters date of birth in a prompt in the format : dd/mm/yyyy

// ===
// Validation check : it the user is to be 18 years of age by tomorrow it simply means the person cannot vote today

// Meaning you are calculating the persons age down to the day 

// Not just using the year alone

alert("Hello, let's check your voting eligibility. Click 'OK' to continue");

const name = prompt("Put in your name:");

const y = Number(
  prompt("Put in your YEAR of birth in numbers (Like this: 1977):")
);
const m = Number(
  prompt("Put in your MONTH of birth in numbers (Like this: 12):")
);
const d = Number(
  prompt("Put in your DAY of birth in numbers (Like this: 27 ):")
);

const dob = Date.parse(`${y}-${m}-${d}`);
const todayDate = Date.now();
const ageDiff = todayDate - dob;
const votingAge = 568025136000;

const millisecs = ageDiff;
const seconds = millisecs / 1000;
const minutes = seconds / 60;
const hours = minutes / 60;
const days = hours / 24;
const months = days / 30;
const years = Math.floor(days / 365)

if (ageDiff >= votingAge) {
  document.write(
    `Hello ${name}, you are ${years} years old, so you're eligible to vote`
  );
} else {
  document.write("You are not yet eligible to vote. Wait till you're eighteen");
}