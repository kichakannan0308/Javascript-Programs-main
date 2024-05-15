const prompt=require("prompt-sync")({sigint:true});

const days = parseInt(prompt("Enter the number of days: "));

if (!isNaN(days)) {
  const daysInCommonYear = 365;
  const daysInLeapYear = 366;

  const ageInYears = Math.floor(days / daysInCommonYear);
  const remainingDays = days % daysInCommonYear;

  const leapYearAgeInYears = Math.floor(days / daysInLeapYear);
  const leapYearRemainingDays = days % daysInLeapYear;

  console.log(`Approximately in a common year: ${ageInYears} years and ${remainingDays} days.`);
  console.log(`Approximately in a leap year: ${leapYearAgeInYears} years and ${leapYearRemainingDays} days.`);
} else {
  console.log("Invalid input. Please enter a valid number of days.");
}







