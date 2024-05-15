const prompt=require("prompt-sync")({sigint:true}); 

// find the maximum and minimum number in the given array////////////

// let input=prompt("enter the number=>:")
// const arr = input.split(",").map(Number);

// if (arr.length === 0 || arr.some(isNaN)){
//     console.log("Invalid input. Please enter valid numbers separated by commas.");
// } else {
//     const minValue = Math.min(...arr);
//     const maxValue = Math.max(...arr);

//     console.log("Minimum element is: " + minValue);
//     console.log("Maximum element is: " + maxValue);
// }

//  method for finding maximum and minimum///////////////////////////
//  let input=prompt("enter the number=>:")
//  const numbers = input.split(",").map(Number);

//  if (numbers.some(isNaN)) {
//   console.log("Invalid input. Please enter valid numbers separated by commas.");
// } else {
//   let maximum = numbers[0];
//   let minimum = numbers[0];

//   for (let number of numbers) {
//       if (number > maximum) {
//           maximum = number;
//       }
//       if (number < minimum) {
//           minimum = number;
//       }
//   }
//   console.log("Maximum value: " + maximum);
//   console.log("Minimum value: " + minimum);
// }

// find the  index of the element using string and numbers/////////

const fruits = ['apple', 'banana', 'cherry', 'orange']; //using strings
const index1 = fruits.indexOf('cherry'); 
console.log(index1);

const numbers = ['23,', '30', '45', '25']; //using numbers
const index2 = numbers.indexOf('25'); 
console.log(index2);

















