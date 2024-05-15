// SEARCH BY INDEX()
let x1 ="apple mango banana kiwi orange";
let ans1=x1.indexOf('banana')
//it search the word banana that is present after the apple
console.log("fisrt index=>" +ans1)

let x2="apple mango banana kiwi banana orange";
let ans2=x2.lastIndexOf('banana')
//it search the word banana that is after the word kiwi )
console.log("last index =>"+ans2)

//SEARCH METHOD()//
let z="hi i am narmadha from pondicherry doing internship"
let ans3=z.search('am');
console.log("display the index value of am=>" +ans3)

//MATCH METHOD()//

let text1 = "The rain in SPAIN stays mainly in the plain";
let cal1=text1.match("ain");// to find for first word specifically
//this condition is only taken the first word rain contains ain, it omits other word like 
//spain and plains
console.log(cal1);

let text2 = "The rain in SPAIN stays mainly in the plain";
let cal2=text2.match(/ain/g);//this condition is check globally(i.e)rain.main,palin[except SPAIN]
console.log(cal2)

let text3 = "The rain in SPAIN stays mainly in the plain";
let cal3=text3.match(/ain/gi);//this condition is check globally(i.e)rain.main,palin including SPAIN
console.log(cal3)

//INCLUDES()//result will come in boolean

let in1 = "Hello world, welcome to the universe.";
let includes1= in1.includes("world");
let includes2=in1.includes("hi");
let includes3=in1.startsWith("bye");
let includes4=in1.endsWith("hello");

console.log("check if this lines having world=>" +includes1)
console.log("check if this lines having hi=>" +includes2)
console.log("check whether the line is starts with the word bye=>" +includes3)
console.log("check whether the lien is ends with  hello=>" +includes4)




