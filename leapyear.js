const prompt=require("prompt-sync")({sigint:true}); 
let year=prompt("enter the year=>:")

if((year%4==0) && (year%100!=0) || (year%400==0)){
    console.log("This is Leap year")
}
else{
    console.log("This is not a Leap year")
}