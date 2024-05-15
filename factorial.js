const prompt=require("prompt-sync")({sigint:true}); 
let num=prompt("enter the number=>:")
fact=1;

for(let i=1; i<=num; i++){
    fact=fact*i;
}
console.log("answer is =>", fact)

