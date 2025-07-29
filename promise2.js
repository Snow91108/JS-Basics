const getPromise=()=>{
  return  new Promise((resolve, reject) => {
        console.log("i am a promise")
        resolve("success");
    })
}
let promise=getPromise();
promise.then((res) => {
console.log("promise fulfiled",res);
});

promise.catch((err)=>{
    console.log("rejected",err)
})
