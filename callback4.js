function addNumbers(a,b, callback){
    let sum=a+b;
    callback(sum);
}
function display(result){
    console.log("the result is:"+result)
}
addNumbers(5,10,display); 
 