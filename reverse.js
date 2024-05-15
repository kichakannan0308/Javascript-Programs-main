//METHOD 1//////////////////////////////////////////////////////

const prompt=require("prompt-sync")({sigint:true}); 
let num=prompt("enter the number to reversed:")
let reverse_num=0
while(num!=0){
  reverse_num=reverse_num*10+num%10;
  console.log(reverse_num)
  num=Math.floor(num/10)
// console.log("Line 10",num)
}
console.log(reverse_num)

//METHOD 2////////////////////////////////////////

//  let num=prompt("enter the number to reversed:")
// function reverse_a_number(n)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// console.log(Number(reverse_a_number(num)));


///////METHOD 3 USING STRING///////////////////////////////////////////

// let str = prompt("Enter the string to be reversed:"); 
// function reverse_string(string) {
//   return string.split("").reverse().join(""); 
// }
// console.log(reverse_string(str));

 
