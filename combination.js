const prompt=require("prompt-sync")({sigint:true}); 
// combination using string

// let input=prompt("enter the String=>:")
// let combination=(str)=>{
//     let possible=[]
//     for(let i=0; i<str.length; i++){
//         for(let j=i+1; j<str.length+1; j++){
//             possible.push(str.slice(i,j))
//         }
//     }
//      return possible;
// }
// console.log(combination(input))

//combination using Numbers

let input=prompt("enter the Numbers=>:")
let combination=(num)=>{
    let possible=[]
    for(let i=0; i<num.length; i++){
        for(let j=i+1; j<num.length+1; j++){
            possible.push(num.slice(i,j))
        }
    }
    return possible;
}
console.log(combination(input))




