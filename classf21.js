//Write a function to check if a given number is even or odd.
function evenOdd(num){
    if(num%2===0){
        return "even"
    }else{
        return "odd"
    }
}
let  num=8;
let result=evenOdd(num);
console.log("the number is:"+num+"  its an:"+result)
