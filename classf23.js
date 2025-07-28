//Create a function that takes a string and returns it in reverse.

function reverseStr(str){
 let reversed ="";
for(let i=str.length -1;i>=0; i--){
    reversed+= str[i];
    }
return reversed
}
console.log(reverseStr("javascript"));