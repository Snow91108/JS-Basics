//Write a function that returns the factorial of a number

function factorial(n){
    if(n<0){
        return "it is not defined for negative numbers"
    }
    let result=1;
    for(let i=1;i<=n;i++){
        result*=i;
    }
    return result;
}
console.log(factorial(5));