function asyncFunc1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("some code1");
            resolve("succes");
        },2000);
    });
}
function asyncFunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("some code2");
            resolve("succes");
        },4000);
    });
}
console.log("fetching data1");
let p1=asyncFunc1();
p1.then((res)=>{
// console.log(res);

console.log("fetching data2");
let p2=asyncFunc2();
p2.then((res)=>{
// console.log(res);
});
});



