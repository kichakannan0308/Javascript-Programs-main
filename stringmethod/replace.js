let x= "tree flower fruits vegetable"
let ans=x.replace("flower","root")//first word is the word needs to replace with the last word(i.e)root
console.log(ans)


let x1= "tree flower fruits vegetable"
let ans1=x.replace(/FLOWER/i,"root") ;
////this condition[/i] is used whether we can give the  word in the uppercase or lowercase
// it will replace the word by root
console.log(ans1)

let x2= "tree flower fruits flower vegetable"
let ans2=x.replace(/flower/g,"root")
//this condtion is used to replace the word flower globally 
console.log(ans2)


