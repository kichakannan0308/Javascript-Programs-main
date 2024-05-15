const prompt=require("prompt-sync")({sigint:true}); 
let num=prompt("enter the number=>:")
let value=0;
for(let i=2; i<=num; i++){
    if(num%i==0){
    value++;
    break;
    }  
}
if(value==0){
    console.log("its a prime number")
}
else{
    console.log("its not a prime number")
}
