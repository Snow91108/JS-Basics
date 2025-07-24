function operation(a,b,opName){
    const result = opName(a,b)
    console.log(result)
}
function sum(a,b){
    return a+b
}
operation(1,2,sum)