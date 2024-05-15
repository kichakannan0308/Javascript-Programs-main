const prompt=require("prompt-sync")({sigint:true}); 
let input = prompt("enter the Minutes to covert into a seconds=>")
let seconds=60;
let minutes=input*seconds;
console.log(minutes)
