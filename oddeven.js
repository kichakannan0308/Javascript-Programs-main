const prompt=require("prompt-sync")({sigint:true}); 
let num=prompt("enter the number=>:")
if(num%2 == 0){
    console.log("it is even ")
}
else{
    console.log("it is odd ")
}