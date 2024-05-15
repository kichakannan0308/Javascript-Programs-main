
const prompt=require("prompt-sync")({sigint:true});
let input = prompt("enter the number")
let temp=input;
let sum=0;
while(temp>0)
{
    let rem=temp%10;
    sum= sum+rem*rem*rem;
    temp = parseInt(temp / 10); // convert float into integer
}
if (sum == input) {
    console.log(`${input} is an Armstrong number`);
}
else {
    console.log(`${input} is not an Armstrong number.`);
}

