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

const ageDiff = Date.now() - Date.parse(`${y}-${m}-${d}`);
const votingAge = Math.floor(568025136000 / (1000 * 60 * 60 * 24));
const userBirthday = Math.floor(ageDiff / (1000 * 60 * 60 * 24) - 1);
const userAge = Math.floor(userBirthday / 365);

if (userBirthday < votingAge) {
  document.write("You are not yet eligible to vote. Wait till you're eighteen");
} else {
  document.write(
    `Hello ${name}, you are ${userAge} years old, so you're eligible to vote`
  );
}

console.log(votingAge, userBirthday);