const prompt=require("prompt-sync")({sigint:true}); 

//count the vowels and non vowels  in the word 

// let input= prompt("enter the word=>");
// let len=input.length;
// // console.log(len);
// let vowelscount=0;
// let nonVowelCount = 0;

// let vowels=['a','e','i','o','u']

// for(let i = 0; i<len; i++)
// {
//     let char = input[i].toLowerCase(); // Convert the character to lowercase 
//     if (vowels.includes(char)) {
//         vowelscount++;
//     }
//     else if(char.match(/[a-z]/))
//     nonVowelCount++

//   }
//   console.log('vowelscount=>', vowelscount)
//   console.log('nonVowelCount=>', nonVowelCount)

// count the number in a array 

let input= prompt("enter the numbers=>");
let count =0;
let len=input.length;

for(let i=0;i<len; i++)
{
    count++
}
console.log('total count of numbers=>', count)

