const prompt=require("prompt-sync")({sigint:true}); 

// let input=prompt("enter the Age to find the number of days=>:")
// let days=365,age;
// age=input*days;
// console.log('Number of days you lived until this age::', age)

let input=prompt("enter the Age to find the number of days=>:")

if (!isNaN(age)) {
    const daysInCommonYear = age * 365;
    const daysInLeapYear = age * 366;
  
    if ((age % 4 === 0 && age % 100 !== 0) || age % 400 === 0) {
      console.log(`In a leap year, your age of ${age} years is approximately ${daysInLeapYear} days.`);
    } else {
      console.log(`In a common year, your age of ${age} years is approximately ${daysInCommonYear} days.`);
    }
  } else {
    console.log("Invalid input. Please enter a valid age.");
  }
