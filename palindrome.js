const prompt=require("prompt-sync")({sigint:true}); 

// palindrome program using numbers//

// let input=prompt("Enter the number:");

// const ispalindrome=(num)=>{
//     let numstr=num
//     reverse_num=numstr.split("").reverse().join('');
//     return numstr===reverse_num
// }
// if (ispalindrome(input)) {
//     console.log("It is a palindrome.");
//   } else {
//     console.log("It is not a palindrome.");
//   }


//palindrome using string//////////////
let input=prompt("Enter the string:");

const isPalindrome=(str)=>{
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;

}
if (isPalindrome(input)) {
        console.log("It is a palindrome.");
      } else {
        console.log("It is not a palindrome.");
      }